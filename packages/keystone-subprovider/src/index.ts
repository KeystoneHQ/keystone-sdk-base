import { assert } from '@0x/assert';
import { PartialTxParams } from '@0x/subproviders';
import { BaseWalletSubprovider } from './baseWalletSubprovider';
import sdk, { SupportedResult } from '@keystonehq/sdk';
import Common from '@ethereumjs/common';
import { Transaction } from '@ethereumjs/tx';
import { BN, stripHexPrefix, addHexPrefix } from 'ethereumjs-util';
import * as uuid from 'uuid';
import { CryptoHDKey, generateAddressfromXpub, findHDpatfromAddress, EthSignRequest, DataType, ETHSignature } from '@keystonehq/bc-ur-registry-eth';


type KeystoneSubproviderConfigs = {
    networkId: number;
}

export default class KeystoneSubprovider extends BaseWalletSubprovider {
    private readonly _networkId: number;
    private readonly keystoneSdk: any;
    private readonly _common: Common
    private xfp: string;
    private hdpath: string;
    private xpub: string;
    private synced: boolean;
    private accountNumber: number

    constructor(config: KeystoneSubproviderConfigs) {
        super();
        this._networkId = config.networkId;
        sdk.bootstrap();
        this.keystoneSdk = sdk.getSdk();
        this.synced = false;
        this._common = Common.forCustomChain('mainnet', { chainId: this._networkId });
    }

    public getPath(): string {
        return this.synced ? this.hdpath : ""
    }

    public async getAccountsAsync(numberOfAddress: number = 10): Promise<string[]> {
        if (!this.synced) {
            await this._syncWithKeystone();

        }
        const accounts = this.genereateAddresses(numberOfAddress)

        this.accountNumber = accounts.length;
        return accounts
    }

    public async signTransactionAsync(txParams: PartialTxParams): Promise<string> {
        if(txParams.chainId !== this._networkId) {
            console.log('chainId is not match')
        }
        if (!this.synced) {
            await this.getAccountsAsync()
        }
        const _txParams = {
            to: txParams.to,
            gasLimit: txParams.gas,
            gasPrice: txParams.gasPrice,
            data: txParams.data,
            nonce: txParams.nonce,
            value: txParams.value,
        };

        let tx = Transaction.fromTxData(_txParams, { common: this._common, freeze: false })
        //@ts-ignore
        tx.v = new BN(tx.common.chainId())
        // @ts-ignore
        tx.r = new BN(0)
        // @ts-ignore
        tx.s = new BN(0)
        const unsignedBuffer = tx.serialize()
        let requestId = uuid.v4();
        const addressPath = findHDpatfromAddress(txParams.from, this.xpub, this.accountNumber, `${this.hdpath}`)
        
        const ethSignRequest = EthSignRequest.constructETHRequest(
            unsignedBuffer,
            DataType.transaction,
            addressPath,
            this.xfp,
            requestId,
            this._networkId,
            txParams.from
        )

        await this.keystoneSdk.play(ethSignRequest.toUR(), {
            hasNext: true,
            title: 'Scan with your Keystone',
            description:
                'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'
        });
        const { r, s, v } = await this.readSignature(requestId);
        const signeTx = Transaction.fromTxData({
            ..._txParams,
            r,
            s,
            v
        }, { common: this._common })
        return `0x${signeTx.serialize().toString('hex')}`;
    }

    public async signPersonalMessageAsync(data: string, address: string): Promise<string> {
        if(!this.synced) {
            await this.getAccountsAsync()
        }
        
        let unsigendData = addHexPrefix(data);
        assert.isHexString('unsigendData', unsigendData)
        unsigendData = stripHexPrefix(unsigendData)
        const dataHex = Buffer.from(unsigendData, 'hex');
        const requestId = uuid.v4()
        const addressPath = findHDpatfromAddress(address, this.xpub, this.accountNumber, `${this.hdpath}`)
        const ethSignRequest = EthSignRequest.constructETHRequest(
            dataHex, 
            DataType.personalMessage,             
            addressPath,
            this.xfp,
            requestId,
            undefined,
            address
        )

        await this.keystoneSdk.play(ethSignRequest.toUR(), {
            hasNext: true,
            title: 'Scan with your Keystone',
            description: 'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature',
        });
        const { r, s, v } = await this.readSignature(requestId);
        return `0x${Buffer.concat([r, s, v]).toString('hex')}`
    }


    public async signTypedDataAsync(address: string, typedData: any): Promise<string> {
        // the typed data is an json string which encoded to Bytes
        if(!this.synced) {
            await this.getAccountsAsync()
        }
        const dataHex = Buffer.from(typedData, 'utf-8');
        const requestId = uuid.v4()
        const addressPath = findHDpatfromAddress(address, this.xpub, this.accountNumber, `${this.hdpath}`)
        const ethSignRequest = EthSignRequest.constructETHRequest(
            dataHex, 
            DataType.typedData,             
            addressPath,
            this.xfp,
            requestId,
            undefined,
            address
        )

        await this.keystoneSdk.play(ethSignRequest.toUR(), {
            hasNext: true,
            title: 'Scan with your Keystone',
            description: 'After your Keystone has signed this data, click on "Scan Keystone" to receive the signature',
        });
        const { r, s, v } = await this.readSignature(requestId);
        return `0x${Buffer.concat([r, s, v]).toString('hex')}`
    }

    private async readSignature(sendRequestID: string): Promise<{ r: Buffer; s: Buffer; v: Buffer }> {
        const result = await this.keystoneSdk.read([SupportedResult.UR_ETH_SIGNATURE], {
            title: 'Scan Keystone',
            description: 'Please scan the QR code displayed on your Keystone',
        });
        if (result.status === 'canceled') {
            throw new Error('read signature canceled');
        } else {
            const ethSignature = ETHSignature.fromCBOR(result.result.cbor);
            const requestIdBuffer = ethSignature.getRequestId();
            const signature = ethSignature.getSignature();
            if(requestIdBuffer) {
                const requestId = uuid.stringify(requestIdBuffer);
                if (requestId && requestId !== sendRequestID) {
                    throw new Error('read signature error: mismatched requestId');
                }

            }
            const r = signature.slice(0,32)
            const s = signature.slice(32,64)
            const v = signature.slice(64,65)
            return {
                r,
                s,
                v,
            };
        }
    }

    private async _syncWithKeystone() {
        const decodedResult = await this.keystoneSdk.read([SupportedResult.UR_CRYPTO_HDKEY], {
            title: 'Sync Keystone',
            description: "Please scan the QR code displayed on your Keystone",
            renderInitial: {
                walletMode:'Web3',
                link: "https://keyst.one/defi"
            },
            URTypeErrorMessage: "The scanned QR code is not the sync code from the Keystone hardware wallet. Please verify the code and try again ( Keystone firmware V1.3.0 or newer required)."
        });
        if (decodedResult.status === 'success') {
            const { result } = decodedResult;
            const cryptoHDKey = CryptoHDKey.fromCBOR(result.cbor);
            const hdPath = `m/${cryptoHDKey.getOrigin().getPath()}`;
            const xfp = cryptoHDKey.getOrigin().getSourceFingerprint()?.toString('hex');
            if (!xfp) {
                throw new Error('invalid crypto-hd-key, cannot get source fingerprint');
            }
            const xpub = cryptoHDKey.getBip32Key();
            this.hdpath = hdPath;
            this.xfp = xfp;
            this.xpub = xpub;
            this.synced = true;
        } else {
            throw new Error('Reading canceled');
        }        
    }

    private genereateAddresses(numberOfAddress: number) {
        let result = [];
        for (let i = 0; i < numberOfAddress; i++) {
            let path = `m/0/${i}`
            result.push(generateAddressfromXpub(this.xpub, path))
        }
        return result;
    }

}
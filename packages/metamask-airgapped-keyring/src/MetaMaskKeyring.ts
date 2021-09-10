import HDKey from 'hdkey';
import { BaseKeyring, StoredKeyring } from '@keystonehq/base-eth-keyring';
import { MetamaskInteractionProvider } from './MetaMaskInteractionProvider';
import { TransactionFactory } from '@ethereumjs/tx';
import { DataType, EthSignRequest } from '@keystonehq/bc-ur-registry-eth';
import * as uuid from 'uuid';
import rlp from 'rlp';

export class MetaMaskKeyring extends BaseKeyring {
    static type = BaseKeyring.type;
    static instance: MetaMaskKeyring;
    private unlockedAccount: number;
    constructor(opts?: StoredKeyring) {
        super(opts);
        if (MetaMaskKeyring.instance) {
            MetaMaskKeyring.instance.deserialize(opts);
            return MetaMaskKeyring.instance;
        }
        MetaMaskKeyring.instance = this;
    }

    getInteraction = (): MetamaskInteractionProvider => {
        return new MetamaskInteractionProvider();
    };

    getMemStore = () => {
        return this.getInteraction().memStore;
    };

    setAccountToUnlock = (index) => {
        this.unlockedAccount = parseInt(index, 10);
    };

    addAccounts(n = 1): Promise<string[]> {
        return new Promise((resolve, reject) => {
            try {
                const from = this.unlockedAccount;
                const to = from + n;
                const newAccounts = [];

                for (let i = from; i < to; i++) {
                    const address = this._addressFromIndex('m', i);
                    newAccounts.push(address);
                    this.page = 0;
                    this.latestAccount++;
                }
                this.accounts = this.accounts.concat(newAccounts);
                resolve(this.accounts);
            } catch (e) {
                reject(e);
            }
        });
    }

    async signTransaction(address: string, tx: any): Promise<any> {
        const dataType = tx.type === 0 ? DataType.transaction : DataType.typedTransaction;
        const hdPath = this._pathFromAddress(address);
        const chainId = tx.common.chainId();
        const requestId = uuid.v4();
        const ethSignRequest = EthSignRequest.constructETHRequest(
            rlp.encode(tx.getMessageToSign(false)),
            dataType,
            hdPath,
            this.xfp,
            requestId,
            chainId,
        );
        const { r, s, v } = await this.requestSignature(
            requestId,
            ethSignRequest,
            'Scan with your Keystone',
            'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature',
        );
        const txJson = tx.toJSON();
        txJson.v = v;
        txJson.s = s;
        txJson.r = r;
        txJson.type = tx.type;
        const transaction = TransactionFactory.fromTxData(txJson, { common: tx.common });
        return transaction;
    }

    removeAccount = (address) => {
        if (!this.accounts.map((a) => a.toLowerCase()).includes(address.toLowerCase())) {
            throw new Error(`Address ${address} not found in this keyring`);
        }
        this.accounts = this.accounts.filter((a) => a.toLowerCase() !== address.toLowerCase());
    };

    forgetDevice = () => {
        this.xfp = '';
        this.xpub = '';
        this.hdPath = '';
        this.page = 0;
        this.perPage = 5;
        this.accounts = [];
        this.currentAccount = 0;
        this.paths = {};
        this.latestAccount = 0;
        this.hdk = new HDKey();
        this.unlockedAccount = 0;
    };

    submitCryptoHDKey = this.getInteraction().submitCryptoHDKey;
    submitSignature = this.getInteraction().submitSignature;

    cancelReadCryptoHDKey = this.getInteraction().cancelReadCryptoHDKey;
    cancelSignRequest = this.getInteraction().cancelRequestSignature;
}

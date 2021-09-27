import { BaseKeyring, StoredKeyring } from '@keystonehq/base-eth-keyring';
import { MetamaskInteractionProvider } from './MetaMaskInteractionProvider';
import { FeeMarketEIP1559Transaction, Transaction, TransactionFactory } from '@ethereumjs/tx';
import { DataType, EthSignRequest } from '@keystonehq/bc-ur-registry-eth';
import * as uuid from 'uuid';
import rlp from 'rlp';

type MetaMaskStoredKeyring = StoredKeyring & {
    indexedAccounts: { [k: string]: string };
};

export class MetaMaskKeyring extends BaseKeyring {
    static type = BaseKeyring.type;
    static instance: MetaMaskKeyring;
    private unlockedAccount: number;
    private indexedAccounts: { [k: string]: string };

    constructor(opts?: MetaMaskStoredKeyring) {
        super(opts);
        this.indexedAccounts = {};
        this.deserialize(opts);
        if (MetaMaskKeyring.instance) {
            MetaMaskKeyring.instance.deserialize(opts);
            return MetaMaskKeyring.instance;
        }
        MetaMaskKeyring.instance = this;
    }

    serialize(): Promise<MetaMaskStoredKeyring> {
        return Promise.resolve({
            xfp: this.xfp,
            xpub: this.xpub,
            hdPath: this.hdPath,
            accounts: this.accounts,
            currentAccount: this.currentAccount,
            page: this.page,
            perPage: this.perPage,
            paths: this.paths,
            indexedAccounts: this.indexedAccounts,
        });
    }

    deserialize(opts?: MetaMaskStoredKeyring): void {
        if (opts) {
            this.xfp = opts.xfp;
            this.xpub = opts.xpub;
            this.hdPath = opts.hdPath;
            this.accounts = opts.accounts;
            this.currentAccount = opts.currentAccount;
            this.page = opts.page;
            this.perPage = opts.perPage;
            this.paths = opts.paths;
            this.indexedAccounts = opts.indexedAccounts;
        }
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
                for (let i = from; i < to; i++) {
                    const address = this._addressFromIndex('m', i);
                    this.page = 0;
                    this.latestAccount++;
                    this.indexedAccounts[i] = address;
                }
                this.accounts = Object.values(this.indexedAccounts);
                resolve(this.accounts);
            } catch (e) {
                reject(e);
            }
        });
    }

    async signTransaction(address: string, tx: any): Promise<any> {
        const dataType = tx.type === 0 ? DataType.transaction : DataType.typedTransaction;
        let messageToSign;
        if (tx.type === 0) {
            messageToSign = rlp.encode((tx as Transaction).getMessageToSign(false));
        } else {
            messageToSign = (tx as FeeMarketEIP1559Transaction).getMessageToSign(false);
        }
        const hdPath = this._pathFromAddress(address);
        const chainId = tx.common.chainId();
        const requestId = uuid.v4();
        const ethSignRequest = EthSignRequest.constructETHRequest(
            messageToSign,
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
        return TransactionFactory.fromTxData(txJson, { common: tx.common });
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
        this.hdk = undefined;
        this.unlockedAccount = 0;
        this.indexedAccounts = {};
    };

    submitCryptoHDKey = this.getInteraction().submitCryptoHDKey;
    submitSignature = this.getInteraction().submitSignature;

    cancelReadCryptoHDKey = this.getInteraction().cancelReadCryptoHDKey;
    cancelSignRequest = this.getInteraction().cancelRequestSignature;
}

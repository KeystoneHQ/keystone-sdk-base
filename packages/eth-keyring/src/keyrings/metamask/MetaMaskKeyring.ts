import HDKey from 'hdkey';
import { BaseKeyring, StoredKeyring } from '../BaseKeyring';
import { MetamaskInteractionProvider } from './MetamaskInteractionProvider';

export class MetaMaskKeyring extends BaseKeyring {
    static type = BaseKeyring.type;
    static instance: MetaMaskKeyring;
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
        this.currentAccount = parseInt(index, 10);
    };

    removeAccount = (address) => {
        if (!this.accounts.map((a) => a.toLowerCase()).includes(address.toLowerCase())) {
            throw new Error(`Address ${address} not found in this keyring`);
        }
        this.accounts = this.accounts.filter((a) => a.toLowerCase() !== address.toLowerCase());
    };

    forgetDevice = () => {
        this.accounts = [];
        this.hdk = new HDKey();
        this.page = 0;
        this.currentAccount = 0;
        this.paths = {};
    };

    submitCryptoHDKey = this.getInteraction().submitCryptoHDKey;
    submitSignature = this.getInteraction().submitSignature;

    cancelReadCryptoHDKey = this.getInteraction().cancelReadCryptoHDKey;
    cancelTransaction = this.getInteraction().cancelRequestSignature();
}

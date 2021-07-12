import { EventEmitter } from 'events';
import hash from 'hash.js';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import HDKey from 'hdkey';
import sdk from '@keystonehq/sdk';
import { toChecksumAddress, publicToAddress, rlp, toBuffer, unpadBuffer } from 'ethereumjs-util';
import { Transaction } from 'ethereumjs-tx';

const keyringType = 'Air Gaped Device';
const pathBase = 'm';
const MAX_INDEX = 1000;

type StoredKeyring = {
    xfp: string;
    xpub: string;
    hdPath: string;
    accounts: string[];
    currentAccount: number;
    page: number;
    perPage: number;
    paths: Record<string, number>;
};

type PagedAccount = { address: string; balance: any; index: number };

const readKeyringDescription = async (): Promise<{ xfp: string; xpub: string; hdPath: string }> => {
    const decodedResult = await sdk.read({
        title: 'Sync Keystone',
        description: "Please click 'Sync' in Keystone and scan the QR code displayed later",
    });
    const { type, result } = decodedResult;
    if (type === 'json') {
        const { xfp, xpub, path } = JSON.parse(result);
        if (xfp && xpub && path) {
            return {
                xfp,
                xpub,
                hdPath: path,
            };
        }
    } else if (type === 'none') {
        throw new Error('Reading canceled');
    }
    throw new Error('Invalid qrcode');
};

class AirGapedKeyring extends EventEmitter {
    static type = keyringType;
    static async getKeyring(): Promise<AirGapedKeyring> {
        const { xpub, xfp, hdPath } = await readKeyringDescription();
        return new AirGapedKeyring({
            xfp,
            xpub,
            hdPath,
            perPage: 5,
            page: 0,
            accounts: [],
            currentAccount: 0,
            paths: {},
        });
    }

    static getEmptyKeyring(): AirGapedKeyring {
        return new AirGapedKeyring({
            xfp: '',
            xpub: '',
            hdPath: '',
            perPage: 5,
            page: 0,
            accounts: [],
            currentAccount: 0,
            paths: {},
        });
    }

    private xfp: string;
    private xpub: string;
    private hdPath: string;
    private type: string;
    private accounts: string[];
    private currentAccount: number;
    private page: number;
    private perPage: number;
    private paths: Record<string, number>;
    private hdk: HDKey;
    private latestAccount: number;

    constructor(opts: StoredKeyring) {
        super();
        this.xfp = '';
        this.xpub = '';
        this.hdPath = '';
        this.page = 0;
        this.perPage = 5;
        this.type = keyringType;
        this.accounts = [];
        this.currentAccount = 0;
        this.paths = {};
        this.latestAccount = 0;
        this.deserialize(opts);
    }

    async readKeyring(): Promise<void> {
        const { xpub, xfp, hdPath } = await readKeyringDescription();
        this.xfp = xfp;
        this.xpub = xpub;
        this.hdPath = hdPath;
    }

    private checkKeyring() {
        if (!this.xfp || !this.xpub || !this.hdPath) {
            throw new Error('keyring not fulfilled, please call function `readKeyring` firstly');
        }
    }

    serialize(): Promise<StoredKeyring> {
        return Promise.resolve({
            xfp: this.xfp,
            xpub: this.xpub,
            hdPath: this.hdPath,
            accounts: this.accounts,
            currentAccount: this.currentAccount,
            page: this.page,
            perPage: this.perPage,
            paths: this.paths,
        });
    }

    deserialize(opts: StoredKeyring): void {
        this.xfp = opts.xfp;
        this.xpub = opts.xpub;
        this.hdPath = opts.hdPath;
        this.accounts = opts.accounts;
        this.currentAccount = opts.currentAccount;
        this.page = opts.page;
        this.perPage = opts.perPage;
        this.paths = opts.paths;
    }

    setCurrentAccount(index: number): void {
        this.currentAccount = index;
    }

    getCurrentAccount(): number {
        return this.currentAccount;
    }

    getCurrentAddress(): string {
        return this.accounts[this.currentAccount];
    }

    addAccounts(n = 1): Promise<string[]> {
        return new Promise((resolve, reject) => {
            try {
                const from = this.latestAccount;
                const to = from + n;
                const newAccounts = [];

                for (let i = from; i < to; i++) {
                    const address = this._addressFromIndex(pathBase, i);
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

    getFirstPage(): Promise<PagedAccount[]> {
        this.page = 0;
        return this.__getPage(1);
    }

    getNextPage(): Promise<PagedAccount[]> {
        return this.__getPage(1);
    }

    getPreviousPage(): Promise<PagedAccount[]> {
        return this.__getPage(-1);
    }

    __getPage(increment: number): Promise<PagedAccount[]> {
        this.page += increment;

        if (this.page <= 0) {
            this.page = 1;
        }

        return new Promise((resolve, reject) => {
            try {
                const from = (this.page - 1) * this.perPage;
                const to = from + this.perPage;

                const accounts = [];

                for (let i = from; i < to; i++) {
                    const address = this._addressFromIndex(pathBase, i);
                    accounts.push({
                        address,
                        balance: null,
                        index: i,
                    });
                    this.paths[toChecksumAddress(address)] = i;
                }
                resolve(accounts);
            } catch (e) {
                reject(e);
            }
        });
    }

    getAccounts(): string[] {
        return this.accounts;
    }

    removeAccount(address: string): void {
        if (!this.accounts.map((a) => a.toLowerCase()).includes(address.toLowerCase())) {
            throw new Error(`Address ${address} not found in this keyring`);
        }
        this.accounts = this.accounts.filter((a) => a.toLowerCase() !== address.toLowerCase());
    }

    async readSignature(signId: string): Promise<{ r: Buffer; s: Buffer; v: Buffer }> {
        const signature = await sdk.read({
            title: 'Submit signing result',
            description: 'Please scan signing result QR code displayed on your Keystone',
        });
        if (signature) {
            if (signature.type === 'ur') {
                const { signId: peerSignId, signature: signatureHex } = JSON.parse(
                    Buffer.from(signature.result, 'hex').toString('utf-8'),
                );
                if (peerSignId && signatureHex) {
                    if (peerSignId !== signId) {
                        throw new Error('read signature error: mismatched signId');
                    }
                    const r = Buffer.from(signatureHex.slice(0, 64), 'hex');
                    const s = Buffer.from(signatureHex.slice(64, 128), 'hex');
                    const v = Buffer.from(signatureHex.slice(128), 'hex');
                    return {
                        r,
                        s,
                        v,
                    };
                }
                throw new Error('invalid signature qrcode');
            } else {
                throw new Error('invalid signature qrcode');
            }
        }
        throw new Error('read signature canceled');
    }
    // tx is an instance of the ethereumjs-transaction class.

    private static serializeTx(tx: Transaction): Buffer {
        const items = [
            ...tx.raw.slice(0, 6),
            toBuffer(tx.getChainId()),
            // TODO: stripping zeros should probably be a responsibility of the rlp module
            unpadBuffer(toBuffer(0)),
            unpadBuffer(toBuffer(0)),
        ];
        return rlp.encode(items);
    }

    async signTransaction(address: string, tx: Transaction): Promise<Transaction> {
        const txHex = AirGapedKeyring.serializeTx(tx).toString('hex');
        const hdPath = this._pathFromAddress(address);
        const signId = hash.sha256().update(`${txHex}${hdPath}${this.xfp}`).digest('hex').slice(0, 8);
        const signPayload = {
            txHex,
            xfp: this.xfp,
            hdPath,
            signId,
        };
        await sdk.play(Buffer.from(JSON.stringify(signPayload), 'utf-8').toString('hex'), {
            hasNext: true,
            title: 'Request signing transaction',
            description:
                'Please scan the QR code below with Keystone, review transaction information and authorize to sign',
        });
        const { r, s, v } = await this.readSignature(signId);
        tx.r = r;
        tx.s = s;
        tx.v = v;
        return tx;
    }

    signMessage(withAccount: string, data: string): Promise<string> {
        return this.signPersonalMessage(withAccount, data);
    }

    async signPersonalMessage(withAccount: string, messageHex: string): Promise<string> {
        const hdPath = this._pathFromAddress(withAccount);
        const signId = hash.sha256().update(`${messageHex}${hdPath}${this.xfp}`).digest('hex').slice(0, 8);
        const signPayload = {
            messageHex,
            xfp: this.xfp,
            hdPath,
            signId,
        };
        await sdk.play(Buffer.from(JSON.stringify(signPayload), 'utf-8').toString('hex'), {
            hasNext: true,
            title: 'Request signing message',
            description: 'Please scan the QR code below with Keystone, review message and authorize to sign',
        });
        const { r, s, v } = await this.readSignature(signId);
        return '0x' + r + s + v;
    }

    async signTypedData(withAccount: string, typedData: any): Promise<Buffer> {
        const hdPath = this._pathFromAddress(withAccount);
        const signId = hash
            .sha256()
            .update(`${JSON.stringify(typedData)}${hdPath}${this.xfp}`)
            .digest('hex')
            .slice(0, 8);
        const signPayload = {
            data: typedData,
            xfp: this.xfp,
            hdPath,
            signId,
        };
        await sdk.play(Buffer.from(JSON.stringify(signPayload), 'utf-8').toString('hex'), {
            hasNext: true,
            title: 'Request signing typed data',
            description: 'Please scan the QR code below with Keystone, review data and authorize to sign',
        });
        const { r, s, v } = await this.readSignature(signId);
        return Buffer.concat([r, s, v]);
    }

    _addressFromIndex(pb: string, i: number): string {
        this.checkKeyring();
        if (!this.hdk) {
            this.hdk = HDKey.fromExtendedKey(this.xpub);
        }
        const dkey = this.hdk.derive(`${pb}/0/${i}`);
        const address = '0x' + publicToAddress(dkey.publicKey, true).toString('hex');
        return toChecksumAddress(address);
    }

    _pathFromAddress(address: string): string {
        const checksummedAddress = toChecksumAddress(address);
        let index = this.paths[checksummedAddress];
        if (typeof index === 'undefined') {
            for (let i = 0; i < MAX_INDEX; i++) {
                if (checksummedAddress === this._addressFromIndex(pathBase, i)) {
                    index = i;
                    break;
                }
            }
        }

        if (typeof index === 'undefined') {
            throw new Error('Unknown address');
        }
        return `${this.hdPath}/0/${index}`;
    }
}

export default AirGapedKeyring;

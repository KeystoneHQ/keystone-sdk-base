import HDKey from "hdkey";
import {
  toChecksumAddress,
  publicToAddress,
  stripHexPrefix,
} from "@ethereumjs/util";
import { RLP } from "@ethereumjs/rlp";
import {
  LegacyTransaction as Transaction,
  FeeMarketEIP1559Transaction,
  TransactionFactory,
  TypedTransaction,
} from "@ethereumjs/tx";
import { KeystoneBridge } from "./KeystoneBridge";
import { Keyring } from '@metamask/keyring-utils';
import { Hex, Json } from "@metamask/utils";

const keyringType = "Keystone Hardware";
const pathBase = "m";
const MAX_INDEX = 1000;

export type StoredKeyring = {
  //common props;
  version: number;
  initialized: boolean;
  accounts: string[];
  currentAccount: number;
  page: number;
  perPage: number;
  name: string;
  xfp: string;

  hdPath: string;
  hd_account: string;
  indexes: Record<string, number>;
  ledger_live_accounts: Record<string, string>;
};

export type PagedAccount = { address: string; balance: any; index: number };

export enum KEYSTONE_HD_PATH {
  STANDARD = "m/44'/60'/0'/0/X",
  LEDGER_LIVE = "m/44'/60'/X'/0/0",
  LEDGER_LEGACY = "m/44'/60'/0'/X",
}

export class KeystoneUSBKeyring implements Keyring {
  // @ts-ignore
  private version = 1;
  static type = keyringType;
  protected xfp: string;
  readonly type: string = keyringType;
  protected initialized: boolean;
  protected hdPath: string;
  protected accounts: string[];
  protected currentAccount: number;
  protected page: number;
  protected perPage: number;
  protected hdk: HDKey | undefined;
  protected name: string;

  //standard and ledger legacy
  protected hd_account: string;
  protected indexes: Record<string, number>;
  //ledger live
  protected ledger_live_accounts: Record<string, string>;

  private bridge: KeystoneBridge;

  private unlockedAccount: number;

  private bridgeSetup: boolean;

  constructor({
    bridge,
    opts,
  }: {
    bridge: KeystoneBridge;
    opts?: StoredKeyring;
  }) {
    //common props
    this.page = 0;
    this.perPage = 5;
    this.accounts = [];
    this.currentAccount = 0;
    this.unlockedAccount = 0;
    this.name = "Keystone";
    this.initialized = false;

    this.hdPath = KEYSTONE_HD_PATH.STANDARD;
    this.indexes = {};
    this.ledger_live_accounts = {};
    this.hd_account = "";

    this.deserialize(opts ?? null);

    this.bridge = bridge;
    this.bridgeSetup = false;
  }

  forgetDevice = () => {
    //common props
    this.page = 0;
    this.perPage = 5;
    this.accounts = [];
    this.currentAccount = 0;
    this.unlockedAccount = 0;
    this.name = "Keystone";
    this.initialized = false;

    this.hdPath = KEYSTONE_HD_PATH.STANDARD;
    this.indexes = {};
    this.ledger_live_accounts = {};
    this.hd_account = "";

    this.xfp = undefined;
  };

  async init() {
    // await this.bridge.init();
  }

  async setUpBridge() {
    await this.bridge.init(this.xfp);
  }

  setHdPath(hdPath: string) {
    this.hdPath = hdPath;
  }

  async readKeyring(): Promise<void> {
    await this.setUpBridge();
    const paths = ["m/44'/60'/0'"];
    paths.push(...Array.from({ length: 10 }, (_, i) => `m/44'/60'/${i}'/0/0`));
    const result = await this.bridge.getKeys(paths);
    if (result === undefined) {
      throw new Error(`KeystoneError#getKeys.user_reject: user rejected the request`);
    }
    this.xfp = result.mfp;
    const keys = result.keys.map((key) => {
      return {
        ...key,
        path: key.path.replace("m/", "").replace("M/", ""),
      };
    });

    const foundKey = keys.find((key) => key.path === "44'/60'/0'");
    this.hd_account = foundKey ? foundKey.xpub : "";
    const ledger_live_keys = keys.filter((key) => key.path !== "44'/60'/0'");
    this.ledger_live_accounts = ledger_live_keys.reduce((acc, key) => {
      acc[key.address] = key.path;
      return acc;
    }, {} as Record<string, string>);
    this.initialized = true;
  }

  public getName = (): string => {
    return this.name;
  };

  protected checkKeyring() {
    if (!this.xfp || !this.hdPath || !this.hd_account) {
      throw new Error(
        "KeystoneError#invalid_keyring: keyring not fulfilled, please call function `readKeyring` firstly"
      );
    }
  }

  serialize(): Promise<StoredKeyring> {
    return Promise.resolve({
      //common
      initialized: this.initialized,
      accounts: this.accounts,
      currentAccount: this.currentAccount,
      page: this.page,
      perPage: this.perPage,
      name: this.name,
      version: this.version,
      xfp: this.xfp,

      hdPath: this.hdPath,
      hd_account: this.hd_account,
      ledger_live_accounts: this.ledger_live_accounts,
      indexes: this.indexes,
    });
  }

 async deserialize(state: Json): Promise<void> {
    if (state) {
      //common props;
      const opts = state as StoredKeyring;
      this.accounts = opts.accounts;
      this.currentAccount = opts.currentAccount;
      this.page = opts.page;
      this.perPage = opts.perPage;
      this.name = opts.name;
      this.initialized = opts.initialized;
      this.xfp = opts.xfp;

      this.hdPath = opts.hdPath;
      this.hd_account = opts.hd_account;
      this.ledger_live_accounts = opts.ledger_live_accounts;
      this.indexes = opts.indexes;
    }
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

  setAccountToUnlock = (index) => {
    this.unlockedAccount = parseInt(index, 10);
  };

  async addAccounts(n = 1): Promise<Hex[]> {
    const from = this.unlockedAccount;
    const to = from + n;
    const newAccounts: Hex[] = [];

    for (let i = from; i < to; i++) {
      const address = await this.__addressFromIndex(pathBase, i);
      newAccounts.push(address as Hex);
      this.page = 0;
      this.unlockedAccount++;
    }
    this.accounts = this.accounts.concat(newAccounts);
    return this.accounts as Hex[];
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

  private __getNormalPage = async (
    increment: number
  ): Promise<PagedAccount[]> => {
    this.page += increment;
    if (this.page <= 0) {
      this.page = 1;
    }
    const from = (this.page - 1) * this.perPage;
    const to = from + this.perPage;

    const accounts = [];

    for (let i = from; i < to; i++) {
      const address = await this.__addressFromIndex(pathBase, i);
      accounts.push({
        address,
        balance: null,
        index: i,
      });
      this.indexes[toChecksumAddress(address)] = i;
    }
    return accounts;
  };

  private __getLedgerLivePage = async (
    increment: number
  ): Promise<PagedAccount[]> => {
    const nextPage = this.page + increment;
    const from = (nextPage - 1) * this.perPage;
    const to = from + this.perPage;

    const accounts = [];

    for (let i = from; i < to; i++) {
      const address = await this.__addressFromIndex(pathBase, i);
      accounts.push({
        address,
        balance: null,
        index: i,
      });
    }

    this.page += increment;
    return accounts;
  };

  async __getPage(increment: number): Promise<PagedAccount[]> {
    if (!this.initialized) {
      await this.readKeyring();
    }
    if (
      this.hdPath === KEYSTONE_HD_PATH.STANDARD ||
      this.hdPath === KEYSTONE_HD_PATH.LEDGER_LEGACY
    ) {
      return this.__getNormalPage(increment);
    } else {
      return this.__getLedgerLivePage(increment);
    }
  }

  async getAccounts(): Promise<Hex[]>{
    return Promise.resolve(this.accounts as Hex[]);
  }

  removeAccount(address: Hex): void {
    if (
      !this.accounts.map((a) => a.toLowerCase()).includes(address.toLowerCase())
    ) {
      throw new Error(`Address ${address} not found in this keyring`);
    }
    this.accounts = this.accounts.filter(
      (a) => a.toLowerCase() !== address.toLowerCase()
    );
  }

  async signTransaction(
    address: Hex,
    tx: TypedTransaction
  ): Promise<TypedTransaction> {
    await this.setUpBridge();
    let messageToSign: Buffer;
    if (tx.type === 0) {
      messageToSign = Buffer.from(
        RLP.encode((tx as Transaction).getMessageToSign())
      );
    } else {
      messageToSign = Buffer.from(
        (tx as FeeMarketEIP1559Transaction).getMessageToSign()
      );
    }
    const hdPath = await this._pathFromAddress(address);
    const isLegacy = tx.type === 0;
    const { r, s, v } = await this.bridge.signTransaction(
      hdPath,
      messageToSign.toString("hex"),
      isLegacy
    );
    return TransactionFactory.fromTxData(
      {
        ...tx,
        type: tx.type,
        r: Buffer.from(r, "hex"),
        s: Buffer.from(s, "hex"),
        v: Buffer.from(v, "hex"),
      },
      { common: tx.common }
    );
  }

  signMessage(withAccount: Hex, data: Hex): Promise<string> {
    return this.signPersonalMessage(withAccount, data);
  }

  async signPersonalMessage(
    withAccount: Hex,
    messageHex: Hex
  ): Promise<string> {
    await this.setUpBridge();
    const usignedHex = stripHexPrefix(messageHex);
    const hdPath = await this._pathFromAddress(withAccount);
    const message = Buffer.from(usignedHex, "hex").toString("utf-8");

    const { r, s, v } = await this.bridge.signPersonalMessage(
      hdPath,
      message
    );

    return (
      "0x" +
      Buffer.concat([
        Uint8Array.from(Buffer.from(r, "hex")),
        Uint8Array.from(Buffer.from(s, "hex")),
        Uint8Array.from(Buffer.from(v, "hex")),
      ]).toString("hex")
    );
  }

  async signTypedData(withAccount: Hex, typedData: any): Promise<string> {
    await this.setUpBridge();
    const hdPath = await this._pathFromAddress(withAccount);

    const { r, s, v } = await this.bridge.signEIP712Message(hdPath, typedData);

    return (
      "0x" +
      Buffer.concat([
        Uint8Array.from(Buffer.from(r, "hex")),
        Uint8Array.from(Buffer.from(s, "hex")),
        Uint8Array.from(Buffer.from(v, "hex")),
      ]).toString("hex")
    );
  }

  __addressFromIndex = async (pb: string, i: number): Promise<string> => {
    if (
      this.hdPath === KEYSTONE_HD_PATH.STANDARD ||
      this.hdPath === KEYSTONE_HD_PATH.LEDGER_LEGACY
    ) {
      this.checkKeyring();
      if (!this.hdk) {
        this.hdk = HDKey.fromExtendedKey(this.hd_account!);
      }
      const childrenPath =
        this.hdPath === KEYSTONE_HD_PATH.STANDARD ? `0/${i}` : String(i);
      const dkey = this.hdk!.derive(`${pb}/${childrenPath}`);
      const address =
        "0x" + publicToAddress(dkey.publicKey, true).toString("hex");
      return toChecksumAddress(address);
    } else {
      const result = Object.keys(this.ledger_live_accounts!)[i];
      if (result) {
        return toChecksumAddress(result);
      } else {
        throw new Error(`KeystoneError#pubkey_account.no_expected_account`);
      }
    }
  };

  async _pathFromAddress(address: string): Promise<string> {
    if (
      this.hdPath === KEYSTONE_HD_PATH.STANDARD ||
      this.hdPath === KEYSTONE_HD_PATH.LEDGER_LEGACY
    ) {
      const checksummedAddress = toChecksumAddress(address);
      let index = this.indexes[checksummedAddress];
      if (typeof index === "undefined") {
        for (let i = 0; i < MAX_INDEX; i++) {
          if (
            checksummedAddress === (await this.__addressFromIndex(pathBase, i))
          ) {
            index = i;
            break;
          }
        }
      }

      if (typeof index === "undefined") {
        throw new Error("Unknown address");
      }

      return this.hdPath.replace("X", index.toString());
    } else {
      const checksummedAddress = toChecksumAddress(address);
      const path = this.ledger_live_accounts![checksummedAddress];
      if (typeof path === "undefined") {
        throw new Error("Unknown address");
      }
      return path;
    }
  }

  async destroy(): Promise<void> {
    this.forgetDevice();
    this.hdk = undefined;
  }
}

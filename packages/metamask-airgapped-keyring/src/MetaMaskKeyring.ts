import { BaseKeyring, StoredKeyring } from "@keystonehq/base-eth-keyring";
import { MetamaskInteractionProvider } from "./MetaMaskInteractionProvider";
import {
  TransactionFactory,
  Transaction,
  FeeMarketEIP1559Transaction,
} from "@ethereumjs/tx";
import { DataType, EthSignRequest } from "@keystonehq/bc-ur-registry-eth";
import * as uuid from "uuid";
import rlp from "rlp";

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

  resetStore = (): void => {
    this.getInteraction().reset();
  };

  getMemStore = () => {
    return this.getInteraction().memStore;
  };

  async signTransaction(address: string, tx: any): Promise<any> {
    const dataType =
      tx.type === 0 ? DataType.transaction : DataType.typedTransaction;
    let messageToSign;
    if (tx.type === 0) {
      messageToSign = rlp.encode((tx as Transaction).getMessageToSign(false));
    } else {
      messageToSign = (tx as FeeMarketEIP1559Transaction).getMessageToSign(
        false
      );
    }
    const hdPath = await this._pathFromAddress(address);
    const chainId = tx.common.chainId();
    const requestId = uuid.v4();
    const ethSignRequest = EthSignRequest.constructETHRequest(
      messageToSign,
      dataType,
      hdPath,
      this.xfp,
      requestId,
      chainId,
      address
    );
    const { r, s, v } = await this.requestSignature(
      requestId,
      ethSignRequest,
      "Scan with your Keystone",
      'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'
    );
    const txJson = tx.toJSON();
    txJson.v = v;
    txJson.s = s;
    txJson.r = r;
    txJson.type = tx.type;
    const transaction = TransactionFactory.fromTxData(txJson, {
      common: tx.common,
    });
    return transaction;
  }

  removeAccount = (address) => {
    if (
      !this.accounts.map((a) => a.toLowerCase()).includes(address.toLowerCase())
    ) {
      throw new Error(`Address ${address} not found in this keyring`);
    }
    this.accounts = this.accounts.filter(
      (a) => a.toLowerCase() !== address.toLowerCase()
    );
  };

  forgetDevice = () => {
    //common props
    this.page = 0;
    this.perPage = 5;
    this.accounts = [];
    this.currentAccount = 0;
    this.name = "QR Hardware";
    this.initialized = false;

    //hd props;
    this.xfp = "";
    this.xpub = "";
    this.hdPath = "";
    this.indexes = {};
    this.hdk = undefined;

    //pubkey props;
    this.paths = {};
  };

  submitCryptoHDKey = this.getInteraction().submitCryptoHDKey;
  submitCryptoAccount = this.getInteraction().submitCryptoAccount;
  submitSignature = this.getInteraction().submitSignature;

  cancelSync = this.getInteraction().cancelSync;
  cancelSignRequest = this.getInteraction().cancelRequestSignature;
}

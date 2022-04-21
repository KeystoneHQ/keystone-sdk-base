import HDKey from "hdkey";

import { PublicKey, Transaction } from "@solana/web3.js";
import {
  CryptoMultiAccounts,
  SolSignRequest,
} from "@keystonehq/bc-ur-registry-sol";
import * as uuid from "uuid";
import { InteractionProvider } from "./InteractionProvider";
import bs58 from "bs58";

const keyringType = "QR Hardware Wallet Device";

export interface HDKey {
  hdPath: string;
  pubKey: string;
  index: number;
}

export class BaseKeyring {
  getInteraction = (): InteractionProvider => {
    throw new Error(
      "KeystoneError#invalid_extends: method getInteraction not implemented, please extend BaseKeyring by overwriting this method."
    );
  };
  static type = keyringType;
  protected xfp: string;
  protected type = keyringType;
  protected initialized: boolean;
  protected keys: HDKey[];
  protected name: string;
  protected device: string;
  constructor() {
    //common props
    this.keys = [];
    this.name = "QR Hardware";
    this.initialized = false;
    this.device = "";
    this.xfp = "";
  }

  protected requestSignature = async (
    _requestId: string,
    signRequest: SolSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ): Promise<Buffer> => {
    const solSignature = await this.getInteraction().requestSignature(
      signRequest,
      requestTitle,
      requestDescription
    );
    const requestIdBuffer = solSignature.getRequestId();
    const signature = solSignature.getSignature();
    if (requestIdBuffer) {
      const requestId = uuid.stringify(requestIdBuffer);
      if (requestId !== _requestId) {
        throw new Error(
          "KeystoneError#invalid_data: read signature error: mismatched requestId"
        );
      }
    }
    return signature;
  };

  //initial read
  async readKeyring(): Promise<void> {
    const result = await this.getInteraction().readCryptoMultiAccounts();
    this.syncKeyring(result);
  }

  public syncKeyring(data: CryptoMultiAccounts): void {
    const keys = data.getKeys();
    this.device = data.getDevice();
    this.xfp = data
      .getKeys()[0]
      .getOrigin()
      .getSourceFingerprint()
      ?.toString("hex");
    this.name = data.getKeys()[0].getName();
    this.keys = keys.map((each, index) => ({
      hdPath: each.getOrigin().getPath(),
      pubKey: bs58.encode(each.getKey()),
      index,
    }));
    this.initialized = true;
  }

  public getName = (): string => {
    return this.name;
  };

  getAccounts() {
    if (!this.initialized) {
      return [];
    }
    return this.keys;
  }

  async signTransaction(pubKey: string, tx: Transaction): Promise<Transaction> {
    const requestId = uuid.v4();
    const account = this.getAccounts().find(
      (account) => account.pubKey == pubKey
    );
    const solSignRequest = SolSignRequest.constructSOLRequest(
      tx.serializeMessage(),
      account.hdPath,
      this.xfp,
      requestId
    );

    const signature = await this.requestSignature(
      requestId,
      solSignRequest,
      "Scan with your Keystone",
      'After your Keystone has signed the transaction, click on "Scan Keystone" to receive the signature'
    );

    tx.addSignature(new PublicKey(pubKey), signature);
    return tx;
  }

  async signMessage(
    pubKey: string,
    messageHex: Uint8Array
  ): Promise<Uint8Array> {
    const requestId = uuid.v4();
    const account = this.getAccounts().find(
      (account) => account.pubKey == pubKey
    );
    const solSignRequest = SolSignRequest.constructSOLRequest(
      Buffer.from(messageHex),
      account.hdPath,
      this.xfp,
      requestId,
    );
    return this.requestSignature(
      requestId,
      solSignRequest,
      "Scan with your Keystone",
      'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature'
    );
  }
}

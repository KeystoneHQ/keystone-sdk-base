import * as uuid from "uuid";
import { InteractionProvider } from "./InteractionProvider";
import { NearSignRequest } from "@keystonehq/bc-ur-registry-near";
import {
  SCHEMA,
  Signature,
  SignedTransaction,
  Transaction,
} from "near-api-js/lib/transaction";
import borsh from "borsh";

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
    signRequest: NearSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ): Promise<Buffer> => {
    const nearSignature = await this.getInteraction().requestSignature(
      signRequest,
      requestTitle,
      requestDescription
    );
    const requestIdBuffer = nearSignature.getRequestId();
    const signature = nearSignature.getSignature();
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

  public getName = (): string => {
    return this.name;
  };

  getAccounts() {
    if (!this.initialized) {
      return [];
    }
    return this.keys;
  }

  async signTransaction(
    tx: Transaction,
    pubKey: string
  ): Promise<SignedTransaction> {
    const requestId = uuid.v4();
    const account = this.getAccounts().find(
      (account) => account.pubKey == pubKey
    );
    const txData = borsh.serialize(SCHEMA, tx);
    const nearSignRequest = NearSignRequest.constructNearRequest(
      Buffer.from(txData),
      account.hdPath,
      this.xfp,
      requestId
    );
    const signature = this.requestSignature(
      requestId,
      nearSignRequest,
      "Scan with your Keystone",
      'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature'
    );
    return new SignedTransaction({
      txData,
      signature: new Signature({
        keyType: tx.publicKey.keyType,
        data: signature,
      }),
    });
  }
}

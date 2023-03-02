import bs58 from "bs58";
import * as uuid from "uuid";
import { Message, PublicKey, Transaction } from "@solana/web3.js";
import { InteractionProvider } from "./InteractionProvider";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";
import { SolSignRequest, SignType } from "@keystonehq/bc-ur-registry-sol";
import { Tracker } from './Tracker';

const keyringType = "QR Hardware Wallet Device";

export interface HDKey {
  hdPath: string;
  pubKey: string;
  index: number;
}

interface KeyringInitData {
  xfp: string;
  keys: HDKey[];
  name?: string;
  device?: string;
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
  public isTracking: boolean;

  constructor() {
    //common props
    this.keys = [];
    this.name = "QR Hardware";
    this.initialized = false;
    this.device = "";
    this.xfp = "";
    this.isTracking = true;
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
    if (this.isTracking) {
      Tracker.track("sign", {
        distinctId: this.device,
        time: Date.now(),
        xfp: this.xfp,
        requestId: _requestId,
      });
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
    if (this.isTracking) {
      Tracker.track("sync", {
        distinctId: this.device,
        time: Date.now(),
        xfp: this.xfp,
      });
    }
  }

  public syncKeyringData({xfp, keys, name = "QR Hardware", device}: KeyringInitData): void {
    this.xfp = xfp
    this.name = name
    this.keys = keys
    this.device = device
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
    const signature = await this._getSignature(pubKey, Buffer.from(tx.serializeMessage() as unknown as ArrayBuffer), SignType.Transaction)
    tx.addSignature(new PublicKey(pubKey), signature);
    return tx;
  }

  async signMessage(
    pubKey: string,
    messageHex: Uint8Array
  ): Promise<Uint8Array> {
    return await this._getSignature(pubKey, Buffer.from(messageHex), SignType.Message)
  }

  async createSignature(pubKey: string, messageHex: Uint8Array): Promise<Uint8Array>{
    try{
      const messageInstance = Message.from(messageHex);
      const transaction = Transaction.populate(messageInstance, []);
      if (transaction) {
        return this._getSignature(pubKey, Buffer.from(messageHex),SignType.Transaction)
      }
    }catch(e){
    }
    return this.signMessage(pubKey, messageHex)
  }

  async _getSignature(pubKey: string, messageHex: Buffer, signType): Promise<Buffer>{
    const requestId = uuid.v4();
    const account = this.getAccounts().find(
        (account) => account.pubKey == pubKey
    );
    const solSignRequest = SolSignRequest.constructSOLRequest(
        messageHex,
        account.hdPath,
        this.xfp,
        signType,
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

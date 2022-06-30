import * as uuid from "uuid";
import bs58 from "bs58";
import { InteractionProvider } from "./InteractionProvider";
import {
  CryptoMultiAccounts,
  NearSignRequest,
  SignType,
} from "@keystonehq/bc-ur-registry-near";

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
      pubKey: `ed25519:${bs58.encode(each.getKey())}`,
      index,
    }));
    this.initialized = true;
  }

  public syncKeyringData({
    xfp,
    keys,
    name = "QR Hardware",
    device,
  }: KeyringInitData): void {
    this.xfp = xfp;
    this.name = name;
    this.keys = keys;
    this.device = device;
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

  async signTransaction(
    pubKey: string,
    txData: Uint8Array
  ): Promise<Uint8Array> {
    const requestId = uuid.v4();
    const account = this.getAccounts().find(
      (account) => account.pubKey == pubKey
    );
    const nearSignRequest = NearSignRequest.constructNearRequest(
      Buffer.from(txData),
      account.hdPath,
      this.xfp,
      SignType.Transaction,
      requestId
    );
    return this.requestSignature(
      requestId,
      nearSignRequest,
      "Scan with your Keystone",
      'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature'
    );
  }
}

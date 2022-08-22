import * as uuid from "uuid";
import { InteractionProvider } from "./InteractionProvider";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";
import {
  AptosSignature,
  AptosSignRequest,
  SignType
} from "@keystonehq/bc-ur-registry-aptos";

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
    signRequest: AptosSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ): Promise<AptosSignature> => {
    const aptosSignature = await this.getInteraction().requestSignature(
      signRequest,
      requestTitle,
      requestDescription
    );
    const requestIdBuffer = aptosSignature.getRequestId();
    const signature = aptosSignature.getSignature();
    const authKey = aptosSignature.getAuthenticationPublicKey();
    if (requestIdBuffer) {
      const requestId = uuid.stringify(requestIdBuffer);
      if (requestId !== _requestId) {
        throw new Error(
          "KeystoneError#invalid_data: read signature error: mismatched requestId"
        );
      }
    }
    return new AptosSignature(signature, requestIdBuffer, authKey);
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
      pubKey: each.getKey().toString("hex"),
      index
    }));
    this.initialized = true;
  }

  public syncKeyringData({
    xfp,
    keys,
    name = "QR Hardware",
    device
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

  getAuthKeys() {
    if (!this.initialized) {
      return [];
    }
    return this.keys;
  }

  async signMessage(
    authKey: string,
    msg: Uint8Array,
    senderAddress?: string,
    origin?: string
  ): Promise<AptosSignature> {
    const requestId = uuid.v4();
    const key = this.getAuthKeys().find(key => key.pubKey == authKey);
    const atosSignRequest = AptosSignRequest.constructAptosRequest(
      Buffer.from(msg),
      [key.hdPath],
      [this.xfp],
      SignType.SingleSign,
      requestId,
      [Buffer.from(senderAddress, "hex")],
      origin
    );
    return this.requestSignature(
      requestId,
      atosSignRequest,
      "Scan with your Keystone",
      'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature'
    );
  }
}

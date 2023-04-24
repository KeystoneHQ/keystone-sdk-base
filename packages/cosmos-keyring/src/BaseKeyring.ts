import * as uuid from "uuid";
import { InteractionProvider } from "./InteractionProvider";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";
import { CosmosSignRequest, SignDataType } from "@keystonehq/bc-ur-registry-cosmos";
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
    signRequest: CosmosSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => {
    const cosmosSignature = await this.getInteraction().requestSignature(
      signRequest,
      requestTitle,
      requestDescription
    );
    const requestIdBuffer = cosmosSignature.getRequestId();
    const signature = cosmosSignature.getSignature();
    const pubKey = cosmosSignature.getPublicKey();
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
    return { signature, pubKey };
  };

  //initial read
  async readKeyring(): Promise<void> {
    const result = await this.getInteraction().readCryptoMultiAccounts();
    this.syncKeyring(result);
  }

  public syncKeyring(data: CryptoMultiAccounts): void {
    const keys = data.getKeys();
    this.device = data.getDevice();
    this.xfp = data.getMasterFingerprint().toString("hex");
    this.name = data.getKeys()[0].getName();
    this.keys = keys.map((each, index) => ({
      hdPath: each.getOrigin().getPath(),
      pubKey: each.getKey().toString("hex"),
      index
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

  getPubKeys() {
    if (!this.initialized) {
      return [];
    }
    return this.keys;
  }

  _ensureHex(hexStr) {
    if (hexStr.startsWith("0x")) {
      return hexStr;
    } else {
      return `0x${hexStr}`;
    }
  }
  async _getSignature(
    pubKey: string,
    msg: Uint8Array,
    dataType: SignDataType,
    addresses?: string[],
    origin?: string
  ) {
    const requestId = uuid.v4();
    const key = this.getPubKeys().find(
      key => this._ensureHex(key.pubKey) === this._ensureHex(pubKey)
    );

    const cosmosSignRequest = CosmosSignRequest.constructCosmosRequest(
      requestId,
      [this.xfp],
      Buffer.from(msg),
      dataType,
      [key.hdPath],
      addresses,
      origin
    );
    return this.requestSignature(
      requestId,
      cosmosSignRequest,
      "Scan with your Keystone",
      'After your Keystone has signed this message, click on "Scan Keystone" to receive the signature'
    );
  }
  async signMessage(
    pubKey: string,
    msg: Uint8Array,
    addresses?: string[],
    origin?: string
  ) {
    return this._getSignature(
      pubKey,
      msg,
      SignDataType.message,
      addresses,
      origin
    );
  }

  async signAminoTransaction(
    pubKey: string,
    msg: Uint8Array,
    addresses?: string[],
    origin?: string
  ) {
    return this._getSignature(
      pubKey,
      msg,
      SignDataType.amino,
      addresses,
      origin
    );
  }

  async signDirectTransaction(
    pubKey: string,
    msg: Uint8Array,
    addresses?: string[],
    origin?: string
  ) {
    return this._getSignature(
      pubKey,
      msg,
      SignDataType.direct,
      addresses,
      origin
    );
  }

  async signTextualTransaction(
    pubKey: string,
    msg: Uint8Array,
    addresses?: string[],
    origin?: string
  ) {
    return this._getSignature(
      pubKey,
      msg,
      SignDataType.textual,
      addresses,
      origin
    );
  }
}

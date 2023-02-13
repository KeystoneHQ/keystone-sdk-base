import { stringify as uuidStringify, v4 as uuidV4 } from "uuid";
import { InteractionProvider, PlayQR, ReadQR } from "./InteractionProvider";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";
import { EvmSignRequest, SignDataType } from "@keystonehq/bc-ur-registry-evm";
import { DefaultInteractionProvider } from './DefaultInteractionProvider';

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

export class Keyring {
  static type = keyringType;
  protected xfp: string;
  protected type = keyringType;
  protected initialized: boolean;
  protected keys: HDKey[];
  protected name: string;
  protected device: string;
  private interaction;

  constructor(data?: KeyringInitData) {
    this.syncKeyringData(data || {
      xfp: '',
      keys: [],
      name: 'QR Hardware',
      device: '',
    });
  }

  protected getInteraction = (): InteractionProvider => {
    if (!this.interaction) {
      this.interaction = new DefaultInteractionProvider();
    }
    return this.interaction;
  };

  protected requestSignature = async (
    _requestId: string,
    signRequest: EvmSignRequest,
  ) => {
    const result = await this.getInteraction().requestSignature(
      signRequest,
    );
    const requestIdBuffer = result.getRequestId();
    const signature = result.getSignature();
    if (requestIdBuffer) {
      const requestId = uuidStringify(requestIdBuffer);
      if (requestId !== _requestId) {
        throw new Error(
          "KeystoneError#invalid_data: read signature error: mismatched requestId"
        );
      }
    }
    return { signature };
  };

  public onPlayQR(playQR: PlayQR) {
    this.getInteraction().playQR = playQR;
  }

  public onReadQR(readQR: ReadQR) {
    this.getInteraction().readQR = readQR;
  }

  public async readKeyring(): Promise<void> {
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

  public getXFP = (): string => {
    return this.xfp;
  };
  public setXFP = (xfp: string) => {
    this.xfp = xfp;
  };

  public getName = (): string => {
    return this.name;
  };
  public setName = (name: string) => {
    this.name = name;
  };

  public getDevice = (): string => {
    return this.device;
  };
  public setDevice = (device: string) => {
    this.device = device;
  };

  public getPubKeys() {
    if (!this.initialized) {
      return [];
    }
    return this.keys;
  }
  public setPubKeys(keys: HDKey[]) {
    this.keys = keys;
    this.initialized = true;
  }

  protected _ensureHex(hexStr) {
    if (hexStr.startsWith("0x")) {
      return hexStr;
    } else {
      return `0x${hexStr}`;
    }
  }

  protected async _getSignature(
    pubKey: string,
    msg: Uint8Array,
    dataType: SignDataType,
    customChainIdentifier?: number,
    address?: string,
    origin?: string
  ) {
    const requestId = uuidV4();
    const key = this.getPubKeys().find(
      key => this._ensureHex(key.pubKey) === this._ensureHex(pubKey)
    );

    const signRequest = EvmSignRequest.constructEvmRequest(
      requestId,
      this.xfp,
      Buffer.from(msg),
      dataType,
      customChainIdentifier,
      key.hdPath,
      Buffer.from(address),
      origin
    );

    return this.requestSignature(
      requestId,
      signRequest,
    );
  }

  public async signCosmosAmino(
    pubKey: string,
    msg: Uint8Array,
    customChainIdentifier?: number,
    address?: string,
    origin?: string,
  ) {
    return this._getSignature(
      pubKey,
      msg,
      SignDataType.cosmosAmino,
      customChainIdentifier,
      address,
      origin,
    );
  }

  public async signCosmosDirect(
    pubKey: string,
    msg: Uint8Array,
    customChainIdentifier?: number,
    address?: string,
    origin?: string,
  ) {
    return this._getSignature(
      pubKey,
      msg,
      SignDataType.cosmosDirect,
      customChainIdentifier,
      address,
      origin,
    );
  }

  public async signArbitrary(
    pubKey: string,
    msg: Uint8Array,
    customChainIdentifier?: number,
    address?: string,
    origin?: string,
  ) {
    return this._getSignature(
      pubKey,
      msg,
      SignDataType.arbitrary,
      customChainIdentifier,
      address,
      origin,
    );
  }
}

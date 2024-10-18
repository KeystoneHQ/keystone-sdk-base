import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  signData,
  derivationPath,
  origin,
  signType,
  xpub,
  hashPayload,
  addressBench32,
  addressFieldType,
}
export enum MessageAddressFieldType {
  ADDRESS = "ADDRESS",
  KEY_HASH = "KEY_HASH",
}

type signRequestProps = {
  requestId?: Buffer;
  signData: Buffer;
  xpub: Buffer;
  derivationPath: CryptoKeypath;
  origin?: string;
  hashPayload: boolean;
  addressBench32?: string;
  addressFieldType: MessageAddressFieldType;
};

export interface Cip8SignDataContext {
  requestId?: Buffer;
  messageHex: string;
  signingPath: string;
  xfp: string;
  originWallet?: string;
  addressFieldType: MessageAddressFieldType;
}

export class CardanoSignCip8DataRequest extends RegistryItem {
  private requestId?: Buffer;
  private signData: Buffer;
  private derivationPath: CryptoKeypath;
  private origin?: string;
  private xpub: Buffer;
  private hashPayload: boolean;
  private addressBench32?: string;
  private addressFieldType: MessageAddressFieldType;
  getRegistryType = () => ExtendedRegistryTypes.CARDANO_SIGN_CIP8_DATA_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.derivationPath = args.derivationPath;
    this.origin = args.origin;
    this.xpub = args.xpub;
    this.hashPayload = args.hashPayload;
    this.addressBench32 = args.addressBench32;
    this.addressFieldType = args.addressFieldType;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getDerivationPath = () => this.derivationPath.getPath();
  public getOrigin = () => this.origin;
  public getXpub = () => this.xpub;
  public getHashPayload = () => this.hashPayload;
  public getAddressBench32 = () => this.addressBench32;
  public getAddressFieldType = () => this.addressFieldType;
  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    map[Keys.signData] = this.signData;

    const keyPath = this.derivationPath.toDataItem();
    keyPath.setTag(this.derivationPath.getRegistryType().getTag());
    map[Keys.derivationPath] = keyPath;
    map[Keys.xpub] = this.xpub;
    map[Keys.hashPayload] = this.hashPayload;
    if (this.addressBench32) {
      map[Keys.addressBench32] = this.addressBench32;
    }
    map[Keys.addressFieldType] = this.addressFieldType;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signData = map[Keys.signData];
    const derivationPath = CryptoKeypath.fromDataItem(map[Keys.derivationPath]);
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    const xpub = map[Keys.xpub];
    const hashPayload = map[Keys.hashPayload];
    const addressBench32 = map[Keys.addressBench32]
      ? map[Keys.addressBench32]
      : undefined;
    const addressFieldType = map[Keys.addressFieldType];
    return new CardanoSignCip8DataRequest({
      requestId,
      signData,
      derivationPath,
      origin,
      xpub,
      hashPayload,
      addressBench32,
      addressFieldType,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoSignCip8DataRequest.fromDataItem(dataItem);
  };

  public static constructCardanoSignCip8DataRequest(
    signData: string,
    hdPath: string,
    xfp: string,
    xpub: string,
    hashPayload: boolean,
    addressFieldType: MessageAddressFieldType,
    addressBench32?: string,
    uuidString?: string,
    origin?: string
  ) {
    const paths = hdPath.replace(/[m|M]\//, "").split("/");
    const hdpathObject = new CryptoKeypath(
      paths.map((path) => {
        const index = parseInt(path.replace("'", ""));
        let isHardened = false;
        if (path.endsWith("'")) {
          isHardened = true;
        }
        return new PathComponent({ index, hardened: isHardened });
      }),
      Buffer.from(xfp, "hex")
    );
    return new CardanoSignCip8DataRequest({
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
      signData: Buffer.from(signData, "hex"),
      derivationPath: hdpathObject,
      origin: origin || undefined,
      xpub: Buffer.from(xpub, "hex"),
      hashPayload: hashPayload,
      addressBench32: addressBench32 || undefined,
      addressFieldType: addressFieldType as MessageAddressFieldType,
    });
  }
}

import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import { parse as uuidParse} from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

export enum SignDataType {
  arbitrary = 1,
  cosmosAmino,
  cosmosDirect,
}

enum Keys {
  requestId = 1,
  signData,
  dataType,
  customChainIdentifier,
  derivationPath,
  address,
  origin,
}

type signRequestProps = {
  requestId: Buffer;
  signData: Buffer;
  dataType: SignDataType;
  customChainIdentifier: Number,
  derivationPath: CryptoKeypath;
  address?: Buffer;
  origin?: string;
};

export class EvmSignRequest extends RegistryItem {
  private requestId: Buffer;
  private signData: Buffer;
  private dataType: SignDataType;
  private customChainIdentifier: Number;
  private derivationPath: CryptoKeypath;
  private address?: Buffer;
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.EVM_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.dataType = args.dataType;
    this.customChainIdentifier = args.customChainIdentifier;
    this.derivationPath = args.derivationPath;
    this.address = args.address;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getDataype = () => this.dataType;
  public getCustomChainIdentifier = () => this.customChainIdentifier;
  public getDerivationPath= () => this.derivationPath.getPath();
  public getAddress = () => this.address;
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.requestId] = new DataItem(
      this.requestId,
      RegistryTypes.UUID.getTag()
    );
    map[Keys.signData] = this.signData;
    map[Keys.dataType] = this.dataType;
    map[Keys.customChainIdentifier] = this.customChainIdentifier;

    const derivationPath = this.derivationPath.toDataItem();
    derivationPath.setTag(this.derivationPath.getRegistryType().getTag());
    map[Keys.derivationPath] = derivationPath;

    if (this.address) {
      map[Keys.address] = this.address;
    }

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();

    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;

    return new EvmSignRequest({
      requestId,
      signData: map[Keys.signData],
      dataType: map[Keys.dataType],
      customChainIdentifier: map[Keys.customChainIdentifier],
      derivationPath: CryptoKeypath.fromDataItem(map[Keys.derivationPath]),
      address: map[Keys.address],
      origin: map[Keys.origin],
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return EvmSignRequest.fromDataItem(dataItem);
  };

  public static parsePath(path: string, xfp: string) {
    const paths = path.replace(/[m|M]\//, "").split("/");
    const pathComponent = paths.map(path => {
      const index = parseInt(path.replace("'", ""));
      let isHardened = false;
      if (path.endsWith("'")) {
        isHardened = true;
      }
      return new PathComponent({ index, hardened: isHardened });
    });
    return new CryptoKeypath(pathComponent, Buffer.from(xfp, "hex"));
  }

  public static constructEvmRequest(
    uuidString: string,
    xfp: string,
    signData: Buffer,
    dataType: SignDataType,
    customChainIdentifier: Number,
    derivationHDPath: string,  
    address?: Buffer,
    origin?: string
  ) {
    return new EvmSignRequest({
      requestId: Buffer.from(uuidParse(uuidString) as Uint8Array),
      signData,
      dataType: dataType || SignDataType.arbitrary,
      customChainIdentifier,
      derivationPath: EvmSignRequest.parsePath(derivationHDPath, xfp),
      address,
      origin,
    });
  }
}

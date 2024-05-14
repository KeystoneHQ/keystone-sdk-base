import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import { parse as uuidParse } from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  signData,
  dataType,
  derivationPath,
  address,
  origin,
}

type SignRequestProps = {
  requestId?: Buffer;
  signData: Buffer;
  dataType: DataType;
  derivationPath?: CryptoKeypath;
  address: String;
  origin?: string;
};

export enum DataType {
  TRANSACTION = 1,
  SIGN_PROOF = 2,
}

export class TonSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private signData: Buffer;
  private dataType: DataType;
  private derivationPath?: CryptoKeypath;
  private address: String;
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.TRON_SIGN_REQUEST;

  constructor(args: SignRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.derivationPath = args.derivationPath;
    this.address = args.address;
    this.origin = args.origin;
    this.dataType = args.dataType;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getDerivationPath = () => this.derivationPath? this.derivationPath.getPath(): undefined;
  public getAddress = () => this.address;
  public getOrigin = () => this.origin;
  public getDataType = () => this.dataType;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.signData] = this.signData;
    map[Keys.dataType] = this.dataType;

    if (this.derivationPath) {
      const derivationPath = this.derivationPath.toDataItem();
      derivationPath.setTag(this.derivationPath.getRegistryType().getTag());
      map[Keys.derivationPath] = derivationPath;
    }

    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

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

    const derivationPath = map[Keys.derivationPath]
      ? CryptoKeypath.fromDataItem(map[Keys.derivationPath])
      : undefined;

    return new TonSignRequest({
      requestId,
      signData: map[Keys.signData],
      dataType: map[Keys.dataType],
      derivationPath,
      address: map[Keys.address],
      origin: map[Keys.origin],
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return TonSignRequest.fromDataItem(dataItem);
  };

  public static parsePath(path: string, xfp: string) {
    const paths = path.replace(/[m|M]\//, "").split("/");
    const pathComponent = paths.map((path) => {
      const index = parseInt(path.replace("'", ""));
      let isHardened = false;
      if (path.endsWith("'")) {
        isHardened = true;
      }
      return new PathComponent({ index, hardened: isHardened });
    });
    return new CryptoKeypath(pathComponent, Buffer.from(xfp, "hex"));
  }

  public static constructTonRequest(
    signData: Buffer,
    dataType: DataType,
    address: String,
    uuidString?: string,
    origin?: string,
    xfp?: string,
    derivationHDPath?: string
  ) {
    return new TonSignRequest({
      requestId: uuidString
        ? Buffer.from(uuidParse(uuidString) as Uint8Array)
        : undefined,
      signData,
      dataType,
      derivationPath:
        derivationHDPath && xfp
          ? TonSignRequest.parsePath(derivationHDPath, xfp)
          : undefined,
      address,
      origin,
    });
  }
}

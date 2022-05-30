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

export enum SignType {
  Transaction = 1,
  Message = 2,
}

enum Keys {
  requestId = 1,
  signData,
  derivationPath,
  address,
  origin,
  signType ,
}

type signRequestProps = {
  requestId?: Buffer;
  signData: Buffer;
  derivationPath: CryptoKeypath;
  address?: Buffer;
  origin?: string;
  signType: SignType;
};

export class SolSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private signData: Buffer;
  private derivationPath: CryptoKeypath;
  private address?: Buffer;
  private origin?: string;
  private signType: SignType;

  getRegistryType = () => ExtendedRegistryTypes.SOL_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.derivationPath = args.derivationPath;
    this.address = args.address;
    this.origin = args.origin;
    this.signType = args.signType;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getDerivationPath = () => this.derivationPath.getPath();
  public getSignRequestAddress = () => this.address;
  public getOrigin = () => this.origin;
  public getSignType = () => this.signType;

  public toDataItem = () => {
    const map: DataItemMap = {};
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

    map[Keys.signData] = this.signData;
    map[Keys.signType] = this.signType;

    const keyPath = this.derivationPath.toDataItem();
    keyPath.setTag(this.derivationPath.getRegistryType().getTag());
    map[Keys.derivationPath] = keyPath;

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signData = map[Keys.signData];
    const derivationPath = CryptoKeypath.fromDataItem(map[Keys.derivationPath]);
    const address = map[Keys.address] ? map[Keys.address] : undefined;
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    const signType = map[Keys.signType];

    return new SolSignRequest({
      requestId,
      signData,
      derivationPath,
      address,
      origin,
      signType
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return SolSignRequest.fromDataItem(dataItem);
  };

  public static constructSOLRequest(
    signData: Buffer,
    hdPath: string,
    xfp: string,
    signType: SignType,
    uuidString?: string,
    address?: string,
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

    return new SolSignRequest({
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
      signData,
      derivationPath: hdpathObject,
      address: address
        ? Buffer.from(address.replace("0x", ""), "hex")
        : undefined,
      origin: origin || undefined,
      signType,
    });
  }
}

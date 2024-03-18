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

export enum DataType {
  message = 1,
}

enum Keys {
  requestId = 1,
  signData,
  dataType,
  derivationPaths,
  addresses,
  origin,
}

type signRequestProps = {
  requestId: Buffer;
  signData: Buffer;
  dataType: DataType;
  derivationPaths: CryptoKeypath[];
  addresses?: string[];
  origin?: string;
};

export class BtcSignRequest extends RegistryItem {
  private requestId: Buffer;
  private signData: Buffer;
  private dataType: DataType;
  private derivationPaths: CryptoKeypath[];
  private addresses?: string[];
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.BTC_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.dataType = args.dataType;
    this.derivationPaths = args.derivationPaths;
    this.addresses = args.addresses;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getDataype = () => this.dataType;
  public getDerivationPaths = () =>
    this.derivationPaths.map((key) => key.getPath());
  public getAddress = () => this.addresses;
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.requestId] = new DataItem(
      this.requestId,
      RegistryTypes.UUID.getTag()
    );
    map[Keys.signData] = this.signData;
    map[Keys.dataType] = this.dataType;

    map[Keys.derivationPaths] = this.derivationPaths.map((item) => {
      const dataItem = item.toDataItem();
      dataItem.setTag(item.getRegistryType().getTag());
      return dataItem;
    });

    if (this.addresses) {
      map[Keys.addresses] = this.addresses;
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

    const signData = map[Keys.signData];

    const dataType = map[Keys.dataType];

    const derivationPaths = map[Keys.derivationPaths].map((item: DataItem) =>
      CryptoKeypath.fromDataItem(item)
    );

    const addresses = map[Keys.addresses] ? map[Keys.addresses] : undefined;

    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;

    return new BtcSignRequest({
      requestId,
      signData,
      dataType,
      derivationPaths,
      addresses,
      origin,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return BtcSignRequest.fromDataItem(dataItem);
  };

  public static constructBtcRequest(
    uuidString: string,
    xfps: string[],
    signData: Buffer,
    dataType: DataType,
    derivationHDPaths: string[],
    addresses?: string[],
    origin?: string
  ) {
    const derivationHdPathObjects = derivationHDPaths.map((path, index) => {
      const paths = path.replace(/[m|M]\//, "").split("/");
      const pathComponent = paths.map((path) => {
        const index = parseInt(path.replace("'", ""));
        let isHardened = false;
        if (path.endsWith("'")) {
          isHardened = true;
        }
        return new PathComponent({ index, hardened: isHardened });
      });
      return new CryptoKeypath(pathComponent, Buffer.from(xfps[index], "hex"));
    });

    return new BtcSignRequest({
      requestId: Buffer.from(uuid.parse(uuidString) as Uint8Array),
      signData,
      dataType: dataType || DataType.message,
      derivationPaths: derivationHdPathObjects,
      addresses: addresses || undefined,
      origin: origin || undefined,
    });
  }
}

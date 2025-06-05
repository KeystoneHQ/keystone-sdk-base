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
  messageHash,
  derivationPaths,
  addresses,
  origin,
}

type SignRequestProps = {
  requestId?: Buffer;
  messageHash: string;
  derivationPaths: CryptoKeypath[];
  addresses?: Buffer[];
  origin?: string;
};

export class IotaSignHashRequest extends RegistryItem {
  private requestId?: Buffer;
  private messageHash: string;
  private derivationPaths: CryptoKeypath[];
  private addresses?: Buffer[];
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.IOTA_SIGN_HASH_REQUEST;

  constructor(args: SignRequestProps) {
    super();
    this.requestId = args.requestId;
    this.messageHash = args.messageHash;
    this.derivationPaths = args.derivationPaths;
    this.addresses = args.addresses;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getMessageHash = () => this.messageHash;
  public getDerivationPaths = () => this.derivationPaths;
  public getAddresses = () => this.addresses;
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.messageHash] = this.messageHash;

    const derivationPaths = this.derivationPaths.map((path) => path.toDataItem());
    derivationPaths.forEach((path) => {
      path.setTag(path.getTag());
      map[Keys.derivationPaths] = path;
    });

    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

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

    return new IotaSignHashRequest({
      requestId: requestId,
      messageHash: map[Keys.messageHash],
      derivationPaths: map[Keys.derivationPaths].map((path: DataItem) => CryptoKeypath.fromDataItem(path)),
      addresses: map[Keys.addresses],
      origin: map[Keys.origin],
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return IotaSignHashRequest.fromDataItem(dataItem);
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

  public static constructIotaSignHashRequest(
    messageHash: string,
    derivationPaths: string[],
    xfp: string,
    uuidString?: string,
    addresses?: Buffer[],
    origin?: string
  ) {
    return new IotaSignHashRequest({
      requestId: uuidString
        ? Buffer.from(uuidParse(uuidString) as Uint8Array)
        : undefined,
      messageHash: messageHash,
      derivationPaths: derivationPaths.map((path) => IotaSignHashRequest.parsePath(path, xfp)),
      addresses: addresses,
      origin: origin,
    });
  }
}

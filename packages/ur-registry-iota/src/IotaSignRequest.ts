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
  intentMessage,
  derivationPaths,
  addresses,
  origin,
}

type SignRequestProps = {
  requestId?: Buffer;
  intentMessage: Buffer;
  derivationPaths: CryptoKeypath[];
  addresses?: Buffer[];
  origin?: string;
};

export class IotaSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private intentMessage: Buffer;
  private derivationPaths: CryptoKeypath[];
  private addresses?: Buffer[];
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.IOTA_SIGN_REQUEST;

  constructor(args: SignRequestProps) {
    super();
    this.requestId = args.requestId;
    this.intentMessage = args.intentMessage;
    this.derivationPaths = args.derivationPaths;
    this.addresses = args.addresses;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getIntentMessage = () => this.intentMessage;
  public getDerivationPaths = () => this.derivationPaths;
  public getAddresses = () => this.addresses;
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }
    map[Keys.intentMessage] = this.intentMessage;

    const derivationPaths = this.derivationPaths.map((path) =>
      {
        const dataItem = path.toDataItem();
        dataItem.setTag(path.getRegistryType().getTag());
        return dataItem;
      }
    );
    map[Keys.derivationPaths] = derivationPaths;


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

    return new IotaSignRequest({
      requestId,
      intentMessage: map[Keys.intentMessage],
      derivationPaths: map[Keys.derivationPaths].map((path: DataItem) =>
        CryptoKeypath.fromDataItem(path)
      ),
      addresses: map[Keys.addresses],
      origin: map[Keys.origin],
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return IotaSignRequest.fromDataItem(dataItem);
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

  public static constructIotaSignRequest(
    intentMessage: Buffer,
    derivationPaths: string[],
    xfp: string,
    uuidString?: string,
    addresses?: Buffer[],
    origin?: string
  ) {
    return new IotaSignRequest({
      requestId: uuidString
        ? Buffer.from(uuidParse(uuidString) as Uint8Array)
        : undefined,
      intentMessage,
      derivationPaths: derivationPaths.map((path) =>
        IotaSignRequest.parsePath(path, xfp)
      ),
      addresses,
      origin,
    });
  }
}

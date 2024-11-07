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
  messageHash,
  derivationPaths,
  addresses,
  origin,
}

type signHashRequestProps = {
  requestId?: Buffer;
  messageHash: string;
  derivationPaths: CryptoKeypath[];
  addresses?: Buffer[];
  origin?: string;
};

export class SuiSignHashRequest extends RegistryItem {
  private requestId?: Buffer;
  private messageHash: string;
  private derivationPaths: CryptoKeypath[];
  private addresses?: Buffer[];
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.SUI_SIGN_HASH_REQUEST;

  constructor(args: signHashRequestProps) {
    super();
    this.requestId = args.requestId;
    this.messageHash = args.messageHash;
    this.derivationPaths = args.derivationPaths;
    this.addresses = args.addresses;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getMessageHash = () => this.messageHash;
  public getDerivationPaths = () =>
    this.derivationPaths.map((key) => key.getPath());
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
    if (this.addresses) {
      map[Keys.addresses] = this.addresses;
    }
    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    map[Keys.messageHash] = this.messageHash;
    map[Keys.derivationPaths] = this.derivationPaths.map((item) => {
      const dataItem = item.toDataItem();
      dataItem.setTag(item.getRegistryType().getTag());
      return dataItem;
    });
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const messageHash = map[Keys.messageHash];
    const derivationPaths = map[Keys.derivationPaths].map((item: DataItem) =>
      CryptoKeypath.fromDataItem(item)
    );
    const addresses = map[Keys.addresses] ? map[Keys.addresses] : undefined;
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    return new SuiSignHashRequest({
      requestId,
      messageHash,
      derivationPaths,
      addresses,
      origin,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return SuiSignHashRequest.fromDataItem(dataItem);
  };

  public static constructSuiRequest(
    messageHash: string,
    publicKeyHdPath: string[],
    xfps: string[],
    uuidString: string,
    addresses?: Buffer[],
    origin?: string
  ) {
    const publicKeyHdPathObjects = publicKeyHdPath.map((path, index) => {
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

    return new SuiSignHashRequest({
      requestId: Buffer.from(uuid.parse(uuidString)),
      messageHash,
      derivationPaths: publicKeyHdPathObjects,
      addresses: addresses || undefined,
      origin: origin || undefined,
    });
  }
}

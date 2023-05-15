import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

export enum SignType {
  Single = 1,
  Multi = 2,
  Message = 3,
}

enum Keys {
  requestId = 1,
  signData,
  signType,
  derivationPaths,
  addresses,
  origin,
}

type signRequestProps = {
  requestId?: Buffer;
  signData: Buffer;
  signType: SignType;
  derivationPaths: CryptoKeypath[];
  addresses?: Buffer[];
  origin?: string;
};

export class SuiSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private signData: Buffer;
  private signType: SignType;
  private derivationPaths: CryptoKeypath[];
  private addresses?: Buffer[];
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.SUI_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.signType = args.signType;
    this.derivationPaths = args.derivationPaths;
    this.addresses = args.addresses;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getDerivationPaths = () => this.derivationPaths.map(key => key.getPath());
  public getAddresses = () => this.addresses;
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
    if (this.addresses) {
      map[Keys.addresses] = this.addresses;
    }
    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    map[Keys.signData] = this.signData;
    map[Keys.signType] = this.signType;
    map[Keys.derivationPaths] = this.derivationPaths.map(item => {
      const dataItem = item.toDataItem();
      dataItem.setTag(item.getRegistryType().getTag());
      return dataItem;
    });
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signData = map[Keys.signData];
    const signType = map[Keys.signType];
    const derivationPaths = map[Keys.derivationPaths].map((item: DataItem) => CryptoKeypath.fromDataItem(item));
    const addresses = map[Keys.addresses] ? map[Keys.addresses] : undefined;
    const requestId = map[Keys.requestId] ? map[Keys.requestId].getData() : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    return new SuiSignRequest({
      requestId,
      signData,
      signType,
      derivationPaths,
      addresses,
      origin,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return SuiSignRequest.fromDataItem(dataItem);
  };

  public static constructSuiRequest(
    signData: Buffer,
    publicKeyHdPath: string[],
    xfps: string[],
    signType: SignType,
    uuidString: string,
    addresses?: Buffer[],
    origin?: string
  ) {
    const publicKeyHdPathObjects = publicKeyHdPath.map((path, index) => {
      const paths = path.replace(/[m|M]\//, "").split("/");
      const pathComponent = paths.map(path => {
        const index = parseInt(path.replace("'", ""));
        let isHardened = false;
        if (path.endsWith("'")) {
          isHardened = true;
        }
        return new PathComponent({ index, hardened: isHardened });
      });
      return new CryptoKeypath(pathComponent, Buffer.from(xfps[index], "hex"));
    });

    return new SuiSignRequest({
      requestId: Buffer.from(uuid.parse(uuidString)),
      signData,
      signType: signType || SignType.Single,
      derivationPaths: publicKeyHdPathObjects,
      addresses: addresses || undefined,
      origin: origin || undefined,
    });
  }
}

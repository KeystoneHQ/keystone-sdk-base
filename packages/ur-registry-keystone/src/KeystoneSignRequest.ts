import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

enum Keys {
  signData = 1,
  origin,
}

type SignRequestProps = {
  signData: Buffer;
  origin?: string;
};

export class KeystoneSignRequest extends RegistryItem {
  private signData: Buffer;
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.KEYSTONE_SIGN_REQUEST;

  constructor(args: SignRequestProps) {
    super();
    this.signData = args.signData;
    this.origin = args.origin;
  }

  public getSignData = () => this.signData;
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.signData] = this.signData;

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();

    return new KeystoneSignRequest({
      signData: map[Keys.signData],
      origin: map[Keys.origin],
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return KeystoneSignRequest.fromDataItem(dataItem);
  };

  public static constructKeystoneRequest(
    signData: Buffer,
    origin?: string
  ) {
    return new KeystoneSignRequest({
      signData,
      origin,
    });
  }
}

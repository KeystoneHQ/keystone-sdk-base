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

export class UTXOSignRequest extends RegistryItem {
  private signData: Buffer;
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.UTXO_SIGN_REQUEST;

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

    return new UTXOSignRequest({
      signData: map[Keys.signData],
      origin: map[Keys.origin],
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return UTXOSignRequest.fromDataItem(dataItem);
  };

  public static constructUTXORequest(
    signData: Buffer,
    origin?: string
  ) {
    return new UTXOSignRequest({
      signData,
      origin,
    });
  }
}

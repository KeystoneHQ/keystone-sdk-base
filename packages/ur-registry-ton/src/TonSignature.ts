import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { RegistryTypes, decodeToDataItem } = extend;

enum Keys {
  requestId = 1,
  signature,
  origin,
}

export class TonSignature extends RegistryItem {
  private requestId?: Buffer;
  private signature: Buffer;
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.TRON_SIGNATURE;

  constructor(signature: Buffer, requestId?: Buffer, origin?: string) {
    super();
    this.signature = signature;
    this.requestId = requestId;
    this.origin = origin;
  }

  public getRequestId = () => this.requestId;
  public getSignature = () => this.signature;
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }
    if (this.origin) {
      map[Keys.origin] = this.origin;
    }
    map[Keys.signature] = this.signature;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    let requestId = undefined;
    let origin = undefined;
    if (map[Keys.requestId]) {
      requestId = map[Keys.requestId].getData();
    }
    if (map[Keys.origin]) {
      origin = map[Keys.origin];
    }
    return new TonSignature(signature, requestId, origin);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return TonSignature.fromDataItem(dataItem);
  };
}

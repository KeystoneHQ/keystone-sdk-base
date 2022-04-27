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

export class ETHSignature extends RegistryItem {
  private requestId?: Buffer;
  private origin?: string;
  private signature: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.ETH_SIGNATAURE;

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
    if (this.origin) map[Keys.origin] = this.origin;
    map[Keys.signature] = this.signature;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    return new ETHSignature(signature, requestId, map[Keys.origin]);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ETHSignature.fromDataItem(dataItem);
  };
}

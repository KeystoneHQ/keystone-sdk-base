import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { RegistryTypes, decodeToDataItem } = extend;

enum Keys {
  requestId = 1,
  signature,
}

export class TronSignature extends RegistryItem {
  private requestId?: Buffer;
  private signature: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.TRON_SIGNATURE;

  constructor(
    signature: Buffer,
    requestId?: Buffer,
  ) {
    super();
    this.signature = signature;
    this.requestId = requestId;
  }

  public getRequestId = () => this.requestId;
  public getSignature = () => this.signature;
  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.requestId] = new DataItem(
      this.requestId,
      RegistryTypes.UUID.getTag()
    );
    map[Keys.signature] = this.signature;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const requestId = map[Keys.requestId].getData();
    return new TronSignature(signature, requestId);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return TronSignature.fromDataItem(dataItem);
  };
}

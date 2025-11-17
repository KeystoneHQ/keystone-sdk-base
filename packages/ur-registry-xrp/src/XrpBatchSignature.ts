import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

enum Keys {
  signatures = 1,
}

export class XRPBatchSignature extends RegistryItem {
  private signatures: Buffer[]; 
  getRegistryType = () => ExtendedRegistryTypes.XRP_BATCH_SIGNATURE;

  constructor(signatures: Buffer[]) {
    super();
    this.signatures = signatures;
  }

  public getSignatures = () => this.signatures;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.signatures) {
      map[Keys.signatures] = this.signatures;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signatures = map[Keys.signatures];
    return new XRPBatchSignature(signatures);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return XRPBatchSignature.fromDataItem(dataItem);
  };
}

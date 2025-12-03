import {
  DataItem,
  decodeToDataItem,
  RegistryItem,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

enum Keys {
  data = 1,
}

export class ZcashPCZT extends RegistryItem {
  constructor(private data: Buffer) {
    super();
  }
  getRegistryType = () => ExtendedRegistryTypes.ZCASH_PCZT;

  public getData = () => this.data;

  public toDataItem = () => {
    const map: Record<number, Buffer> = {};
    map[Keys.data] = this.data;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const data = map[Keys.data];
    return new ZcashPCZT(data);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ZcashPCZT.fromDataItem(dataItem);
  };
}

import {
  DataItem,
  DataItemMap,
  decodeToDataItem,
  RegistryItem,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

enum Keys {
  UFVK = 1,
  Index,
  Name,
}

export class ZcashUnifiedFullViewingKey extends RegistryItem {
  constructor(
    private ufvk: string,
    private index: number,
    private name?: string
  ) {
    super();
  }

  getRegistryType = () => ExtendedRegistryTypes.ZCASH_UNIFIED_FULL_VIEWING_KEY;

  public getUfvk = () => this.ufvk;
  public getIndex = () => this.index;
  public getName = () => this.name;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.UFVK] = this.ufvk;
    map[Keys.Index] = this.index;
    if (this.name) {
      map[Keys.Name] = this.name;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const ufvk = map[Keys.UFVK];
    const index = map[Keys.Index];
    const name = map[Keys.Name];
    return new ZcashUnifiedFullViewingKey(ufvk, index, name);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ZcashUnifiedFullViewingKey.fromDataItem(dataItem);
  };
}

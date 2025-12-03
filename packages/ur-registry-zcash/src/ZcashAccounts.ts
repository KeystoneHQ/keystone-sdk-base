import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import { ZcashUnifiedFullViewingKey } from "./ZcashUnifiedFullViewingKey";

const { decodeToDataItem } = extend;

enum Keys {
  seedFingerprint = 1,
  accounts,
}

export class ZcashAccounts extends RegistryItem {
  getRegistryType = () => ExtendedRegistryTypes.ZCASH_ACCOUNTS;
  constructor(
    private seedFingerprint: Buffer,
    private accounts: ZcashUnifiedFullViewingKey[]
  ) {
    super();
  }

  public getSeedFingerprint = () => this.seedFingerprint;
  public getAccounts = () => this.accounts;
  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.seedFingerprint] = this.seedFingerprint;
    if (this.accounts) {
      map[Keys.accounts] = this.accounts.map((item) => {
        const dataItem = item.toDataItem();
        dataItem.setTag(item.getRegistryType().getTag());
        return dataItem;
      });
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const seedFingerprint = map[Keys.seedFingerprint];
    const accounts = map[Keys.accounts].map((item: DataItem) => {
      return ZcashUnifiedFullViewingKey.fromDataItem(item);
    });
    return new ZcashAccounts(seedFingerprint, accounts);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ZcashAccounts.fromDataItem(dataItem);
  };
}

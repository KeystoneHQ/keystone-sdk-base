import {
  RegistryItem,
  CryptoHDKey,
  DataItem,
  DataItemMap,
  decodeToDataItem,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

enum Keys {
  masterFingerprint = 1,
  keys,
  device,
}

export class CryptoMultiAccounts extends RegistryItem {
  getRegistryType = () => ExtendedRegistryTypes.CRYPTO_MULTI_ACCOUNTS;

  constructor(
    private masterFingerprint: Buffer,
    private keys: CryptoHDKey[],
    private device?: string
  ) {
    super();
  }

  public getMasterFingerprint = () => this.masterFingerprint;
  public getKeys = () => this.keys;
  public getDevice = () => this.device;

  public toDataItem = (): DataItem => {
    const map: DataItemMap = {};
    if (this.masterFingerprint) {
      map[Keys.masterFingerprint] = this.masterFingerprint.readUInt32BE(0);
    }
    if (this.keys) {
      map[Keys.keys] = this.keys.map((item) => {
        const dataItem = item.toDataItem();
        dataItem.setTag(item.getRegistryType().getTag());
        return dataItem;
      });
    }
    if (this.device) {
      map[Keys.device] = this.device;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const masterFingerprint = Buffer.alloc(4);
    const _masterFingerprint = map[Keys.masterFingerprint];
    if (_masterFingerprint) {
      masterFingerprint.writeUInt32BE(_masterFingerprint, 0);
    }
    const keys = map[Keys.keys] as DataItem[];
    const cryptoHDKeys = keys.map((item) => CryptoHDKey.fromDataItem(item));
    const device = map[Keys.device];
    return new CryptoMultiAccounts(masterFingerprint, cryptoHDKeys, device);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CryptoMultiAccounts.fromDataItem(dataItem);
  };
}

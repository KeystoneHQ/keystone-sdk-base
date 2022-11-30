import {
  DataItem,
  RegistryItem,
  DataItemMap,
  extend,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
const { decodeToDataItem } = extend;

enum Keys {
  masterFingerprint = 1,
  keyData,
  device,
}

export class ArweaveCryptoAccount extends RegistryItem {
  getRegistryType = () => ExtendedRegistryTypes.ARWEAVE_CRYPTO_ACCOUNT;

  constructor(
    private masterFingerprint: Buffer,
    private keyData: Buffer,
    private device?: string
  ) {
    super();
  }

  public getMasterFingerprint = () => this.masterFingerprint;
  public getKeyData = () => this.keyData;
  public getDevice = () => this.device;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.masterFingerprint] = this.masterFingerprint.readUInt32BE(0);
    map[Keys.keyData] = this.keyData;
    if (this.device) {
      map[Keys.device] = this.device;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const keyData = map[Keys.keyData];
    const masterFingerprint = Buffer.alloc(4);
    const _masterFingerprint = map[Keys.masterFingerprint];
    masterFingerprint.writeUInt32BE(_masterFingerprint, 0);
    const device = map[Keys.device] ? map[Keys.device] : undefined;
    return new ArweaveCryptoAccount(masterFingerprint, keyData, device);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ArweaveCryptoAccount.fromDataItem(dataItem);
  };
}

import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

enum Keys {
  signResult = 1,
}

export class KeystoneSignResult extends RegistryItem {
  private signResult: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.KEYSTONE_SIGN_RESULT;

  constructor(
    signResult: Buffer,
  ) {
    super();
    this.signResult = signResult;
  }

  public getSignResult = () => this.signResult;
  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.signResult] = this.signResult;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signResult = map[Keys.signResult];
    return new KeystoneSignResult(signResult);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return KeystoneSignResult.fromDataItem(dataItem);
  };
}

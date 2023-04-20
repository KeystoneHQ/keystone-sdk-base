import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

enum Keys {
  signResult,
}

export class UTXOSignResult extends RegistryItem {
  private signResult: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.UTXO_SIGNATURE;

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
    return new UTXOSignResult(signResult);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return UTXOSignResult.fromDataItem(dataItem);
  };
}

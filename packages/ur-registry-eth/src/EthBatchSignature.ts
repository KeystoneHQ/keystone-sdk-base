import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import { ETHSignature } from "./EthSignature";

const { RegistryTypes, decodeToDataItem } = extend;

enum Keys {
  signatures = 1,
}

export class ETHBatchSignature extends RegistryItem {
  private signatures: ETHSignature[];

  getRegistryType = () => ExtendedRegistryTypes.ETH_BATCH_SIGNATURE;

  constructor(signatures: ETHSignature[]) {
    super();
    this.signatures = signatures;
  }

  public getSignatures = () => this.signatures;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.signatures) {
      map[Keys.signatures] = this.signatures.map((signature) => {
        const dataItem = signature.toDataItem();
        dataItem.setTag(signature.getRegistryType().getTag());
        return dataItem;
      });
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signatures = map[Keys.signatures].map((signature: DataItem) => {
      return ETHSignature.fromDataItem(signature);
    });
    return new ETHBatchSignature(signatures);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ETHBatchSignature.fromDataItem(dataItem);
  };
}

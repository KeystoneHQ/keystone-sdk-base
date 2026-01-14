import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { RegistryTypes, decodeToDataItem } = extend;

enum Keys {
  requestId = 1,
  signatures,
}

export class AvalancheSignature extends RegistryItem {
  private requestId?: Buffer;
  private signatures: Buffer[];

  getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_SIGNATURE;

  constructor(signatures: Buffer[], requestId?: Buffer) {
    super();
    this.signatures = Array.isArray(signatures) ? signatures : [signatures];
    this.requestId = requestId;
  }

  public getRequestId = () => this.requestId;
  public getSignatures = () => this.signatures;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }
    map[Keys.signatures] = this.signatures;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signatures = map[Keys.signatures];

    return new AvalancheSignature(signatures);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return AvalancheSignature.fromDataItem(dataItem);
  };
}
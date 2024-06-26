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
  signature,
  publicKey,
}

export class CardanoSignDataSignature extends RegistryItem {
  private requestId?: Buffer;
  private signature: Buffer;
  private publicKey: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_SIGNATURE;

  constructor(signature: Buffer, publicKey: Buffer, requestId?: Buffer) {
    super();
    this.signature = signature;
    this.publicKey = publicKey;
    this.requestId = requestId;
  }

  public getRequestId = () => this.requestId;
  public getSignature = () => this.signature;
  public getPublicKey = () => this.publicKey;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }
    map[Keys.signature] = this.getSignature();
    map[Keys.publicKey] = this.getPublicKey();
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const publicKey = map[Keys.publicKey];
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;

    return new CardanoSignDataSignature(signature, publicKey, requestId);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoSignDataSignature.fromDataItem(dataItem);
  };
}

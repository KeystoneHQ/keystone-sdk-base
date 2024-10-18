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
  addressField,
}

export class CardanoSignCip8DataSignature extends RegistryItem {
  private requestId?: Buffer;
  private signature: Buffer;
  private publicKey: Buffer;
  private addressField: Buffer;
  getRegistryType = () => ExtendedRegistryTypes.CARDANO_SIGNATURE;

  constructor(
    signature: Buffer,
    publicKey: Buffer,
    addressField: Buffer,
    requestId?: Buffer
  ) {
    super();
    this.signature = signature;
    this.publicKey = publicKey;
    this.requestId = requestId;
    this.addressField = addressField;
  }

  public getRequestId = () => this.requestId;
  public getSignature = () => this.signature;
  public getPublicKey = () => this.publicKey;
  public getAddressField = () => this.addressField;
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
    map[Keys.addressField] = this.getAddressField();
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const publicKey = map[Keys.publicKey];
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const addressField = map[Keys.addressField];
    return new CardanoSignCip8DataSignature(
      signature,
      publicKey,
      addressField,
      requestId
    );
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoSignCip8DataSignature.fromDataItem(dataItem);
  };
}

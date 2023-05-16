import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { RegistryTypes, decodeToDataItem } = extend;

enum Keys {
  requestId = 1,
  signature,
  publicKey
}

export class SuiSignature extends RegistryItem {
  private requestId?: Buffer;
  private signature: Buffer;
  private publicKey?: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.SUI_SIGNATURE;

  constructor(
    signature: Buffer,
    requestId?: Buffer,
    publicKey?: Buffer
  ) {
    super();
    this.signature = signature;
    this.requestId = requestId;
    this.publicKey = publicKey;
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
    map[Keys.signature] = this.signature;
    if (this.publicKey) {
      map[Keys.publicKey] = this.publicKey;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const requestId = map[Keys.requestId].getData();
    const publicKey = map[Keys.publicKey];
    return new SuiSignature(signature, requestId, publicKey);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return SuiSignature.fromDataItem(dataItem);
  };
}

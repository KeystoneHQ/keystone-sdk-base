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
  authenticationPublicKey
}

export class AptosSignature extends RegistryItem {
  private requestId: Buffer;
  private signature: Buffer;
  private authenticationPublicKey: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.APTOS_SIGNATURE;

  constructor(
    signature: Buffer,
    requestId: Buffer,
    authenticationPublicKey: Buffer
  ) {
    super();
    this.signature = signature;
    this.requestId = requestId;
    this.authenticationPublicKey = authenticationPublicKey;
  }

  public getRequestId = () => this.requestId;
  public getSignature = () => this.signature;
  public getAuthenticationPublicKey = () => this.authenticationPublicKey;
  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.requestId] = new DataItem(
      this.requestId,
      RegistryTypes.UUID.getTag()
    );
    map[Keys.signature] = this.signature;
    map[Keys.authenticationPublicKey] = this.authenticationPublicKey;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const requestId = map[Keys.requestId].getData();
    const authenticationPublicKey = map[Keys.authenticationPublicKey];
    return new AptosSignature(signature, requestId, authenticationPublicKey);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return AptosSignature.fromDataItem(dataItem);
  };
}

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
  
  export class CosmosSignature extends RegistryItem {
    private requestId: Buffer;
    private signature: Buffer;
    private publicKey: Buffer;
  
    getRegistryType = () => ExtendedRegistryTypes.COSMOS_SIGNATURE;
  
    constructor(
      signature: Buffer,
      requestId: Buffer,
      publicKey: Buffer
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
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
      map[Keys.signature] = this.signature;
      map[Keys.publicKey] = this.publicKey;
      return new DataItem(map);
    };
  
    public static fromDataItem = (dataItem: DataItem) => {
      const map = dataItem.getData();
      const signature = map[Keys.signature];
      const requestId = map[Keys.requestId].getData();
      const authenticationPublicKey = map[Keys.publicKey];
      return new CosmosSignature(signature, requestId, authenticationPublicKey);
    };
  
    public static fromCBOR = (_cborPayload: Buffer) => {
      const dataItem = decodeToDataItem(_cborPayload);
      return CosmosSignature.fromDataItem(dataItem);
    };
  }
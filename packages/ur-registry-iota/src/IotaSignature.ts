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

type SignatureProps = {
  requestId?: Buffer;
  signature: Buffer;
  publicKey?: Buffer;
};

export class IotaSignature extends RegistryItem {
  private requestId?: Buffer;
  private signature: Buffer;
  private publicKey?: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.IOTA_SIGNATURE;

  constructor(
    args: SignatureProps
  ) {
    super();
    this.requestId = args.requestId;
    this.signature = args.signature;
    this.publicKey = args.publicKey;
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
    if (this.publicKey) {
      map[Keys.publicKey] = this.publicKey;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const requestId = map[Keys.requestId]?.getData();
    const publicKey = map[Keys.publicKey];
    return new IotaSignature({
      requestId,
      signature,
      publicKey,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return IotaSignature.fromDataItem(dataItem);
  };
}

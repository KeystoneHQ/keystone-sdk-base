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
  votePrvKeys,
}

export class CardanoCatalystSignature extends RegistryItem {
  private requestId?: Buffer;
  private signature: Buffer;
  private votePrvKeys: Buffer[] = [];

  getRegistryType = () =>
    ExtendedRegistryTypes.CARDANO_CATALYST_VOTING_REGISTRATION_SIGNATURE;

  constructor(signature: Buffer, votePrvKeys: Buffer[], requestId?: Buffer) {
    super();
    this.signature = signature;
    this.requestId = requestId;
    this.votePrvKeys = votePrvKeys;
  }

  public getRequestId = () => this.requestId;
  public getSignature = () => this.signature;
  public getVotePrvKeys = () => this.votePrvKeys;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }
    map[Keys.signature] = this.getSignature();
    map[Keys.votePrvKeys] = this.getVotePrvKeys();
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signature = map[Keys.signature];
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const votePrvKeys = map[Keys.votePrvKeys];
    return new CardanoCatalystSignature(signature, votePrvKeys, requestId);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoCatalystSignature.fromDataItem(dataItem);
  };
}

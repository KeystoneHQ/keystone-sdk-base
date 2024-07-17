import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

export interface CardanoCatalystDelegationProps {
  pubKey: Buffer;
  weight: number;
}

enum Keys {
  pubKey = 1,
  weight,
}

export class CardanoDelegation extends RegistryItem {
  private pubKey: Buffer;
  private weight: number;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_DELEGATION;

  constructor(args: CardanoCatalystDelegationProps) {
    super();
    this.pubKey = args.pubKey;
    this.weight = args.weight;
  }

  public getPubKey = () => this.pubKey;
  public getWeight = () => this.weight;

  public toDataItem = () => {
    const map: DataItemMap = {};

    map[Keys.pubKey] = this.getPubKey();
    map[Keys.weight] = this.getWeight();

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const pubKey = map[Keys.pubKey];
    const weight = map[Keys.weight];
    return new CardanoDelegation({ pubKey, weight });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoDelegation.fromDataItem(dataItem);
  };

  public static constructCardanoDelegation({
    pubKey,
    weight,
  }: CardanoCatalystDelegationProps) {
    return new CardanoDelegation({ pubKey, weight });
  }
}

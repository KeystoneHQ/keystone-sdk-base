import {
  CryptoKeypath,
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

export interface CardanoCatalystDelegationProps {
  hdPath: CryptoKeypath;
  weight: number;
}

enum Keys {
  hdPath = 1,
  weight,
}

export class CardanoDelegation extends RegistryItem {
  private hdPath: CryptoKeypath;
  private weight: number;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_DELEGATION;

  constructor(args: CardanoCatalystDelegationProps) {
    super();
    this.hdPath = args.hdPath;
    this.weight = args.weight;
  }

  public getHdPath = () => this.hdPath;
  public getWeight = () => this.weight;

  public toDataItem = () => {
    const map: DataItemMap = {};

    const keyPath = this.getHdPath().toDataItem();
    keyPath.setTag(this.getHdPath().getRegistryType().getTag());
    map[Keys.hdPath] = keyPath;

    map[Keys.weight] = this.getWeight();

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const hdPath = CryptoKeypath.fromDataItem(map[Keys.hdPath]);
    const weight = map[Keys.weight];
    return new CardanoDelegation({ hdPath, weight });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoDelegation.fromDataItem(dataItem);
  };

  public static constructCardanoDelegation({
    hdPath,
    weight,
  }: CardanoCatalystDelegationProps) {
    return new CardanoDelegation({ hdPath, weight });
  }
}

import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

enum Keys {
  keyHash = 1,
  keyPath,
}

export interface CardanoCertKeyProps {
  keyHash: Buffer;
  keyPath: CryptoKeypath;
}

export interface CardanoCertKeyData {
  keyHash: string;
  xfp: string;
  keyPath: string;
}

export class CardanoCertKey extends RegistryItem {
  private keyHash: Buffer;
  private keyPath: CryptoKeypath;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_CERT_KEY;

  constructor(args: CardanoCertKeyProps) {
    super();
    this.keyHash = args.keyHash;
    this.keyPath = args.keyPath;
  }

  public getKeyHash = () => this.keyHash;
  public getKeyPath = () => this.keyPath.getPath();

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.keyHash] = this.keyHash;

    const keyPath = this.keyPath.toDataItem();
    keyPath.setTag(this.keyPath.getRegistryType().getTag());
    map[Keys.keyPath] = keyPath;

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const keyHash = map[Keys.keyHash];
    const keyPath = CryptoKeypath.fromDataItem(map[Keys.keyPath]);

    return new CardanoCertKey({
      keyHash,
      keyPath,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoCertKey.fromDataItem(dataItem);
  };

  public static constructCardanoCertKey({
    keyHash,
    xfp,
    keyPath,
  }: CardanoCertKeyData) {
    const paths = keyPath.replace(/[m|M]\//, "").split("/");
    const hdpathObject = new CryptoKeypath(
      paths.map((path) => {
        const index = parseInt(path.replace("'", ""));
        const isHardened = path.endsWith("'");
        return new PathComponent({ index, hardened: isHardened });
      }),
      Buffer.from(xfp, "hex")
    );

    return new CardanoCertKey({
      keyHash: Buffer.from(keyHash, "hex"),
      keyPath: hdpathObject,
    });
  }
}

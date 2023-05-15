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
  transactionHash = 1,
  index,
  amount,
  keyPath,
  address,
}

export interface CardanoUtxoProps {
  transactionHash: Buffer;
  index: number;
  amount: number;
  keyPath: CryptoKeypath;
  address: string;
}

export interface CardanoUtxoData {
  transactionHash: string;
  index: number;
  amount: number;
  xfp: string;
  hdPath: string;
  address: string;
}

export class CardanoUtxo extends RegistryItem {
  private transactionHash: Buffer;
  private index: number;
  private amount: number;
  private keyPath: CryptoKeypath;
  private address: string;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_UTXO;

  constructor(args: CardanoUtxoProps) {
    super();
    this.transactionHash = args.transactionHash;
    this.index = args.index;
    this.amount = args.amount;
    this.keyPath = args.keyPath;
    this.address = args.address;
  }

  public getTransactionHash = () => this.transactionHash;
  public getIndex = () => this.index;
  public getKeyPath = () => this.keyPath.getPath();
  public getAmount = () => this.amount;
  public getAddress = () => this.address;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.transactionHash) {
      map[Keys.transactionHash] = this.transactionHash;
    }
    map[Keys.index] = this.index;
    map[Keys.amount] = this.amount;

    const keyPath = this.keyPath.toDataItem();
    keyPath.setTag(this.keyPath.getRegistryType().getTag());
    map[Keys.keyPath] = keyPath;

    map[Keys.address] = this.address;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const transactionHash = map[Keys.transactionHash];
    const index = map[Keys.index];
    const keyPath = CryptoKeypath.fromDataItem(map[Keys.keyPath]);
    const address = map[Keys.address];
    const amount = map[Keys.amount];

    return new CardanoUtxo({
      transactionHash,
      index,
      amount,
      keyPath,
      address,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoUtxo.fromDataItem(dataItem);
  };

  public static constructCardanoUtxo({
    transactionHash,
    index,
    amount,
    xfp,
    hdPath,
    address,
  }: CardanoUtxoData) {
    const paths = hdPath.replace(/[m|M]\//, "").split("/");
    const hdpathObject = new CryptoKeypath(
      paths.map((path) => {
        const index = parseInt(path.replace("'", ""));
        const isHardened = path.endsWith("'");
        return new PathComponent({ index, hardened: isHardened });
      }),
      Buffer.from(xfp, "hex")
    );

    return new CardanoUtxo({
      transactionHash: Buffer.from(transactionHash, "hex"),
      index,
      amount,
      keyPath: hdpathObject,
      address,
    });
  }
}

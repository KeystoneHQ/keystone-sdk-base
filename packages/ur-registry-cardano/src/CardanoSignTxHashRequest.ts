import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
  CryptoKeypath,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  txHash,
  paths,
  origin,
  address_list,
}

type CardanoSignTxHashRequestProps = {
  requestId?: Buffer;
  txHash: string;
  paths: CryptoKeypath[];
  origin?: string;
  addressList: string[];
};

export class CardanoSignTxHashRequest extends RegistryItem {
  private requestId?: Buffer;
  private txHash: string;
  private paths: CryptoKeypath[];
  private origin?: string;
  private addressList: string[];
  getRegistryType = () => ExtendedRegistryTypes.CARDANO_SIGN_TX_HASH_REQUEST;

  constructor(args: CardanoSignTxHashRequestProps) {
    super();
    this.requestId = args.requestId;
    this.txHash = args.txHash;
    this.paths = args.paths;
    this.origin = args.origin;
    this.addressList = args.addressList;
  }

  public getRequestId = () => this.requestId;
  public getTxHash = () => this.txHash;
  public getPaths = () => this.paths;
  public getOrigin = () => this.origin;
  public getAddressList = () => this.addressList;
  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    map[Keys.txHash] = this.txHash;
    map[Keys.paths] = this.paths.map((path) => {
      const res = path.toDataItem();
      res.setTag(path.getRegistryType().getTag());
      return res;
    });

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }
    map[Keys.address_list] = this.addressList;
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const txHash = map[Keys.txHash];
    const paths = map[Keys.paths];
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    const addressList = map[Keys.address_list] ? map[Keys.address_list] : [];
    return new CardanoSignTxHashRequest({
      requestId,
      txHash,
      paths,
      origin,
      addressList,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoSignTxHashRequest.fromDataItem(dataItem);
  };

  public static constructCardanoSignTxHashRequest(
    txHash: string,
    paths: CryptoKeypath[],
    addressList: string[],
    uuidString?: string,
    origin?: string
  ) {
    return new CardanoSignTxHashRequest({
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
      txHash,
      paths,
      origin: origin || undefined,
      addressList,
    });
  }
}

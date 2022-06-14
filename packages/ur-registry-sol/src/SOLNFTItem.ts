import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

enum Keys {
  mintAddress = 1,
  collectionName,
  name,
  mediaData,
}

type NFTProps = {
  mintAddress: string;
  collectionName: string;
  name: string;
  mediaData: string;
};

export class SOLNFTItem extends RegistryItem {
  private name: string;
  private mintAddress: string;
  private collectionName: string;
  private mediaData: string;

  getRegistryType = () => ExtendedRegistryTypes.SOL_NFT_ITEM;

  constructor(args: NFTProps) {
    super();
    this.name = args.name;
    this.mintAddress = args.mintAddress;
    this.collectionName = args.collectionName;
    this.mediaData = args.mediaData; // remove the data perfix for android usage
  }

  public getName = () => this.name;
  public getMediaData = () => this.mediaData;
  public getMintAddress = () => this.mintAddress;
  public getCollectionName = () => this.collectionName;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.name] = this.name;
    map[Keys.mintAddress] = this.mintAddress;
    map[Keys.collectionName] = this.collectionName;
    map[Keys.mediaData] = this.mediaData;

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const name = map[Keys.name];
    const mediaData = map[Keys.mediaData];
    const mintAddress = map[Keys.mintAddress];
    const collectionName = map[Keys.collectionName];

    return new SOLNFTItem({
      name,
      mintAddress,
      collectionName,
      mediaData,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return SOLNFTItem.fromDataItem(dataItem);
  };

  public static constructETHNFTItem(
    mintAddress: string,
    collectionName: string,
    name: string,
    mediaData: string
  ) {
    return new SOLNFTItem({
      mintAddress,
      collectionName,
      mediaData,
      name,
    });
  }
}

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
    txid = 1,
    value,
    vout,
    path,
    address,
  }
  
  export interface AvalanceUtxoProps {
    txid: Buffer;
    value: string;
    vout: number;
    path: CryptoKeypath;
    address: string;
  }
  
  export interface AvalanceUtxoData {
    txid: string;
    value: string;
    vout: number;
    path: string;
    address: string;
    xfp: string;
  }
  
  export class AvalanceUtxo extends RegistryItem {
    private txid: Buffer;
    private value: string;
    private vout: number;
    private path: CryptoKeypath;
    private address: string;
  
    getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_UTXO;
  
    constructor(args: AvalanceUtxoProps) {
      super();
      this.txid = args.txid;
      this.value = args.value;
      this.vout = args.vout;
      this.path = args.path;
      this.address = args.address;
    }
  
    public getTxid = () => this.txid;
    public getVout = () => this.vout;
    public getKeyPath = () => this.path.getPath();
    public getValue = () => this.value;
    public getAddress = () => this.address;
  
    public toDataItem = () => {
      const map: DataItemMap = {};
      map[Keys.txid] = this.txid;
      map[Keys.vout] = this.vout;
      map[Keys.value] = this.value;
  
      const keyPath = this.path.toDataItem();
      keyPath.setTag(this.path.getRegistryType().getTag());
      map[Keys.path] = keyPath;
  
      map[Keys.address] = this.address;
      return new DataItem(map);
    };
  
    public static fromDataItem = (dataItem: DataItem) => {
      const map = dataItem.getData();
      const txid = map[Keys.txid];
      const vout = map[Keys.vout];
      const path = CryptoKeypath.fromDataItem(map[Keys.path]);
      const address = map[Keys.address];
      const value = map[Keys.value];
  
      return new AvalanceUtxo({
        txid,
        vout,
        value,
        path,
        address,
      });
    };
  
    public static fromCBOR = (_cborPayload: Buffer) => {
      const dataItem = decodeToDataItem(_cborPayload);
      return AvalanceUtxo.fromDataItem(dataItem);
    };
  
    public static constructAvalanceUtxo({
      txid,
      vout,
      value,
      xfp,
      path,
      address,
    }: AvalanceUtxoData) {
      const paths = path.replace(/[m|M]\//, "").split("/");
      const hdPathObject = new CryptoKeypath(
        paths.map((path) => {
          const index = parseInt(path.replace("'", ""));
          const isHardened = path.endsWith("'");
          return new PathComponent({ index, hardened: isHardened });
        }),
        Buffer.from(xfp, "hex")
      );
  
      return new AvalanceUtxo({
        txid: Buffer.from(txid, "hex"),
        vout,
        value,
        path: hdPathObject,
        address,
      });
    }
  }
  
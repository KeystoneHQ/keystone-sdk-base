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
    vout,
    path,
  }
  
  export interface AvalancheUtxoProps {
    txid: Buffer;
    vout: number;
    path: CryptoKeypath;
  }
  
  export interface AvalancheUtxoData {
    txid: string;
    vout: number;
    path: string;
  }
  
  export class AvalancheUtxo extends RegistryItem {
    private txid: Buffer;
    private vout: number;
    private path: CryptoKeypath;
  
    getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_UTXO;
  
    constructor(args: AvalancheUtxoProps) {
      super();
      this.txid = args.txid;
      this.vout = args.vout;
      this.path = args.path;
    }
  
    public getTxid = () => this.txid;
    public getVout = () => this.vout;
    public getKeyPath = () => this.path.getPath();
  
    public toDataItem = () => {
      const map: DataItemMap = {};
      map[Keys.txid] = this.txid;
      map[Keys.vout] = this.vout;
  
      const keyPath = this.path.toDataItem();
      keyPath.setTag(this.path.getRegistryType().getTag());
      map[Keys.path] = keyPath;
  
      return new DataItem(map);
    };
  
    public static fromDataItem = (dataItem: DataItem) => {
      const map = dataItem.getData();
      const txid = map[Keys.txid];
      const vout = map[Keys.vout];
      const path = CryptoKeypath.fromDataItem(map[Keys.path]);
  
      return new AvalancheUtxo({
        txid,
        vout,
        path,
      });
    };
  
    public static fromCBOR = (_cborPayload: Buffer) => {
      const dataItem = decodeToDataItem(_cborPayload);
      return AvalancheUtxo.fromDataItem(dataItem);
    };
  
    public static constructAvalancheUtxo({
      txid,
      vout,
      path,
    }: AvalancheUtxoData) {
      const paths = path.replace(/[m|M]\//, "").split("/");
      const hdPathObject = new CryptoKeypath(
        paths.map((path) => {
          const index = parseInt(path.replace("'", ""));
          const isHardened = path.endsWith("'");
          return new PathComponent({ index, hardened: isHardened });
        }),
      );
  
      return new AvalancheUtxo({
        txid: Buffer.from(txid, "hex"),
        vout,
        path: hdPathObject,
      });
    }
  }
  
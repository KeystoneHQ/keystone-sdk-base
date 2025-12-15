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
  
  export interface AvalanceUtxoProps {
    txid: Buffer;
    vout: number;
    path: CryptoKeypath;
  }
  
  export interface AvalanceUtxoData {
    txid: string;
    vout: number;
    path: string;
    xfp: string;
  }
  
  export class AvalanceUtxo extends RegistryItem {
    private txid: Buffer;
    private vout: number;
    private path: CryptoKeypath;
  
    getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_UTXO;
  
    constructor(args: AvalanceUtxoProps) {
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
  
      return new AvalanceUtxo({
        txid,
        vout,
        path,
      });
    };
  
    public static fromCBOR = (_cborPayload: Buffer) => {
      const dataItem = decodeToDataItem(_cborPayload);
      return AvalanceUtxo.fromDataItem(dataItem);
    };
  
    public static constructAvalanceUtxo({
      txid,
      vout,
      xfp,
      path,
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
        path: hdPathObject,
      });
    }
  }
  
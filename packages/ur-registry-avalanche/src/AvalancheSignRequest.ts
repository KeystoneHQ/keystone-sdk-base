import {
  DataItem,
  RegistryItem,
  extend,
  DataItemMap,
  CryptoKeypath,
  PathComponent,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";
import { AvalancheUtxo, AvalancheUtxoData } from "./AvalancheUtxo";

const { RegistryTypes } = extend;

type signRequestProps = {
  requestId?: Buffer;
  data: Buffer;
  derivationPaths: CryptoKeypath[];
  utxos: AvalancheUtxo[];
};

enum Keys {
  requestId = 1,
  signData,
  derivationPaths,
  utxos,
}
export class AvalancheSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private data: Buffer;
  private derivationPaths: CryptoKeypath[];
  private utxos: AvalancheUtxo[];


  getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.data = args.data;
    this.derivationPaths = args.derivationPaths;
    this.utxos = args.utxos;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.data;
  public getUtxos = () => this.utxos;
  public getDerivationPaths = () => this.derivationPaths;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    map[Keys.signData] = Buffer.from(this.data);

    map[Keys.derivationPaths] = this.derivationPaths.map((keypath) => {
      const item = keypath.toDataItem();
      item.setTag(keypath.getRegistryType().getTag());
      return item;
    });

    map[Keys.utxos] = this.utxos.map((utxo) => {
      const res = utxo.toDataItem();
      res.setTag(utxo.getRegistryType().getTag());
      return res;
    });

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const data = map[Keys.signData];
    const derivationPaths: CryptoKeypath[] = map[Keys.derivationPaths].map(
      (item: DataItem) => CryptoKeypath.fromDataItem(item)
    );
    const utxos: AvalancheUtxo[] = map[Keys.utxos].map((utxo: DataItem) =>
      AvalancheUtxo.fromDataItem(utxo)
    );

    return new AvalancheSignRequest({
      requestId,
      data,
      derivationPaths,
      utxos,
    });
  };

  public static constructAvalancheRequest(
    data: Buffer,
    hdPaths: string[],
    utxos: AvalancheUtxoData[],
    xfp: string,
    requestId?: string | Buffer
  ) {
    let _requestId;
    if (typeof requestId === "string") {
      _requestId = Buffer.from(uuid.parse(requestId) as Uint8Array);
    } else if (requestId instanceof Buffer) {
      _requestId = requestId;
    } else {
      _requestId = Buffer.from(uuid.parse(uuid.v4()) as Uint8Array);
    }
    
    const avalancheUtxos = utxos.map((utxo) =>
      AvalancheUtxo.constructAvalancheUtxo(utxo)
    );

    const derivationPaths = hdPaths.map(hdPath => {
      const paths = hdPath.replace(/[m|M]\//, "").split("/");
      return new CryptoKeypath(
        paths.map((path) => {
          const index = parseInt(path.replace(/[^0-9]/g, ""));
          const isHardened = path.endsWith("'") || path.toLowerCase().endsWith("h");
          return new PathComponent({ index, hardened: isHardened });
        }),
        Buffer.from(xfp, "hex")
      );
    });

    return new AvalancheSignRequest({
      data,
      requestId: _requestId,
      derivationPaths: derivationPaths,
      utxos: avalancheUtxos,
    });
  }
}

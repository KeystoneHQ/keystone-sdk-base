import {
  DataItem,
  RegistryItem,
  extend,
  DataItemMap,
  CryptoKeypath,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";
import { AvalancheUtxo, AvalancheUtxoData } from "./AvalancheUtxo";

const { RegistryTypes } = extend;

type signRequestProps = {
  requestId?: Buffer;
  data: Buffer;
  derivationPath: CryptoKeypath;
  utxos: AvalancheUtxo[];
};

enum Keys {
  requestId = 1,
  signData,
  derivationPath,
  utxos,
}
export class AvalancheSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private data: Buffer;
  private derivationPath: CryptoKeypath;
  private utxos: AvalancheUtxo[];


  getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.data = args.data;
    this.derivationPath = args.derivationPath;
    this.utxos = args.utxos;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.data;
  public getUtxos = () => this.utxos;
  public getDerivationPath = () => this.derivationPath;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    map[Keys.signData] = Buffer.from(this.data);
    map[Keys.derivationPath] = this.derivationPath;
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
    const derivationPath = map[Keys.signData];
    const utxos: AvalancheUtxo[] = map[Keys.utxos].map((utxo: DataItem) =>
      AvalancheUtxo.fromDataItem(utxo)
    );

    return new AvalancheSignRequest({
      requestId,
      data,
      derivationPath,
      utxos,
    });
  };

  public static constructAvalancheRequest(
    data: Buffer,
    derivationPath: CryptoKeypath,
    utxos: AvalancheUtxoData[],
    requestId?: string | Buffer,
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

    return new AvalancheSignRequest({
      data,
      requestId: _requestId,
      derivationPath,
      utxos: avalancheUtxos,
    });
  }
}

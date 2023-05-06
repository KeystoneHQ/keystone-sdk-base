import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";
import { CardanoUtxo, CardanoUtxoData } from "./CardanoUtxo";
import { CardanoCertKey, CardanoCertKeyData } from "./CardanoCertKey";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  signData,
  utxos,
  certKeys,
  origin,
}

type signRequestProps = {
  requestId?: Buffer;
  signData: Buffer;
  utxos: CardanoUtxo[];
  certKeys: CardanoCertKey[];
  origin?: string;
};

export class CardanoSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private signData: Buffer;
  private utxos: CardanoUtxo[];
  private certKeys: CardanoCertKey[];
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.utxos = args.utxos;
    this.certKeys = args.certKeys;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getUtxos = () => this.utxos;
  public getCertKeys = () => this.certKeys;
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    map[Keys.signData] = this.signData;

    map[Keys.utxos] = this.utxos.map((utxo) => {
      const res = utxo.toDataItem();
      res.setTag(utxo.getRegistryType().getTag());
      return res;
    });

    map[Keys.certKeys] = this.certKeys.map((certKey) => {
      const res = certKey.toDataItem();
      res.setTag(certKey.getRegistryType().getTag());
      return res;
    });

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signData = map[Keys.signData];
    const utxos: CardanoUtxo[] = map[Keys.utxos].map((utxo: DataItem) =>
      CardanoUtxo.fromDataItem(utxo)
    );
    const certKeys: CardanoCertKey[] = map[Keys.certKeys].map(
      (certKey: DataItem) => CardanoCertKey.fromDataItem(certKey)
    );
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;

    return new CardanoSignRequest({
      requestId,
      signData,
      utxos,
      certKeys,
      origin,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoSignRequest.fromDataItem(dataItem);
  };

  public static constructCardanoSignRequest(
    signData: Buffer,
    utxos: CardanoUtxoData[],
    certKeys: CardanoCertKeyData[],
    uuidString?: string,
    origin?: string
  ) {
    const cardanoUtxos = utxos.map((utxo) =>
      CardanoUtxo.constructCardanoUtxo(utxo)
    );
    const cardanoCertKeys = certKeys.map((certKey) =>
      CardanoCertKey.constructCardanoCertKey(certKey)
    );
    return new CardanoSignRequest({
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
      signData,
      utxos: cardanoUtxos,
      certKeys: cardanoCertKeys,
      origin: origin || undefined,
    });
  }
}

import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";
import { CardanoUtxo, CardanoUtxoData } from "./CardanoUtxo";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  signData,
  utxos,
  origin,
}

type signRequestProps = {
  requestId?: Buffer;
  signData: Buffer;
  utxos: CardanoUtxo[];
  origin?: string;
};

export class CardanoSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private signData: Buffer;
  private utxos: CardanoUtxo[];
  private origin?: string;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.utxos = args.utxos;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getUtxos = () => this.utxos;
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
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;

    return new CardanoSignRequest({
      requestId,
      signData,
      utxos,
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
    uuidString?: string,
    origin?: string
  ) {
    const cardanoUtxos = utxos.map((utxo) =>
      CardanoUtxo.constructCardanoUtxo(utxo)
    );
    return new CardanoSignRequest({
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
      signData,
      utxos: cardanoUtxos,
      origin: origin || undefined,
    });
  }
}

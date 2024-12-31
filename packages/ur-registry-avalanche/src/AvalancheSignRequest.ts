import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  data,
}

type signRequestProps = {
  requestId?: Buffer;
  data: Buffer;
};

export class AvalancheSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private data: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.data = args.data;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.data;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    map[Keys.data] = this.data;

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const data = map[Keys.data];
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;

    return new AvalancheSignRequest({
      requestId,
      data,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return AvalancheSignRequest.fromDataItem(dataItem);
  };

  public static constructAvalancheRequest(data: Buffer, uuidString?: string) {
    return new AvalancheSignRequest({
      data,
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
    });
  }
}

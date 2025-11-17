import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";

const { decodeToDataItem } = extend;

enum Keys {
  requests = 1,
}

export class XRPBatchSignRequest extends RegistryItem {
  private requests: Buffer[]; 

  getRegistryType = () => ExtendedRegistryTypes.XRP_BATCH_SIGN_REQUEST;

  constructor(args: Buffer[]) {
    super();
    this.requests = args;
  }

  public getRequests = () => this.requests;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requests) {
      map[Keys.requests] = this.requests;
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const requests = map[Keys.requests];

    return new XRPBatchSignRequest(requests);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return XRPBatchSignRequest.fromDataItem(dataItem);
  };
}

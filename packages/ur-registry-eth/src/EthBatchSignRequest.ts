import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import { EthSignRequest } from "EthSignRequest";

const { decodeToDataItem } = extend;

enum Keys {
  requests = 1,
}

export class ETHBatchSignRequest extends RegistryItem {
  private requests: EthSignRequest[];

  getRegistryType = () => ExtendedRegistryTypes.ETH_BATCH_SIGN_REQUEST;

  constructor(args: EthSignRequest[]) {
    super();
    this.requests = args;
  }

  public getRequests = () => this.requests;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requests) {
      map[Keys.requests] = this.requests.map((request) => {
        const dataItem = request.toDataItem();
        dataItem.setTag(request.getRegistryType().getTag());
        return dataItem;
      });
    }
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const requests = map[Keys.requests].map((request: DataItem) => {
      return EthSignRequest.fromDataItem(request);
    });

    return new ETHBatchSignRequest(requests);
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ETHBatchSignRequest.fromDataItem(dataItem);
  };
}

import { DataItem, RegistryItem } from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

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
    return new DataItem(this.data);
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

import {
  DataItem,
  RegistryItem,
  extend,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";
import { Buffer } from "buffer";

const { RegistryTypes } = extend;

type signRequestProps = {
  requestId?: Buffer;
  data: Buffer;
  mfp: Buffer;
  xpub: string;
  walletIndex: number;
};

enum Keys {
  requestId = 1,
  signData = 2,
  mfp = 3,
  xpub = 6,
  walletIndex = 7,
}

export class AvalancheSignRequest extends RegistryItem {
  private requestId?: Buffer;
  private data: Buffer;
  private mfp: Buffer;
  private xpub: string;
  private walletIndex: number;

  getRegistryType = () => ExtendedRegistryTypes.AVALANCHE_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.data = args.data;
    this.mfp = args.mfp;
    this.xpub = args.xpub;
    this.walletIndex = args.walletIndex;
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

    map[Keys.signData] = this.data;
    map[Keys.mfp] = this.mfp.readUInt32BE(0);
    map[Keys.xpub] = this.xpub;
    map[Keys.walletIndex] = Number(this.walletIndex);

    return new DataItem(map);
  };

  public static constructAvalancheRequest(
    data: Buffer,
    mfp: string,
    xpub: string,
    walletIndex: number
  ) {
    const uuidString = uuid.v4();

    return new AvalancheSignRequest({
      data,
      requestId: Buffer.from(uuid.parse(uuidString) as Uint8Array),
      mfp: Buffer.from(mfp),
      xpub,
      walletIndex,
    });
  }
}

import {
  DataItem,
  RegistryItem,
  extend,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

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

    map[Keys.signData] = Buffer.from(this.data);
    map[Keys.mfp] = this.mfp.readUInt32BE(0);
    map[Keys.xpub] = this.xpub;
    map[Keys.walletIndex] = Number(this.walletIndex);

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const masterFingerprint = Buffer.alloc(4);
    const _masterFingerprint = map[Keys.mfp];
    masterFingerprint.writeUInt32BE(_masterFingerprint, 0);
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const data = map[Keys.signData];
    const xpub = map[Keys.xpub];
    const walletIndex = map[Keys.signData];

    return new AvalancheSignRequest({
      requestId,
      data,
      xpub,
      walletIndex,
      mfp: masterFingerprint,
    });
  };

  public static constructAvalancheRequest(
    data: Buffer,
    mfp: string,
    xpub: string,
    walletIndex: number,
    requestId?: string | Buffer
  ) {
    let _requestId;
    if (typeof requestId === "string") {
      _requestId = Buffer.from(uuid.parse(requestId) as Uint8Array);
    } else if (requestId instanceof Buffer) {
      _requestId = requestId;
    } else {
      _requestId = Buffer.from(uuid.parse(uuid.v4()));
    }

    return new AvalancheSignRequest({
      data,
      requestId: _requestId,
      mfp: Buffer.from(mfp, "hex"),
      xpub,
      walletIndex,
    });
  }
}

import {
  extend,
  DataItem,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

export enum SignType {
  Transaction = 1,
  DataItem = 2,
  Message
}

export enum SaltLen {
  Zero = 0,
  Digest = 32,
}

enum Keys {
  masterFingerprint = 1,
  requestId,
  signData,
  signType,
  saltLen,
  origin,
  account,
}

type signRequestProps = {
  masterFingerprint: Buffer;
  requestId?: Buffer;
  signData: Buffer;
  signType: SignType;
  saltLen: SaltLen;
  origin?: string;
  account?: Buffer;
};

export class ArweaveSignRequest extends RegistryItem {
  private masterFingerprint: Buffer;
  private requestId?: Buffer;
  private signData: Buffer;
  private signType: SignType;
  private saltLen: SaltLen;
  private origin?: string;
  private account?: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.ARWEAVE_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.masterFingerprint = args.masterFingerprint;
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.signType = args.signType;
    this.saltLen = args.saltLen;
    this.origin = args.origin;
    this.account = args.account;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getSignType = () => this.signType;
  public getSaltLen = () => this.saltLen;
  public getOrigin = () => this.origin;
  public getAccount = () => this.account;
  public getMasterFingerprint = () => this.masterFingerprint;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }
    if (this.account) {
      map[Keys.account] = this.account;
    }

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }
    map[Keys.masterFingerprint] = this.masterFingerprint.readUInt32BE(0);
    map[Keys.signData] = this.signData;
    map[Keys.signType] = this.signType;
    map[Keys.saltLen] = this.saltLen;

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signData = map[Keys.signData];
    const account = map[Keys.account] ? map[Keys.account] : undefined;
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    const signType = map[Keys.signType];
    const saltLen = map[Keys.saltLen];
    const masterFingerprint = Buffer.alloc(4);
    const _masterFingerprint = map[Keys.masterFingerprint];
    masterFingerprint.writeUInt32BE(_masterFingerprint, 0);

    return new ArweaveSignRequest({
      masterFingerprint,
      requestId,
      signData,
      signType,
      saltLen,
      origin,
      account,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return ArweaveSignRequest.fromDataItem(dataItem);
  };

  public static constructArweaveRequest(
    signData: Buffer,
    xfp: string,
    signType: SignType,
    saltLen: SaltLen,
    uuidString?: string,
    account?: Buffer,
    origin?: string
  ) {
    return new ArweaveSignRequest({
      masterFingerprint: Buffer.from(xfp, "hex"),
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
      signData,
      signType,
      saltLen,
      account,
      origin,
    });
  }
}

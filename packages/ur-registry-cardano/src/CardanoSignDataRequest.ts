import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  signData,
  derivationPath,
  origin,
  signType,
  xpub,
}

type signRequestProps = {
  requestId?: Buffer;
  signData: Buffer;
  xpub: Buffer;
  derivationPath: CryptoKeypath;
  origin?: string;
};

export class CardanoSignDataRequest extends RegistryItem {
  private requestId?: Buffer;
  private signData: Buffer;
  private derivationPath: CryptoKeypath;
  private origin?: string;
  private xpub: Buffer;

  getRegistryType = () => ExtendedRegistryTypes.CARDANO_SIGN_DATA_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.derivationPath = args.derivationPath;
    this.origin = args.origin;
    this.xpub = args.xpub;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getDerivationPath = () => this.derivationPath.getPath();
  public getOrigin = () => this.origin;
  public getXpub = () => this.xpub;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    map[Keys.signData] = this.signData;

    const keyPath = this.derivationPath.toDataItem();
    keyPath.setTag(this.derivationPath.getRegistryType().getTag());
    map[Keys.derivationPath] = keyPath;
    map[Keys.xpub] = this.xpub;

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signData = map[Keys.signData];
    const derivationPath = CryptoKeypath.fromDataItem(map[Keys.derivationPath]);
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    const xpub = map[Keys.xpub];

    return new CardanoSignDataRequest({
      requestId,
      signData,
      derivationPath,
      origin,
      xpub,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoSignDataRequest.fromDataItem(dataItem);
  };

  public static constructCardanoSignDataRequest(
    signData: string,
    hdPath: string,
    xfp: string,
    xpub: string,
    uuidString?: string,
    origin?: string
  ) {
    const paths = hdPath.replace(/[m|M]\//, "").split("/");
    const hdpathObject = new CryptoKeypath(
      paths.map((path) => {
        const index = parseInt(path.replace("'", ""));
        let isHardened = false;
        if (path.endsWith("'")) {
          isHardened = true;
        }
        return new PathComponent({ index, hardened: isHardened });
      }),
      Buffer.from(xfp, "hex")
    );

    return new CardanoSignDataRequest({
      requestId: uuidString
        ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
        : undefined,
      signData: Buffer.from(signData, "hex"),
      derivationPath: hdpathObject,
      origin: origin || undefined,
      xpub: Buffer.from(xpub, "hex"),
    });
  }
}

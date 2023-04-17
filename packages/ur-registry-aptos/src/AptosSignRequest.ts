import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

export enum SignType {
  SingleSign = 1,
  MultiSign = 2,
  SignMessage = 3,
}
enum Keys {
  requestId = 1,
  signData,
  authenticationKeyDerivationPaths,
  accounts,
  origin,
  signType
}

type signRequestProps = {
  requestId: Buffer;
  signData: Buffer;
  authenticationKeyDerivationPaths: CryptoKeypath[];
  accounts?: Buffer[];
  origin?: string;
  signType: SignType;
};

export class AptosSignRequest extends RegistryItem {
  private requestId: Buffer;
  private signData: Buffer;
  private authenticationKeyDerivationPaths: CryptoKeypath[];
  private accounts?: Buffer[];
  private origin?: string;
  private signType: SignType;

  getRegistryType = () => ExtendedRegistryTypes.APTOS_SIGN_REQUEST;

  constructor(args: signRequestProps) {
    super();
    this.requestId = args.requestId;
    this.signData = args.signData;
    this.authenticationKeyDerivationPaths =
      args.authenticationKeyDerivationPaths;
    this.accounts = args.accounts;
    this.origin = args.origin;
    this.signType = args.signType;
  }

  public getRequestId = () => this.requestId;
  public getSignData = () => this.signData;
  public getAuthenticationKeyDerivationPaths = () =>
    this.authenticationKeyDerivationPaths.map(key => key.getPath());
  public getSignRequestAccounts = () => this.accounts;
  public getOrigin = () => this.origin;
  public getSignType = () => this.signType;

  public toDataItem = () => {
    const map: DataItemMap = {};
    map[Keys.requestId] = new DataItem(
      this.requestId,
      RegistryTypes.UUID.getTag()
    );
    if (this.accounts) {
      map[Keys.accounts] = this.accounts;
    }

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    map[Keys.signData] = this.signData;
    map[Keys.signType] = this.signType;
    map[
      Keys.authenticationKeyDerivationPaths
    ] = this.authenticationKeyDerivationPaths.map(item => {
      const dataItem = item.toDataItem();
      dataItem.setTag(item.getRegistryType().getTag());
      return dataItem;
    });
    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const signData = map[Keys.signData];
    const signType = map[Keys.signType];
    const authenticationKeyDerivationPaths = map[
      Keys.authenticationKeyDerivationPaths
    ].map((item: DataItem) => CryptoKeypath.fromDataItem(item));
    const accounts = map[Keys.accounts] ? map[Keys.accounts] : undefined;
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;
    return new AptosSignRequest({
      requestId,
      signData,
      authenticationKeyDerivationPaths,
      accounts,
      origin,
      signType
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return AptosSignRequest.fromDataItem(dataItem);
  };

  public static constructAptosRequest(
    signData: Buffer,
    authKeyHdPath: string[],
    xfps: string[],
    signType: SignType,
    uuidString: string,
    accounts?: Buffer[],
    origin?: string
  ) {
    const authKeyHdPathObjects = authKeyHdPath.map((path, index) => {
      const paths = path.replace(/[m|M]\//, "").split("/");
      const pathComponent = paths.map(path => {
        const index = parseInt(path.replace("'", ""));
        let isHardened = false;
        if (path.endsWith("'")) {
          isHardened = true;
        }
        return new PathComponent({ index, hardened: isHardened });
      });
      return new CryptoKeypath(pathComponent, Buffer.from(xfps[index], "hex"));
    });

    return new AptosSignRequest({
      requestId: Buffer.from(uuid.parse(uuidString) as Uint8Array),
      signData,
      authenticationKeyDerivationPaths: authKeyHdPathObjects,
      accounts: accounts || undefined,
      origin: origin || undefined,
      signType: signType || SignType.SingleSign
    });
  }
}

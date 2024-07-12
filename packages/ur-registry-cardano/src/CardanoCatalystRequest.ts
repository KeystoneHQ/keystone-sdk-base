import {
  CryptoKeypath,
  extend,
  DataItem,
  PathComponent,
  RegistryItem,
  DataItemMap,
} from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
import { CardanoDelegation } from "./CardanoDelegation";
import * as uuid from "uuid";

const { decodeToDataItem, RegistryTypes } = extend;

enum Keys {
  requestId = 1,
  delegations,
  stakePub,
  paymentAddress,
  nonce,
  voting_purpose,
  derivationPath,
  origin,
  signType,
}

interface CardanoCatalystRawDelegationProps {
  hdPath: string;
  weight: number;
}

export type CardanoCatalystRawDelegationsProps =
  CardanoCatalystRawDelegationProps[];

interface CardanoCatalystRequestProps {
  requestId?: Buffer;
  delegations: CardanoDelegation[];
  stakePub: Buffer;
  paymentAddress: Buffer;
  nonce: number;
  voting_purpose: number;
  derivationPath: CryptoKeypath;
  origin?: string;
}

const genCryptoKeypath = (path: string, xfp: string) => {
  const paths = path.replace(/[m|M]\//, "").split("/");
  return new CryptoKeypath(
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
};

export class CardanoCatalystRequest extends RegistryItem {
  private requestId?: Buffer;
  private delegations: CardanoDelegation[];
  private stakePub: Buffer;
  private paymentAddress: Buffer;
  private nonce: number;
  private voting_purpose: number;
  private derivationPath: CryptoKeypath;
  private origin?: string;

  getRegistryType = () =>
    ExtendedRegistryTypes.CARDANO_CATALYST_VOTING_REGISTRATION;

  constructor(args: CardanoCatalystRequestProps) {
    super();
    this.requestId = args.requestId;
    this.derivationPath = args.derivationPath;
    this.delegations = args.delegations;
    this.stakePub = args.stakePub;
    this.paymentAddress = args.paymentAddress;
    this.nonce = args.nonce;
    this.voting_purpose = args.voting_purpose;
    this.origin = args.origin;
  }

  public getRequestId = () => this.requestId;
  public getDelegations = () => this.delegations;
  public getStakePub = () => this.stakePub;
  public getPaymentAddress = () => this.paymentAddress;
  public getNonce = () => this.nonce;
  public getVotingPurpose = () => this.voting_purpose;
  public getDerivationPath = () => this.derivationPath.getPath();
  public getOrigin = () => this.origin;

  public toDataItem = () => {
    const map: DataItemMap = {};
    if (this.requestId) {
      map[Keys.requestId] = new DataItem(
        this.requestId,
        RegistryTypes.UUID.getTag()
      );
    }

    map[Keys.stakePub] = this.stakePub;
    map[Keys.paymentAddress] = this.paymentAddress;
    map[Keys.nonce] = this.nonce;
    map[Keys.voting_purpose] = this.voting_purpose;

    map[Keys.delegations] = this.delegations.map((delegation) => {
      const res = delegation.toDataItem();
      res.setTag(delegation.getRegistryType().getTag());
      return res;
    });

    if (this.origin) {
      map[Keys.origin] = this.origin;
    }

    const keyPath = this.derivationPath.toDataItem();
    keyPath.setTag(this.derivationPath.getRegistryType().getTag());
    map[Keys.derivationPath] = keyPath;

    return new DataItem(map);
  };

  public static fromDataItem = (dataItem: DataItem) => {
    const map = dataItem.getData();
    const delegations: CardanoDelegation[] = map[Keys.delegations].map(
      (delegation: DataItem) => CardanoDelegation.fromDataItem(delegation)
    );
    const stakePub = map[Keys.stakePub];
    const paymentAddress = map[Keys.paymentAddress];
    const nonce = map[Keys.nonce];
    const voting_purpose = map[Keys.voting_purpose];
    const derivationPath = CryptoKeypath.fromDataItem(map[Keys.derivationPath]);
    const requestId = map[Keys.requestId]
      ? map[Keys.requestId].getData()
      : undefined;
    const origin = map[Keys.origin] ? map[Keys.origin] : undefined;

    return new CardanoCatalystRequest({
      requestId,
      delegations,
      stakePub,
      paymentAddress,
      nonce,
      voting_purpose,
      derivationPath,
      origin,
    });
  };

  public static fromCBOR = (_cborPayload: Buffer) => {
    const dataItem = decodeToDataItem(_cborPayload);
    return CardanoCatalystRequest.fromDataItem(dataItem);
  };

  public static constructCardanoCatalystRequest(
    delegations: CardanoCatalystRawDelegationsProps,
    stakePub: string,
    paymentAddress: string,
    nonce: number,
    voting_purpose: number,
    hdPath: string,
    xfp: string,
    uuidString?: string,
    origin?: string
  ) {
    const requestId = uuidString
      ? Buffer.from(uuid.parse(uuidString) as Uint8Array)
      : undefined;
    const cardanoDelegations = delegations.map((delegation) =>
      CardanoDelegation.constructCardanoDelegation({
        hdPath: genCryptoKeypath(delegation.hdPath, xfp),
        weight: delegation.weight,
      })
    );

    return new CardanoCatalystRequest({
      requestId,
      delegations: cardanoDelegations,
      stakePub: Buffer.from(stakePub, "hex"),
      paymentAddress: Buffer.from(paymentAddress, "hex"),
      nonce,
      voting_purpose,
      derivationPath: genCryptoKeypath(hdPath, xfp),
      origin,
    });
  }
}

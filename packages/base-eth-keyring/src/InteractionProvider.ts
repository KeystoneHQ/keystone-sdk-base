import {
  CryptoHDKey,
  ETHSignature,
  EthSignRequest,
  CryptoAccount,
} from "@keystonehq/bc-ur-registry-eth";

export type EthAccount = {
  xpub: string;
  path: string;
}

export type EthAddress = {
  address: string;
  path: string;
}

export interface InteractionProvider {
  readCryptoHDKeyOrCryptoAccount: () => Promise<CryptoHDKey | CryptoAccount>;
  requestSignature: (
    signRequest: EthSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => Promise<ETHSignature>;
  requestAccounts: () => Promise<EthAccount[]>;
}

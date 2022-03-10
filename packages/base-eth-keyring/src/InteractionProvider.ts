import {
  CryptoHDKey,
  ETHSignature,
  EthSignRequest,
  CryptoAccount,
} from "@keystonehq/bc-ur-registry-eth";

export interface InteractionProvider {
  readCryptoHDKeyOrCryptoAccount: () => Promise<CryptoHDKey | CryptoAccount>;
  requestSignature: (
    signRequest: EthSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => Promise<ETHSignature>;
}

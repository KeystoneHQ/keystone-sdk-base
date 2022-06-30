import {
  CryptoMultiAccounts,
  NearSignature,
  NearSignRequest,
} from "@keystonehq/bc-ur-registry-near";

export interface InteractionProvider {
  readCryptoMultiAccounts: () => Promise<CryptoMultiAccounts>;
  requestSignature: (
    signRequest: NearSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => Promise<NearSignature>;
}

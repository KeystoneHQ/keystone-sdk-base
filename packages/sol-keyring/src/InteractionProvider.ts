import {
  CryptoMultiAccounts,
  SolSignature,
  SolSignRequest,
} from "@keystonehq/bc-ur-registry-sol";

export interface InteractionProvider {
  readCryptoMultiAccounts: () => Promise<CryptoMultiAccounts>;
  requestSignature: (
    signRequest: SolSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => Promise<SolSignature>;
}

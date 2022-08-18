import { SolSignature, SolSignRequest } from "@keystonehq/bc-ur-registry-sol";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";

export interface InteractionProvider {
  readCryptoMultiAccounts: () => Promise<CryptoMultiAccounts>;
  requestSignature: (
    signRequest: SolSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => Promise<SolSignature>;
}

import {
  AptosSignature,
  AptosSignRequest
} from "@keystonehq/bc-ur-registry-aptos";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";

export interface InteractionProvider {
  readCryptoMultiAccounts: () => Promise<CryptoMultiAccounts>;
  requestSignature: (
    signRequest: AptosSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => Promise<AptosSignature>;
}

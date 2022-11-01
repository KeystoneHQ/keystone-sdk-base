import {
  CosmosSignature,
  CosmosSignRequest
} from "@keystonehq/bc-ur-registry-cosmos";
import { CryptoMultiAccounts } from "@keystonehq/bc-ur-registry";

export interface InteractionProvider {
  readCryptoMultiAccounts: () => Promise<CryptoMultiAccounts>;
  requestSignature: (
    signRequest: CosmosSignRequest,
    requestTitle?: string,
    requestDescription?: string
  ) => Promise<CosmosSignature>;
}

import {
  ArweaveCryptoAccount,
  ArweaveSignature,
  ArweaveSignRequest,
} from "@keystonehq/bc-ur-registry-arweave";

export interface InteractionProvider {
  readArweaveCryptoAccount: () => Promise<ArweaveCryptoAccount>;
  requestSignature: (
    signRequest: ArweaveSignRequest
  ) => Promise<ArweaveSignature>;
}

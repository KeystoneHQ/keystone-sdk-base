import { patchTags } from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
export * from "@keystonehq/bc-ur-registry";

// Override the generic registry decoders with Ethereum path-aware decoders.
// Explicit exports take precedence over the names re-exported above.
export { CryptoAccount } from "./CryptoAccount";
export { CryptoHDKey } from "./CryptoHDKey";
export {
  ETH_ACCOUNT_DATA_ERROR_CODE,
  EthereumAccountDataError,
} from "./pathValidation";

patchTags(
  Object.values(ExtendedRegistryTypes)
    .filter((rt) => !!rt.getTag())
    .map((rt) => rt.getTag()) as number[]
);

export { EthSignRequest, DataType } from "./EthSignRequest";
export { ETHSignature } from "./EthSignature";
export { ETHNFTItem } from "./ETHNFTItem";
export { ETHBatchSignRequest } from "./EthBatchSignRequest";
export { ETHBatchSignature } from "./EthBatchSignature";

export { generateAddressFromXpub, findHDPathFromAddress } from "./utlis";

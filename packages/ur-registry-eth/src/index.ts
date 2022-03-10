import { patchTags } from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
export * from "@keystonehq/bc-ur-registry";

patchTags(
  Object.values(ExtendedRegistryTypes)
    .filter((rt) => !!rt.getTag())
    .map((rt) => rt.getTag()) as number[]
);

export { EthSignRequest, DataType } from "./EthSignRequest";
export { ETHSignature } from "./EthSignature";
export { ETHNFTItem } from "./ETHNFTItem";

export { generateAddressFromXpub, findHDPathFromAddress } from "./utlis";

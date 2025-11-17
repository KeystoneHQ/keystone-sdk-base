import { patchTags } from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
export * from "@keystonehq/bc-ur-registry";

patchTags(
  Object.values(ExtendedRegistryTypes)
    .filter((rt) => !!rt.getTag())
    .map((rt) => rt.getTag()) as number[]
);

export { XRPBatchSignRequest as ETHBatchSignRequest } from "./XrpBatchSignRequest";
export { XRPBatchSignature as ETHBatchSignature } from "./XrpBatchSignature";

export { generateAddressFromXpub, findHDPathFromAddress } from "./utlis";

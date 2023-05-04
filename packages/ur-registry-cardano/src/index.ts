import { patchTags } from "@keystonehq/bc-ur-registry";
import { ExtendedRegistryTypes } from "./RegistryType";
export * from "@keystonehq/bc-ur-registry";

patchTags(
  Object.values(ExtendedRegistryTypes)
    .filter((rt) => !!rt.getTag())
    .map((rt) => rt.getTag()) as number[]
);

export { CardanoSignRequest } from "./CardanoSignRequest";
export { CardanoSignature } from "./CardanoSignature";
export { CardanoUtxoData } from "./CardanoUtxo";
export { CardanoCertKeyData } from "./CardanoCertKey";
export { CardanoCertKey } from "./CardanoCertKey";

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
export { CardanoSignDataRequest } from "./CardanoSignDataRequest";
export { CardanoSignDataSignature } from "./CardanoSignDataSignature";
export { CardanoUtxoData } from "./CardanoUtxo";
export { CardanoCertKeyData } from "./CardanoCertKey";
export { CardanoCertKey } from "./CardanoCertKey";
export {
  CardanoCatalystRequest,
  CardanoCatalystRawDelegationsProps,
} from "./CardanoCatalystRequest";
export { CardanoCatalystSignature } from "./CardanoCatalystSignature";
export { CardanoSignCip8DataRequest } from "./CardanoSignMessageCip8DataRequest";
export { CardanoSignCip8DataSignature } from "./CardanoSignMessageCip8DataSignature";

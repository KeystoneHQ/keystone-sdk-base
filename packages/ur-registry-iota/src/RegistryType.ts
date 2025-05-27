import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  IOTA_SIGN_REQUEST: new RegistryType("iota-sign-request", 8501),
  IOTA_SIGNATURE: new RegistryType("iota-signature", 8502),
  IOTA_SIGN_HASH_REQUEST: new RegistryType("iota-sign-hash-request", 8503)
};

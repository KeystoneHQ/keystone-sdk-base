import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  UTXO_SIGN_REQUEST: new RegistryType("utxo-sign-request", 6101),
  UTXO_SIGNATURE: new RegistryType("utxo-sign-result", 6102)
};

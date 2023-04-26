import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  CARDANO_UTXO: new RegistryType("cardano-utxo", 2201),
  CARDANO_SIGN_REQUEST: new RegistryType("cardano-sign-request", 2202),
  CARDANO_SIGNATURE: new RegistryType("cardano-signature", 2203),
};

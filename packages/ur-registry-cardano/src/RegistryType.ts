import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  CARDANO_UTXO: new RegistryType("cardano-utxo", 2201),
  CARDANO_SIGN_REQUEST: new RegistryType("cardano-sign-request", 2202),
  CARDANO_SIGNATURE: new RegistryType("cardano-signature", 2203),
  CARDANO_CERT_KEY: new RegistryType("cardano-cert-key", 2204),
  CARDANO_SIGN_DATA_REQUEST: new RegistryType(
    "cardano-sign-data-request",
    2205
  ),
  CARDANO_SIGN_DATA_SIGNATURE: new RegistryType(
    "cardano-sign-data-signature",
    2206
  ),
  CARDANO_CATALYST_VOTING_REGISTRATION: new RegistryType(
    "cardano-catalyst-voting-registration",
    2207
  ),
  CARDANO_CATALYST_VOTING_REGISTRATION_SIGNATURE: new RegistryType(
    "cardano-catalyst-voting-registration-signature",
    2208
  ),
  CARDANO_DELEGATION: new RegistryType("cardano-delegation", 2209),
  CARDANO_SIGN_CIP8_DATA_REQUEST: new RegistryType(
    "cardano-sign-cip8-data-request",
    2210
  ),
  CARDANO_SIGN_CIP8_DATA_SIGNATURE: new RegistryType(
    "cardano-sign-cip8-data-signature",
    2211
  ),
};

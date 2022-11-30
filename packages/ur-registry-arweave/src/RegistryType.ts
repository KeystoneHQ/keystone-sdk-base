import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  ARWEAVE_CRYPTO_ACCOUNT: new RegistryType("arweave-crypto-account", 5101),
  ARWEAVE_SIGN_REQUEST: new RegistryType("arweave-sign-request", 5102),
  ARWEAVE_SIGNATURE: new RegistryType("arweave-signature", 5103),
};

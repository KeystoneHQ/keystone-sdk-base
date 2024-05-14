import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  TRON_SIGN_REQUEST: new RegistryType("ton-sign-request", 7201),
  TRON_SIGNATURE: new RegistryType("ton-signature", 7202)
};

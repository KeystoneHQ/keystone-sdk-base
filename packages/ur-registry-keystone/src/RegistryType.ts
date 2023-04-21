import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  KEYSTONE_SIGN_REQUEST: new RegistryType("keystone-sign-request", 6101),
  KEYSTONE_SIGN_RESULT: new RegistryType("keystone-sign-result", 6102)
};

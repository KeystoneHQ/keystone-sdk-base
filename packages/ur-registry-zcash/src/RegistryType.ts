import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  ZCASH_ACCOUNTS: new RegistryType("zcash-accounts", 49201),
  ZCASH_FULL_VIEWING_KEY: new RegistryType("zcash-full-viewing-key", 49202),
  ZCASH_UNIFIED_FULL_VIEWING_KEY: new RegistryType(
    "zcash-unified-full-viewing-key",
    49203
  ),
  ZCASH_PCZT: new RegistryType("zcash-pczt", 49204),
};

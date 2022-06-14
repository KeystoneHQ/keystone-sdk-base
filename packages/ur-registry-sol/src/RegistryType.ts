import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  SOL_SIGN_REQUEST: new RegistryType("sol-sign-request", 1101),
  SOL_SIGNATURE: new RegistryType("sol-signature", 1102),
  CRYPTO_MULTI_ACCOUNTS: new RegistryType("crypto-multi-accounts", 1103),
  SOL_NFT_ITEM: new RegistryType("sol-nft-item", 1104),
};

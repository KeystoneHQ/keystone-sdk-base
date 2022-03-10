import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  ETH_SIGN_REQUEST: new RegistryType("eth-sign-request", 401),
  ETH_SIGNATAURE: new RegistryType("eth-signature", 402),
  ETH_NFT_ITEM: new RegistryType("eth-nft-item", 403),
};

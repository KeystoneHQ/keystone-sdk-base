import { RegistryType } from "@keystonehq/bc-ur-registry";

export const ExtendedRegistryTypes = {
  ETH_SIGN_REQUEST: new RegistryType("eth-sign-request", 401),
  ETH_SIGNATURE: new RegistryType("eth-signature", 402),
  ETH_NFT_ITEM: new RegistryType("eth-nft-item", 403),
  ETH_BATCH_SIGN_REQUEST: new RegistryType("eth-batch-sign-request", 40404),
  ETH_BATCH_SIGNATURE: new RegistryType("eth-batch-signature", 40405),
};

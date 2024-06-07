import { Purpose, URType } from "./types";

export const purposeToURType: Record<Purpose, string[]> = {
  [Purpose.SYNC]: [URType.CRYPTO_HDKEY, URType.CRYPTO_ACCOUNT],
  [Purpose.SIGN]: [URType.ETH_SIGNATURE],
  [Purpose.SOL_SYNC]: [URType.CRYPTO_MULTI_ACCOUNTS],
  [Purpose.SOL_SIGN]: [URType.SOL_SIGNATURE],
  [Purpose.NEAR_SYNC]: [URType.CRYPTO_MULTI_ACCOUNTS],
  [Purpose.NEAR_SIGN]: [URType.NEAR_SIGNATURE],
  [Purpose.COSMOS_SYNC]: [URType.CRYPTO_MULTI_ACCOUNTS],
  [Purpose.COSMOS_SIGN]: [URType.COSMOS_SIGNATURE],
};

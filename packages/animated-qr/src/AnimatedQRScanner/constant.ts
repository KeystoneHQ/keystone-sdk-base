import { Purpose } from "./types";

export const purposeToURType: Record<Purpose, string[]> = {
  [Purpose.SYNC]: ["crypto-hdkey", "crypto-account", "crypto-multi-accounts"],
  [Purpose.SIGN]: ["eth-signature", "sol-signature"],
};

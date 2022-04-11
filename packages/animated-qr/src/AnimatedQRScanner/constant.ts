import { Purpose } from "./types";

export const purposeToURType: Record<Purpose, string[]> = {
  [Purpose.SYNC]: ["crypto-hdkey", "crypto-account"],
  [Purpose.SIGN]: ["eth-signature"],
};

import {
  CryptoHDKey as BaseCryptoHDKey,
  DataItem,
} from "@keystonehq/bc-ur-registry";
import { validateEthCryptoHDKey } from "./pathValidation";

/**
 * Ethereum HD key decoder with MetaMask derivation-path validation.
 */
export class CryptoHDKey extends BaseCryptoHDKey {
  public static fromDataItem = (dataItem: DataItem): CryptoHDKey => {
    const key = BaseCryptoHDKey.fromDataItem(dataItem);
    validateEthCryptoHDKey(key);
    Object.setPrototypeOf(key, CryptoHDKey.prototype);
    return key as CryptoHDKey;
  };

  public static fromCBOR = (cborPayload: Buffer): CryptoHDKey => {
    const key = BaseCryptoHDKey.fromCBOR(cborPayload);
    validateEthCryptoHDKey(key);
    Object.setPrototypeOf(key, CryptoHDKey.prototype);
    return key as CryptoHDKey;
  };
}

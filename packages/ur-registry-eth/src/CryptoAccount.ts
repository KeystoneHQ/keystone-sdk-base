import {
  CryptoAccount as BaseCryptoAccount,
  DataItem,
} from "@keystonehq/bc-ur-registry";
import { validateEthCryptoAccount } from "./pathValidation";

/**
 * Ethereum account decoder with MetaMask derivation-path validation.
 */
export class CryptoAccount extends BaseCryptoAccount {
  public static fromDataItem = (dataItem: DataItem): CryptoAccount => {
    const account = BaseCryptoAccount.fromDataItem(dataItem);
    validateEthCryptoAccount(account);
    Object.setPrototypeOf(account, CryptoAccount.prototype);
    return account as CryptoAccount;
  };

  public static fromCBOR = (cborPayload: Buffer): CryptoAccount => {
    const account = BaseCryptoAccount.fromCBOR(cborPayload);
    validateEthCryptoAccount(account);
    Object.setPrototypeOf(account, CryptoAccount.prototype);
    return account as CryptoAccount;
  };
}

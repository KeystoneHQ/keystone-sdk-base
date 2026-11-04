import { CryptoAccount, CryptoHDKey } from "@keystonehq/bc-ur-registry";

const ETHEREUM_PATH_PREFIX = "44'/60'";

export const ETH_ACCOUNT_DATA_ERROR_CODE =
  "KeystoneError#invalid_ethereum_account_data";

const ETH_ACCOUNT_DATA_ERROR_MESSAGE =
  "This QR code contains unsupported Ethereum account data. " +
  "Please select a supported derivation path on your Keystone device and scan it again.";

/** Error raised when a Keystone Ethereum account export fails validation. */
export class EthereumAccountDataError extends Error {
  public readonly code = ETH_ACCOUNT_DATA_ERROR_CODE;

  public readonly reason: string;

  constructor(reason: string) {
    super(ETH_ACCOUNT_DATA_ERROR_MESSAGE);
    this.name = "EthereumAccountDataError";
    this.reason = reason;
  }
}

const invalidPath = (reason: string): EthereumAccountDataError =>
  new EthereumAccountDataError(reason);

const startsWithPathPrefix = (path: string, prefix: string): boolean =>
  path === prefix || path.startsWith(`${prefix}/`);

/**
 * Validate an Ethereum extended public key exported for MetaMask.
 *
 * Ethereum account exports must use the BIP44 Ethereum coin type prefix.
 *
 * @param key - The decoded extended public key.
 */
export const validateEthCryptoHDKey = (key: CryptoHDKey): void => {
  if (key.isPrivateKey()) {
    throw invalidPath("Ethereum HD key must not contain a private key");
  }

  const origin = key.getOrigin()?.getPath();

  if (!origin || !startsWithPathPrefix(origin, ETHEREUM_PATH_PREFIX)) {
    throw invalidPath(
      `unsupported Ethereum HD key origin: ${origin ?? "missing"}`
    );
  }
};

/**
 * Validate the concrete public keys exported for Ledger Live account
 * discovery.
 *
 * Every exported public key must use the BIP44 Ethereum coin type prefix. The
 * number of descriptors and the path suffix are not restricted.
 *
 * @param account - The decoded account containing public key descriptors.
 */
export const validateEthCryptoAccount = (account: CryptoAccount): void => {
  const descriptors = account.getOutputDescriptors();

  descriptors.forEach((descriptor, descriptorIndex) => {
    const key = descriptor.getHDKey();
    if (!key) {
      throw invalidPath(
        `Ethereum account descriptor ${descriptorIndex} does not contain an HD public key`
      );
    }

    if (key.isPrivateKey()) {
      throw invalidPath(
        `Ethereum account descriptor ${descriptorIndex} must not contain a private key`
      );
    }

    const path = key.getOrigin()?.getPath();
    if (!path || !startsWithPathPrefix(path, ETHEREUM_PATH_PREFIX)) {
      throw invalidPath(
        `unsupported Ethereum account path: ${path ?? "missing"}`
      );
    }
  });
};

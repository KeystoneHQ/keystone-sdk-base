import { publicToAddress } from "@ethereumjs/util";
import { CryptoAccount, CryptoHDKey } from "@keystonehq/bc-ur-registry";

const BIP44_STANDARD_ORIGIN = "44'/60'/0'";
const BIP44_STANDARD_CHILDREN = "0/*";
const LEDGER_LEGACY_CHILDREN = "*";
const EXPORTED_ACCOUNT_COUNT = 10;

const LEDGER_LIVE_PATH = /^44'\/60'\/(\d+)'\/0\/0$/u;

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

/**
 * Validate an Ethereum extended public key exported for MetaMask.
 *
 * MetaMask derives BIP44 Standard or Ledger Legacy addresses from the
 * account-level xpub. Both modes use the same fixed account origin and differ
 * only in their children path (`0/*` or `*`).
 *
 * @param key - The decoded extended public key.
 */
export const validateEthCryptoHDKey = (key: CryptoHDKey): void => {
  if (key.isPrivateKey()) {
    throw invalidPath("Ethereum HD key must not contain a private key");
  }

  const origin = key.getOrigin()?.getPath();
  const children = key.getChildren()?.getPath();

  if (origin !== BIP44_STANDARD_ORIGIN) {
    throw invalidPath(
      `unsupported Ethereum HD key origin: ${origin ?? "missing"}`
    );
  }

  if (
    children !== undefined &&
    children !== BIP44_STANDARD_CHILDREN &&
    children !== LEDGER_LEGACY_CHILDREN
  ) {
    throw invalidPath(`unsupported Ethereum HD key children path: ${children}`);
  }
};

/**
 * Validate the concrete public keys exported for Ledger Live account
 * discovery.
 *
 * The device exports exactly ten public keys. Each path index must occur
 * once, and all descriptors must use the same derivation scheme.
 *
 * @param account - The decoded account containing public key descriptors.
 */
export const validateEthCryptoAccount = (account: CryptoAccount): void => {
  const descriptors = account.getOutputDescriptors();

  if (descriptors.length !== EXPORTED_ACCOUNT_COUNT) {
    throw invalidPath(
      `expected ${EXPORTED_ACCOUNT_COUNT} Ethereum public keys, received ${descriptors.length}`
    );
  }

  const indexes = new Set<number>();
  const addresses = new Set<string>();

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
    if (!path) {
      throw invalidPath(
        `Ethereum account descriptor ${descriptorIndex} has no derivation path`
      );
    }

    const liveMatch = LEDGER_LIVE_PATH.exec(path);
    const index = Number(liveMatch?.[1]);

    if (
      !liveMatch ||
      !Number.isInteger(index) ||
      index < 0 ||
      index >= EXPORTED_ACCOUNT_COUNT
    ) {
      throw invalidPath(`unsupported Ethereum account path: ${path}`);
    }

    if (indexes.has(index)) {
      throw invalidPath(`duplicate Ethereum account path index: ${index}`);
    }
    indexes.add(index);

    const publicKey = key.getKey();
    if (!publicKey) {
      throw invalidPath(
        `Ethereum account descriptor ${descriptorIndex} has no public key`
      );
    }

    let address: string;
    try {
      address = Buffer.from(publicToAddress(publicKey, true)).toString("hex");
    } catch {
      throw invalidPath(
        `Ethereum account descriptor ${descriptorIndex} has an invalid public key`
      );
    }

    if (addresses.has(address)) {
      throw invalidPath(`duplicate Ethereum account address: 0x${address}`);
    }
    addresses.add(address);
  });

  for (let index = 0; index < EXPORTED_ACCOUNT_COUNT; index += 1) {
    if (!indexes.has(index)) {
      throw invalidPath(`missing Ethereum account path index: ${index}`);
    }
  }
};

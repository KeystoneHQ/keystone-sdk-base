// @ts-nocheck

import HDKey from "hdkey";
import {
  CryptoAccount,
  CryptoHDKey,
  CryptoKeypath,
  CryptoOutput,
  ETH_ACCOUNT_DATA_ERROR_CODE,
  EthereumAccountDataError,
  PathComponent,
} from "../src";

const fingerprint = Buffer.from("e9181cf3", "hex");

const keypath = (path: string): CryptoKeypath =>
  new CryptoKeypath(
    path.split("/").map((component) => {
      const hardened = component.endsWith("'");
      const value = component.replace("'", "");
      return new PathComponent({
        index: value === "*" ? undefined : Number(value),
        hardened,
      });
    }),
    fingerprint
  );

const publicKey = (index: number): Buffer =>
  HDKey.fromMasterSeed(Buffer.alloc(32, index + 1)).publicKey;

const makeHDKey = (
  origin: string,
  index = 0,
  children?: string,
  isPrivateKey = false
): CryptoHDKey =>
  new CryptoHDKey({
    isMaster: false,
    isPrivateKey,
    key: isPrivateKey ? Buffer.alloc(32, index + 1) : publicKey(index),
    chainCode: Buffer.alloc(32, index + 1),
    origin: keypath(origin),
    children: children ? keypath(children) : undefined,
    parentFingerprint: fingerprint,
  });

const makeAccount = (
  pathForIndex: (index: number) => string,
  count = 10,
  isPrivateForIndex: (index: number) => boolean = () => false
): CryptoAccount =>
  new CryptoAccount(
    fingerprint,
    Array.from(
      { length: count },
      (_, index) =>
        new CryptoOutput(
          [],
          makeHDKey(
            pathForIndex(index),
            index,
            undefined,
            isPrivateForIndex(index)
          )
        )
    )
  );

const expectAccountDataError = (
  action: () => unknown,
  reason: string
): void => {
  try {
    action();
    throw new Error("Expected EthereumAccountDataError");
  } catch (error) {
    expect(error).toBeInstanceOf(EthereumAccountDataError);
    expect(error).toMatchObject({
      code: ETH_ACCOUNT_DATA_ERROR_CODE,
      reason: expect.stringContaining(reason),
    });
    expect((error as Error).message).toBe(
      "This QR code contains unsupported Ethereum account data. " +
        "Please select a supported derivation path on your Keystone device and scan it again."
    );
  }
};

describe("Ethereum public key path validation", () => {
  describe("CryptoHDKey", () => {
    it("accepts a BIP44 Standard account xpub with implicit children", () => {
      const decoded = CryptoHDKey.fromCBOR(makeHDKey("44'/60'/0'").toCBOR());

      expect(decoded).toBeInstanceOf(CryptoHDKey);
      expect(decoded.getOrigin().getPath()).toBe("44'/60'/0'");
    });

    it("accepts a BIP44 Standard account xpub with 0/* children", () => {
      expect(() =>
        CryptoHDKey.fromCBOR(makeHDKey("44'/60'/0'", 0, "0/*").toCBOR())
      ).not.toThrow();
    });

    it("accepts a Ledger Legacy account xpub with * children", () => {
      expect(() =>
        CryptoHDKey.fromCBOR(makeHDKey("44'/60'/0'", 0, "*").toCBOR())
      ).not.toThrow();
    });

    it.each(["44'/60'", "44'/60'/1'", "44'/60'/0'/0"])(
      "accepts an Ethereum-prefixed origin %s",
      (origin) => {
        expect(() =>
          CryptoHDKey.fromCBOR(makeHDKey(origin).toCBOR())
        ).not.toThrow();
      }
    );

    it.each(["44'/0'/0'", "49'/60'/0'", "44'/601'/0'"])(
      "rejects unsupported origin %s",
      (origin) => {
        expectAccountDataError(
          () => CryptoHDKey.fromCBOR(makeHDKey(origin).toCBOR()),
          "unsupported Ethereum HD key origin"
        );
      }
    );

    it("does not restrict children paths", () => {
      expect(() =>
        CryptoHDKey.fromCBOR(makeHDKey("44'/60'/0'", 0, "1/*").toCBOR())
      ).not.toThrow();
    });

    it("rejects a private HD key", () => {
      expectAccountDataError(
        () =>
          CryptoHDKey.fromCBOR(
            makeHDKey("44'/60'/0'", 0, "0/*", true).toCBOR()
          ),
        "must not contain a private key"
      );
    });
  });

  describe("CryptoAccount", () => {
    it.each([1, 10, 20])(
      "accepts %i Ethereum-prefixed public keys",
      (count) => {
        const decoded = CryptoAccount.fromCBOR(
          makeAccount((index) => `44'/60'/${index}'/0/0`, count).toCBOR()
        );

        expect(decoded).toBeInstanceOf(CryptoAccount);
        expect(decoded.getOutputDescriptors()).toHaveLength(count);
      }
    );

    it("accepts any suffix after the Ethereum prefix", () => {
      expect(() =>
        CryptoAccount.fromCBOR(
          makeAccount((index) => `44'/60'/0'/${index}`).toCBOR()
        )
      ).not.toThrow();
    });

    it("rejects a descriptor without the Ethereum prefix", () => {
      expectAccountDataError(
        () =>
          CryptoAccount.fromCBOR(
            makeAccount((index) =>
              index === 9 ? "44'/61'/0'/0/0" : `44'/60'/${index}'/0/0`
            ).toCBOR()
          ),
        "unsupported Ethereum account path"
      );
    });

    it("rejects an account descriptor containing a private key", () => {
      expectAccountDataError(
        () =>
          CryptoAccount.fromCBOR(
            makeAccount(
              (index) => `44'/60'/${index}'/0/0`,
              10,
              (index) => index === 4
            ).toCBOR()
          ),
        "descriptor 4 must not contain a private key"
      );
    });
  });
});

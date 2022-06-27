import { CryptoHDKey } from "@keystonehq/bc-ur-registry";
import { CryptoKeypath, PathComponent, CryptoMultiAccounts } from "../src";

describe("CryptoMultiAccount", () => {
  it("should generate CryptoMultiAccount", () => {
    const originKeyPath = new CryptoKeypath([
      new PathComponent({ index: 44, hardened: true }),
      new PathComponent({ index: 397, hardened: true }),
      new PathComponent({ index: 0, hardened: true }),
      new PathComponent({ index: 0, hardened: true }),
      new PathComponent({ index: 1, hardened: true })
    ]);

    const cryptoHDKey = new CryptoHDKey({
      isMaster: false,
      key: Buffer.from(
        "4d589f5ca675348e9fd88b8492a4fbcce622afc41ad54cad787c2bb97bacb939",
        "hex"
      ),
      origin: originKeyPath
    });

    const multiAccounts = new CryptoMultiAccounts(
      Buffer.from("78230804", "hex"),
      [cryptoHDKey],
      "keystone"
    );
    const hex = multiAccounts.toCBOR().toString("hex");
    expect(hex).toBe(
      "a3011a782308040281d9012fa20358204d589f5ca675348e9fd88b8492a4fbcce622afc41ad54cad787c2bb97bacb93906d90130a1018a182cf519018df500f500f501f503686b657973746f6e65"
    );
    const ur = multiAccounts.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:crypto-multi-accounts/otadcykscnayaaaolytaaddloeaxhdcxgthdnehholkpeemnnetplulrmooxzosfvacppesscytlgspmkskednrhkgpsrhesamtaaddyoyadlecsdwykcfadlgykaeykaeykadykaxisjeihkkjkjyjljtihascsbzgr"
    );
  });

  it("should decode CryptoMultiAccount", () => {
    const hex =
      "a3011a782308040281d9012fa20358204d589f5ca675348e9fd88b8492a4fbcce622afc41ad54cad787c2bb97bacb93906d90130a1018a182cf519018df500f500f501f503686b657973746f6e65";
    const cryptoMultiAccounts = CryptoMultiAccounts.fromCBOR(
      Buffer.from(hex, "hex")
    );
    expect(cryptoMultiAccounts.getDevice()).toBe("keystone");
    expect(cryptoMultiAccounts.getMasterFingerprint().toString("hex")).toBe(
      "78230804"
    );
    expect(
      cryptoMultiAccounts
        .getKeys()[0]
        .getKey()
        .toString("hex")
    ).toBe("4d589f5ca675348e9fd88b8492a4fbcce622afc41ad54cad787c2bb97bacb939");
    expect(
      cryptoMultiAccounts
        .getKeys()[0]
        .getOrigin()
        .getPath()
    ).toBe("44'/397'/0'/0'/1'");
  });
});

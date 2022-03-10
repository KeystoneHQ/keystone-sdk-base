// @ts-nocheck

import { CryptoKeypath, PathComponent } from "../src";
import { CryptoHDKey } from "../src";

describe("CryptoHDKey", () => {
  it("test it can generate hd key for eth hd key", () => {
    const xfp = Buffer.from("e9181cf3", "hex");
    const originKeyPath = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 60, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
      ],
      xfp
    );

    const cryptoHDKey = new CryptoHDKey({
      isMaster: false,
      key: Buffer.from(
        "02eae4b876a8696134b868f88cc2f51f715f2dbedb7446b8e6edf3d4541c4eb67b",
        "hex"
      ),
      chainCode: Buffer.from(
        "d882718b7a42806803eeb17f7483f20620611adb88fc943c898dc5aba94c2819",
        "hex"
      ),
      parentFingerprint: Buffer.from("d32e4508", "hex"),
      origin: originKeyPath,
    });
    const expectedHex =
      "a403582102eae4b876a8696134b868f88cc2f51f715f2dbedb7446b8e6edf3d4541c4eb67b045820d882718b7a42806803eeb17f7483f20620611adb88fc943c898dc5aba94c281906d90130a20186182cf5183cf500f5021ae9181cf3081ad32e4508";
    expect(cryptoHDKey.toCBOR().toString("hex")).toEqual(expectedHex);

    const ur = cryptoHDKey.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:crypto-hdkey/oxaxhdclaowdverokopdinhseeroisyalksaykctjshedprnuyjyfgrovawewftyghceglrpkgaahdcxtplfjsluknfwlaisaxwypalbjylswzamcxhscyuyloztmwfnldlgskpyptgsdecfamtaaddyoeadlncsdwykcsfnykaeykaocywlcscewfaycytedmfeayghlptnin"
    );
  });
});

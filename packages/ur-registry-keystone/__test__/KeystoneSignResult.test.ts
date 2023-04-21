// @ts-nocheck

import { KeystoneSignResult, URRegistryDecoder } from "../src";

describe("keystone-sign-result", () => {
  it("should generate keystone-sign-result", () => {
    const result = Buffer.from(
      "010101010101",
      "hex"
    );

    const keystoneSignResult = new KeystoneSignResult(
      result,
    );

    const cborHex = keystoneSignResult.toCBOR().toString("hex");
    const ur = keystoneSignResult.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:keystone-sign-result/oyadfgadadadadadaduryteegs"
    );
    const keystoneSignResultDecoded = KeystoneSignResult.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(keystoneSignResultDecoded.getSignResult().toString("hex")).toEqual(
      "010101010101"
    );

    const urDecoder = new URRegistryDecoder();
    urDecoder.receivePart('ur:keystone-sign-result/oyadfgadadadadadaduryteegs');
    const decodeSig = KeystoneSignResult.fromCBOR(urDecoder.resultUR().cbor);
    expect(decodeSig.getSignResult().toString('hex')).toEqual('010101010101');
  });
});

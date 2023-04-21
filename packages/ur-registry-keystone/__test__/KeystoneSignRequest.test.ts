// @ts-nocheck

import {
  KeystoneSignRequest,
} from "../src";

describe("keystone-sign-request", () => {
  it("should generate keystone-sign-request", () => {
    const signData = Buffer.from(
      "010101010101",
      "hex"
    );

    const keystoneSignRequest = new KeystoneSignRequest({
      signData,
      origin: "keystone wallet",
    });

    const cborHex = keystoneSignRequest.toCBOR().toString("hex");
    const ur = keystoneSignRequest.toUREncoder(1000).nextPart();

    expect(ur).toBe(
      "ur:keystone-sign-request/oeadfgadadadadadadaojljeihkkjkjyjljtihcxkthsjzjzihjyvlrpiskg"
    );
    const keystoneSignRequestDecoded = KeystoneSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(keystoneSignRequest.getOrigin()).toBe("keystone wallet");
    expect(keystoneSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "010101010101"
    );
  });

  it("should construct an keystoneSignRequest object from string", () => {
    const signData = Buffer.from(
      "010101010101",
      "hex"
    );

    const request = KeystoneSignRequest.constructKeystoneRequest(
      signData,
      "keystone wallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:keystone-sign-request/oeadfgadadadadadadaojljeihkkjkjyjljtihcxkthsjzjzihjyvlrpiskg"
    );
  });
});

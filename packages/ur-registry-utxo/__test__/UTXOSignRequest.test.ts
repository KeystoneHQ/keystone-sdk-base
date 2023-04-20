// @ts-nocheck

import {
  UTXOSignRequest,
} from "../src";

describe("utxo-sign-request", () => {
  it("should generate utxo-sign-request", () => {
    const utxoData = Buffer.from(
      "010101010101",
      "hex"
    );

    const utxoSignRequest = new UTXOSignRequest({
      signData: utxoData,
      origin: "utxo wallet",
    });

    const cborHex = utxoSignRequest.toCBOR().toString("hex");
    const ur = utxoSignRequest.toUREncoder(1000).nextPart();

    expect(ur).toBe(
      "ur:utxo-sign-request/oeadfgadadadadadadaojekpjyksjlcxkthsjzjzihjygujzfncx"
    );
    const utxoSignRequestDecoded = UTXOSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(utxoSignRequest.getOrigin()).toBe("utxo wallet");
    expect(utxoSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "010101010101"
    );
  });

  it("should construct an utxoSignRequest object from string", () => {
    const utxoData = Buffer.from(
      "010101010101",
      "hex"
    );

    const request = UTXOSignRequest.constructUTXORequest(
      utxoData,
      "utxo wallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:utxo-sign-request/oeadfgadadadadadadaojekpjyksjlcxkthsjzjzihjygujzfncx"
    );
  });
});

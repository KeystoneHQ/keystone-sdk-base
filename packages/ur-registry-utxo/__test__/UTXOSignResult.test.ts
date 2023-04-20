// @ts-nocheck

import { UTXOSignResult, URRegistryDecoder } from "../src";

describe("tron-sign-result", () => {
  it("should generate tron-sign-result", () => {
    const result = Buffer.from(
      "010101010101",
      "hex"
    );

    const utxoSignResult = new UTXOSignResult(
      result,
    );

    const cborHex = utxoSignResult.toCBOR().toString("hex");
    const ur = utxoSignResult.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:utxo-sign-result/oyaefgadadadadadadbwgueetd"
    );
    const utxoSignResultDecoded = UTXOSignResult.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(utxoSignResultDecoded.getSignResult().toString("hex")).toEqual(
      "010101010101"
    );

    const urDecoder = new URRegistryDecoder();
    urDecoder.receivePart('ur:utxo-sign-result/oyaefgadadadadadadbwgueetd');
    const decodeSig = UTXOSignResult.fromCBOR(urDecoder.resultUR().cbor);
    expect(decodeSig.getSignResult().toString('hex')).toEqual('010101010101');
  });
});

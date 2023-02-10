// @ts-nocheck

import { EvmSignature, URRegistryDecoder } from "../src";
import * as uuid from "uuid";

describe("evm-signature", () => {
  it("should generate evm-signature", () => {
    const signature = Buffer.from(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e",
      "hex"
    );
    const requestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(requestId) as Uint8Array;

    const evmSignature = new EvmSignature(
      signature,
      Buffer.from(idBuffer),
    );

    const cborHex = evmSignature.toCBOR().toString("hex");
    const ur = evmSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:evm-signature/oeadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzflvdrebeksfyamuroygtnettfneteebglugaskjnursamnuyaoskaajpcfktnyuewebgadkbdlnebyjtlskodmlnyaahstehckpdmyqzaxzmclmhbaammefwpazoehbafezmwpki"
    );
    const evmSignatureDecoded = EvmSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(evmSignatureDecoded.getRequestId())).toBe(
      requestId
    );
    expect(evmSignatureDecoded.getSignature().toString("hex")).toEqual(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e"
    );

    const urDecoder = new URRegistryDecoder();
    urDecoder.receivePart('ur:evm-signature/oeadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzflvdrebeksfyamuroygtnettfneteebglugaskjnursamnuyaoskaajpcfktnyuewebgadkbdlnebyjtlskodmlnyaahstehckpdmyqzaxzmclmhbaammefwpazoehbafezmwpki');
    const decodeSig = EvmSignature.fromCBOR(urDecoder.resultUR().cbor);
    expect(decodeSig.getSignature().toString('hex')).toEqual('47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e');
    expect(decodeSig.getRequestId().toString('hex')).toEqual('9b1deb4d3b7d4bad9bdd2b0d7b3dcb6d');
  });
});

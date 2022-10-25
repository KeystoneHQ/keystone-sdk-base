// @ts-nocheck

import { AptosSignature } from "../src";
import * as uuid from "uuid";

describe("aptos-signature", () => {
  it("test should generate aptos-signature", () => {
    const signature = Buffer.from(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e",
      "hex"
    );
    const aptosRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(aptosRequestId) as Uint8Array;
    const authPubKey = Buffer.from(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
      "hex"
    );

    const aptosSignature = new AptosSignature(
      signature,
      Buffer.from(idBuffer),
      authPubKey
    );

    const cborHex = aptosSignature.toCBOR().toString("hex");
    const ur = aptosSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:aptos-signature/otadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzflvdrebeksfyamuroygtnettfneteebglugaskjnursamnuyaoskaajpcfktnyuewebgadkbdlnebyjtlskodmlnyaahstehckpdmyqzaxzmclmhbaammefwpazoehbaaxhdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtgloynbcfut"
    );
    const aptosSignatureDecoded = AptosSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(aptosSignatureDecoded.getRequestId())).toBe(
      aptosRequestId
    );
    expect(aptosSignatureDecoded.getSignature().toString("hex")).toEqual(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e"
    );
  });
});

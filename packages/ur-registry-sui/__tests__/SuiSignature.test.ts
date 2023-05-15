// @ts-nocheck

import { SuiSignature } from "../src";
import * as uuid from "uuid";

describe("sui-signature", () => {
  it("test should generate sui-signature", () => {
    const signature = Buffer.from(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e",
      "hex"
    );
    const requestId = Buffer.from(uuid.parse("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"));
    const pubKey = Buffer.from(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
      "hex"
    );

    const suiSignature = new SuiSignature(
      signature,
      requestId,
      pubKey
    );

    const cborHex = suiSignature.toCBOR().toString("hex");
    const ur = suiSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-signature/otadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzflvdrebeksfyamuroygtnettfneteebglugaskjnursamnuyaoskaajpcfktnyuewebgadkbdlnebyjtlskodmlnyaahstehckpdmyqzaxzmclmhbaammefwpazoehbaaxhdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtgloynbcfut"
    );
    const suiSignatureDecoded = SuiSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(suiSignatureDecoded.getRequestId())).toBe(uuid.stringify(requestId));
    expect(suiSignatureDecoded.getSignature().toString("hex")).toEqual(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e"
    );
  });
});

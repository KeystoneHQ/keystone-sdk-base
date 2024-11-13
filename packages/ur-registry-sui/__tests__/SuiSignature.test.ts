// @ts-nocheck

import { SuiSignature } from "../src";
import * as uuid from "uuid";

describe("sui-signature", () => {
  it("test should generate sui-signature", () => {
    const signature = Buffer.from(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e",
      "hex"
    );
    const requestId = Buffer.from(
      uuid.parse("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d")
    );
    const pubKey = Buffer.from(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
      "hex"
    );

    const suiSignature = new SuiSignature(signature, requestId, pubKey);

    const cborHex = suiSignature.toCBOR().toString("hex");
    const ur = suiSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-signature/otadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzflvdrebeksfyamuroygtnettfneteebglugaskjnursamnuyaoskaajpcfktnyuewebgadkbdlnebyjtlskodmlnyaahstehckpdmyqzaxzmclmhbaammefwpazoehbaaxhdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtgloynbcfut"
    );
    const suiSignatureDecoded = SuiSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(suiSignatureDecoded.getRequestId())).toBe(
      uuid.stringify(requestId)
    );
    expect(suiSignatureDecoded.getSignature().toString("hex")).toEqual(
      "47e7b510784406dfa14d9fd13c3834128b49c56ddfc28edb02c5047219779adeed12017e2f9f116e83762e86f805c7311ea88fb403ff21900e069142b1fb310e"
    );
  });

  it("should sign messageHash result is equal to the request", () => {
    const signature = Buffer.from(
      "2b2596eeb2bf21c0444ee4a85960447dbf5144eab6f855594fa836ed1e100bc6e32c04ad15e58d04ac669623f2125fe7154fe3caa7baaaf0243d64f88cd9e903",
      "hex"
    );
    const requestId = Buffer.from("c267e8c4f363464e9f24c53aabf84fe0", "hex");
    const requestIdHex = "c267e8c4f363464e9f24c53aabf84fe0";
    const formattedUUID = [
      requestIdHex.slice(0, 8),
      requestIdHex.slice(8, 12),
      requestIdHex.slice(12, 16),
      requestIdHex.slice(16, 20),
      requestIdHex.slice(20, 32),
    ].join("-");
    const receiveRequestId = Buffer.from(uuid.parse(formattedUUID));
    expect(requestId.toString("hex")).toBe(receiveRequestId.toString("hex"));
    const pubKey = Buffer.from(
      "edbe1b9b3b040ff88fbfa4ccda6f5f8d404ae7ffe35f9b220dec08679d5c336f",
      "hex"
    );

    const suiSignature = new SuiSignature(signature, requestId, pubKey);

    const ur = suiSignature.toUREncoder(1000).nextPart().toLocaleUpperCase();
    expect(ur).toBe(
      "UR:SUI-SIGNATURE/OTADTPDAGDSAIOVSSSWFIAFGGLNEDKSKFTPYYAGWVTAOHDFZDNDAMTWYPRRSCLRTFYGLVEPDHKHNFYKIRSGYFYWDRPYAGOHKGWPDENWECKBEBDSWVLDWAAPMBZVWLGAAPSIYMTCNWZBGHEVDBZGWVLSGOSRDPKWTDKFSIEYALKTAWLAXAXHDCXWERNCWNDFRAABSYAMYRSOXSFTNJLHELGFZGEVDZMVLHENDCPBTWPAYIONTHHEOJLDSLULEFW"
    );
  });
});

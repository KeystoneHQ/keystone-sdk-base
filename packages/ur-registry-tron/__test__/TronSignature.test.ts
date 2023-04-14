// @ts-nocheck

import { TronSignature, URRegistryDecoder } from "../src";
import * as uuid from "uuid";

describe("tron-signature", () => {
  it("should generate tron-signature", () => {
    const signature = Buffer.from(
      "47b1f77b3e30cfbbfa41d795dd34475865240617dd1c5a7bad526f5fd89e52cd057c80b665cc2431efab53520e2b1b92a0425033baee915df858ca1c588b0a1800",
      "hex"
    );
    const requestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(requestId) as Uint8Array;

    const tronSignature = new TronSignature(
      signature,
      Buffer.from(idBuffer),
    );

    const cborHex = tronSignature.toCBOR().toString("hex");
    const ur = tronSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:tron-signature/oeadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfpflpaylkgfmdytkrkzsfptsmduteeflhdihdkamchutcehtkgpmgmjlhetpnngmsnahkelarpihsfdkehwspygugmbadncwmonbfwgdeordwymehlyahdsgcehdlubkcsaebbckfpwy"
    );
    const tronSignatureDecoded = TronSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(tronSignatureDecoded.getRequestId())).toBe(
      requestId
    );
    expect(tronSignatureDecoded.getSignature().toString("hex")).toEqual(
      "47b1f77b3e30cfbbfa41d795dd34475865240617dd1c5a7bad526f5fd89e52cd057c80b665cc2431efab53520e2b1b92a0425033baee915df858ca1c588b0a1800"
    );

    const urDecoder = new URRegistryDecoder();
    urDecoder.receivePart('ur:tron-signature/oeadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfpflpaylkgfmdytkrkzsfptsmduteeflhdihdkamchutcehtkgpmgmjlhetpnngmsnahkelarpihsfdkehwspygugmbadncwmonbfwgdeordwymehlyahdsgcehdlubkcsaebbckfpwy');
    const decodeSig = TronSignature.fromCBOR(urDecoder.resultUR().cbor);
    expect(decodeSig.getSignature().toString('hex')).toEqual('47b1f77b3e30cfbbfa41d795dd34475865240617dd1c5a7bad526f5fd89e52cd057c80b665cc2431efab53520e2b1b92a0425033baee915df858ca1c588b0a1800');
    expect(decodeSig.getRequestId().toString('hex')).toEqual('9b1deb4d3b7d4bad9bdd2b0d7b3dcb6d');
  });
});

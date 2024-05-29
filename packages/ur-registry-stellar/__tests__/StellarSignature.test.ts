// @ts-nocheck

import { StellarSignature } from "../src";
import * as uuid from "uuid";

describe("stellar-sign-request", () => {
  it("test should generate stellar-signature", () => {
    const signature = Buffer.from(
      "d4f0a7bcd95bba1fbb1051885054730e3f47064288575aacc102fbbf6a9a14daa066991e360d3e3406c20c00a40973eff37c7d641e5b351ec4a99bfe86f335f7",
      "hex"
    );
    const stellarRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(stellarRequestId) as Uint8Array;

    const stellarSignature = new StellarSignature(
      signature,
      Buffer.from(idBuffer)
    );

    const cborHex = stellarSignature.toCBOR().toString("hex");
    const ur = stellarSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:stellar-signature/oeadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfztywtosrftahprdctrkbegylogdghjkbafhflamfwlohghtpsseaozorsimnybbtnnbiynlckenbtfmeeamsabnaeoxasjkwswfkekiieckhpecckssptndzelnwfecyldrcyhkws"
    );
    const StellarSignatureDecoded = StellarSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(StellarSignatureDecoded.getRequestId())).toBe(
      stellarRequestId
    );
    expect(StellarSignatureDecoded.getSignature().toString("hex")).toEqual(
      "d4f0a7bcd95bba1fbb1051885054730e3f47064288575aacc102fbbf6a9a14daa066991e360d3e3406c20c00a40973eff37c7d641e5b351ec4a99bfe86f335f7"
    );
  });
});

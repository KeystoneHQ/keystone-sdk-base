// @ts-nocheck

import { SolSignature } from "../src";
import * as uuid from "uuid";

describe("sol-sign-request", () => {
  it("test should generate sol-signature", () => {
    const signature = Buffer.from(
      "d4f0a7bcd95bba1fbb1051885054730e3f47064288575aacc102fbbf6a9a14daa066991e360d3e3406c20c00a40973eff37c7d641e5b351ec4a99bfe86f335f7",
      "hex"
    );
    const solRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(solRequestId) as Uint8Array;

    const solSignature = new SolSignature(signature, Buffer.from(idBuffer));

    const cborHex = solSignature.toCBOR().toString("hex");
    const ur = solSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sol-signature/oeadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfztywtosrftahprdctrkbegylogdghjkbafhflamfwlohghtpsseaozorsimnybbtnnbiynlckenbtfmeeamsabnaeoxasjkwswfkekiieckhpecckssptndzelnwfecyldrcyhkws"
    );
    const SolSignatureDecoded = SolSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(SolSignatureDecoded.getRequestId())).toBe(
      solRequestId
    );
    expect(SolSignatureDecoded.getSignature().toString("hex")).toEqual(
      "d4f0a7bcd95bba1fbb1051885054730e3f47064288575aacc102fbbf6a9a14daa066991e360d3e3406c20c00a40973eff37c7d641e5b351ec4a99bfe86f335f7"
    );
  });
});

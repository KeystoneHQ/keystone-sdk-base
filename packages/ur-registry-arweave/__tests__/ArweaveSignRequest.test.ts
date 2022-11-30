// @ts-nocheck

import { ArweaveSignRequest, SaltLen, SignType } from "../src";
import * as uuid from "uuid";

describe("arweave-sign-request", () => {
  it("test should generate arweave-sign-request", () => {
    const signData = Buffer.from(
      "af78f85b29d88a61ee49d36e84139ec8511c558f14612413f1503b8e6959adca",
      "hex"
    );

    const arweaveRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(arweaveRequestId) as Uint8Array;
    const masterFingerprint = Buffer.from("e9181cf3", "hex");

    const arweaveSignRequest = new ArweaveSignRequest({
      masterFingerprint,
      signData,
      requestId: Buffer.from(idBuffer),
      origin: "arconnect",
      signType: SignType.Transaction,
      saltLen: SaltLen.Zero,
    });

    const cborHex = arweaveSignRequest.toCBOR().toString("hex");
    const ur = arweaveSignRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:arweave-sign-request/oladcywlcscewfaotpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaxhdcxpeksyahpdttplehswygatejtlrbwnnspgycegomybbhsdkbwwngdfrmninhkpmsgaaadahaeaminhsjpiajljtjtihiajyislsiywf"
    );
    const arweaveSignRequestDecoded = ArweaveSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(arweaveSignRequest.getRequestId())).toBe(
      arweaveRequestId
    );
    expect(arweaveSignRequest.getOrigin()).toBe("arconnect");
    expect(arweaveSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "af78f85b29d88a61ee49d36e84139ec8511c558f14612413f1503b8e6959adca"
    );
    expect(arweaveSignRequestDecoded.getSignType()).toBe(SignType.Transaction);
    expect(arweaveSignRequestDecoded.getSaltLen()).toBe(SaltLen.Zero);
  });

  it("should construct an ArweaveSignRequest object from string", () => {
    const xfp = "e9181cf3";
    const signData = Buffer.from(
      "af78f85b29d88a61ee49d36e84139ec8511c558f14612413f1503b8e6959adca",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

    const request = ArweaveSignRequest.constructArweaveRequest(
      signData,
      xfp,
      SignType.Transaction,
      SaltLen.Zero,
      requestID,
      undefined,
      "arconnect"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:arweave-sign-request/oladcywlcscewfaotpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaxhdcxpeksyahpdttplehswygatejtlrbwnnspgycegomybbhsdkbwwngdfrmninhkpmsgaaadahaeaminhsjpiajljtjtihiajyislsiywf"
    );
  });
});

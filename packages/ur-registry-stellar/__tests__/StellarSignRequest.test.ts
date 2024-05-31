// @ts-nocheck

import { StellarSignRequest, SignType } from "../src";
import { CryptoKeypath, PathComponent } from "../src";
import * as uuid from "uuid";

describe("stellar-sign-request", () => {
  it("test should generate stellar-sign-reqeust", () => {
    const stellarData = Buffer.from(
      "01000103c8d842a2f17fd7aab608ce2ea535a6e958dffa20caf669b347b911c4171965530f957620b228bae2b94c82ddd4c093983a67365555b737ec7ddc1117e61c72e0000000000000000000000000000000000000000000000000000000000000000010295cc2f1f39f3604718496ea00676d6a72ec66ad09d926e3ece34f565f18d201020200010c0200000000e1f50500000000",
      "hex"
    );

    const signKeyPath = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 501, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
      ],
      Buffer.from("12345678", "hex")
    );

    const stellarRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(stellarRequestId) as Uint8Array;

    const stellarSignRequest = new StellarSignRequest({
      signData: stellarData,
      derivationPath: signKeyPath,
      requestId: Buffer.from(idBuffer),
      origin: "solflare",
      signType: SignType.Transaction,
    });

    const cborHex = stellarSignRequest.toCBOR().toString("hex");
    const ur = stellarSignRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:stellar-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdmtadaeadaxsptpfwoewnlbtspkrpaytodmonecolwlhdurzscxsgyninqdflrhbysschcfihgubsmdkocxprderdvorhgslfuttyrtmumkftioengogorlemwpkiuobychvacejpvtaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaebedthhsawnwfneenaajslrmtwdaeiojnimjpwpiypmastadsvlwpvlgwhfhecstdadaoaoaeadbnaoaeaeaeaevyykahaeaeaeaeaxtaaddyoeadlocsdwykcfadykykaeykaeykaocybgeehfksahisjkjljziyjzhsjpihamadkkgseofg"
    );
    const stellarSignRequestDecoded = StellarSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(stellarSignRequest.getRequestId())).toBe(
      stellarRequestId
    );
    expect(stellarSignRequest.getOrigin()).toBe("solflare");
    expect(stellarSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "01000103c8d842a2f17fd7aab608ce2ea535a6e958dffa20caf669b347b911c4171965530f957620b228bae2b94c82ddd4c093983a67365555b737ec7ddc1117e61c72e0000000000000000000000000000000000000000000000000000000000000000010295cc2f1f39f3604718496ea00676d6a72ec66ad09d926e3ece34f565f18d201020200010c0200000000e1f50500000000"
    );
    expect(stellarSignRequestDecoded.getSignType()).toBe(SignType.Transaction);
  });

  it("should construct an StellarSignRequest object from string", () => {
    const hdPath = "M/44'/501'/0'/0'";
    const xfp = "12345678";
    const stellarData = Buffer.from(
      "01000103c8d842a2f17fd7aab608ce2ea535a6e958dffa20caf669b347b911c4171965530f957620b228bae2b94c82ddd4c093983a67365555b737ec7ddc1117e61c72e0000000000000000000000000000000000000000000000000000000000000000010295cc2f1f39f3604718496ea00676d6a72ec66ad09d926e3ece34f565f18d201020200010c0200000000e1f50500000000",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

    const request = StellarSignRequest.constructStellarRequest(
      stellarData,
      hdPath,
      xfp,
      SignType.TransactionHash,
      requestID,
      undefined,
      "solflare"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:stellar-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdmtadaeadaxsptpfwoewnlbtspkrpaytodmonecolwlhdurzscxsgyninqdflrhbysschcfihgubsmdkocxprderdvorhgslfuttyrtmumkftioengogorlemwpkiuobychvacejpvtaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaebedthhsawnwfneenaajslrmtwdaeiojnimjpwpiypmastadsvlwpvlgwhfhecstdadaoaoaeadbnaoaeaeaeaevyykahaeaeaeaeaxtaaddyoeadlocsdwykcfadykykaeykaeykaocybgeehfksahisjkjljziyjzhsjpihamaovtfeidzt"
    );
  });
});

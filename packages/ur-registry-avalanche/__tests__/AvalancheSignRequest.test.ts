// @ts-nocheck

import { AvalancheSignRequest, AvalancheSignature } from "../src";

describe("avalanche-sign-request", () => {
  it("test should generate avalanche-sign-reqeust", () => {
    const avalancheData = Buffer.from(
      "00000000000000000001ed5f38341e436e5d46e2bb00b45d62ae97d1b050c64bc634ae10626739e35c4b0000000121e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff00000007000000000089544000000000000000000000000100000001512e7191685398f00663e12197a3d8f6012d9ea300000001db720ad6707915cc4751fb7e5491a3af74e127a1d81817abe9438590c0833fe10000000021e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff000000050000000000989680000000010000000000000000",
      "hex"
    );
    const mfp = "1250B6BC";
    const xpub =
      "xpub661MyMwAqRbcFFDMuFiGQmA1EqWxxgDLdtNvxxiucf9qkfoVrvwgnYyshxWoewWtkZ1aLhKoVDrpeDvn1YRqxX2szhGKi3UiSEv1hYRMF8q";
    const walletIndex = 0;

    const avalancheSignRequest = AvalancheSignRequest.constructAvalancheRequest(
      avalancheData,
      mfp,
      xpub,
      walletIndex
    );

    const request = AvalancheSignRequest.fromDataItem(
      avalancheSignRequest.toDataItem()
    );

    expect(request.getSignData().toString("hex")).toBe(
      "00000000000000000001ed5f38341e436e5d46e2bb00b45d62ae97d1b050c64bc634ae10626739e35c4b0000000121e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff00000007000000000089544000000000000000000000000100000001512e7191685398f00663e12197a3d8f6012d9ea300000001db720ad6707915cc4751fb7e5491a3af74e127a1d81817abe9438590c0833fe10000000021e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff000000050000000000989680000000010000000000000000"
    );
  });

  it("test parse signature", () => {
    const cbor = Buffer.from(
      "a201501a79a2072e114014837e792e003384c10258418d1b6e955f1b2a94aed0b2c29939d68bae89fce2d436cc814efc4731f4a43e8e78ae46e3fdd58e7e0f7c5fa7876239fe7ab0adb6a75c09a07132b741be62612000",
      "hex"
    );

    const signature = AvalancheSignature.fromCBOR(cbor);

    expect(signature.getSignature().toString("hex")).toBe(
      "8d1b6e955f1b2a94aed0b2c29939d68bae89fce2d436cc814efc4731f4a43e8e78ae46e3fdd58e7e0f7c5fa7876239fe7ab0adb6a75c09a07132b741be62612000"
    );
  });
});

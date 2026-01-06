// @ts-nocheck

import { AvalancheSignRequest, AvalancheSignature } from "../src";

describe("avalanche-sign-request", () => {
  it("test should generate avalanche-sign-reqeust", () => {
    const avalancheData = Buffer.from(
      "0000000000220000000100000000000000000000000000000000000000000000000000000000000000000000000221e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff0000000700000000006c2b4400000000000000000000000100000001b5e66be5c7093d1114d74940333c0c45f81092c521e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff00000007000000000176bbb400000000000000000000000100000001b5e66be5c7093d1114d74940333c0c45f81092c500000001cd53226620f4be2b6f6e43b1470f4f715b3bc7f40c4530cd5237a1c4156b537f0000000021e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff000000050000000001e2fb33000000010000000000000000",
      "hex"
    );
    const derivationPath = "m/44'/9000'/0'/0/0";
    const utxos = [];
    const xfp = '2d0bdabc'

    const avalancheSignRequest = AvalancheSignRequest.constructAvalancheRequest(
      avalancheData,
      derivationPath,
      utxos,
      xfp
    );
    console.log('-----avalancheSignRequest--------',avalancheSignRequest.toCBOR().toString('hex'))

    const request = AvalancheSignRequest.fromDataItem(
      avalancheSignRequest.toDataItem()
    );

    const path = request.getDerivationPath();
    expect(path).toBeDefined();
    expect(path.getPath()).toBe("44'/9000'/0'/0/0");

    const recoveredXfp = request.getDerivationPath().getSourceFingerprint().toString('hex');
    expect(recoveredXfp).toBe(xfp)

    expect(request.getSignData().toString("hex")).toBe(
      "0000000000220000000100000000000000000000000000000000000000000000000000000000000000000000000221e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff0000000700000000006c2b4400000000000000000000000100000001b5e66be5c7093d1114d74940333c0c45f81092c521e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff00000007000000000176bbb400000000000000000000000100000001b5e66be5c7093d1114d74940333c0c45f81092c500000001cd53226620f4be2b6f6e43b1470f4f715b3bc7f40c4530cd5237a1c4156b537f0000000021e67317cbc4be2aeb00677ad6462778a8f52274b9d605df2591b23027a87dff000000050000000001e2fb33000000010000000000000000"
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

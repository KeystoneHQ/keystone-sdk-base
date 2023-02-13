// @ts-nocheck

import {
  EvmSignRequest,
  CryptoKeypath,
  PathComponent,
  SignDataType,
} from "../src";
import * as uuid from "uuid";

describe("evm-sign-request", () => {
  it("should generate evm-sign-request", () => {
    const evmData = Buffer.from(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
      "hex"
    );
    const customChainIdentifier = 9000;

    const signKeyPath = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 9000, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: false }),
        new PathComponent({ index: 0, hardened: false })
      ],
      Buffer.from("78230804", "hex")
    );

    const evmRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(evmRequestId) as Uint8Array;
    const address = Buffer.from("evmos13nmjt4hru5ag0c6q3msk0srs55qd3dtme8wgep");

    const evmSignRequest = new EvmSignRequest({
      requestId: Buffer.from(idBuffer),
      signData: evmData,
      dataType: SignDataType.cosmosAmino,
      customChainIdentifier,
      derivationPath: signKeyPath,
      address,
      origin: "evm wallet",
    });

    const cborHex = evmSignRequest.toCBOR().toString("hex");
    const ur = evmSignRequest.toUREncoder(1000).nextPart();

    expect(ur).toBe(
      "ur:evm-sign-request/osadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtglaxaoaacfcndeahtaaddyoeadlecsdwykcfcndeykaeykaewkaewkaocykscnayaaamhddwihkojnjljkeheojtjnimjyeeisjpkpechsiodyiaenjseojnjkjedyjkjpjkececjsieeoiejyjnihetktioihjoatimihkojncxkthsjzjzihjyvdlnmwbd"
    );
    const evmSignRequestDecoded = EvmSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(evmSignRequest.getRequestId())).toBe(
      evmRequestId
    );
    expect(evmSignRequest.getOrigin()).toBe("evm wallet");
    expect(evmSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e"
    );
    expect(
      evmSignRequestDecoded.getDerivationPath()
    ).toEqual("44'/9000'/0'/0/0");
    expect(evmSignRequestDecoded.getDataype()).toBe(SignDataType.cosmosAmino);
    expect(evmSignRequestDecoded.getCustomChainIdentifier()).toBe(customChainIdentifier);
    expect(evmSignRequestDecoded.getAddress()).toEqual(address);
  });

  it("should construct an evmSignRequest object from string", () => {
    const customChainIdentifier = 9000;
    const derivationHdPath = "m/44'/9000'/0'/0/0";
    const xfp = "78230804";
    const evmData = Buffer.from(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const address = Buffer.from("evmos13nmjt4hru5ag0c6q3msk0srs55qd3dtme8wgep");

    const request = EvmSignRequest.constructEvmRequest(
      requestID,
      xfp,
      evmData,
      SignDataType.cosmosAmino,
      customChainIdentifier,
      derivationHdPath,
      address,
      "evm wallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:evm-sign-request/osadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtglaxaoaacfcndeahtaaddyoeadlecsdwykcfcndeykaeykaewkaewkaocykscnayaaamhddwihkojnjljkeheojtjnimjyeeisjpkpechsiodyiaenjseojnjkjedyjkjpjkececjsieeoiejyjnihetktioihjoatimihkojncxkthsjzjzihjyvdlnmwbd"
    );
  });
});

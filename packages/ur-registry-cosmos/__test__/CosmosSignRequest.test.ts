// @ts-nocheck

import {
    CosmosSignRequest,
    CryptoKeypath,
    PathComponent,
    SignDataType,
  } from "../src";
  import * as uuid from "uuid";


  describe("cosmos-sign-request", () => {
    it("should generate cosmos-sign-request", () => {
      const cosmosData = Buffer.from(
        "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
        "hex"
      );

      const signKeyPath0 = new CryptoKeypath(
        [
          new PathComponent({ index: 44, hardened: true }),
          new PathComponent({ index: 118, hardened: true }),
          new PathComponent({ index: 0, hardened: true }),
          new PathComponent({ index: 0, hardened: false }),
          new PathComponent({ index: 0, hardened: false })
        ],
        Buffer.from("78230804", "hex")
      );
      const signKeyPath1 = new CryptoKeypath(
        [
          new PathComponent({ index: 44, hardened: true }),
          new PathComponent({ index: 529, hardened: true }),
          new PathComponent({ index: 0, hardened: true }),
          new PathComponent({ index: 0, hardened: false }),
          new PathComponent({ index: 0, hardened: false })
        ],
        Buffer.from("78230805", "hex")
      );
  
      const cosmosRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
      const idBuffer = uuid.parse(cosmosRequestId) as Uint8Array;
  
      const cosmosSignRequest = new CosmosSignRequest({
        requestId: Buffer.from(idBuffer),
        signData: cosmosData,
        dataType: SignDataType.amino,
        derivationPaths: [signKeyPath0, signKeyPath1],
        addresses: [
            "cosmos13nmjt4hru5ag0c6q3msk0srs55qd3dtme8wgep",
            "secret1e63tmjmhsac8ja86gk8kh06uqxh2h9hwkcs5cs"
          ],
        origin: "cosmos wallet",
      });
  
      const cborHex = cosmosSignRequest.toCBOR().toString("hex");
      const ur = cosmosSignRequest.toUREncoder(1000).nextPart();

      expect(ur).toBe(
        "ur:cosmos-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtglaxadaalftaaddyoeadlecsdwykcskoykaeykaewkaewkaocykscnayaataaddyoeadlecsdwykcfaobyykaeykaewkaewkaocykscnayahahlfksdpiajljkjnjljkeheojtjnimjyeeisjpkpechsiodyiaenjseojnjkjedyjkjpjkececjsieeoiejyjnihetktioihjoksdpjkihiajpihjyehiheneojyjnimjnisjkhsiaetimhseteniojeetjeisdyenkpjsksiseyisesisktjeiajkeciajkamjniajljkjnjljkcxkthsjzjzihjytylgwfat"
      );
      const cosmosSignRequestDecoded = CosmosSignRequest.fromCBOR(
        Buffer.from(cborHex, "hex")
      );
      expect(uuid.stringify(cosmosSignRequest.getRequestId())).toBe(
        cosmosRequestId
      );
      expect(cosmosSignRequest.getOrigin()).toBe("cosmos wallet");
      expect(cosmosSignRequestDecoded.getSignData().toString("hex")).toEqual(
        "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e"
      );
      expect(
        cosmosSignRequestDecoded.getDerivationPaths()[0]
      ).toEqual("44'/118'/0'/0/0");
      expect(
        cosmosSignRequestDecoded.getDerivationPaths()[1]
      ).toEqual("44'/529'/0'/0/0");
      expect(cosmosSignRequestDecoded.getDataype()).toBe(SignDataType.amino);

      expect(cosmosSignRequestDecoded.getAddress()[0]).toEqual(
        "cosmos13nmjt4hru5ag0c6q3msk0srs55qd3dtme8wgep"
      );
      expect(cosmosSignRequestDecoded.getAddress()[1]).toEqual(
        "secret1e63tmjmhsac8ja86gk8kh06uqxh2h9hwkcs5cs"
      );
    });
  
    it("should construct an cosmosSignRequest object from string", () => {
      const derivationHdPaths = ["m/44'/118'/0'/0/0", "m/44'/529'/0'/0/0"];
      const xfps = ["78230804", "78230805"];
      const cosmosData = Buffer.from(
        "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
        "hex"
      );
      const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
      const addresses = [
        "cosmos13nmjt4hru5ag0c6q3msk0srs55qd3dtme8wgep",
        "secret1e63tmjmhsac8ja86gk8kh06uqxh2h9hwkcs5cs"
      ];
  
      const request = CosmosSignRequest.constructCosmosRequest(
        requestID,
        xfps,
        cosmosData,
        SignDataType.amino,
        derivationHdPaths,
        addresses,
        "cosmos wallet"
      );
      const ur = request.toUREncoder(1000).nextPart();
      expect(ur).toBe(
        "ur:cosmos-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtglaxadaalftaaddyoeadlecsdwykcskoykaeykaewkaewkaocykscnayaataaddyoeadlecsdwykcfaobyykaeykaewkaewkaocykscnayahahlfksdpiajljkjnjljkeheojtjnimjyeeisjpkpechsiodyiaenjseojnjkjedyjkjpjkececjsieeoiejyjnihetktioihjoksdpjkihiajpihjyehiheneojyjnimjnisjkhsiaetimhseteniojeetjeisdyenkpjsksiseyisesisktjeiajkeciajkamjniajljkjnjljkcxkthsjzjzihjytylgwfat"      
        );
    });
  });
  
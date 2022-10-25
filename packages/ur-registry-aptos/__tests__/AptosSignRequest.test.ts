// @ts-nocheck

import {
  AptosSignRequest,
  CryptoKeypath,
  PathComponent,
  SignType
} from "../src";
import * as uuid from "uuid";

describe("aptos-sign-request", () => {
  it("test should generate aptos-sign-request", () => {
    const aptosData = Buffer.from(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
      "hex"
    );

    const signKeyPath0 = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 637, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true })
      ],
      Buffer.from("78230804", "hex")
    );
    const signKeyPath1 = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 637, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 1, hardened: true })
      ],
      Buffer.from("78230805", "hex")
    );

    const aptosRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(aptosRequestId) as Uint8Array;

    const aptosSignRequest = new AptosSignRequest({
      signData: aptosData,
      authenticationKeyDerivationPaths: [signKeyPath0, signKeyPath1],
      requestId: Buffer.from(idBuffer),
      origin: "aptosWallet",
      accounts: [
        "0xaa7420c68c16645775ecf69a5e2fdaa4f89d3293aee0dd280e2d97ad7b879650",
        "0x97f95acfb04f84d228dce9bda4ad7e2a5cb324d5efdd6a7f0b959e755ebb3a70"
      ],
      signType: SignType.SingleSign
    });

    const cborHex = aptosSignRequest.toCBOR().toString("hex");
    const ur = aptosSignRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:aptos-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtglaxlftaaddyoeadlecsdwykcfaokiykaeykaeykaeykaocykscnayaataaddyoeadlecsdwykcfaokiykaeykaeykadykaocykscnayahaalfksfwdykshshsemeeeydyiaenetiaeheneneeecememecihiaiyeneshseciheyiyiehshseeiyetesieeoeyeseohsihihdyieieeyetdyiheyieesemhsieemidetemesenecdyksfwdyksesemiyesechsiaiyiddyeeiyeteeieeyeyetieiaihesidiehseehsieemiheyhseciaideoeyeeieecihiyieieenhsemiydyidesecesihemececihidideohsemdyahjehsjojyjljkhghsjzjzihjyamadpdoxayuo"
    );
    const aptosSignRequestDecoded = AptosSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(aptosSignRequest.getRequestId())).toBe(
      aptosRequestId
    );
    expect(aptosSignRequest.getOrigin()).toBe("aptosWallet");
    expect(aptosSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e"
    );
    expect(
      aptosSignRequestDecoded.getAuthenticationKeyDerivationPaths()[0]
    ).toEqual("44'/637'/0'/0'/0'");
    expect(
      aptosSignRequestDecoded.getAuthenticationKeyDerivationPaths()[1]
    ).toEqual("44'/637'/0'/0'/1'");
    expect(aptosSignRequestDecoded.getSignType()).toBe(SignType.SingleSign);
    expect(aptosSignRequestDecoded.getSignRequestAccounts()[0]).toEqual(
      "0xaa7420c68c16645775ecf69a5e2fdaa4f89d3293aee0dd280e2d97ad7b879650"
    );
    expect(aptosSignRequestDecoded.getSignRequestAccounts()[1]).toEqual(
      "0x97f95acfb04f84d228dce9bda4ad7e2a5cb324d5efdd6a7f0b959e755ebb3a70"
    );
  });

  it("should construct an aptosSignRequest object from string", () => {
    const authKeyHdPaths = ["m/44'/637'/0'/0'/0'", "m/44'/637'/0'/0'/1'"];
    const xfps = ["78230804", "78230805"];
    const aptosData = Buffer.from(
      "8e53e7b10656816de70824e3016fc1a277e77825e12825dc4f239f418ab2e04e",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const accounts = [
      "0xaa7420c68c16645775ecf69a5e2fdaa4f89d3293aee0dd280e2d97ad7b879650",
      "0x97f95acfb04f84d228dce9bda4ad7e2a5cb324d5efdd6a7f0b959e755ebb3a70"
    ];

    const request = AptosSignRequest.constructAptosRequest(
      aptosData,
      authKeyHdPaths,
      xfps,
      SignType.SingleSign,
      requestID,
      accounts,
      "aptosWallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:aptos-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdcxmnguvdpaamhflyjnvdaydkvladjlseoektvdksdavydedauogwcnnefpleprvtglaxlftaaddyoeadlecsdwykcfaokiykaeykaeykaeykaocykscnayaataaddyoeadlecsdwykcfaokiykaeykaeykadykaocykscnayahaalfksfwdykshshsemeeeydyiaenetiaeheneneeecememecihiaiyeneshseciheyiyiehshseeiyetesieeoeyeseohsihihdyieieeyetdyiheyieesemhsieemidetemesenecdyksfwdyksesemiyesechsiaiyiddyeeiyeteeieeyeyetieiaihesidiehseehsieemiheyhseciaideoeyeeieecihiyieieenhsemiydyidesecesihemececihidideohsemdyahjehsjojyjljkhghsjzjzihjyamadpdoxayuo"
    );
  });
});

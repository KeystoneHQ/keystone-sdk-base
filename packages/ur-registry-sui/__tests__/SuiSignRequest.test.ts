// @ts-nocheck

import {
  SuiSignRequest,
  CryptoKeypath,
  PathComponent,
  SignType
} from "../src";
import * as uuid from "uuid";

describe("sui-sign-request", () => {
  it("test should generate sui-sign-request", () => {
    const signData = Buffer.from(
      "000002002086ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66000810270000000000000202000101010001010200000100000e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c71901d833a8eabc697a0b2e23740aca7be9b0b9e1560a39d2f390cf2534e94429f91ced0c00000000000020190ca0d64215ac63f50dbffa47563404182304e0c10ea30b5e4d671b7173a34c0e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c719e803000000000000640000000000000000",
      "hex"
    );

    const signKeyPath0 = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 784, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true })
      ],
      Buffer.from("78230804", "hex")
    );
    const signKeyPath1 = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 784, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 1, hardened: true })
      ],
      Buffer.from("78230805", "hex")
    );

    const requestId = Buffer.from(uuid.parse("9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"));

    const signRequest = new SuiSignRequest({
      requestId,
      signData,
      signType: SignType.Single,
      derivationPaths: [signKeyPath0, signKeyPath1],
      origin: "Sui Wallet",
      addresses: [
        "0x86ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66",
        "0x68a42711caf03f82e5e45452eb4f1223675aeed4a80b4465892495c48648e3c7"
      ],
    });

    const cborHex = signRequest.toCBOR().toString("hex");
    const ur = signRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdtaaeaeaoaecxlnpshskksgimtaospasfqzjpaotiimvtnybwckiydynlfymodrytstfsfncxfriyaeaybediaeaeaeaeaeaeaoaoaeadadadaeadadaoaeaeadaeaebagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfadtpeopdwdrfinknbddmcnjybksgkgwlpfrhvyhfbkestdwfmhtkdaeewlfydtytcewebnaeaeaeaeaeaecxcfbnnbtbfwbzpsiaykbtrszsflhfeeaacscnaavtsebaotbdhygtiocwjsjkotgsbagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfvsaxaeaeaeaeaeaeieaeaeaeaeaeaeaeaeaxadaalftaaddyoeadlecsdwykcfaxbeykaeykaeykaeykaocykscnayaataaddyoeadlecsdwykcfaxbeykaeykaeykadykaocykscnayahahlfksfwdyksetenhsiaenehemesiahsenhsieeshsemidehiaiaideeemeydyeyiedyenhsihdyeshseheoehiheneneodyeseseeeeeseyeyhsiyesiaemeoieeoiaeydyeoidenenksfwdyksenethseeeyemehehiahsiydyeoiyeteyiheciheeeceeeceyihideeiyeheyeyeoenemechsihihieeehsetdyideeeeeneceteseyeeeseciaeeeteneeetiheoiaemamimgukpincxhghsjzjzihjyynckseva"
    );
    const signRequestDecoded = SuiSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(signRequest.getRequestId())).toBe(uuid.stringify(requestId));
    expect(signRequest.getOrigin()).toBe("Sui Wallet");
    expect(signRequestDecoded.getSignData().toString("hex")).toEqual(
      "000002002086ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66000810270000000000000202000101010001010200000100000e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c71901d833a8eabc697a0b2e23740aca7be9b0b9e1560a39d2f390cf2534e94429f91ced0c00000000000020190ca0d64215ac63f50dbffa47563404182304e0c10ea30b5e4d671b7173a34c0e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c719e803000000000000640000000000000000"
    );
    expect(signRequestDecoded.getDerivationPaths()[0]).toEqual("44'/784'/0'/0'/0'");
    expect(signRequestDecoded.getDerivationPaths()[1]).toEqual("44'/784'/0'/0'/1'");
    expect(signRequestDecoded.getSignType()).toBe(SignType.Single);
    expect(signRequestDecoded.getAddresses()[0]).toEqual(
      "0x86ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66"
    );
    expect(signRequestDecoded.getAddresses()[1]).toEqual(
      "0x68a42711caf03f82e5e45452eb4f1223675aeed4a80b4465892495c48648e3c7"
    );
  });

  it("should construct an signRequest object from string", () => {
    const publicKeyHdPaths = ["m/44'/784'/0'/0'/0'", "m/44'/784'/0'/0'/1'"];
    const xfps = ["78230804", "78230805"];
    const signData = Buffer.from(
      "000002002086ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66000810270000000000000202000101010001010200000100000e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c71901d833a8eabc697a0b2e23740aca7be9b0b9e1560a39d2f390cf2534e94429f91ced0c00000000000020190ca0d64215ac63f50dbffa47563404182304e0c10ea30b5e4d671b7173a34c0e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c719e803000000000000640000000000000000",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const addresses = [
      "0xaa7420c68c16645775ecf69a5e2fdaa4f89d3293aee0dd280e2d97ad7b879650",
      "0x97f95acfb04f84d228dce9bda4ad7e2a5cb324d5efdd6a7f0b959e755ebb3a70"
    ];

    const request = SuiSignRequest.constructSuiRequest(
      signData,
      publicKeyHdPaths,
      xfps,
      SignType.Single,
      requestID,
      addresses,
      "Sui Wallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdtaaeaeaoaecxlnpshskksgimtaospasfqzjpaotiimvtnybwckiydynlfymodrytstfsfncxfriyaeaybediaeaeaeaeaeaeaoaoaeadadadaeadadaoaeaeadaeaebagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfadtpeopdwdrfinknbddmcnjybksgkgwlpfrhvyhfbkestdwfmhtkdaeewlfydtytcewebnaeaeaeaeaeaecxcfbnnbtbfwbzpsiaykbtrszsflhfeeaacscnaavtsebaotbdhygtiocwjsjkotgsbagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfvsaxaeaeaeaeaeaeieaeaeaeaeaeaeaeaeaxadaalftaaddyoeadlecsdwykcfaxbeykaeykaeykaeykaocykscnayaataaddyoeadlecsdwykcfaxbeykaeykaeykadykaocykscnayahahlfksfwdykshshsemeeeydyiaenetiaeheneneeecememecihiaiyeneshseciheyiyiehshseeiyetesieeoeyeseohsihihdyieieeyetdyiheyieesemhsieemidetemesenecdyksfwdyksesemiyesechsiaiyiddyeeiyeteeieeyeyetieiaihesidiehseehsieemiheyhseciaideoeyeeieecihiyieieenhsemiydyidesecesihemececihidideohsemdyamimgukpincxhghsjzjzihjygeamehvs"
    );
  });
});

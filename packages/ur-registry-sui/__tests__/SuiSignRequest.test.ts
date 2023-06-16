// @ts-nocheck

import {
  SuiSignRequest,
  CryptoKeypath,
  PathComponent,
} from "../src";
import * as uuid from "uuid";

describe("sui-sign-request", () => {
  it("test should generate sui-sign-request", () => {
    const intentMessage = Buffer.from(
      "000000000002002086ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66000810270000000000000202000101010001010200000100000e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c71901d833a8eabc697a0b2e23740aca7be9b0b9e1560a39d2f390cf2534e94429f91ced0c00000000000020190ca0d64215ac63f50dbffa47563404182304e0c10ea30b5e4d671b7173a34c0e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c719e803000000000000640000000000000000",
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
      Buffer.from("C9A8ED4A", "hex")
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
      intentMessage,
      derivationPaths: [signKeyPath0, signKeyPath1],
      origin: "Sui Wallet",
      addresses: [
        Buffer.from("a698c879862b9b965a73bedfa83469d94e276f3ee7b99367331d8b340c17d196", 'hex'),
        Buffer.from("68a42711caf03f82e5e45452eb4f1223675aeed4a80b4465892495c48648e3c7", 'hex'),
      ],
    });

    const cborHex = signRequest.toCBOR().toString("hex");
    const ur = signRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohduoaeaeaeaeaeaoaecxlnpshskksgimtaospasfqzjpaotiimvtnybwckiydynlfymodrytstfsfncxfriyaeaybediaeaeaeaeaeaeaoaoaeadadadaeadadaoaeaeadaeaebagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfadtpeopdwdrfinknbddmcnjybksgkgwlpfrhvyhfbkestdwfmhtkdaeewlfydtytcewebnaeaeaeaeaeaecxcfbnnbtbfwbzpsiaykbtrszsflhfeeaacscnaavtsebaotbdhygtiocwjsjkotgsbagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfvsaxaeaeaeaeaeaeieaeaeaeaeaeaeaeaeaxlftaaddyoeadlecsdwykcfaxbeykaeykaeykaeykaocysopdwegetaaddyoeadlecsdwykcfaxbeykaeykaeykadykaocykscnayahaalfhdcxolmkspkklndnndmthtjkrnurpdeeintagldijlfmvdrhmuioeocalueebnchttmthdcxisoxdibysgwtfhlfvwveghgmwmgwbgcniohtwytypdbdfyihlddkmdsslnfdvlstahimgukpincxhghsjzjzihjynlbsbtwt"
    );
    const signRequestDecoded = SuiSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(signRequest.getRequestId())).toBe(uuid.stringify(requestId));
    expect(signRequest.getOrigin()).toBe("Sui Wallet");
    expect(signRequestDecoded.getIntentMessage().toString("hex")).toEqual(
      "000000000002002086ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66000810270000000000000202000101010001010200000100000e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c71901d833a8eabc697a0b2e23740aca7be9b0b9e1560a39d2f390cf2534e94429f91ced0c00000000000020190ca0d64215ac63f50dbffa47563404182304e0c10ea30b5e4d671b7173a34c0e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c719e803000000000000640000000000000000"
    );
    expect(signRequestDecoded.getDerivationPaths()[0]).toEqual("44'/784'/0'/0'/0'");
    expect(signRequestDecoded.getDerivationPaths()[1]).toEqual("44'/784'/0'/0'/1'");
    expect(signRequestDecoded.getAddresses()[0]).toEqual(
      Buffer.from("a698c879862b9b965a73bedfa83469d94e276f3ee7b99367331d8b340c17d196", 'hex')
    );
    expect(signRequestDecoded.getAddresses()[1]).toEqual(
      Buffer.from("68a42711caf03f82e5e45452eb4f1223675aeed4a80b4465892495c48648e3c7", 'hex')
    );
  });

  it("should construct an signRequest object from string", () => {
    const publicKeyHdPaths = ["m/44'/784'/0'/0'/0'", "m/44'/784'/0'/0'/1'"];
    const xfps = ["C9A8ED4A", "78230805"];
    const intentMessage = Buffer.from(
      "000000000002002086ac6179ca6ad9a7b1ccb47202d06ae09a131e66309944922af9c73d3c203b66000810270000000000000202000101010001010200000100000e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c71901d833a8eabc697a0b2e23740aca7be9b0b9e1560a39d2f390cf2534e94429f91ced0c00000000000020190ca0d64215ac63f50dbffa47563404182304e0c10ea30b5e4d671b7173a34c0e4d9313fb5b3f166bb6f2aea587edbe21fb1c094472ccd002f34b9d0633c719e803000000000000640000000000000000",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const addresses = [
      Buffer.from("a698c879862b9b965a73bedfa83469d94e276f3ee7b99367331d8b340c17d196", 'hex'),
      Buffer.from("68a42711caf03f82e5e45452eb4f1223675aeed4a80b4465892495c48648e3c7", 'hex'),
    ];

    const request = SuiSignRequest.constructSuiRequest(
      intentMessage,
      publicKeyHdPaths,
      xfps,
      requestID,
      addresses,
      "Sui Wallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:sui-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohduoaeaeaeaeaeaoaecxlnpshskksgimtaospasfqzjpaotiimvtnybwckiydynlfymodrytstfsfncxfriyaeaybediaeaeaeaeaeaeaoaoaeadadadaeadadaoaeaeadaeaebagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfadtpeopdwdrfinknbddmcnjybksgkgwlpfrhvyhfbkestdwfmhtkdaeewlfydtytcewebnaeaeaeaeaeaecxcfbnnbtbfwbzpsiaykbtrszsflhfeeaacscnaavtsebaotbdhygtiocwjsjkotgsbagtmubwzohpfhcmjerpwzplonltwernclzoceasfyjpsftiaowfgrntameostcfvsaxaeaeaeaeaeaeieaeaeaeaeaeaeaeaeaxlftaaddyoeadlecsdwykcfaxbeykaeykaeykaeykaocysopdwegetaaddyoeadlecsdwykcfaxbeykaeykaeykadykaocykscnayahaalfhdcxolmkspkklndnndmthtjkrnurpdeeintagldijlfmvdrhmuioeocalueebnchttmthdcxisoxdibysgwtfhlfvwveghgmwmgwbgcniohtwytypdbdfyihlddkmdsslnfdvlstahimgukpincxhghsjzjzihjynlbsbtwt"
    );
  });
});

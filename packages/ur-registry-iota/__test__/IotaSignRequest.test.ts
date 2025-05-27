// @ts-nocheck

import {
  TronSignRequest,
  CryptoKeypath,
  PathComponent,
  IotaSignRequest,
} from "../src";
import * as uuid from "uuid";

describe("iota-sign-request", () => {
  it("should generate iota-sign-request", () => {
    const intentMessage = Buffer.from(
      "0100000000020008005ed0b2000000000020ae03b45942086752b470ce7806a6d50bd05ae0085a052108e4444f94d92c2535020200010100000101020000010100193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04030266c887c1357c50c0b5e6fe7073a22f89deb9c3dfba9edf937edf6f2ca32cbebe0021110000000020b2f9dd61ef4a38625d69b97484e5d832057aaea1e7f8b4f9040575da62cacad330849e93e113b34c8b167f784a4a791d17930464518176eb76989aa8e7d763a1b951630d0000000020479e005468b4a9479eecf9bf0823ac7bc1f2f718b746757ec9467aefdd423f93f567740212875ab10edfcbec293bee7b8852bb7433996c01c12d554fd1a256cbb851630d000000002054c4924cd98469979987aaab38099b79cd044c4a48e3edc3475670ac8a415512193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04e803000000000000e06f3c000000000000",
      "hex"
    );

    const signKeyPath = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 4218, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
      ],
      Buffer.from("E57D9654", "hex")
    );

    const tronRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(tronRequestId) as Uint8Array;

    const iotaSignRequest = new IotaSignRequest({
      requestId: Buffer.from(idBuffer),
      intentMessage,
      derivationPaths: [signKeyPath],
      addresses: [
        Buffer.from(
          "193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04",
          "hex"
        ),
      ],
      origin: "Nightly Wallet",
    });

    const cborHex = iotaSignRequest.toCBOR().toString("hex");
    expect(cborHex).toBe(
      "a501d825509b1deb4d3b7d4bad9bdd2b0d7b3dcb6d0259016e0100000000020008005ed0b2000000000020ae03b45942086752b470ce7806a6d50bd05ae0085a052108e4444f94d92c2535020200010100000101020000010100193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04030266c887c1357c50c0b5e6fe7073a22f89deb9c3dfba9edf937edf6f2ca32cbebe0021110000000020b2f9dd61ef4a38625d69b97484e5d832057aaea1e7f8b4f9040575da62cacad330849e93e113b34c8b167f784a4a791d17930464518176eb76989aa8e7d763a1b951630d0000000020479e005468b4a9479eecf9bf0823ac7bc1f2f718b746757ec9467aefdd423f93f567740212875ab10edfcbec293bee7b8852bb7433996c01c12d554fd1a256cbb851630d000000002054c4924cd98469979987aaab38099b79cd044c4a48e3edc3475670ac8a415512193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04e803000000000000e06f3c0000000000000381d90130a2018a182cf519107af500f500f500f5021ae57d965404815820193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04056e4e696768746c792057616c6c6574"
    );
    const ur = iotaSignRequest.toUREncoder(1000).nextPart();

    expect(ur).toBe(
      "ur:iota-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohkadjtadaeaeaeaeaoaeayaehytipraeaeaeaeaecxplaxqzhkfwayiogmqzjotoksamoltlbdtihtvtayhtahclayvefygwmwtadwdaecaoaoaeadadaeaeadadaoaeaeadadaecfftfdbyrlcxknstpdhsyafzgodlnsjslyjpfzbsgsfgrywshkecaelekkktzoaaaxaoiyspltseeckegdrtrevazejojkoedllduerhsrurrdnnurmukburjldwotdwrnrnaeclbyaeaeaeaecxprytuthswsgeetidhlinrhjylrvwtpeyahknployvdyaqzytaaahkptnidsgsgtedylrnnmuvybwqdgslucmlbksgegekkcachmuaaiegylykowmkomknypdvdtsiaoyrhgyiabtaeaeaeaecxflnnaeghisqzptflnnwpytrsaycnpskgsewzylcsrlfgkpkbsofgknwsutfwfhmuykiojyaobglthtpabaursbwpdtfrwykglogmrkjyeonljzadsedpgogwttoehfsbrogyiabtaeaeaeaecxghssmogstalrinmsnlltpkpyetasndkksnaagsgefdvlwesrflhfjopslefpgobgcfftfdbyrlcxknstpdhsyafzgodlnsjslyjpfzbsgsfgrywshkecaelekkktzoaavsaxaeaeaeaeaeaevtjlfnaeaeaeaeaeaeaxlytaaddyoeadlecsdwykcfbeknykaeykaeykaeykaocyvwkimtghaalyhdcxcfftfdbyrlcxknstpdhsyafzgodlnsjslyjpfzbsgsfgrywshkecaelekkktzoaaahjtglinioisjyjzkkcxhghsjzjzihjysbfmrlje"
    );
    const iotaSignRequestDecoded = IotaSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(iotaSignRequest.getRequestId())).toBe(tronRequestId);
    expect(iotaSignRequest.getOrigin()).toBe("Nightly Wallet");
    expect(iotaSignRequestDecoded.getIntentMessage().toString("hex")).toEqual(
      "0100000000020008005ed0b2000000000020ae03b45942086752b470ce7806a6d50bd05ae0085a052108e4444f94d92c2535020200010100000101020000010100193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04030266c887c1357c50c0b5e6fe7073a22f89deb9c3dfba9edf937edf6f2ca32cbebe0021110000000020b2f9dd61ef4a38625d69b97484e5d832057aaea1e7f8b4f9040575da62cacad330849e93e113b34c8b167f784a4a791d17930464518176eb76989aa8e7d763a1b951630d0000000020479e005468b4a9479eecf9bf0823ac7bc1f2f718b746757ec9467aefdd423f93f567740212875ab10edfcbec293bee7b8852bb7433996c01c12d554fd1a256cbb851630d000000002054c4924cd98469979987aaab38099b79cd044c4a48e3edc3475670ac8a415512193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04e803000000000000e06f3c000000000000"
    );
    expect(iotaSignRequestDecoded.getDerivationPaths()[0].getPath()).toEqual(
      "44'/4218'/0'/0'/0'"
    );
    expect(iotaSignRequestDecoded.getAddresses()).toEqual([
      Buffer.from(
        "193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04",
        "hex"
      ),
    ]);
  });

  it("should construct an tronSignRequest object from string", () => {
    const derivationHdPath = "m/44'/4218'/0'/0'/0'";
    const xfp = "E57D9654";
    const intentMessage = Buffer.from(
      "0100000000020008005ed0b2000000000020ae03b45942086752b470ce7806a6d50bd05ae0085a052108e4444f94d92c2535020200010100000101020000010100193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04030266c887c1357c50c0b5e6fe7073a22f89deb9c3dfba9edf937edf6f2ca32cbebe0021110000000020b2f9dd61ef4a38625d69b97484e5d832057aaea1e7f8b4f9040575da62cacad330849e93e113b34c8b167f784a4a791d17930464518176eb76989aa8e7d763a1b951630d0000000020479e005468b4a9479eecf9bf0823ac7bc1f2f718b746757ec9467aefdd423f93f567740212875ab10edfcbec293bee7b8852bb7433996c01c12d554fd1a256cbb851630d000000002054c4924cd98469979987aaab38099b79cd044c4a48e3edc3475670ac8a415512193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04e803000000000000e06f3c000000000000",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

    const request = IotaSignRequest.constructIotaSignRequest(
      intentMessage,
      [derivationHdPath],
      xfp,
      requestID,
      [
        Buffer.from(
          "193a4811b7207ac7a861f840552f9c718172400f4c46bdef5935008a7977fb04",
          "hex"
        ),
      ],
      "Nightly Wallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:iota-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohkadjtadaeaeaeaeaoaeayaehytipraeaeaeaeaecxplaxqzhkfwayiogmqzjotoksamoltlbdtihtvtayhtahclayvefygwmwtadwdaecaoaoaeadadaeaeadadaoaeaeadadaecfftfdbyrlcxknstpdhsyafzgodlnsjslyjpfzbsgsfgrywshkecaelekkktzoaaaxaoiyspltseeckegdrtrevazejojkoedllduerhsrurrdnnurmukburjldwotdwrnrnaeclbyaeaeaeaecxprytuthswsgeetidhlinrhjylrvwtpeyahknployvdyaqzytaaahkptnidsgsgtedylrnnmuvybwqdgslucmlbksgegekkcachmuaaiegylykowmkomknypdvdtsiaoyrhgyiabtaeaeaeaecxflnnaeghisqzptflnnwpytrsaycnpskgsewzylcsrlfgkpkbsofgknwsutfwfhmuykiojyaobglthtpabaursbwpdtfrwykglogmrkjyeonljzadsedpgogwttoehfsbrogyiabtaeaeaeaecxghssmogstalrinmsnlltpkpyetasndkksnaagsgefdvlwesrflhfjopslefpgobgcfftfdbyrlcxknstpdhsyafzgodlnsjslyjpfzbsgsfgrywshkecaelekkktzoaavsaxaeaeaeaeaeaevtjlfnaeaeaeaeaeaeaxlytaaddyoeadlecsdwykcfbeknykaeykaeykaeykaocyvwkimtghaalyhdcxcfftfdbyrlcxknstpdhsyafzgodlnsjslyjpfzbsgsfgrywshkecaelekkktzoaaahjtglinioisjyjzkkcxhghsjzjzihjysbfmrlje"
    );
  });
});

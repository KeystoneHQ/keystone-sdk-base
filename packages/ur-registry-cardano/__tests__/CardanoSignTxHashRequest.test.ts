// @ts-nocheck
import { CryptoKeypath, PathComponent } from "../src";
import * as uuid from "uuid";
import { CardanoSignTxHashRequest } from "../src";
describe("cardano-sign-tx-hash-request", () => {
  it("test should generate cardano-sign-tx-hash-request", () => {
    const txHash =
      "52a1f5596f31358030f0d9d3a2db2b119b8f766386071684d26d0d37439c144e";

    const signKeyPath1 = new CryptoKeypath(
      [
        new PathComponent({ index: 1852, hardened: true }),
        new PathComponent({ index: 1815, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: false }),
        new PathComponent({ index: 0, hardened: false }),
      ],
      Buffer.from("1250b6bc", "hex")
    );

    const signKeyPath2 = new CryptoKeypath(
      [
        new PathComponent({ index: 1852, hardened: true }),
        new PathComponent({ index: 1815, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 2, hardened: false }),
        new PathComponent({ index: 0, hardened: false }),
      ],
      Buffer.from("1250b6bc", "hex")
    );

    const requestId = uuid.stringify(
      Buffer.from("52090a1c29394842a9adba0bc021a58b", "hex")
    );
    const addressList = [
      "addr1qy8ac7qqy0vtulyl7wntmsxc6wex80gvcyjy33qffrhm7sh927ysx5sftuw0dlft05dz3c7revpf7jx0xnlcjz3g69mq4afdhv",
      "addr1qyz85693g4fr8c55mfyxhae8j2u04pydxrgqr73vmwpx3azv4dgkyrgylj5yl2m0jlpdpeswyyzjs0vhwvnl6xg9f7ssrxkz90",
    ];
    const cardanoSignTxHashRequest =
      CardanoSignTxHashRequest.constructCardanoSignTxHashRequest(
        txHash,
        [signKeyPath1, signKeyPath2],
        addressList,
        requestId,
        "eternl"
      );

    const cborHex = cardanoSignTxHashRequest.toCBOR().toString("hex");
    expect(cborHex).toBe(
      "a501d8255052090a1c29394842a9adba0bc021a58b027840353261316635353936663331333538303330663064396433613264623262313139623866373636333836303731363834643236643064333734333963313434650382d90130a2018a19073cf5190717f500f500f400f4021a1250b6bcd90130a2018a19073cf5190717f500f502f400f4021a1250b6bc0466657465726e6c058278676164647231717938616337717179307674756c796c37776e746d737863367765783830677663796a79333371666672686d37736839323779737835736674757730646c66743035647a3363377265767066376a7830786e6c636a7a336736396d713461666468767867616464723171797a383536393367346672386335356d667978686165386a3275303470796478726771723733766d77707833617a763464676b797267796c6a35796c326d306a6c70647065737779797a6a7330766877766e6c367867396637737372786b7a3930"
    );
    const ur = cardanoSignTxHashRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:cardano-sign-tx-hash-request/onadtpdagdgmasbkcedtesfdfwptpmrdbdrtclonluaoksfzeceyhsehiyececeseniyeoeheoecetdyeodyiydyieesieeohseyieideyidehehesidetiyemeneneoetendyemeheneteeieeyeniedyieeoemeeeoesiaeheeeeihaxlftaaddyoeadlecfatfnykcfatchykaeykaewkaewkaocybggdrprftaaddyoeadlecfatfnykcfatchykaeykaowkaewkaocybggdrprfaaiyihjyihjpjtjzahlfksiohsieiejpehjskkethsiaemjsjskkdykojykpjzkkjzemktjtjyjnjkksiaenktihksetdyiokoiakkimkkeoeojsiyiyjpisjnemjkiseseyemkkjkksecjkiyjykpktdyiejziyjydyeciekneoiaemjpihkojoiyemimksdyksjtjziaimkneoioenesjnjseehsiyieiskoksiohsieiejpehjskkkneteceneseoioeeiyjpetiaececjniykkksishsihetimeykpdyeejokkieksjpiojsjpemeokojnktjokseohsknkoeeieiojekkjpiokkjzimeckkjzeyjndyimjzjoiejoihjkktkkkkknimjkdykoisktkojtjzenksioesiyemjkjkjpksjeknesdyolcxsges"
    );
  });
});

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

    const cardanoSignTxHashRequest =
      CardanoSignTxHashRequest.constructCardanoSignTxHashRequest(
        txHash,
        [signKeyPath1, signKeyPath2],
        requestId,
        "eternl"
      );

    const cborHex = cardanoSignTxHashRequest.toCBOR().toString("hex");
    expect(cborHex).toBe(
      "a401d8255052090a1c29394842a9adba0bc021a58b027840353261316635353936663331333538303330663064396433613264623262313139623866373636333836303731363834643236643064333734333963313434650382d90130a2018a19073cf5190717f500f500f400f4021a1250b6bcd90130a2018a19073cf5190717f500f502f400f4021a1250b6bc0466657465726e6c"
    );
    const ur = cardanoSignTxHashRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:cardano-sign-tx-hash-request/oxadtpdagdgmasbkcedtesfdfwptpmrdbdrtclonluaoksfzeceyhsehiyececeseniyeoeheoecetdyeodyiydyieesieeohseyieideyidehehesidetiyemeneneoetendyemeheneteeieeyeniedyieeoemeeeoesiaeheeeeihaxlftaaddyoeadlecfatfnykcfatchykaeykaewkaewkaocybggdrprftaaddyoeadlecfatfnykcfatchykaeykaowkaewkaocybggdrprfaaiyihjyihjpjtjzamaxzmam"
    );
  });
});

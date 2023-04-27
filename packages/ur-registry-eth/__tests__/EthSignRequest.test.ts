// @ts-nocheck

import { EthSignRequest, DataType } from "../src";
import { CryptoKeypath, PathComponent } from "../src";
import * as uuid from "uuid";
import { URRegistryDecoder } from "@keystonehq/ur-decoder"
import { RLP } from '@ethereumjs/rlp'

describe("eth-sign-request", () => {
  it("test should genereate eth-sign-reqeust", () => {
    const rlpData = Buffer.from(
      "f849808609184e72a00082271094000000000000000000000000000000000000000080a47f7465737432000000000000000000000000000000000000000000000000000000600057808080",
      "hex"
    );

    const signKeyPath = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 1, hardened: true }),
        new PathComponent({ index: 1, hardened: true }),
        new PathComponent({ index: 0, hardened: false }),
        new PathComponent({ index: 1, hardened: false }),
      ],
      Buffer.from("12345678", "hex")
    );

    // const ethRequestId = uuid.v4(); 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d as example
    const ethRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(ethRequestId) as Uint8Array;

    const ethSignRequest = new EthSignRequest({
      signData: rlpData,
      dataType: DataType.transaction,
      chainId: 1,
      derivationPath: signKeyPath,
      requestId: Buffer.from(idBuffer),
      origin: "metamask",
    });

    const cborHex = ethSignRequest.toCBOR().toString("hex");
    const ur = ethSignRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:eth-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdgryagalalnascsgljpnbaelfdibemwaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaelaoxlbjyihjkjyeyaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaehnaehglalalaaxadaaadahtaaddyoeadlecsdwykadykadykaewkadwkaocybgeehfksatisjnihjyhsjnhsjkjetlnndant"
    );
    const ethSignRequstDecoded = EthSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(ethSignRequest.getRequestId())).toBe(ethRequestId);
    expect(ethSignRequstDecoded.getChainId()).toBe(1);
    expect(ethSignRequstDecoded.getDataType()).toBe(1);
    expect(ethSignRequest.getOrigin()).toBe("metamask");
    expect(ethSignRequstDecoded.getSignData().toString("hex")).toEqual(
      "f849808609184e72a00082271094000000000000000000000000000000000000000080a47f7465737432000000000000000000000000000000000000000000000000000000600057808080"
    );
  });

  it("should construct an ethSignRequest object from string", () => {
    // const hdPath = "M/44'/1'/1'/0/1";
    // const xfp = "12345678";
    // const rlpData = Buffer.from(
    //   "f849808609184e72a00082271094000000000000000000000000000000000000000080a47f7465737432000000000000000000000000000000000000000000000000000000600057808080",
    //   "hex"
    // );
    // const ethRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

    // const ethRequest = EthSignRequest.constructETHRequest(
    //   rlpData,
    //   DataType.transaction,
    //   hdPath,
    //   xfp,
    //   ethRequestId,
    //   1
    // );

    const ur = "UR:ETH-SIGN-REQUEST/ONADTPDAGDDAKBPRKOKKYKFWGARFSFPLZMRHSNLDECAOHDDAVEHPLPAOGHBDVEAELFGMAYMWBNGHZTSNDMETGRGRRPWZVEAHRSHHRFBZNBCHPKZOLALAAALALAAXADAAAAAHTAADDYOEADLECSDWYKCSFNYKAEYKAEWKAEWKAOCYJOKBWEJZONWNHFT"

    const decoder = new URRegistryDecoder();
    decoder.receivePart(ur);
    const result = decoder.resultUR();
    console.log(result.cbor);
    const ethSig = EthSignRequest.fromCBOR(result.cbor)


    console.log(ethSig.getRequestId())
    console.log(ethSig.getSignData().toString('hex'))
    const serialized = ethSig.getSignData().toString('hex')
    const buffer_se = Buffer.from(serialized, 'hex')
    console.log(ethSig.getDataType())
    console.log(ethSig.getChainId())
    console.log(ethSig.getDerivationPath())
    console.log(ethSig.getSourceFingerprint())
    console.log(ethSig.getSignRequestAddress())
    console.log(ethSig.getOrigin())


    const a = RLP.decode(buffer_se)
    console.log(a);
    

    // const ur = ethRequest.toUREncoder(1000).nextPart();
    // expect(ur).toBe(
    //   "ur:eth-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdgryagalalnascsgljpnbaelfdibemwaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaelaoxlbjyihjkjyeyaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaehnaehglalalaaxadaaadahtaaddyoeadlecsdwykadykadykaewkadwkaocybgeehfkswdtklffd"
    // );
  });
});

// @ts-nocheck

import { EthSignRequest, DataType } from "../src";
import { CryptoKeypath, PathComponent } from "../src";
import * as uuid from "uuid";
import * as rlp from "rlp";
import { LegacyTransaction } from "@ethereumjs/tx";

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
    const hdPath = "M/44'/1'/1'/0/1";
    const xfp = "12345678";
    const rlpData = Buffer.from(
      "f849808609184e72a00082271094000000000000000000000000000000000000000080a47f7465737432000000000000000000000000000000000000000000000000000000600057808080",
      "hex"
    );
    const ethRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

    const chainId = 1n;

    const ethRequest = EthSignRequest.constructETHRequest(
      rlpData,
      DataType.transaction,
      hdPath,
      xfp,
      ethRequestId,
      chainId
    );
    const ur = ethRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:eth-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdgryagalalnascsgljpnbaelfdibemwaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaelaoxlbjyihjkjyeyaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaehnaehglalalaaxadaaadahtaaddyoeadlecsdwykadykadykaewkadwkaocybgeehfkswdtklffd"
    );
  });

  it("test should genereate erc20 eth-sign-reqeust", () => {
    let erc20data = "a9059cbb0000000000000000000000005df9b87991262f6ba471f09758cde1c0fc1de7340000000000000000000000000000000000000000000000008ac7230489e80000";
    let tx = new LegacyTransaction({ nonce: 0, gasLimit: 5000n, gasPrice: 50000n, to: "0x1111111111111111111111111111111111111111", value: 100000000n, data: Buffer.from(erc20data, 'hex') });
    let txhex = tx.getMessageToSign();

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
      signData: Buffer.from(txhex, 'hex'),
      dataType: DataType.transaction,
      chainId: 1,
      derivationPath: signKeyPath,
      requestId: Buffer.from(idBuffer),
      origin: "metamask",
    });
    const ur = ethSignRequest.toUREncoder(1000).nextPart();
    console.log(ur);
  })
});

// @ts-nocheck

import { BtcSignRequest, CryptoKeypath, PathComponent, DataType } from "../src";
import * as uuid from "uuid";

describe("btc-sign-request", () => {
  it("should generate btc-sign-request", () => {
    const btcData = Buffer.from(
      "48656c6c6f2063727970746f20776f726c6421",
      "hex"
    );

    const signKeyPath = new CryptoKeypath(
      [
        new PathComponent({ index: 44, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: true }),
        new PathComponent({ index: 0, hardened: false }),
        new PathComponent({ index: 0, hardened: false }),
      ],
      Buffer.from("78230804", "hex")
    );

    const btcRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(btcRequestId) as Uint8Array;

    const btcSignRequest = new BtcSignRequest({
      requestId: Buffer.from(idBuffer),
      signData: btcData,
      dataType: DataType.message,
      derivationPaths: [signKeyPath],
      addresses: ["1MjiyuupjWK5Ye13f8BAPvgby5WBuQXyJx"],
      origin: "btc wallet",
    });

    const cborHex = btcSignRequest.toCBOR().toString("hex");
    const ur = btcSignRequest.toUREncoder(1000).nextPart();

    expect(ur).toBe(
      "ur:btc-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaogufdihjzjzjlcxiajpkkjojyjlcxktjljpjzieclaxadaalytaaddyoeadlecsdwykaeykaeykaewkaewkaocykscnayaaahlykscpehgtiminkkkpkpjoimhggrechkiheheoiyetfwfpgdkoioidkkechgfwkpgyhdkkgeksamimidjyiacxkthsjzjzihjypffpsbdy"
    );
    const btcSignRequestDecoded = BtcSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(btcSignRequest.getRequestId())).toBe(btcRequestId);
    expect(btcSignRequest.getOrigin()).toBe("btc wallet");
    expect(btcSignRequestDecoded.getSignData().toString("hex")).toEqual(
      "48656c6c6f2063727970746f20776f726c6421"
    );
    expect(btcSignRequestDecoded.getDerivationPaths()[0]).toEqual(
      "44'/0'/0'/0/0"
    );
    expect(btcSignRequestDecoded.getDataype()).toBe(DataType.message);

    expect(btcSignRequestDecoded.getAddress()[0]).toEqual(
      "1MjiyuupjWK5Ye13f8BAPvgby5WBuQXyJx"
    );
  });

  it("should construct an btcSignRequest object from string", () => {
    const derivationHdPaths = ["m/44'/0'/0'/0/0"];
    const xfps = ["78230804"];
    const btcData = Buffer.from(
      "48656c6c6f2063727970746f20776f726c6421",
      "hex"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const addresses = ["1MjiyuupjWK5Ye13f8BAPvgby5WBuQXyJx"];

    const request = BtcSignRequest.constructBtcRequest(
      requestID,
      xfps,
      btcData,
      DataType.message,
      derivationHdPaths,
      addresses,
      "btc wallet"
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:btc-sign-request/oladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaogufdihjzjzjlcxiajpkkjojyjlcxktjljpjzieclaxadaalytaaddyoeadlecsdwykaeykaeykaewkaewkaocykscnayaaahlykscpehgtiminkkkpkpjoimhggrechkiheheoiyetfwfpgdkoioidkkechgfwkpgyhdkkgeksamimidjyiacxkthsjzjzihjypffpsbdy"
    );
  });
});

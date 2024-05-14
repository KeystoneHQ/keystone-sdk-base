// @ts-nocheck

import { TonSignRequest, DataType } from "../src";
import * as uuid from "uuid";

describe("ton-sign-request", () => {
  it("should generate ton-sign-request", () => {
    const tonData = Buffer.from(
      "te6cckEBAgEARwABHCmpoxdmOz6lAAAACAADAQBoQgArFnMvHAX9tOjTp4/RDd3vP2Bn8xG+U5MTuKRKUE1NoqHc1lAAAAAAAAAAAAAAAAAAAHBy4G8=",
      "base64"
    );

    const tronRequestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(tronRequestId) as Uint8Array;

    const tonSignRequest = new TonSignRequest({
      requestId: Buffer.from(idBuffer),
      signData: tonData,
      dataType: DataType.TRANSACTION,
      address: "UQC1IywyQwixSOU8pezOZDC9rv2xCV4CGJzOWH6RX8BTsGJx",
      origin: "TonKeeper",
    });

    const cborHex = tonSignRequest.toCBOR().toString("hex");
    console.log(cborHex.toString("hex"));

    expect(cborHex.toString("hex")).toBe(
      "a501d825509b1deb4d3b7d4bad9bdd2b0d7b3dcb6d025856b5ee9c7241010201004700011c29a9a317663b3ea500000008000301006842002b16732f1c05fdb4e8d3a78fd10dddef3f6067f311be539313b8a44a504d4da2a1dcd65000000000000000000000000000007072e06f0301057830555143314979777951776978534f553870657a4f5a4443397276327843563443474a7a4f574836525838425473474a780669546f6e4b6565706572"
    );

    const ur = tonSignRequest.toUREncoder(1000).nextPart();

    expect(ur).toBe(
      "ur:ton-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdhfrewynsjpfpadaoadaeflaeadcedtptotchiyfrfmonaeaeaeayaeaxadaeisfwaedncmjkdlceahzcqzvsteosmyttbtutwsfhhniowfbyrngumubwrooxgegdgtgtoeoyuotbgdaeaeaeaeaeaeaeaeaeaeaeaeaeaejojpvtjlaxadahksdygogyfxehgakkktkkgyktinksgugwgoetjoihkngwhtfyfxesjpkoeyksfxhfeefxflgekngwhgfdengmhdetfwghjkflgeksaminghjljtgrihihjoihjpmduydrch"
    );
    const tonSignRequestDecoded = TonSignRequest.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(tonSignRequest.getRequestId())).toBe(tronRequestId);
    expect(tonSignRequest.getOrigin()).toBe("TonKeeper");
    expect(tonSignRequestDecoded.getSignData().toString("base64")).toEqual(
      "te6cckEBAgEARwABHCmpoxdmOz6lAAAACAADAQBoQgArFnMvHAX9tOjTp4/RDd3vP2Bn8xG+U5MTuKRKUE1NoqHc1lAAAAAAAAAAAAAAAAAAAHBy4G8="
    );
    expect(tonSignRequestDecoded.getDerivationPath()).toEqual(undefined);
    expect(tonSignRequestDecoded.getAddress()).toEqual(
      "UQC1IywyQwixSOU8pezOZDC9rv2xCV4CGJzOWH6RX8BTsGJx"
    );
  });

  it("should construct an TonSignRequest object from string", () => {
    const tonData = Buffer.from(
      "te6cckEBAgEARwABHCmpoxdmOz6lAAAACAADAQBoQgArFnMvHAX9tOjTp4/RDd3vP2Bn8xG+U5MTuKRKUE1NoqHc1lAAAAAAAAAAAAAAAAAAAHBy4G8=",
      "base64"
    );
    const requestID = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";

    const request = TonSignRequest.constructTonRequest(
      tonData,
      DataType.TRANSACTION,
      "UQC1IywyQwixSOU8pezOZDC9rv2xCV4CGJzOWH6RX8BTsGJx",
      requestID,
      "TonKeeper",
      undefined,
      undefined
    );
    const ur = request.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:ton-sign-request/onadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdhfrewynsjpfpadaoadaeflaeadcedtptotchiyfrfmonaeaeaeayaeaxadaeisfwaedncmjkdlceahzcqzvsteosmyttbtutwsfhhniowfbyrngumubwrooxgegdgtgtoeoyuotbgdaeaeaeaeaeaeaeaeaeaeaeaeaeaejojpvtjlaxadahksdygogyfxehgakkktkkgyktinksgugwgoetjoihkngwhtfyfxesjpkoeyksfxhfeefxflgekngwhgfdengmhdetfwghjkflgeksaminghjljtgrihihjoihjpmduydrch"
    );
  });
});

import { UR } from "../src/QRProtocolCodec";
import { decodedSync } from "./__data__/decodedSync";
import { sync } from "./__data__/sync";

describe("QRCodeProtocol UR", () => {
  it("should encode and decode QR code", () => {
    const encoder = UR.encodeProtobufByUREncoder(sync);
    const decoder = UR.decodeProtobufByURDecoder();
    const qrs = encoder.encodeWhole();
    qrs.forEach((qr) => decoder.receivePart(qr));
    expect(decoder.result().toJSON()).toStrictEqual(decodedSync);
  });
});

import { encode } from "../src/QRProtocolCodec/encode";
import { sync } from "./__data__/sync";
import { decode } from "../src/QRProtocolCodec/decode";
import { decodedSync } from "./__data__/decodedSync";

describe("qr-protocol", () => {
  it("should encode protobuf object to buffer and decode", () => {
    const encoded = encode(sync);
    const decoded = decode(encoded);
    expect(decoded.toJSON()).toStrictEqual(decodedSync);
  });
});

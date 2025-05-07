import { ETHBatchSignature } from "../src/EthBatchSignature";

describe("EthBatchSignature", () => {
  it("should create a new EthBatchSignature", () => {
    const cbor = Buffer.from("a10181d90192a301d825509b1deb4d3b7d4bad9bdd2b0d7b3dcb6d0258416ff1602c5074594261319e77d58697565aeebebac538628434b13c939b9ac7f52d8fb08e7892e26ebcf901bf8c5b38d5900dbc6466b9b9e976287324e92c1aa12403686b657973746f6e65", 'hex');
    const ethBatchSignature = ETHBatchSignature.fromCBOR(cbor);
    expect(ethBatchSignature.getSignatures().length).toBe(1);
    expect(ethBatchSignature.getSignatures()[0].getSignature().toString('hex')).toBe("6ff1602c5074594261319e77d58697565aeebebac538628434b13c939b9ac7f52d8fb08e7892e26ebcf901bf8c5b38d5900dbc6466b9b9e976287324e92c1aa124");
  });
});

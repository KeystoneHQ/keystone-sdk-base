import { ETHBatchSignRequest } from "../src/EthBatchSignRequest";
import { EthSignRequest } from "../src/EthSignRequest";
describe("EthBatchSignRequest", () => {
  it("should create a new EthBatchSignRequest", () => {
    const cbor = Buffer.from("a601d825509b1deb4d3b7d4bad9bdd2b0d7b3dcb6d02584bf849808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000578080800301040105d90130a2018a182cf501f501f500f401f4021a1234567807686d6574616d61736b", 'hex');
    const request = EthSignRequest.fromCBOR(cbor);
    const ethBatchSignRequest = new ETHBatchSignRequest([request]);
    const ur = ethBatchSignRequest.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:eth-batch-sign-request/oyadlytaadmeoladtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdgryagalalnascsgljpnbaelfdibemwaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaelaoxlbjyihjkjyeyaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaeaehnaehglalalaaxadaaadahtaaddyoeadlecsdwykadykadykaewkadwkaocybgeehfksatisjnihjyhsjnhsjkjekoamykvw"
    );
  });
});


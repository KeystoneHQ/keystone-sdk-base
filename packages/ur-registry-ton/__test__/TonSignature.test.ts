// @ts-nocheck

import { TonSignature, URRegistryDecoder } from "../src";
import * as uuid from "uuid";

describe("ton-signature", () => {
  it("should generate ton-signature", () => {
    const signature = Buffer.from(
      "f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da6505",
      "hex"
    );
    const requestId = "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d";
    const idBuffer = uuid.parse(requestId) as Uint8Array;

    const tonSignature = new TonSignature(
      signature,
      Buffer.from(idBuffer),
      "Keystone"
    );

    const cborHex = tonSignature.toCBOR().toString("hex");
    expect(cborHex.toString("hex")).toBe("a301d825509b1deb4d3b7d4bad9bdd2b0d7b3dcb6d025840f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da650503684b657973746f6e65");

    const ur = tonSignature.toUREncoder(1000).nextPart();
    expect(ur).toBe(
      "ur:ton-signature/otadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzwkrlmkecfpjymhmdlkjpgadicnfzmoldqzfywfpecsdigroxlrptwypsptvdhngmbafeemkovwmshlwthdreemflineyoxgmesisheingwswendlvwpejeosbbtnihahaxisgrihkkjkjyjljtihgmcalnzo"
    );
    const tonSignatureDecoded = TonSignature.fromCBOR(
      Buffer.from(cborHex, "hex")
    );
    expect(uuid.stringify(tonSignatureDecoded.getRequestId())).toBe(
      requestId
    );
    expect(tonSignatureDecoded.getSignature().toString("hex")).toEqual(
      "f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da6505"
    );

    const urDecoder = new URRegistryDecoder();
    urDecoder.receivePart("ur:ton-signature/otadtpdagdndcawmgtfrkigrpmndutdnbtkgfssbjnaohdfzwkrlmkecfpjymhmdlkjpgadicnfzmoldqzfywfpecsdigroxlrptwypsptvdhngmbafeemkovwmshlwthdreemflineyoxgmesisheingwswendlvwpejeosbbtnihahaxisgrihkkjkjyjljtihgmcalnzo");
    const decodeSig = TonSignature.fromCBOR(urDecoder.resultUR().cbor);
    expect(decodeSig.getSignature().toString('hex')).toEqual('f4b79835417490958c72492723409289b444f3af18274ba484a9eeaca9e760520e453776e5975df058b537476932a45239685f694fc6362fe5af6ba714da6505');
    expect(decodeSig.getRequestId().toString('hex')).toEqual('9b1deb4d3b7d4bad9bdd2b0d7b3dcb6d');
    expect(decodeSig.getOrigin()).toEqual('Keystone');
  });
});

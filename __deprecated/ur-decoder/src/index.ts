import { URDecoder } from "@ngraveio/bc-ur";
import {
  Bytes,
  CryptoHDKey,
  CryptoKeypath,
  CryptoCoinInfo,
  CryptoECKey,
  CryptoOutput,
  CryptoPSBT,
  CryptoAccount,
  ETHSignature,
  EthSignRequest,
} from "@keystonehq/bc-ur-registry-eth";

export class URRegistryDecoder extends URDecoder {
  public resultRegistryType = () => {
    const ur = this.resultUR();
    switch (ur.type) {
      case "bytes":
        return Bytes.fromCBOR(ur.cbor);
      case "crypto-hdkey":
        return CryptoHDKey.fromCBOR(ur.cbor);
      case "crypto-keypath":
        return CryptoKeypath.fromCBOR(ur.cbor);
      case "crypto-coin-info":
        return CryptoCoinInfo.fromCBOR(ur.cbor);
      case "crypto-eckey":
        return CryptoECKey.fromCBOR(ur.cbor);
      case "crypto-output":
        return CryptoOutput.fromCBOR(ur.cbor);
      case "crypto-psbt":
        return CryptoPSBT.fromCBOR(ur.cbor);
      case "crypto-account":
        return CryptoAccount.fromCBOR(ur.cbor);
      case "eth-signature":
        return ETHSignature.fromCBOR(ur.cbor);
      case "eth-sign-request":
        return EthSignRequest.fromCBOR(ur.cbor);
      default:
        throw new Error(
          `#[ur-registry][Decoder][fn.resultRegistryType]: registry type ${ur.type} is not supported now`
        );
    }
  };
}

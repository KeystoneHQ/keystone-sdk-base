import { UREncoder, URDecoder, UR } from "@ngraveio/bc-ur";
import { protoc } from "../../QRProtocolBuf/proto";
import { decode } from "../decode";
import { encode } from "../encode";

const encodeByUREncoder = (data: Buffer, maxFragmentLength = 400) => {
  const ur = UR.fromBuffer(data);
  return new UREncoder(ur, maxFragmentLength);
};

const encodeProtobufByUREncoder = (
  data: protoc.IBase,
  maxFragmentLength = 400
) => {
  return encodeByUREncoder(encode(data), maxFragmentLength);
};

const decodeByURDecoder = () => {
  const decoder = new URDecoder();
  return {
    receivePart: (hex: string) => {
      return decoder.receivePart(hex);
    },
    isComplete: () => decoder.isComplete(),
    isSuccess: () => decoder.isSuccess(),
    isError: () => decoder.isError(),
    resultError: () => decoder.resultError(),
    expectedPartCount: () => decoder.expectedPartCount(),
    estimatedPercentComplete: () => decoder.estimatedPercentComplete(),
    getProgress: () => decoder.getProgress(),
    result: () => decoder.resultUR(),
  };
};

const decodeProtobufByURDecoder = () => {
  const decoder = decodeByURDecoder();
  return {
    ...decoder,
    result: () => {
      const ur = decoder.result();
      return decode(ur.decodeCBOR());
    },
  };
};

export default {
  encodeProtobufByUREncoder,
  decodeProtobufByURDecoder,
  encodeByUREncoder,
  decodeByURDecoder,
};

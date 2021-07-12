import { protoc } from '../QRProtocolBuf/proto';
import zlib from 'zlib';

const Base = protoc.Base;

export const decode = (compressedBuffer: Buffer): protoc.Base => {
    const buffer = zlib.gunzipSync(compressedBuffer);
    return Base.decode(buffer);
};

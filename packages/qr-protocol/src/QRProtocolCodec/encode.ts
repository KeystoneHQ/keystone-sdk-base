import { protoc } from '../QRProtocolBuf/proto';
import zlib from 'zlib';

const Base = protoc.Base;

export const encode = (param: protoc.IBase): Buffer => {
    let encodedBuffer = Base.encode(param).finish();
    if (!Buffer.isBuffer(encodedBuffer)) {
        encodedBuffer = Buffer.from(encodedBuffer);
    }
    const compressedBuffer = zlib.gzipSync(encodedBuffer);
    return Buffer.from(compressedBuffer);
};

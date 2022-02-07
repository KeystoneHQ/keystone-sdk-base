export * from '@keystonehq/bc-ur-registry';
import { extend } from '@keystonehq/bc-ur-registry';
import { ExtendedRegistryTypes } from './RegistryType';
const { cbor } = extend;
cbor.patchTags(
    Object.values(ExtendedRegistryTypes)
        .filter((rt) => !!rt.getTag())
        .map((rt) => rt.getTag()),
);

export { EthSignRequest, DataType } from './EthSignRequest';
export { ETHSignature } from './EthSignature';
export { ETHNFTItem } from './ETHNFTItem';

export { generateAddressfromXpub, findHDpatfromAddress } from './utlis';

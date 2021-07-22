// @ts-ignore
import HDKey from 'hdkey'
import { toChecksumAddress, publicToAddress, rlp, toBuffer, unpadBuffer } from 'ethereumjs-util';

export const generateAddressfromXpub = (xpub:string, derivePath: string) => {
    // @ts-ignore
    const node = HDKey.fromExtendedKey(xpub)
    const publicKey = node.derive(derivePath)
    const address = '0x' + publicToAddress(publicKey.publicKey, true).toString('hex');
    return toChecksumAddress(address);
}

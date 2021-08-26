// @ts-ignore
import HDKey from 'hdkey';
import { toChecksumAddress, publicToAddress } from 'ethereumjs-util';

export const generateAddressfromXpub = (xpub: string, derivePath: string) => {
    // @ts-ignore
    const node = HDKey.fromExtendedKey(xpub);
    const publicKey = node.derive(derivePath);
    const address = '0x' + publicToAddress(publicKey.publicKey, true).toString('hex');
    return toChecksumAddress(address);
};

export const findHDpatfromAddress = (address: string, xpub: string, numberLimit: number, rootPath: string) => {
    for (let i = 0; i < numberLimit; i++) {
        const path = `M/0/${i}`;
        const caculateAddress = generateAddressfromXpub(xpub, path);
        if (address.toLowerCase() == caculateAddress.toLowerCase()) {
            return `${rootPath}/0/${i}`;
        }
    }
    return null;
};

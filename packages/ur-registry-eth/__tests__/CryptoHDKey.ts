import { CryptoKeypath, PathComponent } from '../src';
import { CryptoHDKey } from '../src';

describe('CryptoHDKey', () => {
    it('test it can generate hd key for eth hd key', () => {
        const xfp = Buffer.from('e9181cf3', 'hex');
        const originKeyPath = new CryptoKeypath(
            [
                new PathComponent({ index: 44, hardened: true }),
                new PathComponent({ index: 1, hardened: true }),
                new PathComponent({ index: 1, hardened: true }),
            ],
            xfp,
        );

        const cryptoHDKey = new CryptoHDKey({
            isMaster: false,
            key: Buffer.from('029faf288ea40e4c2062ec1c3a6ab9f856f75fe4b1a73cc28cf5de941654ad2053', 'hex'),
            chainCode: Buffer.from('337467160739c9ebc90e719d281e477fffecc9f7070897c9422b475029beeeb8', 'hex'),
            origin: originKeyPath,
        });

        const expectedHex =
            'a3035821029faf288ea40e4c2062ec1c3a6ab9f856f75fe4b1a73cc28cf5de941654ad2053045820337467160739c9ebc90e719d281e477fffecc9f7070897c9422b475029beeeb806d90130a20186182cf501f501f5021ae9181cf3';
        expect(cryptoHDKey.toCBOR().toString('hex')).toEqual(expectedHex);

        const ur = cryptoHDKey.toUREncoder(1000).nextPart();
        expect(ur).toBe(
            'ur:crypto-hdkey/otaxhdclaonepedemnoxbagscxidwpceftimrhyahfylhevepaosfnsalkykuemwcmghpmcxguaahdcxeojyiocmatessowmsobajsntdeckfllbzmwpsoylataymssofwdnflgddtrnwyroamtaaddyoeadlncsdwykadykadykaocywlcscewfrsytpfcw',
        );
    });
});

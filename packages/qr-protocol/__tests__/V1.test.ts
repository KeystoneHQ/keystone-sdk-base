import { V1 } from '../src/QRProtocolCodec';
import { sync } from './__data__/sync';
import { decodedSync } from './__data__/decodedSync';

const qrs = [
    {
        checkSum: '837b9e224b3ffd226f5388b992d1f952',
        compress: true,
        index: 0,
        total: 3,
        value:
            'H4sIAAAAAAAAE82WyY6l1gGGVeosWtdxFHc2La+8c3ZVzLALMwEODZeZHRxmzHCZuVKUYRFFGRaR8hR5rbxIqO62XWXlASKxRp/+//vPOW8f3n0F+6T/Zo2X7+ZvbiPs0+zrf797+/DuNziFIimaUEiGxijGYClBp3SKJ1iOkAkN8TSGJJo8oU8pTT0RTzj2RGREHFMMCtGEYLKv//PV5a8Plzecw//y4es/PFy+AI848+3j0/P3rt+HJSEFrMLJEMdsKa9FLiwzTsOSOQTXluHzhHZmHBDcipAzOxrcRrCOcah+nUJw6HvPp4rvrC0WN1SNcn4Mb4S+4RQdh27GXvuwxdM1tgqVY+Upef9w+dsJI36E+ePD5ecnDP7tI4m8oOF6OYTVQRFqPvp+ixyqCueR78R8Jq/zIfJ8rQhLyfJ5a5eTnUB7IGDGRvcdCQcw67mv8IlMJtpNVJild/lkBT7b1DZoQOYtYZijWOenFBn8QKO8pnmZDW+U8xKwijDROFtGNcHqEUdWFT6ZhN4JQawJdl0dZAO5pDqmG81AYdRllBl6bY3mgLnjEiwjzamdozIXIask4KaIghfE3ausfcbnoRn7Th1Pmr8/F8U/0/zp4fLlJxoEJ17i1AIThBApRQ2yYLLjiWVpCmx0Yrsj6VvaqCLiqPe5aprMtGcRNpVIqqA2cWyWczXGYMqDu0PSZK0aaYC2jFa',
        valueType: 'protobuf',
    },
    {
        checkSum: '837b9e224b3ffd226f5388b992d1f952',
        compress: true,
        index: 1,
        total: 3,
        value:
            'uQCjxzAIMm9pNY+k6SASZ/BTOzwTWVn4U5+R5SSM4XRIUidmT7Xgti6plpoJSB4JC+i7rlqrfi9wWVPEqKtS2pIdgAcHunVS3qvCGzckaec0dmhnVgUKn2sSudsuCdpk1eanNmJ/uZCrSQOGbk+bZYv0nFqMvo9FmhlrxQpxkXJIZES/FfhbduW59emRXD7oqXk9tOnI4Rvlc1Gl0MdHNfI8lS8mYijJud8i6DSTszAgmrw9zz9hThN2EItnQZaDdFPg3BuFOmH+c0TjXD8brqphXVRnJejV7tB6JHiimtbu+N9xDViaVo/HjUq+srtnTHQr9LthkWGcI7wqlgDP1LnY906Q2KXK45xRBX7LMMLS3BttWBfcJvFOvUYNTlNcNy3D/7LHAX195jL9Mh2utUMHpFiBlS3OoIwQF1Qt5TKVRrnhFRQ2+BKbWXlRs9LYKDcWijoCBQE6y5ipTzKLtQyy0dkKmieDYwToM5q46/d76dU/iRWwss9OR1fbZ4yDiX4eDka/KAhFXHnkRgkyj3MXjN4kguWBqkcZLXGtrOSoRXLRCobyjXmBsVyoi5k6eliipIUbo1loekRpPY4CgcQpS9jZLZ2q5rqq73Uym4FI+ZovN9zhX8yezwl/i4BhdK43JC714EDWr4DFTcnM4wmG0N3kVWVonFKO8CYcaI35kDlFQM4JhzNO1hsp+P7HUG0JPwG6S9h',
        valueType: 'protobuf',
    },
    {
        checkSum: '837b9e224b3ffd226f5388b992d1f952',
        compress: true,
        index: 2,
        total: 3,
        value:
            'Zqt0GIoUnHwNZITNzvAXqu5ITs37+5/PN057cfbOfk+fPD5VefeFAG+Xwo/0gluUErEZLbyL5La3cKWXuHxAADWhmz7+6sO3aez9OYocXW743WZZCr9zS44jYwsMEJW6OmRWDfu2A1R1bddyZPKHc/nLvCFttqIkhDUzQ/Uh/HJX6wP43rB51fRsTlub+4a3kdDjiKN0ZBC0swHGSf7ws65MYa52hNqmAXR0dKNjagjlgnSr6HobrF2t6GxWAsfdDIkqZYK5qMIhKIbYDEXaZgrDK745WegUcql788y/zhOZ/fXy6Pj0P/XROn/fwZhAkkbBqYzFxFQ2mFrNsKplzaervN2ilHRBc9PtA3Z7D8DrGle+A4tFCC2QxI0iEnc4ijek6tkaPgbcFaOHaUAEuakL0RMsU4Yx3GrjzDec+31VnQG80GJ8rvLm8fH5tlitv4f4AIdBoFwarbS3f+ToZJmzoaUfo1PVLcdCeNip20xfEzEFMLSZBQNJZSg9e4RctKvitNxybrkUVOUZVZlJbW6TTnG65ctYunfX/g8FLwSmLiCXvV0GLSbByJt7TJJmnqQu2KBWNb6QDrVwgloHWj3Du5jokhtaO6I0h8KZliyMTV3o2F3+qCrrq7RVCp1FbhWTFper55yttzjkWZpbvQ7NVN3n/xcVP/NziXX//LRX/BPz+hvI9PKHPs/wvA4p2vVQkAAA==',
        valueType: 'protobuf',
    },
];

describe('QRProtocolCodec V1', () => {
    it('should construct QRCode', () => {
        const data =
            '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';
        expect(V1.constructQRCode(data)).toStrictEqual(qrs);
    });
    it('should extract QRCode', () => {
        expect(V1.extractQRCode(qrs)).toBe(
            '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',
        );
    });
    it('should encode protobuf to QRCode', () => {
        const encoded = V1.encodeProtobufToQRCode(sync, 800);
        const decoded = V1.decodeQRCodeToProtobuf(encoded).toJSON();
        expect(decoded).toStrictEqual(decodedSync);
    });
});

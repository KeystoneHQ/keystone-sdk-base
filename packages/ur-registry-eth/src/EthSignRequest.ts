import { CryptoKeypath, extend, DataItem, PathComponent } from '@keystonehq/bc-ur-registry';
import { ExtendedRegistryTypes } from './RegistryType';

const { RegistryItem, decodeToDataItem, RegistryTypes } = extend;

enum Keys {
    requestId = 1,
    signData,
    dataType,
    chainId,
    derivationPath,
    address,
}

export enum DataType {
    transaction = 1,
    typedData = 2,
    rawHex = 3,
    typedTransaction = 4,
}

type signRequestProps = {
    requestId?: Buffer;
    signData: Buffer;
    dataType: DataType;
    chainId?: number;
    derivationPath: CryptoKeypath;
    address?: string;
};

export class EthSignRequest extends RegistryItem {
    private requestId: Buffer;
    private signData: Buffer;
    private dataType: DataType;
    private chainId: number;
    private derivationPath: CryptoKeypath;
    private address: string;

    getRegistryType = () => ExtendedRegistryTypes.ETH_SIGN_REQUEST;

    constructor(private args: signRequestProps) {
        super();
        this.setupData(args);
    }

    private setupData = (args: signRequestProps) => {
        this.requestId = args.requestId;
        this.signData = args.signData;
        this.dataType = args.dataType;
        this.chainId = args.chainId;
        this.derivationPath = args.derivationPath;
        this.address = args.address;
    };

    public getRequestId = () => this.requestId;
    public getSignData = () => this.signData;
    public getDataType = () => this.dataType;
    public getChainId = () => this.chainId;
    public getDerivationPath = () => this.derivationPath.getPath();
    public getSignRequestAddress = () => this.address;

    public toDataItem = () => {
        const map = {};
        if (this.requestId) {
            map[Keys.requestId] = new DataItem(this.requestId, RegistryTypes.UUID.getTag());
        }
        if (this.address) {
            map[Keys.address] = this.address;
        }
        if (this.chainId) {
            map[Keys.chainId] = this.chainId
        }

        map[Keys.signData] = this.signData;
        map[Keys.dataType] = this.dataType;

        const keyPath = this.derivationPath.toDataItem();
        keyPath.setTag(this.derivationPath.getRegistryType().getTag());
        map[Keys.derivationPath] = keyPath;

        return new DataItem(map);
    };

    public static fromDataItem = (dataItem) => {
        const map = dataItem.getData();
        const signData = map[Keys.signData];
        const dataType = map[Keys.dataType];
        const derivationPath = CryptoKeypath.fromDataItem(map[Keys.derivationPath]);
        const chainId = map[Keys.chainId] ? map[Keys.chainId] : undefined;
        const address = map[Keys.address] ? map[Keys.address] : undefined;
        const requestId = map[Keys.requestId] ? map[Keys.requestId].getData() : undefined;

        return new EthSignRequest({
            requestId,
            signData,
            dataType,
            chainId,
            derivationPath,
            address,
        });
    };

    public static fromCBOR = (_cborPayload: Buffer) => {
        const dataItem = decodeToDataItem(_cborPayload);
        return EthSignRequest.fromDataItem(dataItem);
    };

    public static constructETHRequest(signData: Buffer, signDataType: DataType, hdPath: string, xfp: string, uuidString?: string, chainId?: number, address?: string) {
        const paths = hdPath.replace('[m|M]/', '').split('/');
        const hdpathObject = new CryptoKeypath(
            paths.map((path) => {
                const index = parseInt(path.replace("'", ''));
                let isHardened = false;
                if (path.endsWith("'")) {
                    isHardened = true;
                }
                return new PathComponent({ index, hardened: isHardened });
            }),
            Buffer.from(xfp, 'hex')
        );

        return new EthSignRequest({
            requestId: uuidString ? Buffer.from(uuidString, 'hex') : undefined,
            signData,
            dataType: signDataType,
            derivationPath: hdpathObject,
            chainId,
            address
        });
    }
}

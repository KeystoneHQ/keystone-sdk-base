import * as $protobuf from "protobufjs";
/** Namespace protoc. */
export namespace protoc {

    /** Properties of a Base. */
    interface IBase {

        /** Base version */
        version?: (number|null);

        /** Base description */
        description?: (string|null);

        /** Base data */
        data?: (protoc.IPayload|null);

        /** Base hotVersion */
        hotVersion?: (number|null);

        /** Base coldVersion */
        coldVersion?: (number|null);

        /** Base deviceType */
        deviceType?: (string|null);
    }

    /** Represents a Base. */
    class Base implements IBase {

        /**
         * Constructs a new Base.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IBase);

        /** Base version. */
        public version: number;

        /** Base description. */
        public description: string;

        /** Base data. */
        public data?: (protoc.IPayload|null);

        /** Base hotVersion. */
        public hotVersion: number;

        /** Base coldVersion. */
        public coldVersion: number;

        /** Base deviceType. */
        public deviceType: string;

        /** Base Content. */
        public Content?: ("hotVersion"|"coldVersion");

        /**
         * Creates a new Base instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Base instance
         */
        public static create(properties?: protoc.IBase): protoc.Base;

        /**
         * Encodes the specified Base message. Does not implicitly {@link protoc.Base.verify|verify} messages.
         * @param message Base message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Base message, length delimited. Does not implicitly {@link protoc.Base.verify|verify} messages.
         * @param message Base message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Base message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Base
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Base;

        /**
         * Decodes a Base message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Base
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Base;

        /**
         * Verifies a Base message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Base message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Base
         */
        public static fromObject(object: { [k: string]: any }): protoc.Base;

        /**
         * Creates a plain object from a Base message. Also converts values to other types if specified.
         * @param message Base
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Base, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Base to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Payload. */
    interface IPayload {

        /** Payload type */
        type?: (protoc.Payload.Type|null);

        /** Payload xfp */
        xfp?: (string|null);

        /** Payload sync */
        sync?: (protoc.ISync|null);

        /** Payload signTx */
        signTx?: (protoc.ISignTransaction|null);

        /** Payload signMsg */
        signMsg?: (protoc.ISignMessage|null);

        /** Payload verifyAddr */
        verifyAddr?: (protoc.IVerifyAddress|null);

        /** Payload signTxResult */
        signTxResult?: (protoc.ISignTransactionResult|null);
    }

    /** Represents a Payload. */
    class Payload implements IPayload {

        /**
         * Constructs a new Payload.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IPayload);

        /** Payload type. */
        public type: protoc.Payload.Type;

        /** Payload xfp. */
        public xfp: string;

        /** Payload sync. */
        public sync?: (protoc.ISync|null);

        /** Payload signTx. */
        public signTx?: (protoc.ISignTransaction|null);

        /** Payload signMsg. */
        public signMsg?: (protoc.ISignMessage|null);

        /** Payload verifyAddr. */
        public verifyAddr?: (protoc.IVerifyAddress|null);

        /** Payload signTxResult. */
        public signTxResult?: (protoc.ISignTransactionResult|null);

        /** Payload Content. */
        public Content?: ("sync"|"signTx"|"signMsg"|"verifyAddr"|"signTxResult");

        /**
         * Creates a new Payload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payload instance
         */
        public static create(properties?: protoc.IPayload): protoc.Payload;

        /**
         * Encodes the specified Payload message. Does not implicitly {@link protoc.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payload message, length delimited. Does not implicitly {@link protoc.Payload.verify|verify} messages.
         * @param message Payload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Payload;

        /**
         * Decodes a Payload message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Payload;

        /**
         * Verifies a Payload message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payload
         */
        public static fromObject(object: { [k: string]: any }): protoc.Payload;

        /**
         * Creates a plain object from a Payload message. Also converts values to other types if specified.
         * @param message Payload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Payload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Payload {

        /** Type enum. */
        enum Type {
            TYPE_RESERVE = 0,
            TYPE_SYNC = 1,
            TYPE_SIGN_TX = 2,
            TYPE_SIGN_MSG = 3,
            TYPE_SIGN_MULTI_SIG = 4,
            TYPE_SYNC_MULTI_SIG_MSG = 5,
            TYPE_SIGN_ETH_MULTI_SIG_MSG = 6,
            TYPE_VERIFY_ADDRESS = 7,
            TYPE_STAKING = 8,
            TYPE_SIGN_TX_RESULT = 9
        }
    }

    /** Properties of an Account. */
    interface IAccount {

        /** Account hdPath */
        hdPath?: (string|null);

        /** Account xPub */
        xPub?: (string|null);

        /** Account addressLength */
        addressLength?: (number|null);

        /** Account isMultiSign */
        isMultiSign?: (boolean|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IAccount);

        /** Account hdPath. */
        public hdPath: string;

        /** Account xPub. */
        public xPub: string;

        /** Account addressLength. */
        public addressLength: number;

        /** Account isMultiSign. */
        public isMultiSign: boolean;

        /**
         * Creates a new Account instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Account instance
         */
        public static create(properties?: protoc.IAccount): protoc.Account;

        /**
         * Encodes the specified Account message. Does not implicitly {@link protoc.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link protoc.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Account;

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Account;

        /**
         * Verifies an Account message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Account
         */
        public static fromObject(object: { [k: string]: any }): protoc.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param message Account
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Coin. */
    interface ICoin {

        /** Coin coinCode */
        coinCode?: (string|null);

        /** Coin active */
        active?: (boolean|null);

        /** Coin accounts */
        accounts?: (protoc.IAccount[]|null);
    }

    /** Represents a Coin. */
    class Coin implements ICoin {

        /**
         * Constructs a new Coin.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ICoin);

        /** Coin coinCode. */
        public coinCode: string;

        /** Coin active. */
        public active: boolean;

        /** Coin accounts. */
        public accounts: protoc.IAccount[];

        /**
         * Creates a new Coin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coin instance
         */
        public static create(properties?: protoc.ICoin): protoc.Coin;

        /**
         * Encodes the specified Coin message. Does not implicitly {@link protoc.Coin.verify|verify} messages.
         * @param message Coin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Coin message, length delimited. Does not implicitly {@link protoc.Coin.verify|verify} messages.
         * @param message Coin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Coin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Coin;

        /**
         * Decodes a Coin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Coin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Coin;

        /**
         * Verifies a Coin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Coin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Coin
         */
        public static fromObject(object: { [k: string]: any }): protoc.Coin;

        /**
         * Creates a plain object from a Coin message. Also converts values to other types if specified.
         * @param message Coin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Coin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Coin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Sync. */
    interface ISync {

        /** Sync coins */
        coins?: (protoc.ICoin[]|null);
    }

    /** Represents a Sync. */
    class Sync implements ISync {

        /**
         * Constructs a new Sync.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ISync);

        /** Sync coins. */
        public coins: protoc.ICoin[];

        /**
         * Creates a new Sync instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Sync instance
         */
        public static create(properties?: protoc.ISync): protoc.Sync;

        /**
         * Encodes the specified Sync message. Does not implicitly {@link protoc.Sync.verify|verify} messages.
         * @param message Sync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ISync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Sync message, length delimited. Does not implicitly {@link protoc.Sync.verify|verify} messages.
         * @param message Sync message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ISync, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Sync message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Sync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Sync;

        /**
         * Decodes a Sync message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Sync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Sync;

        /**
         * Verifies a Sync message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Sync message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Sync
         */
        public static fromObject(object: { [k: string]: any }): protoc.Sync;

        /**
         * Creates a plain object from a Sync message. Also converts values to other types if specified.
         * @param message Sync
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Sync, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Sync to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignTransaction. */
    interface ISignTransaction {

        /** SignTransaction coinCode */
        coinCode?: (string|null);

        /** SignTransaction signId */
        signId?: (string|null);

        /** SignTransaction hdPath */
        hdPath?: (string|null);

        /** SignTransaction timestamp */
        timestamp?: (number|Long|null);

        /** SignTransaction decimal */
        decimal?: (number|null);

        /** SignTransaction btcTx */
        btcTx?: (protoc.IBtcTx|null);

        /** SignTransaction ethTx */
        ethTx?: (protoc.IEthTx|null);

        /** SignTransaction tronTx */
        tronTx?: (protoc.ITronTx|null);

        /** SignTransaction etcTx */
        etcTx?: (protoc.IEtcTx|null);

        /** SignTransaction bchTx */
        bchTx?: (protoc.IBchTx|null);

        /** SignTransaction dashTx */
        dashTx?: (protoc.IDashTx|null);

        /** SignTransaction ltcTx */
        ltcTx?: (protoc.ILtcTx|null);

        /** SignTransaction dcrTx */
        dcrTx?: (protoc.IDcrTx|null);

        /** SignTransaction xzcTx */
        xzcTx?: (protoc.IXzcTx|null);

        /** SignTransaction xrpTx */
        xrpTx?: (protoc.IXrpTx|null);

        /** SignTransaction iostTx */
        iostTx?: (protoc.IIostTx|null);

        /** SignTransaction omniTx */
        omniTx?: (protoc.IOmniTx|null);

        /** SignTransaction eosTx */
        eosTx?: (protoc.IEosTx|null);

        /** SignTransaction dotTx */
        dotTx?: (protoc.IDotTx|null);

        /** SignTransaction ksmTx */
        ksmTx?: (protoc.IKsmTx|null);

        /** SignTransaction cfxTx */
        cfxTx?: (protoc.ICfxTx|null);
    }

    /** Represents a SignTransaction. */
    class SignTransaction implements ISignTransaction {

        /**
         * Constructs a new SignTransaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ISignTransaction);

        /** SignTransaction coinCode. */
        public coinCode: string;

        /** SignTransaction signId. */
        public signId: string;

        /** SignTransaction hdPath. */
        public hdPath: string;

        /** SignTransaction timestamp. */
        public timestamp: (number|Long);

        /** SignTransaction decimal. */
        public decimal: number;

        /** SignTransaction btcTx. */
        public btcTx?: (protoc.IBtcTx|null);

        /** SignTransaction ethTx. */
        public ethTx?: (protoc.IEthTx|null);

        /** SignTransaction tronTx. */
        public tronTx?: (protoc.ITronTx|null);

        /** SignTransaction etcTx. */
        public etcTx?: (protoc.IEtcTx|null);

        /** SignTransaction bchTx. */
        public bchTx?: (protoc.IBchTx|null);

        /** SignTransaction dashTx. */
        public dashTx?: (protoc.IDashTx|null);

        /** SignTransaction ltcTx. */
        public ltcTx?: (protoc.ILtcTx|null);

        /** SignTransaction dcrTx. */
        public dcrTx?: (protoc.IDcrTx|null);

        /** SignTransaction xzcTx. */
        public xzcTx?: (protoc.IXzcTx|null);

        /** SignTransaction xrpTx. */
        public xrpTx?: (protoc.IXrpTx|null);

        /** SignTransaction iostTx. */
        public iostTx?: (protoc.IIostTx|null);

        /** SignTransaction omniTx. */
        public omniTx?: (protoc.IOmniTx|null);

        /** SignTransaction eosTx. */
        public eosTx?: (protoc.IEosTx|null);

        /** SignTransaction dotTx. */
        public dotTx?: (protoc.IDotTx|null);

        /** SignTransaction ksmTx. */
        public ksmTx?: (protoc.IKsmTx|null);

        /** SignTransaction cfxTx. */
        public cfxTx?: (protoc.ICfxTx|null);

        /** SignTransaction Transaction. */
        public Transaction?: ("btcTx"|"ethTx"|"tronTx"|"etcTx"|"bchTx"|"dashTx"|"ltcTx"|"dcrTx"|"xzcTx"|"xrpTx"|"iostTx"|"omniTx"|"eosTx"|"dotTx"|"ksmTx"|"cfxTx");

        /**
         * Creates a new SignTransaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignTransaction instance
         */
        public static create(properties?: protoc.ISignTransaction): protoc.SignTransaction;

        /**
         * Encodes the specified SignTransaction message. Does not implicitly {@link protoc.SignTransaction.verify|verify} messages.
         * @param message SignTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ISignTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignTransaction message, length delimited. Does not implicitly {@link protoc.SignTransaction.verify|verify} messages.
         * @param message SignTransaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ISignTransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignTransaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.SignTransaction;

        /**
         * Decodes a SignTransaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.SignTransaction;

        /**
         * Verifies a SignTransaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignTransaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignTransaction
         */
        public static fromObject(object: { [k: string]: any }): protoc.SignTransaction;

        /**
         * Creates a plain object from a SignTransaction message. Also converts values to other types if specified.
         * @param message SignTransaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.SignTransaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignTransaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BtcTx. */
    interface IBtcTx {

        /** BtcTx fee */
        fee?: (number|Long|null);

        /** BtcTx dustThreshold */
        dustThreshold?: (number|null);

        /** BtcTx memo */
        memo?: (string|null);

        /** BtcTx inputs */
        inputs?: (protoc.IInput[]|null);

        /** BtcTx outputs */
        outputs?: (protoc.IOutput[]|null);

        /** BtcTx omni */
        omni?: (protoc.IOmni|null);
    }

    /** Represents a BtcTx. */
    class BtcTx implements IBtcTx {

        /**
         * Constructs a new BtcTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IBtcTx);

        /** BtcTx fee. */
        public fee: (number|Long);

        /** BtcTx dustThreshold. */
        public dustThreshold: number;

        /** BtcTx memo. */
        public memo: string;

        /** BtcTx inputs. */
        public inputs: protoc.IInput[];

        /** BtcTx outputs. */
        public outputs: protoc.IOutput[];

        /** BtcTx omni. */
        public omni?: (protoc.IOmni|null);

        /**
         * Creates a new BtcTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BtcTx instance
         */
        public static create(properties?: protoc.IBtcTx): protoc.BtcTx;

        /**
         * Encodes the specified BtcTx message. Does not implicitly {@link protoc.BtcTx.verify|verify} messages.
         * @param message BtcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IBtcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BtcTx message, length delimited. Does not implicitly {@link protoc.BtcTx.verify|verify} messages.
         * @param message BtcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IBtcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BtcTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BtcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.BtcTx;

        /**
         * Decodes a BtcTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BtcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.BtcTx;

        /**
         * Verifies a BtcTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BtcTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BtcTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.BtcTx;

        /**
         * Creates a plain object from a BtcTx message. Also converts values to other types if specified.
         * @param message BtcTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.BtcTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BtcTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Omni. */
    interface IOmni {

        /** Omni to */
        to?: (string|null);

        /** Omni changeAddress */
        changeAddress?: (string|null);

        /** Omni omniAmount */
        omniAmount?: (number|Long|null);

        /** Omni propertyId */
        propertyId?: (number|null);
    }

    /** Represents an Omni. */
    class Omni implements IOmni {

        /**
         * Constructs a new Omni.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IOmni);

        /** Omni to. */
        public to: string;

        /** Omni changeAddress. */
        public changeAddress: string;

        /** Omni omniAmount. */
        public omniAmount: (number|Long);

        /** Omni propertyId. */
        public propertyId: number;

        /**
         * Creates a new Omni instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Omni instance
         */
        public static create(properties?: protoc.IOmni): protoc.Omni;

        /**
         * Encodes the specified Omni message. Does not implicitly {@link protoc.Omni.verify|verify} messages.
         * @param message Omni message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IOmni, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Omni message, length delimited. Does not implicitly {@link protoc.Omni.verify|verify} messages.
         * @param message Omni message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IOmni, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Omni message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Omni
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Omni;

        /**
         * Decodes an Omni message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Omni
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Omni;

        /**
         * Verifies an Omni message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Omni message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Omni
         */
        public static fromObject(object: { [k: string]: any }): protoc.Omni;

        /**
         * Creates a plain object from an Omni message. Also converts values to other types if specified.
         * @param message Omni
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Omni, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Omni to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Input. */
    interface IInput {

        /** Input hash */
        hash?: (string|null);

        /** Input index */
        index?: (number|null);

        /** Input utxo */
        utxo?: (protoc.Iutxo|null);

        /** Input ownerKeyPath */
        ownerKeyPath?: (string|null);
    }

    /** Represents an Input. */
    class Input implements IInput {

        /**
         * Constructs a new Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IInput);

        /** Input hash. */
        public hash: string;

        /** Input index. */
        public index: number;

        /** Input utxo. */
        public utxo?: (protoc.Iutxo|null);

        /** Input ownerKeyPath. */
        public ownerKeyPath: string;

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: protoc.IInput): protoc.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link protoc.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Input;

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Input;

        /**
         * Verifies an Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Input
         */
        public static fromObject(object: { [k: string]: any }): protoc.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param message Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an utxo. */
    interface Iutxo {

        /** utxo publicKey */
        publicKey?: (string|null);

        /** utxo script */
        script?: (string|null);

        /** utxo value */
        value?: (number|Long|null);
    }

    /** Represents an utxo. */
    class utxo implements Iutxo {

        /**
         * Constructs a new utxo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.Iutxo);

        /** utxo publicKey. */
        public publicKey: string;

        /** utxo script. */
        public script: string;

        /** utxo value. */
        public value: (number|Long);

        /**
         * Creates a new utxo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns utxo instance
         */
        public static create(properties?: protoc.Iutxo): protoc.utxo;

        /**
         * Encodes the specified utxo message. Does not implicitly {@link protoc.utxo.verify|verify} messages.
         * @param message utxo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.Iutxo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified utxo message, length delimited. Does not implicitly {@link protoc.utxo.verify|verify} messages.
         * @param message utxo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.Iutxo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an utxo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns utxo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.utxo;

        /**
         * Decodes an utxo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns utxo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.utxo;

        /**
         * Verifies an utxo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an utxo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns utxo
         */
        public static fromObject(object: { [k: string]: any }): protoc.utxo;

        /**
         * Creates a plain object from an utxo message. Also converts values to other types if specified.
         * @param message utxo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.utxo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this utxo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Output. */
    interface IOutput {

        /** Output address */
        address?: (string|null);

        /** Output value */
        value?: (number|Long|null);

        /** Output isChange */
        isChange?: (boolean|null);

        /** Output changeAddressPath */
        changeAddressPath?: (string|null);
    }

    /** Represents an Output. */
    class Output implements IOutput {

        /**
         * Constructs a new Output.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IOutput);

        /** Output address. */
        public address: string;

        /** Output value. */
        public value: (number|Long);

        /** Output isChange. */
        public isChange: boolean;

        /** Output changeAddressPath. */
        public changeAddressPath: string;

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(properties?: protoc.IOutput): protoc.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link protoc.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link protoc.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Output;

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Output;

        /**
         * Verifies an Output message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Output
         */
        public static fromObject(object: { [k: string]: any }): protoc.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param message Output
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EthTx. */
    interface IEthTx {

        /** EthTx to */
        to?: (string|null);

        /** EthTx value */
        value?: (string|null);

        /** EthTx gasPrice */
        gasPrice?: (string|null);

        /** EthTx gasLimit */
        gasLimit?: (string|null);

        /** EthTx memo */
        memo?: (string|null);

        /** EthTx nonce */
        nonce?: (number|null);

        /** EthTx override */
        override?: (protoc.EthTx.IOverride|null);
    }

    /** Represents an EthTx. */
    class EthTx implements IEthTx {

        /**
         * Constructs a new EthTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IEthTx);

        /** EthTx to. */
        public to: string;

        /** EthTx value. */
        public value: string;

        /** EthTx gasPrice. */
        public gasPrice: string;

        /** EthTx gasLimit. */
        public gasLimit: string;

        /** EthTx memo. */
        public memo: string;

        /** EthTx nonce. */
        public nonce: number;

        /** EthTx override. */
        public override?: (protoc.EthTx.IOverride|null);

        /**
         * Creates a new EthTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EthTx instance
         */
        public static create(properties?: protoc.IEthTx): protoc.EthTx;

        /**
         * Encodes the specified EthTx message. Does not implicitly {@link protoc.EthTx.verify|verify} messages.
         * @param message EthTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IEthTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EthTx message, length delimited. Does not implicitly {@link protoc.EthTx.verify|verify} messages.
         * @param message EthTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IEthTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EthTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EthTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.EthTx;

        /**
         * Decodes an EthTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EthTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.EthTx;

        /**
         * Verifies an EthTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EthTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EthTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.EthTx;

        /**
         * Creates a plain object from an EthTx message. Also converts values to other types if specified.
         * @param message EthTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.EthTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EthTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace EthTx {

        /** Properties of an Override. */
        interface IOverride {

            /** Override decimals */
            decimals?: (number|null);

            /** Override tokenShortName */
            tokenShortName?: (string|null);

            /** Override tokenFullName */
            tokenFullName?: (string|null);

            /** Override contractAddress */
            contractAddress?: (string|null);
        }

        /** Represents an Override. */
        class Override implements IOverride {

            /**
             * Constructs a new Override.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.EthTx.IOverride);

            /** Override decimals. */
            public decimals: number;

            /** Override tokenShortName. */
            public tokenShortName: string;

            /** Override tokenFullName. */
            public tokenFullName: string;

            /** Override contractAddress. */
            public contractAddress: string;

            /**
             * Creates a new Override instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Override instance
             */
            public static create(properties?: protoc.EthTx.IOverride): protoc.EthTx.Override;

            /**
             * Encodes the specified Override message. Does not implicitly {@link protoc.EthTx.Override.verify|verify} messages.
             * @param message Override message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.EthTx.IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Override message, length delimited. Does not implicitly {@link protoc.EthTx.Override.verify|verify} messages.
             * @param message Override message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.EthTx.IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Override message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Override
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.EthTx.Override;

            /**
             * Decodes an Override message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Override
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.EthTx.Override;

            /**
             * Verifies an Override message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Override message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Override
             */
            public static fromObject(object: { [k: string]: any }): protoc.EthTx.Override;

            /**
             * Creates a plain object from an Override message. Also converts values to other types if specified.
             * @param message Override
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.EthTx.Override, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Override to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an EtcTx. */
    interface IEtcTx {

        /** EtcTx to */
        to?: (string|null);

        /** EtcTx value */
        value?: (string|null);

        /** EtcTx gasPrice */
        gasPrice?: (string|null);

        /** EtcTx gasLimit */
        gasLimit?: (string|null);

        /** EtcTx memo */
        memo?: (string|null);

        /** EtcTx nonce */
        nonce?: (number|null);
    }

    /** Represents an EtcTx. */
    class EtcTx implements IEtcTx {

        /**
         * Constructs a new EtcTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IEtcTx);

        /** EtcTx to. */
        public to: string;

        /** EtcTx value. */
        public value: string;

        /** EtcTx gasPrice. */
        public gasPrice: string;

        /** EtcTx gasLimit. */
        public gasLimit: string;

        /** EtcTx memo. */
        public memo: string;

        /** EtcTx nonce. */
        public nonce: number;

        /**
         * Creates a new EtcTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EtcTx instance
         */
        public static create(properties?: protoc.IEtcTx): protoc.EtcTx;

        /**
         * Encodes the specified EtcTx message. Does not implicitly {@link protoc.EtcTx.verify|verify} messages.
         * @param message EtcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IEtcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EtcTx message, length delimited. Does not implicitly {@link protoc.EtcTx.verify|verify} messages.
         * @param message EtcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IEtcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EtcTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EtcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.EtcTx;

        /**
         * Decodes an EtcTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EtcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.EtcTx;

        /**
         * Verifies an EtcTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EtcTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EtcTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.EtcTx;

        /**
         * Creates a plain object from an EtcTx message. Also converts values to other types if specified.
         * @param message EtcTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.EtcTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EtcTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LatestBlock. */
    interface ILatestBlock {

        /** LatestBlock hash */
        hash?: (string|null);

        /** LatestBlock number */
        number?: (number|null);

        /** LatestBlock timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a LatestBlock. */
    class LatestBlock implements ILatestBlock {

        /**
         * Constructs a new LatestBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ILatestBlock);

        /** LatestBlock hash. */
        public hash: string;

        /** LatestBlock number. */
        public number: number;

        /** LatestBlock timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new LatestBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LatestBlock instance
         */
        public static create(properties?: protoc.ILatestBlock): protoc.LatestBlock;

        /**
         * Encodes the specified LatestBlock message. Does not implicitly {@link protoc.LatestBlock.verify|verify} messages.
         * @param message LatestBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ILatestBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LatestBlock message, length delimited. Does not implicitly {@link protoc.LatestBlock.verify|verify} messages.
         * @param message LatestBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ILatestBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LatestBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LatestBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.LatestBlock;

        /**
         * Decodes a LatestBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LatestBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.LatestBlock;

        /**
         * Verifies a LatestBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LatestBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LatestBlock
         */
        public static fromObject(object: { [k: string]: any }): protoc.LatestBlock;

        /**
         * Creates a plain object from a LatestBlock message. Also converts values to other types if specified.
         * @param message LatestBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.LatestBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LatestBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Override. */
    interface IOverride {

        /** Override tokenShortName */
        tokenShortName?: (string|null);

        /** Override tokenFullName */
        tokenFullName?: (string|null);

        /** Override decimals */
        decimals?: (number|null);
    }

    /** Represents an Override. */
    class Override implements IOverride {

        /**
         * Constructs a new Override.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IOverride);

        /** Override tokenShortName. */
        public tokenShortName: string;

        /** Override tokenFullName. */
        public tokenFullName: string;

        /** Override decimals. */
        public decimals: number;

        /**
         * Creates a new Override instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Override instance
         */
        public static create(properties?: protoc.IOverride): protoc.Override;

        /**
         * Encodes the specified Override message. Does not implicitly {@link protoc.Override.verify|verify} messages.
         * @param message Override message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Override message, length delimited. Does not implicitly {@link protoc.Override.verify|verify} messages.
         * @param message Override message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Override message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Override
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Override;

        /**
         * Decodes an Override message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Override
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Override;

        /**
         * Verifies an Override message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Override message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Override
         */
        public static fromObject(object: { [k: string]: any }): protoc.Override;

        /**
         * Creates a plain object from an Override message. Also converts values to other types if specified.
         * @param message Override
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Override, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Override to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TronTx. */
    interface ITronTx {

        /** TronTx token */
        token?: (string|null);

        /** TronTx contractAddress */
        contractAddress?: (string|null);

        /** TronTx from */
        from?: (string|null);

        /** TronTx to */
        to?: (string|null);

        /** TronTx memo */
        memo?: (string|null);

        /** TronTx value */
        value?: (string|null);

        /** TronTx latestBlock */
        latestBlock?: (protoc.ILatestBlock|null);

        /** TronTx override */
        override?: (protoc.IOverride|null);

        /** TronTx fee */
        fee?: (number|null);
    }

    /** Represents a TronTx. */
    class TronTx implements ITronTx {

        /**
         * Constructs a new TronTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ITronTx);

        /** TronTx token. */
        public token: string;

        /** TronTx contractAddress. */
        public contractAddress: string;

        /** TronTx from. */
        public from: string;

        /** TronTx to. */
        public to: string;

        /** TronTx memo. */
        public memo: string;

        /** TronTx value. */
        public value: string;

        /** TronTx latestBlock. */
        public latestBlock?: (protoc.ILatestBlock|null);

        /** TronTx override. */
        public override?: (protoc.IOverride|null);

        /** TronTx fee. */
        public fee: number;

        /**
         * Creates a new TronTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TronTx instance
         */
        public static create(properties?: protoc.ITronTx): protoc.TronTx;

        /**
         * Encodes the specified TronTx message. Does not implicitly {@link protoc.TronTx.verify|verify} messages.
         * @param message TronTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ITronTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TronTx message, length delimited. Does not implicitly {@link protoc.TronTx.verify|verify} messages.
         * @param message TronTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ITronTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TronTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TronTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.TronTx;

        /**
         * Decodes a TronTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TronTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.TronTx;

        /**
         * Verifies a TronTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TronTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TronTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.TronTx;

        /**
         * Creates a plain object from a TronTx message. Also converts values to other types if specified.
         * @param message TronTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.TronTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TronTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BchTx. */
    interface IBchTx {

        /** BchTx fee */
        fee?: (number|Long|null);

        /** BchTx dustThreshold */
        dustThreshold?: (number|null);

        /** BchTx memo */
        memo?: (string|null);

        /** BchTx inputs */
        inputs?: (protoc.BchTx.IInput[]|null);

        /** BchTx outputs */
        outputs?: (protoc.IOutput[]|null);
    }

    /** Represents a BchTx. */
    class BchTx implements IBchTx {

        /**
         * Constructs a new BchTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IBchTx);

        /** BchTx fee. */
        public fee: (number|Long);

        /** BchTx dustThreshold. */
        public dustThreshold: number;

        /** BchTx memo. */
        public memo: string;

        /** BchTx inputs. */
        public inputs: protoc.BchTx.IInput[];

        /** BchTx outputs. */
        public outputs: protoc.IOutput[];

        /**
         * Creates a new BchTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BchTx instance
         */
        public static create(properties?: protoc.IBchTx): protoc.BchTx;

        /**
         * Encodes the specified BchTx message. Does not implicitly {@link protoc.BchTx.verify|verify} messages.
         * @param message BchTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IBchTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BchTx message, length delimited. Does not implicitly {@link protoc.BchTx.verify|verify} messages.
         * @param message BchTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IBchTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BchTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BchTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.BchTx;

        /**
         * Decodes a BchTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BchTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.BchTx;

        /**
         * Verifies a BchTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BchTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BchTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.BchTx;

        /**
         * Creates a plain object from a BchTx message. Also converts values to other types if specified.
         * @param message BchTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.BchTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BchTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace BchTx {

        /** Properties of an Input. */
        interface IInput {

            /** Input hash */
            hash?: (string|null);

            /** Input index */
            index?: (number|null);

            /** Input value */
            value?: (number|Long|null);

            /** Input pubkey */
            pubkey?: (string|null);

            /** Input ownerKeyPath */
            ownerKeyPath?: (string|null);
        }

        /** Represents an Input. */
        class Input implements IInput {

            /**
             * Constructs a new Input.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.BchTx.IInput);

            /** Input hash. */
            public hash: string;

            /** Input index. */
            public index: number;

            /** Input value. */
            public value: (number|Long);

            /** Input pubkey. */
            public pubkey: string;

            /** Input ownerKeyPath. */
            public ownerKeyPath: string;

            /**
             * Creates a new Input instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Input instance
             */
            public static create(properties?: protoc.BchTx.IInput): protoc.BchTx.Input;

            /**
             * Encodes the specified Input message. Does not implicitly {@link protoc.BchTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.BchTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.BchTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.BchTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.BchTx.Input;

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.BchTx.Input;

            /**
             * Verifies an Input message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Input
             */
            public static fromObject(object: { [k: string]: any }): protoc.BchTx.Input;

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @param message Input
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.BchTx.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Input to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a DashTx. */
    interface IDashTx {

        /** DashTx fee */
        fee?: (number|Long|null);

        /** DashTx dustThreshold */
        dustThreshold?: (number|null);

        /** DashTx memo */
        memo?: (string|null);

        /** DashTx inputs */
        inputs?: (protoc.DashTx.IInput[]|null);

        /** DashTx outputs */
        outputs?: (protoc.IOutput[]|null);
    }

    /** Represents a DashTx. */
    class DashTx implements IDashTx {

        /**
         * Constructs a new DashTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IDashTx);

        /** DashTx fee. */
        public fee: (number|Long);

        /** DashTx dustThreshold. */
        public dustThreshold: number;

        /** DashTx memo. */
        public memo: string;

        /** DashTx inputs. */
        public inputs: protoc.DashTx.IInput[];

        /** DashTx outputs. */
        public outputs: protoc.IOutput[];

        /**
         * Creates a new DashTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DashTx instance
         */
        public static create(properties?: protoc.IDashTx): protoc.DashTx;

        /**
         * Encodes the specified DashTx message. Does not implicitly {@link protoc.DashTx.verify|verify} messages.
         * @param message DashTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IDashTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DashTx message, length delimited. Does not implicitly {@link protoc.DashTx.verify|verify} messages.
         * @param message DashTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IDashTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DashTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DashTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.DashTx;

        /**
         * Decodes a DashTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DashTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.DashTx;

        /**
         * Verifies a DashTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DashTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DashTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.DashTx;

        /**
         * Creates a plain object from a DashTx message. Also converts values to other types if specified.
         * @param message DashTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.DashTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DashTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DashTx {

        /** Properties of an Input. */
        interface IInput {

            /** Input hash */
            hash?: (string|null);

            /** Input index */
            index?: (number|null);

            /** Input value */
            value?: (number|Long|null);

            /** Input pubkey */
            pubkey?: (string|null);

            /** Input ownerKeyPath */
            ownerKeyPath?: (string|null);
        }

        /** Represents an Input. */
        class Input implements IInput {

            /**
             * Constructs a new Input.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.DashTx.IInput);

            /** Input hash. */
            public hash: string;

            /** Input index. */
            public index: number;

            /** Input value. */
            public value: (number|Long);

            /** Input pubkey. */
            public pubkey: string;

            /** Input ownerKeyPath. */
            public ownerKeyPath: string;

            /**
             * Creates a new Input instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Input instance
             */
            public static create(properties?: protoc.DashTx.IInput): protoc.DashTx.Input;

            /**
             * Encodes the specified Input message. Does not implicitly {@link protoc.DashTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.DashTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.DashTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.DashTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.DashTx.Input;

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.DashTx.Input;

            /**
             * Verifies an Input message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Input
             */
            public static fromObject(object: { [k: string]: any }): protoc.DashTx.Input;

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @param message Input
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.DashTx.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Input to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a LtcTx. */
    interface ILtcTx {

        /** LtcTx fee */
        fee?: (number|Long|null);

        /** LtcTx dustThreshold */
        dustThreshold?: (number|null);

        /** LtcTx memo */
        memo?: (string|null);

        /** LtcTx inputs */
        inputs?: (protoc.IInput[]|null);

        /** LtcTx outputs */
        outputs?: (protoc.IOutput[]|null);
    }

    /** Represents a LtcTx. */
    class LtcTx implements ILtcTx {

        /**
         * Constructs a new LtcTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ILtcTx);

        /** LtcTx fee. */
        public fee: (number|Long);

        /** LtcTx dustThreshold. */
        public dustThreshold: number;

        /** LtcTx memo. */
        public memo: string;

        /** LtcTx inputs. */
        public inputs: protoc.IInput[];

        /** LtcTx outputs. */
        public outputs: protoc.IOutput[];

        /**
         * Creates a new LtcTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LtcTx instance
         */
        public static create(properties?: protoc.ILtcTx): protoc.LtcTx;

        /**
         * Encodes the specified LtcTx message. Does not implicitly {@link protoc.LtcTx.verify|verify} messages.
         * @param message LtcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ILtcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LtcTx message, length delimited. Does not implicitly {@link protoc.LtcTx.verify|verify} messages.
         * @param message LtcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ILtcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LtcTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LtcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.LtcTx;

        /**
         * Decodes a LtcTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LtcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.LtcTx;

        /**
         * Verifies a LtcTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LtcTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LtcTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.LtcTx;

        /**
         * Creates a plain object from a LtcTx message. Also converts values to other types if specified.
         * @param message LtcTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.LtcTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LtcTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DcrTx. */
    interface IDcrTx {

        /** DcrTx fee */
        fee?: (number|Long|null);

        /** DcrTx to */
        to?: (string|null);

        /** DcrTx memo */
        memo?: (string|null);

        /** DcrTx amount */
        amount?: (number|Long|null);

        /** DcrTx inputs */
        inputs?: (protoc.DcrTx.IInput[]|null);

        /** DcrTx changeAddress */
        changeAddress?: (string|null);
    }

    /** Represents a DcrTx. */
    class DcrTx implements IDcrTx {

        /**
         * Constructs a new DcrTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IDcrTx);

        /** DcrTx fee. */
        public fee: (number|Long);

        /** DcrTx to. */
        public to: string;

        /** DcrTx memo. */
        public memo: string;

        /** DcrTx amount. */
        public amount: (number|Long);

        /** DcrTx inputs. */
        public inputs: protoc.DcrTx.IInput[];

        /** DcrTx changeAddress. */
        public changeAddress: string;

        /**
         * Creates a new DcrTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DcrTx instance
         */
        public static create(properties?: protoc.IDcrTx): protoc.DcrTx;

        /**
         * Encodes the specified DcrTx message. Does not implicitly {@link protoc.DcrTx.verify|verify} messages.
         * @param message DcrTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IDcrTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DcrTx message, length delimited. Does not implicitly {@link protoc.DcrTx.verify|verify} messages.
         * @param message DcrTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IDcrTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DcrTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DcrTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.DcrTx;

        /**
         * Decodes a DcrTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DcrTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.DcrTx;

        /**
         * Verifies a DcrTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DcrTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DcrTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.DcrTx;

        /**
         * Creates a plain object from a DcrTx message. Also converts values to other types if specified.
         * @param message DcrTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.DcrTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DcrTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DcrTx {

        /** Properties of an Input. */
        interface IInput {

            /** Input address */
            address?: (string|null);

            /** Input txId */
            txId?: (string|null);

            /** Input outputIndex */
            outputIndex?: (number|null);

            /** Input atoms */
            atoms?: (number|Long|null);
        }

        /** Represents an Input. */
        class Input implements IInput {

            /**
             * Constructs a new Input.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.DcrTx.IInput);

            /** Input address. */
            public address: string;

            /** Input txId. */
            public txId: string;

            /** Input outputIndex. */
            public outputIndex: number;

            /** Input atoms. */
            public atoms: (number|Long);

            /**
             * Creates a new Input instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Input instance
             */
            public static create(properties?: protoc.DcrTx.IInput): protoc.DcrTx.Input;

            /**
             * Encodes the specified Input message. Does not implicitly {@link protoc.DcrTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.DcrTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.DcrTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.DcrTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.DcrTx.Input;

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.DcrTx.Input;

            /**
             * Verifies an Input message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Input
             */
            public static fromObject(object: { [k: string]: any }): protoc.DcrTx.Input;

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @param message Input
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.DcrTx.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Input to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a XzcTx. */
    interface IXzcTx {

        /** XzcTx fee */
        fee?: (number|Long|null);

        /** XzcTx to */
        to?: (string|null);

        /** XzcTx memo */
        memo?: (string|null);

        /** XzcTx amount */
        amount?: (number|Long|null);

        /** XzcTx inputs */
        inputs?: (protoc.XzcTx.IInput[]|null);

        /** XzcTx changeAddress */
        changeAddress?: (string|null);
    }

    /** Represents a XzcTx. */
    class XzcTx implements IXzcTx {

        /**
         * Constructs a new XzcTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IXzcTx);

        /** XzcTx fee. */
        public fee: (number|Long);

        /** XzcTx to. */
        public to: string;

        /** XzcTx memo. */
        public memo: string;

        /** XzcTx amount. */
        public amount: (number|Long);

        /** XzcTx inputs. */
        public inputs: protoc.XzcTx.IInput[];

        /** XzcTx changeAddress. */
        public changeAddress: string;

        /**
         * Creates a new XzcTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XzcTx instance
         */
        public static create(properties?: protoc.IXzcTx): protoc.XzcTx;

        /**
         * Encodes the specified XzcTx message. Does not implicitly {@link protoc.XzcTx.verify|verify} messages.
         * @param message XzcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IXzcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XzcTx message, length delimited. Does not implicitly {@link protoc.XzcTx.verify|verify} messages.
         * @param message XzcTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IXzcTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XzcTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XzcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.XzcTx;

        /**
         * Decodes a XzcTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XzcTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.XzcTx;

        /**
         * Verifies a XzcTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XzcTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XzcTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.XzcTx;

        /**
         * Creates a plain object from a XzcTx message. Also converts values to other types if specified.
         * @param message XzcTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.XzcTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XzcTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace XzcTx {

        /** Properties of an Input. */
        interface IInput {

            /** Input address */
            address?: (string|null);

            /** Input txId */
            txId?: (string|null);

            /** Input outputIndex */
            outputIndex?: (number|null);

            /** Input satoshis */
            satoshis?: (number|Long|null);
        }

        /** Represents an Input. */
        class Input implements IInput {

            /**
             * Constructs a new Input.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.XzcTx.IInput);

            /** Input address. */
            public address: string;

            /** Input txId. */
            public txId: string;

            /** Input outputIndex. */
            public outputIndex: number;

            /** Input satoshis. */
            public satoshis: (number|Long);

            /**
             * Creates a new Input instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Input instance
             */
            public static create(properties?: protoc.XzcTx.IInput): protoc.XzcTx.Input;

            /**
             * Encodes the specified Input message. Does not implicitly {@link protoc.XzcTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.XzcTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.XzcTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.XzcTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.XzcTx.Input;

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.XzcTx.Input;

            /**
             * Verifies an Input message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Input
             */
            public static fromObject(object: { [k: string]: any }): protoc.XzcTx.Input;

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @param message Input
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.XzcTx.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Input to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a XrpTx. */
    interface IXrpTx {

        /** XrpTx to */
        to?: (string|null);

        /** XrpTx amount */
        amount?: (number|Long|null);

        /** XrpTx changeAddress */
        changeAddress?: (string|null);

        /** XrpTx fee */
        fee?: (number|Long|null);

        /** XrpTx sequence */
        sequence?: (number|Long|null);

        /** XrpTx tag */
        tag?: (number|Long|null);

        /** XrpTx memo */
        memo?: (string|null);
    }

    /** Represents a XrpTx. */
    class XrpTx implements IXrpTx {

        /**
         * Constructs a new XrpTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IXrpTx);

        /** XrpTx to. */
        public to: string;

        /** XrpTx amount. */
        public amount: (number|Long);

        /** XrpTx changeAddress. */
        public changeAddress: string;

        /** XrpTx fee. */
        public fee: (number|Long);

        /** XrpTx sequence. */
        public sequence: (number|Long);

        /** XrpTx tag. */
        public tag: (number|Long);

        /** XrpTx memo. */
        public memo: string;

        /**
         * Creates a new XrpTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XrpTx instance
         */
        public static create(properties?: protoc.IXrpTx): protoc.XrpTx;

        /**
         * Encodes the specified XrpTx message. Does not implicitly {@link protoc.XrpTx.verify|verify} messages.
         * @param message XrpTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IXrpTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified XrpTx message, length delimited. Does not implicitly {@link protoc.XrpTx.verify|verify} messages.
         * @param message XrpTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IXrpTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XrpTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XrpTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.XrpTx;

        /**
         * Decodes a XrpTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XrpTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.XrpTx;

        /**
         * Verifies a XrpTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a XrpTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XrpTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.XrpTx;

        /**
         * Creates a plain object from a XrpTx message. Also converts values to other types if specified.
         * @param message XrpTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.XrpTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XrpTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IostTx. */
    interface IIostTx {

        /** IostTx tokenName */
        tokenName?: (string|null);

        /** IostTx from */
        from?: (string|null);

        /** IostTx to */
        to?: (string|null);

        /** IostTx memo */
        memo?: (string|null);

        /** IostTx amount */
        amount?: (string|null);

        /** IostTx timestamp */
        timestamp?: (number|Long|null);

        /** IostTx expiration */
        expiration?: (number|null);

        /** IostTx config */
        config?: (protoc.IostTx.IConfig|null);
    }

    /** Represents an IostTx. */
    class IostTx implements IIostTx {

        /**
         * Constructs a new IostTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IIostTx);

        /** IostTx tokenName. */
        public tokenName: string;

        /** IostTx from. */
        public from: string;

        /** IostTx to. */
        public to: string;

        /** IostTx memo. */
        public memo: string;

        /** IostTx amount. */
        public amount: string;

        /** IostTx timestamp. */
        public timestamp: (number|Long);

        /** IostTx expiration. */
        public expiration: number;

        /** IostTx config. */
        public config?: (protoc.IostTx.IConfig|null);

        /**
         * Creates a new IostTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IostTx instance
         */
        public static create(properties?: protoc.IIostTx): protoc.IostTx;

        /**
         * Encodes the specified IostTx message. Does not implicitly {@link protoc.IostTx.verify|verify} messages.
         * @param message IostTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IIostTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IostTx message, length delimited. Does not implicitly {@link protoc.IostTx.verify|verify} messages.
         * @param message IostTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IIostTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IostTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IostTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.IostTx;

        /**
         * Decodes an IostTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IostTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.IostTx;

        /**
         * Verifies an IostTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IostTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IostTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.IostTx;

        /**
         * Creates a plain object from an IostTx message. Also converts values to other types if specified.
         * @param message IostTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.IostTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IostTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace IostTx {

        /** Properties of a Config. */
        interface IConfig {

            /** Config gasRatio */
            gasRatio?: (number|Long|null);

            /** Config gasLimit */
            gasLimit?: (number|Long|null);

            /** Config delay */
            delay?: (number|null);

            /** Config defaultLimit */
            defaultLimit?: (string|null);
        }

        /** Represents a Config. */
        class Config implements IConfig {

            /**
             * Constructs a new Config.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.IostTx.IConfig);

            /** Config gasRatio. */
            public gasRatio: (number|Long);

            /** Config gasLimit. */
            public gasLimit: (number|Long);

            /** Config delay. */
            public delay: number;

            /** Config defaultLimit. */
            public defaultLimit: string;

            /**
             * Creates a new Config instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Config instance
             */
            public static create(properties?: protoc.IostTx.IConfig): protoc.IostTx.Config;

            /**
             * Encodes the specified Config message. Does not implicitly {@link protoc.IostTx.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.IostTx.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link protoc.IostTx.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.IostTx.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.IostTx.Config;

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.IostTx.Config;

            /**
             * Verifies a Config message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Config
             */
            public static fromObject(object: { [k: string]: any }): protoc.IostTx.Config;

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @param message Config
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.IostTx.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Config to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an OmniTx. */
    interface IOmniTx {

        /** OmniTx fee */
        fee?: (number|Long|null);

        /** OmniTx dustThreshold */
        dustThreshold?: (number|null);

        /** OmniTx memo */
        memo?: (string|null);

        /** OmniTx inputs */
        inputs?: (protoc.OmniTx.IInput[]|null);

        /** OmniTx to */
        to?: (string|null);

        /** OmniTx changeAddress */
        changeAddress?: (string|null);

        /** OmniTx omniAmount */
        omniAmount?: (number|Long|null);

        /** OmniTx propertyId */
        propertyId?: (number|null);
    }

    /** Represents an OmniTx. */
    class OmniTx implements IOmniTx {

        /**
         * Constructs a new OmniTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IOmniTx);

        /** OmniTx fee. */
        public fee: (number|Long);

        /** OmniTx dustThreshold. */
        public dustThreshold: number;

        /** OmniTx memo. */
        public memo: string;

        /** OmniTx inputs. */
        public inputs: protoc.OmniTx.IInput[];

        /** OmniTx to. */
        public to: string;

        /** OmniTx changeAddress. */
        public changeAddress: string;

        /** OmniTx omniAmount. */
        public omniAmount: (number|Long);

        /** OmniTx propertyId. */
        public propertyId: number;

        /**
         * Creates a new OmniTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OmniTx instance
         */
        public static create(properties?: protoc.IOmniTx): protoc.OmniTx;

        /**
         * Encodes the specified OmniTx message. Does not implicitly {@link protoc.OmniTx.verify|verify} messages.
         * @param message OmniTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IOmniTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OmniTx message, length delimited. Does not implicitly {@link protoc.OmniTx.verify|verify} messages.
         * @param message OmniTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IOmniTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OmniTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OmniTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.OmniTx;

        /**
         * Decodes an OmniTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OmniTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.OmniTx;

        /**
         * Verifies an OmniTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OmniTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OmniTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.OmniTx;

        /**
         * Creates a plain object from an OmniTx message. Also converts values to other types if specified.
         * @param message OmniTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.OmniTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OmniTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace OmniTx {

        /** Properties of an Input. */
        interface IInput {

            /** Input hash */
            hash?: (string|null);

            /** Input index */
            index?: (number|null);

            /** Input utxo */
            utxo?: (protoc.OmniTx.Iutxo|null);

            /** Input ownerKeyPath */
            ownerKeyPath?: (string|null);
        }

        /** Represents an Input. */
        class Input implements IInput {

            /**
             * Constructs a new Input.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.OmniTx.IInput);

            /** Input hash. */
            public hash: string;

            /** Input index. */
            public index: number;

            /** Input utxo. */
            public utxo?: (protoc.OmniTx.Iutxo|null);

            /** Input ownerKeyPath. */
            public ownerKeyPath: string;

            /**
             * Creates a new Input instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Input instance
             */
            public static create(properties?: protoc.OmniTx.IInput): protoc.OmniTx.Input;

            /**
             * Encodes the specified Input message. Does not implicitly {@link protoc.OmniTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.OmniTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.OmniTx.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.OmniTx.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.OmniTx.Input;

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.OmniTx.Input;

            /**
             * Verifies an Input message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Input
             */
            public static fromObject(object: { [k: string]: any }): protoc.OmniTx.Input;

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @param message Input
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.OmniTx.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Input to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an utxo. */
        interface Iutxo {

            /** utxo publicKey */
            publicKey?: (string|null);

            /** utxo script */
            script?: (string|null);

            /** utxo value */
            value?: (number|Long|null);
        }

        /** Represents an utxo. */
        class utxo implements Iutxo {

            /**
             * Constructs a new utxo.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.OmniTx.Iutxo);

            /** utxo publicKey. */
            public publicKey: string;

            /** utxo script. */
            public script: string;

            /** utxo value. */
            public value: (number|Long);

            /**
             * Creates a new utxo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns utxo instance
             */
            public static create(properties?: protoc.OmniTx.Iutxo): protoc.OmniTx.utxo;

            /**
             * Encodes the specified utxo message. Does not implicitly {@link protoc.OmniTx.utxo.verify|verify} messages.
             * @param message utxo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.OmniTx.Iutxo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified utxo message, length delimited. Does not implicitly {@link protoc.OmniTx.utxo.verify|verify} messages.
             * @param message utxo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.OmniTx.Iutxo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an utxo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns utxo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.OmniTx.utxo;

            /**
             * Decodes an utxo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns utxo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.OmniTx.utxo;

            /**
             * Verifies an utxo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an utxo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns utxo
             */
            public static fromObject(object: { [k: string]: any }): protoc.OmniTx.utxo;

            /**
             * Creates a plain object from an utxo message. Also converts values to other types if specified.
             * @param message utxo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.OmniTx.utxo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this utxo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an EosTx. */
    interface IEosTx {

        /** EosTx type */
        type?: (string|null);

        /** EosTx tokenAccount */
        tokenAccount?: (string|null);

        /** EosTx data */
        data?: (protoc.EosTx.IData|null);

        /** EosTx header */
        header?: (protoc.EosTx.IHeader|null);
    }

    /** Represents an EosTx. */
    class EosTx implements IEosTx {

        /**
         * Constructs a new EosTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IEosTx);

        /** EosTx type. */
        public type: string;

        /** EosTx tokenAccount. */
        public tokenAccount: string;

        /** EosTx data. */
        public data?: (protoc.EosTx.IData|null);

        /** EosTx header. */
        public header?: (protoc.EosTx.IHeader|null);

        /**
         * Creates a new EosTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EosTx instance
         */
        public static create(properties?: protoc.IEosTx): protoc.EosTx;

        /**
         * Encodes the specified EosTx message. Does not implicitly {@link protoc.EosTx.verify|verify} messages.
         * @param message EosTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IEosTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EosTx message, length delimited. Does not implicitly {@link protoc.EosTx.verify|verify} messages.
         * @param message EosTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IEosTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EosTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EosTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.EosTx;

        /**
         * Decodes an EosTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EosTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.EosTx;

        /**
         * Verifies an EosTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EosTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EosTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.EosTx;

        /**
         * Creates a plain object from an EosTx message. Also converts values to other types if specified.
         * @param message EosTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.EosTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EosTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace EosTx {

        /** Properties of a Data. */
        interface IData {

            /** Data from */
            from?: (string|null);

            /** Data to */
            to?: (string|null);

            /** Data amount */
            amount?: (number|Long|null);

            /** Data symbol */
            symbol?: (string|null);

            /** Data memo */
            memo?: (string|null);

            /** Data fee */
            fee?: (number|Long|null);

            /** Data decimal */
            decimal?: (number|null);
        }

        /** Represents a Data. */
        class Data implements IData {

            /**
             * Constructs a new Data.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.EosTx.IData);

            /** Data from. */
            public from: string;

            /** Data to. */
            public to: string;

            /** Data amount. */
            public amount: (number|Long);

            /** Data symbol. */
            public symbol: string;

            /** Data memo. */
            public memo: string;

            /** Data fee. */
            public fee: (number|Long);

            /** Data decimal. */
            public decimal: number;

            /**
             * Creates a new Data instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Data instance
             */
            public static create(properties?: protoc.EosTx.IData): protoc.EosTx.Data;

            /**
             * Encodes the specified Data message. Does not implicitly {@link protoc.EosTx.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.EosTx.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Data message, length delimited. Does not implicitly {@link protoc.EosTx.Data.verify|verify} messages.
             * @param message Data message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.EosTx.IData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Data message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.EosTx.Data;

            /**
             * Decodes a Data message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Data
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.EosTx.Data;

            /**
             * Verifies a Data message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Data message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Data
             */
            public static fromObject(object: { [k: string]: any }): protoc.EosTx.Data;

            /**
             * Creates a plain object from a Data message. Also converts values to other types if specified.
             * @param message Data
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.EosTx.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Data to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Header. */
        interface IHeader {

            /** Header time */
            time?: (number|Long|null);

            /** Header expireInSeconds */
            expireInSeconds?: (number|null);

            /** Header refBlockNum */
            refBlockNum?: (number|Long|null);

            /** Header refBlockPrefix */
            refBlockPrefix?: (number|Long|null);
        }

        /** Represents a Header. */
        class Header implements IHeader {

            /**
             * Constructs a new Header.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.EosTx.IHeader);

            /** Header time. */
            public time: (number|Long);

            /** Header expireInSeconds. */
            public expireInSeconds: number;

            /** Header refBlockNum. */
            public refBlockNum: (number|Long);

            /** Header refBlockPrefix. */
            public refBlockPrefix: (number|Long);

            /**
             * Creates a new Header instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Header instance
             */
            public static create(properties?: protoc.EosTx.IHeader): protoc.EosTx.Header;

            /**
             * Encodes the specified Header message. Does not implicitly {@link protoc.EosTx.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.EosTx.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link protoc.EosTx.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.EosTx.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.EosTx.Header;

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.EosTx.Header;

            /**
             * Verifies a Header message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Header
             */
            public static fromObject(object: { [k: string]: any }): protoc.EosTx.Header;

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @param message Header
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.EosTx.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Header to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a DotTx. */
    interface IDotTx {

        /** DotTx value */
        value?: (number|Long|null);

        /** DotTx dest */
        dest?: (string|null);

        /** DotTx blockHash */
        blockHash?: (string|null);

        /** DotTx nonce */
        nonce?: (number|Long|null);

        /** DotTx tip */
        tip?: (number|Long|null);

        /** DotTx transactionVersion */
        transactionVersion?: (number|Long|null);

        /** DotTx specVersion */
        specVersion?: (number|Long|null);

        /** DotTx validityPeriod */
        validityPeriod?: (number|Long|null);

        /** DotTx implVersion */
        implVersion?: (number|Long|null);

        /** DotTx authoringVersion */
        authoringVersion?: (number|Long|null);

        /** DotTx blockNumber */
        blockNumber?: (number|null);
    }

    /** Represents a DotTx. */
    class DotTx implements IDotTx {

        /**
         * Constructs a new DotTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IDotTx);

        /** DotTx value. */
        public value: (number|Long);

        /** DotTx dest. */
        public dest: string;

        /** DotTx blockHash. */
        public blockHash: string;

        /** DotTx nonce. */
        public nonce: (number|Long);

        /** DotTx tip. */
        public tip: (number|Long);

        /** DotTx transactionVersion. */
        public transactionVersion: (number|Long);

        /** DotTx specVersion. */
        public specVersion: (number|Long);

        /** DotTx validityPeriod. */
        public validityPeriod: (number|Long);

        /** DotTx implVersion. */
        public implVersion: (number|Long);

        /** DotTx authoringVersion. */
        public authoringVersion: (number|Long);

        /** DotTx blockNumber. */
        public blockNumber: number;

        /**
         * Creates a new DotTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DotTx instance
         */
        public static create(properties?: protoc.IDotTx): protoc.DotTx;

        /**
         * Encodes the specified DotTx message. Does not implicitly {@link protoc.DotTx.verify|verify} messages.
         * @param message DotTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IDotTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DotTx message, length delimited. Does not implicitly {@link protoc.DotTx.verify|verify} messages.
         * @param message DotTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IDotTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DotTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DotTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.DotTx;

        /**
         * Decodes a DotTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DotTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.DotTx;

        /**
         * Verifies a DotTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DotTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DotTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.DotTx;

        /**
         * Creates a plain object from a DotTx message. Also converts values to other types if specified.
         * @param message DotTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.DotTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DotTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KsmTx. */
    interface IKsmTx {

        /** KsmTx value */
        value?: (number|Long|null);

        /** KsmTx dest */
        dest?: (string|null);

        /** KsmTx blockHash */
        blockHash?: (string|null);

        /** KsmTx nonce */
        nonce?: (number|Long|null);

        /** KsmTx tip */
        tip?: (number|Long|null);

        /** KsmTx transactionVersion */
        transactionVersion?: (number|Long|null);

        /** KsmTx specVersion */
        specVersion?: (number|Long|null);

        /** KsmTx validityPeriod */
        validityPeriod?: (number|Long|null);

        /** KsmTx implVersion */
        implVersion?: (number|Long|null);

        /** KsmTx authoringVersion */
        authoringVersion?: (number|Long|null);

        /** KsmTx blockNumber */
        blockNumber?: (number|null);
    }

    /** Represents a KsmTx. */
    class KsmTx implements IKsmTx {

        /**
         * Constructs a new KsmTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IKsmTx);

        /** KsmTx value. */
        public value: (number|Long);

        /** KsmTx dest. */
        public dest: string;

        /** KsmTx blockHash. */
        public blockHash: string;

        /** KsmTx nonce. */
        public nonce: (number|Long);

        /** KsmTx tip. */
        public tip: (number|Long);

        /** KsmTx transactionVersion. */
        public transactionVersion: (number|Long);

        /** KsmTx specVersion. */
        public specVersion: (number|Long);

        /** KsmTx validityPeriod. */
        public validityPeriod: (number|Long);

        /** KsmTx implVersion. */
        public implVersion: (number|Long);

        /** KsmTx authoringVersion. */
        public authoringVersion: (number|Long);

        /** KsmTx blockNumber. */
        public blockNumber: number;

        /**
         * Creates a new KsmTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KsmTx instance
         */
        public static create(properties?: protoc.IKsmTx): protoc.KsmTx;

        /**
         * Encodes the specified KsmTx message. Does not implicitly {@link protoc.KsmTx.verify|verify} messages.
         * @param message KsmTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IKsmTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KsmTx message, length delimited. Does not implicitly {@link protoc.KsmTx.verify|verify} messages.
         * @param message KsmTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IKsmTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KsmTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KsmTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.KsmTx;

        /**
         * Decodes a KsmTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KsmTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.KsmTx;

        /**
         * Verifies a KsmTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KsmTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KsmTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.KsmTx;

        /**
         * Creates a plain object from a KsmTx message. Also converts values to other types if specified.
         * @param message KsmTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.KsmTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KsmTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CfxTx. */
    interface ICfxTx {

        /** CfxTx to */
        to?: (string|null);

        /** CfxTx value */
        value?: (string|null);

        /** CfxTx gasPrice */
        gasPrice?: (string|null);

        /** CfxTx gas */
        gas?: (string|null);

        /** CfxTx nonce */
        nonce?: (number|null);

        /** CfxTx storageLimit */
        storageLimit?: (string|null);

        /** CfxTx epochHeight */
        epochHeight?: (string|null);

        /** CfxTx chainId */
        chainId?: (string|null);

        /** CfxTx contractAddress */
        contractAddress?: (string|null);

        /** CfxTx override */
        override?: (protoc.CfxTx.IOverride|null);
    }

    /** Represents a CfxTx. */
    class CfxTx implements ICfxTx {

        /**
         * Constructs a new CfxTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ICfxTx);

        /** CfxTx to. */
        public to: string;

        /** CfxTx value. */
        public value: string;

        /** CfxTx gasPrice. */
        public gasPrice: string;

        /** CfxTx gas. */
        public gas: string;

        /** CfxTx nonce. */
        public nonce: number;

        /** CfxTx storageLimit. */
        public storageLimit: string;

        /** CfxTx epochHeight. */
        public epochHeight: string;

        /** CfxTx chainId. */
        public chainId: string;

        /** CfxTx contractAddress. */
        public contractAddress: string;

        /** CfxTx override. */
        public override?: (protoc.CfxTx.IOverride|null);

        /**
         * Creates a new CfxTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CfxTx instance
         */
        public static create(properties?: protoc.ICfxTx): protoc.CfxTx;

        /**
         * Encodes the specified CfxTx message. Does not implicitly {@link protoc.CfxTx.verify|verify} messages.
         * @param message CfxTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ICfxTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CfxTx message, length delimited. Does not implicitly {@link protoc.CfxTx.verify|verify} messages.
         * @param message CfxTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ICfxTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CfxTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CfxTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.CfxTx;

        /**
         * Decodes a CfxTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CfxTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.CfxTx;

        /**
         * Verifies a CfxTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CfxTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CfxTx
         */
        public static fromObject(object: { [k: string]: any }): protoc.CfxTx;

        /**
         * Creates a plain object from a CfxTx message. Also converts values to other types if specified.
         * @param message CfxTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.CfxTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CfxTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CfxTx {

        /** Properties of an Override. */
        interface IOverride {

            /** Override decimals */
            decimals?: (number|null);

            /** Override tokenShortName */
            tokenShortName?: (string|null);

            /** Override tokenFullName */
            tokenFullName?: (string|null);

            /** Override contractAddress */
            contractAddress?: (string|null);
        }

        /** Represents an Override. */
        class Override implements IOverride {

            /**
             * Constructs a new Override.
             * @param [properties] Properties to set
             */
            constructor(properties?: protoc.CfxTx.IOverride);

            /** Override decimals. */
            public decimals: number;

            /** Override tokenShortName. */
            public tokenShortName: string;

            /** Override tokenFullName. */
            public tokenFullName: string;

            /** Override contractAddress. */
            public contractAddress: string;

            /**
             * Creates a new Override instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Override instance
             */
            public static create(properties?: protoc.CfxTx.IOverride): protoc.CfxTx.Override;

            /**
             * Encodes the specified Override message. Does not implicitly {@link protoc.CfxTx.Override.verify|verify} messages.
             * @param message Override message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protoc.CfxTx.IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Override message, length delimited. Does not implicitly {@link protoc.CfxTx.Override.verify|verify} messages.
             * @param message Override message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protoc.CfxTx.IOverride, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Override message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Override
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.CfxTx.Override;

            /**
             * Decodes an Override message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Override
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.CfxTx.Override;

            /**
             * Verifies an Override message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Override message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Override
             */
            public static fromObject(object: { [k: string]: any }): protoc.CfxTx.Override;

            /**
             * Creates a plain object from an Override message. Also converts values to other types if specified.
             * @param message Override
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protoc.CfxTx.Override, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Override to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a SignMessage. */
    interface ISignMessage {

        /** SignMessage coinCode */
        coinCode?: (string|null);

        /** SignMessage hdPath */
        hdPath?: (string|null);

        /** SignMessage message */
        message?: (string|null);
    }

    /** Represents a SignMessage. */
    class SignMessage implements ISignMessage {

        /**
         * Constructs a new SignMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ISignMessage);

        /** SignMessage coinCode. */
        public coinCode: string;

        /** SignMessage hdPath. */
        public hdPath: string;

        /** SignMessage message. */
        public message: string;

        /**
         * Creates a new SignMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignMessage instance
         */
        public static create(properties?: protoc.ISignMessage): protoc.SignMessage;

        /**
         * Encodes the specified SignMessage message. Does not implicitly {@link protoc.SignMessage.verify|verify} messages.
         * @param message SignMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ISignMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignMessage message, length delimited. Does not implicitly {@link protoc.SignMessage.verify|verify} messages.
         * @param message SignMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ISignMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.SignMessage;

        /**
         * Decodes a SignMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.SignMessage;

        /**
         * Verifies a SignMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignMessage
         */
        public static fromObject(object: { [k: string]: any }): protoc.SignMessage;

        /**
         * Creates a plain object from a SignMessage message. Also converts values to other types if specified.
         * @param message SignMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.SignMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifyAddress. */
    interface IVerifyAddress {

        /** VerifyAddress coinType */
        coinType?: (number|null);

        /** VerifyAddress addressIndex */
        addressIndex?: (number|null);

        /** VerifyAddress address */
        address?: (string|null);
    }

    /** Represents a VerifyAddress. */
    class VerifyAddress implements IVerifyAddress {

        /**
         * Constructs a new VerifyAddress.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IVerifyAddress);

        /** VerifyAddress coinType. */
        public coinType: number;

        /** VerifyAddress addressIndex. */
        public addressIndex: number;

        /** VerifyAddress address. */
        public address: string;

        /**
         * Creates a new VerifyAddress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyAddress instance
         */
        public static create(properties?: protoc.IVerifyAddress): protoc.VerifyAddress;

        /**
         * Encodes the specified VerifyAddress message. Does not implicitly {@link protoc.VerifyAddress.verify|verify} messages.
         * @param message VerifyAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IVerifyAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyAddress message, length delimited. Does not implicitly {@link protoc.VerifyAddress.verify|verify} messages.
         * @param message VerifyAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IVerifyAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyAddress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.VerifyAddress;

        /**
         * Decodes a VerifyAddress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.VerifyAddress;

        /**
         * Verifies a VerifyAddress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyAddress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyAddress
         */
        public static fromObject(object: { [k: string]: any }): protoc.VerifyAddress;

        /**
         * Creates a plain object from a VerifyAddress message. Also converts values to other types if specified.
         * @param message VerifyAddress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.VerifyAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyAddress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignTransactionResult. */
    interface ISignTransactionResult {

        /** SignTransactionResult signId */
        signId?: (string|null);

        /** SignTransactionResult txId */
        txId?: (string|null);

        /** SignTransactionResult rawTx */
        rawTx?: (string|null);
    }

    /** Represents a SignTransactionResult. */
    class SignTransactionResult implements ISignTransactionResult {

        /**
         * Constructs a new SignTransactionResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.ISignTransactionResult);

        /** SignTransactionResult signId. */
        public signId: string;

        /** SignTransactionResult txId. */
        public txId: string;

        /** SignTransactionResult rawTx. */
        public rawTx: string;

        /**
         * Creates a new SignTransactionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignTransactionResult instance
         */
        public static create(properties?: protoc.ISignTransactionResult): protoc.SignTransactionResult;

        /**
         * Encodes the specified SignTransactionResult message. Does not implicitly {@link protoc.SignTransactionResult.verify|verify} messages.
         * @param message SignTransactionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.ISignTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignTransactionResult message, length delimited. Does not implicitly {@link protoc.SignTransactionResult.verify|verify} messages.
         * @param message SignTransactionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.ISignTransactionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignTransactionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignTransactionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.SignTransactionResult;

        /**
         * Decodes a SignTransactionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignTransactionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.SignTransactionResult;

        /**
         * Verifies a SignTransactionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignTransactionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignTransactionResult
         */
        public static fromObject(object: { [k: string]: any }): protoc.SignTransactionResult;

        /**
         * Creates a plain object from a SignTransactionResult message. Also converts values to other types if specified.
         * @param message SignTransactionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.SignTransactionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignTransactionResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DashStaking. */
    interface IDashStaking {

        /** DashStaking coinCode */
        coinCode?: (string|null);

        /** DashStaking hdPath */
        hdPath?: (string|null);

        /** DashStaking mnid */
        mnid?: (string|null);

        /** DashStaking address */
        address?: (string|null);

        /** DashStaking message */
        message?: (string|null);
    }

    /** Represents a DashStaking. */
    class DashStaking implements IDashStaking {

        /**
         * Constructs a new DashStaking.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IDashStaking);

        /** DashStaking coinCode. */
        public coinCode: string;

        /** DashStaking hdPath. */
        public hdPath: string;

        /** DashStaking mnid. */
        public mnid: string;

        /** DashStaking address. */
        public address: string;

        /** DashStaking message. */
        public message: string;

        /**
         * Creates a new DashStaking instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DashStaking instance
         */
        public static create(properties?: protoc.IDashStaking): protoc.DashStaking;

        /**
         * Encodes the specified DashStaking message. Does not implicitly {@link protoc.DashStaking.verify|verify} messages.
         * @param message DashStaking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IDashStaking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DashStaking message, length delimited. Does not implicitly {@link protoc.DashStaking.verify|verify} messages.
         * @param message DashStaking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IDashStaking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DashStaking message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DashStaking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.DashStaking;

        /**
         * Decodes a DashStaking message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DashStaking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.DashStaking;

        /**
         * Verifies a DashStaking message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DashStaking message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DashStaking
         */
        public static fromObject(object: { [k: string]: any }): protoc.DashStaking;

        /**
         * Creates a plain object from a DashStaking message. Also converts values to other types if specified.
         * @param message DashStaking
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.DashStaking, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DashStaking to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Staking. */
    interface IStaking {

        /** Staking dash */
        dash?: (protoc.IDashStaking|null);
    }

    /** Represents a Staking. */
    class Staking implements IStaking {

        /**
         * Constructs a new Staking.
         * @param [properties] Properties to set
         */
        constructor(properties?: protoc.IStaking);

        /** Staking dash. */
        public dash?: (protoc.IDashStaking|null);

        /** Staking data. */
        public data?: "dash";

        /**
         * Creates a new Staking instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Staking instance
         */
        public static create(properties?: protoc.IStaking): protoc.Staking;

        /**
         * Encodes the specified Staking message. Does not implicitly {@link protoc.Staking.verify|verify} messages.
         * @param message Staking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protoc.IStaking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Staking message, length delimited. Does not implicitly {@link protoc.Staking.verify|verify} messages.
         * @param message Staking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protoc.IStaking, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Staking message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Staking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protoc.Staking;

        /**
         * Decodes a Staking message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Staking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protoc.Staking;

        /**
         * Verifies a Staking message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Staking message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Staking
         */
        public static fromObject(object: { [k: string]: any }): protoc.Staking;

        /**
         * Creates a plain object from a Staking message. Also converts values to other types if specified.
         * @param message Staking
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protoc.Staking, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Staking to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protoc = ($root.protoc = (() => {
  /**
   * Namespace protoc.
   * @exports protoc
   * @namespace
   */
  const protoc = {};

  protoc.Base = (function () {
    /**
     * Properties of a Base.
     * @memberof protoc
     * @interface IBase
     * @property {number|null} [version] Base version
     * @property {string|null} [description] Base description
     * @property {protoc.IPayload|null} [data] Base data
     * @property {number|null} [hotVersion] Base hotVersion
     * @property {number|null} [coldVersion] Base coldVersion
     * @property {string|null} [deviceType] Base deviceType
     */

    /**
     * Constructs a new Base.
     * @memberof protoc
     * @classdesc Represents a Base.
     * @implements IBase
     * @constructor
     * @param {protoc.IBase=} [properties] Properties to set
     */
    function Base(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Base version.
     * @member {number} version
     * @memberof protoc.Base
     * @instance
     */
    Base.prototype.version = 0;

    /**
     * Base description.
     * @member {string} description
     * @memberof protoc.Base
     * @instance
     */
    Base.prototype.description = "";

    /**
     * Base data.
     * @member {protoc.IPayload|null|undefined} data
     * @memberof protoc.Base
     * @instance
     */
    Base.prototype.data = null;

    /**
     * Base hotVersion.
     * @member {number|null|undefined} hotVersion
     * @memberof protoc.Base
     * @instance
     */
    Base.prototype.hotVersion = null;

    /**
     * Base coldVersion.
     * @member {number|null|undefined} coldVersion
     * @memberof protoc.Base
     * @instance
     */
    Base.prototype.coldVersion = null;

    /**
     * Base deviceType.
     * @member {string} deviceType
     * @memberof protoc.Base
     * @instance
     */
    Base.prototype.deviceType = "";

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Base Content.
     * @member {"hotVersion"|"coldVersion"|undefined} Content
     * @memberof protoc.Base
     * @instance
     */
    Object.defineProperty(Base.prototype, "Content", {
      get: $util.oneOfGetter(($oneOfFields = ["hotVersion", "coldVersion"])),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new Base instance using the specified properties.
     * @function create
     * @memberof protoc.Base
     * @static
     * @param {protoc.IBase=} [properties] Properties to set
     * @returns {protoc.Base} Base instance
     */
    Base.create = function create(properties) {
      return new Base(properties);
    };

    /**
     * Encodes the specified Base message. Does not implicitly {@link protoc.Base.verify|verify} messages.
     * @function encode
     * @memberof protoc.Base
     * @static
     * @param {protoc.IBase} message Base message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Base.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.version != null &&
        Object.hasOwnProperty.call(message, "version")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.version);
      if (
        message.description != null &&
        Object.hasOwnProperty.call(message, "description")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.description);
      if (message.data != null && Object.hasOwnProperty.call(message, "data"))
        $root.protoc.Payload.encode(
          message.data,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.hotVersion != null &&
        Object.hasOwnProperty.call(message, "hotVersion")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).int32(message.hotVersion);
      if (
        message.coldVersion != null &&
        Object.hasOwnProperty.call(message, "coldVersion")
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.coldVersion);
      if (
        message.deviceType != null &&
        Object.hasOwnProperty.call(message, "deviceType")
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.deviceType);
      return writer;
    };

    /**
     * Encodes the specified Base message, length delimited. Does not implicitly {@link protoc.Base.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Base
     * @static
     * @param {protoc.IBase} message Base message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Base.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Base message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Base
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Base} Base
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Base.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Base();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.version = reader.int32();
            break;
          case 2:
            message.description = reader.string();
            break;
          case 3:
            message.data = $root.protoc.Payload.decode(reader, reader.uint32());
            break;
          case 4:
            message.hotVersion = reader.int32();
            break;
          case 5:
            message.coldVersion = reader.int32();
            break;
          case 6:
            message.deviceType = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Base message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Base
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Base} Base
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Base.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Base message.
     * @function verify
     * @memberof protoc.Base
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Base.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      const properties = {};
      if (message.version != null && message.hasOwnProperty("version"))
        if (!$util.isInteger(message.version))
          return "version: integer expected";
      if (message.description != null && message.hasOwnProperty("description"))
        if (!$util.isString(message.description))
          return "description: string expected";
      if (message.data != null && message.hasOwnProperty("data")) {
        const error = $root.protoc.Payload.verify(message.data);
        if (error) return "data." + error;
      }
      if (message.hotVersion != null && message.hasOwnProperty("hotVersion")) {
        properties.Content = 1;
        if (!$util.isInteger(message.hotVersion))
          return "hotVersion: integer expected";
      }
      if (
        message.coldVersion != null &&
        message.hasOwnProperty("coldVersion")
      ) {
        if (properties.Content === 1) return "Content: multiple values";
        properties.Content = 1;
        if (!$util.isInteger(message.coldVersion))
          return "coldVersion: integer expected";
      }
      if (message.deviceType != null && message.hasOwnProperty("deviceType"))
        if (!$util.isString(message.deviceType))
          return "deviceType: string expected";
      return null;
    };

    /**
     * Creates a Base message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Base
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Base} Base
     */
    Base.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Base) return object;
      const message = new $root.protoc.Base();
      if (object.version != null) message.version = object.version | 0;
      if (object.description != null)
        message.description = String(object.description);
      if (object.data != null) {
        if (typeof object.data !== "object")
          throw TypeError(".protoc.Base.data: object expected");
        message.data = $root.protoc.Payload.fromObject(object.data);
      }
      if (object.hotVersion != null) message.hotVersion = object.hotVersion | 0;
      if (object.coldVersion != null)
        message.coldVersion = object.coldVersion | 0;
      if (object.deviceType != null)
        message.deviceType = String(object.deviceType);
      return message;
    };

    /**
     * Creates a plain object from a Base message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Base
     * @static
     * @param {protoc.Base} message Base
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Base.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.version = 0;
        object.description = "";
        object.data = null;
        object.deviceType = "";
      }
      if (message.version != null && message.hasOwnProperty("version"))
        object.version = message.version;
      if (message.description != null && message.hasOwnProperty("description"))
        object.description = message.description;
      if (message.data != null && message.hasOwnProperty("data"))
        object.data = $root.protoc.Payload.toObject(message.data, options);
      if (message.hotVersion != null && message.hasOwnProperty("hotVersion")) {
        object.hotVersion = message.hotVersion;
        if (options.oneofs) object.Content = "hotVersion";
      }
      if (
        message.coldVersion != null &&
        message.hasOwnProperty("coldVersion")
      ) {
        object.coldVersion = message.coldVersion;
        if (options.oneofs) object.Content = "coldVersion";
      }
      if (message.deviceType != null && message.hasOwnProperty("deviceType"))
        object.deviceType = message.deviceType;
      return object;
    };

    /**
     * Converts this Base to JSON.
     * @function toJSON
     * @memberof protoc.Base
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Base.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Base;
  })();

  protoc.Payload = (function () {
    /**
     * Properties of a Payload.
     * @memberof protoc
     * @interface IPayload
     * @property {protoc.Payload.Type|null} [type] Payload type
     * @property {string|null} [xfp] Payload xfp
     * @property {protoc.ISync|null} [sync] Payload sync
     * @property {protoc.ISignTransaction|null} [signTx] Payload signTx
     * @property {protoc.ISignMessage|null} [signMsg] Payload signMsg
     * @property {protoc.IVerifyAddress|null} [verifyAddr] Payload verifyAddr
     * @property {protoc.ISignTransactionResult|null} [signTxResult] Payload signTxResult
     */

    /**
     * Constructs a new Payload.
     * @memberof protoc
     * @classdesc Represents a Payload.
     * @implements IPayload
     * @constructor
     * @param {protoc.IPayload=} [properties] Properties to set
     */
    function Payload(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Payload type.
     * @member {protoc.Payload.Type} type
     * @memberof protoc.Payload
     * @instance
     */
    Payload.prototype.type = 0;

    /**
     * Payload xfp.
     * @member {string} xfp
     * @memberof protoc.Payload
     * @instance
     */
    Payload.prototype.xfp = "";

    /**
     * Payload sync.
     * @member {protoc.ISync|null|undefined} sync
     * @memberof protoc.Payload
     * @instance
     */
    Payload.prototype.sync = null;

    /**
     * Payload signTx.
     * @member {protoc.ISignTransaction|null|undefined} signTx
     * @memberof protoc.Payload
     * @instance
     */
    Payload.prototype.signTx = null;

    /**
     * Payload signMsg.
     * @member {protoc.ISignMessage|null|undefined} signMsg
     * @memberof protoc.Payload
     * @instance
     */
    Payload.prototype.signMsg = null;

    /**
     * Payload verifyAddr.
     * @member {protoc.IVerifyAddress|null|undefined} verifyAddr
     * @memberof protoc.Payload
     * @instance
     */
    Payload.prototype.verifyAddr = null;

    /**
     * Payload signTxResult.
     * @member {protoc.ISignTransactionResult|null|undefined} signTxResult
     * @memberof protoc.Payload
     * @instance
     */
    Payload.prototype.signTxResult = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Payload Content.
     * @member {"sync"|"signTx"|"signMsg"|"verifyAddr"|"signTxResult"|undefined} Content
     * @memberof protoc.Payload
     * @instance
     */
    Object.defineProperty(Payload.prototype, "Content", {
      get: $util.oneOfGetter(
        ($oneOfFields = [
          "sync",
          "signTx",
          "signMsg",
          "verifyAddr",
          "signTxResult",
        ])
      ),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new Payload instance using the specified properties.
     * @function create
     * @memberof protoc.Payload
     * @static
     * @param {protoc.IPayload=} [properties] Properties to set
     * @returns {protoc.Payload} Payload instance
     */
    Payload.create = function create(properties) {
      return new Payload(properties);
    };

    /**
     * Encodes the specified Payload message. Does not implicitly {@link protoc.Payload.verify|verify} messages.
     * @function encode
     * @memberof protoc.Payload
     * @static
     * @param {protoc.IPayload} message Payload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Payload.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.type != null && Object.hasOwnProperty.call(message, "type"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.type);
      if (message.xfp != null && Object.hasOwnProperty.call(message, "xfp"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.xfp);
      if (message.sync != null && Object.hasOwnProperty.call(message, "sync"))
        $root.protoc.Sync.encode(
          message.sync,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.signTx != null &&
        Object.hasOwnProperty.call(message, "signTx")
      )
        $root.protoc.SignTransaction.encode(
          message.signTx,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      if (
        message.signMsg != null &&
        Object.hasOwnProperty.call(message, "signMsg")
      )
        $root.protoc.SignMessage.encode(
          message.signMsg,
          writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
        ).ldelim();
      if (
        message.verifyAddr != null &&
        Object.hasOwnProperty.call(message, "verifyAddr")
      )
        $root.protoc.VerifyAddress.encode(
          message.verifyAddr,
          writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
        ).ldelim();
      if (
        message.signTxResult != null &&
        Object.hasOwnProperty.call(message, "signTxResult")
      )
        $root.protoc.SignTransactionResult.encode(
          message.signTxResult,
          writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified Payload message, length delimited. Does not implicitly {@link protoc.Payload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Payload
     * @static
     * @param {protoc.IPayload} message Payload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Payload.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Payload message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Payload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Payload} Payload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Payload.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Payload();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;
          case 2:
            message.xfp = reader.string();
            break;
          case 3:
            message.sync = $root.protoc.Sync.decode(reader, reader.uint32());
            break;
          case 4:
            message.signTx = $root.protoc.SignTransaction.decode(
              reader,
              reader.uint32()
            );
            break;
          case 5:
            message.signMsg = $root.protoc.SignMessage.decode(
              reader,
              reader.uint32()
            );
            break;
          case 6:
            message.verifyAddr = $root.protoc.VerifyAddress.decode(
              reader,
              reader.uint32()
            );
            break;
          case 7:
            message.signTxResult = $root.protoc.SignTransactionResult.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Payload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Payload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Payload} Payload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Payload.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Payload message.
     * @function verify
     * @memberof protoc.Payload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Payload.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      const properties = {};
      if (message.type != null && message.hasOwnProperty("type"))
        switch (message.type) {
          default:
            return "type: enum value expected";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            break;
        }
      if (message.xfp != null && message.hasOwnProperty("xfp"))
        if (!$util.isString(message.xfp)) return "xfp: string expected";
      if (message.sync != null && message.hasOwnProperty("sync")) {
        properties.Content = 1;
        {
          const error = $root.protoc.Sync.verify(message.sync);
          if (error) return "sync." + error;
        }
      }
      if (message.signTx != null && message.hasOwnProperty("signTx")) {
        if (properties.Content === 1) return "Content: multiple values";
        properties.Content = 1;
        {
          const error = $root.protoc.SignTransaction.verify(message.signTx);
          if (error) return "signTx." + error;
        }
      }
      if (message.signMsg != null && message.hasOwnProperty("signMsg")) {
        if (properties.Content === 1) return "Content: multiple values";
        properties.Content = 1;
        {
          const error = $root.protoc.SignMessage.verify(message.signMsg);
          if (error) return "signMsg." + error;
        }
      }
      if (message.verifyAddr != null && message.hasOwnProperty("verifyAddr")) {
        if (properties.Content === 1) return "Content: multiple values";
        properties.Content = 1;
        {
          const error = $root.protoc.VerifyAddress.verify(message.verifyAddr);
          if (error) return "verifyAddr." + error;
        }
      }
      if (
        message.signTxResult != null &&
        message.hasOwnProperty("signTxResult")
      ) {
        if (properties.Content === 1) return "Content: multiple values";
        properties.Content = 1;
        {
          const error = $root.protoc.SignTransactionResult.verify(
            message.signTxResult
          );
          if (error) return "signTxResult." + error;
        }
      }
      return null;
    };

    /**
     * Creates a Payload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Payload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Payload} Payload
     */
    Payload.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Payload) return object;
      const message = new $root.protoc.Payload();
      switch (object.type) {
        case "TYPE_RESERVE":
        case 0:
          message.type = 0;
          break;
        case "TYPE_SYNC":
        case 1:
          message.type = 1;
          break;
        case "TYPE_SIGN_TX":
        case 2:
          message.type = 2;
          break;
        case "TYPE_SIGN_MSG":
        case 3:
          message.type = 3;
          break;
        case "TYPE_SIGN_MULTI_SIG":
        case 4:
          message.type = 4;
          break;
        case "TYPE_SYNC_MULTI_SIG_MSG":
        case 5:
          message.type = 5;
          break;
        case "TYPE_SIGN_ETH_MULTI_SIG_MSG":
        case 6:
          message.type = 6;
          break;
        case "TYPE_VERIFY_ADDRESS":
        case 7:
          message.type = 7;
          break;
        case "TYPE_STAKING":
        case 8:
          message.type = 8;
          break;
        case "TYPE_SIGN_TX_RESULT":
        case 9:
          message.type = 9;
          break;
      }
      if (object.xfp != null) message.xfp = String(object.xfp);
      if (object.sync != null) {
        if (typeof object.sync !== "object")
          throw TypeError(".protoc.Payload.sync: object expected");
        message.sync = $root.protoc.Sync.fromObject(object.sync);
      }
      if (object.signTx != null) {
        if (typeof object.signTx !== "object")
          throw TypeError(".protoc.Payload.signTx: object expected");
        message.signTx = $root.protoc.SignTransaction.fromObject(object.signTx);
      }
      if (object.signMsg != null) {
        if (typeof object.signMsg !== "object")
          throw TypeError(".protoc.Payload.signMsg: object expected");
        message.signMsg = $root.protoc.SignMessage.fromObject(object.signMsg);
      }
      if (object.verifyAddr != null) {
        if (typeof object.verifyAddr !== "object")
          throw TypeError(".protoc.Payload.verifyAddr: object expected");
        message.verifyAddr = $root.protoc.VerifyAddress.fromObject(
          object.verifyAddr
        );
      }
      if (object.signTxResult != null) {
        if (typeof object.signTxResult !== "object")
          throw TypeError(".protoc.Payload.signTxResult: object expected");
        message.signTxResult = $root.protoc.SignTransactionResult.fromObject(
          object.signTxResult
        );
      }
      return message;
    };

    /**
     * Creates a plain object from a Payload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Payload
     * @static
     * @param {protoc.Payload} message Payload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Payload.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.type = options.enums === String ? "TYPE_RESERVE" : 0;
        object.xfp = "";
      }
      if (message.type != null && message.hasOwnProperty("type"))
        object.type =
          options.enums === String
            ? $root.protoc.Payload.Type[message.type]
            : message.type;
      if (message.xfp != null && message.hasOwnProperty("xfp"))
        object.xfp = message.xfp;
      if (message.sync != null && message.hasOwnProperty("sync")) {
        object.sync = $root.protoc.Sync.toObject(message.sync, options);
        if (options.oneofs) object.Content = "sync";
      }
      if (message.signTx != null && message.hasOwnProperty("signTx")) {
        object.signTx = $root.protoc.SignTransaction.toObject(
          message.signTx,
          options
        );
        if (options.oneofs) object.Content = "signTx";
      }
      if (message.signMsg != null && message.hasOwnProperty("signMsg")) {
        object.signMsg = $root.protoc.SignMessage.toObject(
          message.signMsg,
          options
        );
        if (options.oneofs) object.Content = "signMsg";
      }
      if (message.verifyAddr != null && message.hasOwnProperty("verifyAddr")) {
        object.verifyAddr = $root.protoc.VerifyAddress.toObject(
          message.verifyAddr,
          options
        );
        if (options.oneofs) object.Content = "verifyAddr";
      }
      if (
        message.signTxResult != null &&
        message.hasOwnProperty("signTxResult")
      ) {
        object.signTxResult = $root.protoc.SignTransactionResult.toObject(
          message.signTxResult,
          options
        );
        if (options.oneofs) object.Content = "signTxResult";
      }
      return object;
    };

    /**
     * Converts this Payload to JSON.
     * @function toJSON
     * @memberof protoc.Payload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Payload.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @name protoc.Payload.Type
     * @enum {number}
     * @property {number} TYPE_RESERVE=0 TYPE_RESERVE value
     * @property {number} TYPE_SYNC=1 TYPE_SYNC value
     * @property {number} TYPE_SIGN_TX=2 TYPE_SIGN_TX value
     * @property {number} TYPE_SIGN_MSG=3 TYPE_SIGN_MSG value
     * @property {number} TYPE_SIGN_MULTI_SIG=4 TYPE_SIGN_MULTI_SIG value
     * @property {number} TYPE_SYNC_MULTI_SIG_MSG=5 TYPE_SYNC_MULTI_SIG_MSG value
     * @property {number} TYPE_SIGN_ETH_MULTI_SIG_MSG=6 TYPE_SIGN_ETH_MULTI_SIG_MSG value
     * @property {number} TYPE_VERIFY_ADDRESS=7 TYPE_VERIFY_ADDRESS value
     * @property {number} TYPE_STAKING=8 TYPE_STAKING value
     * @property {number} TYPE_SIGN_TX_RESULT=9 TYPE_SIGN_TX_RESULT value
     */
    Payload.Type = (function () {
      const valuesById = {},
        values = Object.create(valuesById);
      values[(valuesById[0] = "TYPE_RESERVE")] = 0;
      values[(valuesById[1] = "TYPE_SYNC")] = 1;
      values[(valuesById[2] = "TYPE_SIGN_TX")] = 2;
      values[(valuesById[3] = "TYPE_SIGN_MSG")] = 3;
      values[(valuesById[4] = "TYPE_SIGN_MULTI_SIG")] = 4;
      values[(valuesById[5] = "TYPE_SYNC_MULTI_SIG_MSG")] = 5;
      values[(valuesById[6] = "TYPE_SIGN_ETH_MULTI_SIG_MSG")] = 6;
      values[(valuesById[7] = "TYPE_VERIFY_ADDRESS")] = 7;
      values[(valuesById[8] = "TYPE_STAKING")] = 8;
      values[(valuesById[9] = "TYPE_SIGN_TX_RESULT")] = 9;
      return values;
    })();

    return Payload;
  })();

  protoc.Account = (function () {
    /**
     * Properties of an Account.
     * @memberof protoc
     * @interface IAccount
     * @property {string|null} [hdPath] Account hdPath
     * @property {string|null} [xPub] Account xPub
     * @property {number|null} [addressLength] Account addressLength
     * @property {boolean|null} [isMultiSign] Account isMultiSign
     */

    /**
     * Constructs a new Account.
     * @memberof protoc
     * @classdesc Represents an Account.
     * @implements IAccount
     * @constructor
     * @param {protoc.IAccount=} [properties] Properties to set
     */
    function Account(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Account hdPath.
     * @member {string} hdPath
     * @memberof protoc.Account
     * @instance
     */
    Account.prototype.hdPath = "";

    /**
     * Account xPub.
     * @member {string} xPub
     * @memberof protoc.Account
     * @instance
     */
    Account.prototype.xPub = "";

    /**
     * Account addressLength.
     * @member {number} addressLength
     * @memberof protoc.Account
     * @instance
     */
    Account.prototype.addressLength = 0;

    /**
     * Account isMultiSign.
     * @member {boolean} isMultiSign
     * @memberof protoc.Account
     * @instance
     */
    Account.prototype.isMultiSign = false;

    /**
     * Creates a new Account instance using the specified properties.
     * @function create
     * @memberof protoc.Account
     * @static
     * @param {protoc.IAccount=} [properties] Properties to set
     * @returns {protoc.Account} Account instance
     */
    Account.create = function create(properties) {
      return new Account(properties);
    };

    /**
     * Encodes the specified Account message. Does not implicitly {@link protoc.Account.verify|verify} messages.
     * @function encode
     * @memberof protoc.Account
     * @static
     * @param {protoc.IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.hdPath != null &&
        Object.hasOwnProperty.call(message, "hdPath")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.hdPath);
      if (message.xPub != null && Object.hasOwnProperty.call(message, "xPub"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.xPub);
      if (
        message.addressLength != null &&
        Object.hasOwnProperty.call(message, "addressLength")
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.addressLength);
      if (
        message.isMultiSign != null &&
        Object.hasOwnProperty.call(message, "isMultiSign")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).bool(message.isMultiSign);
      return writer;
    };

    /**
     * Encodes the specified Account message, length delimited. Does not implicitly {@link protoc.Account.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Account
     * @static
     * @param {protoc.IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Account message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Account();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.hdPath = reader.string();
            break;
          case 2:
            message.xPub = reader.string();
            break;
          case 3:
            message.addressLength = reader.int32();
            break;
          case 4:
            message.isMultiSign = reader.bool();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Account message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Account message.
     * @function verify
     * @memberof protoc.Account
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Account.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        if (!$util.isString(message.hdPath)) return "hdPath: string expected";
      if (message.xPub != null && message.hasOwnProperty("xPub"))
        if (!$util.isString(message.xPub)) return "xPub: string expected";
      if (
        message.addressLength != null &&
        message.hasOwnProperty("addressLength")
      )
        if (!$util.isInteger(message.addressLength))
          return "addressLength: integer expected";
      if (message.isMultiSign != null && message.hasOwnProperty("isMultiSign"))
        if (typeof message.isMultiSign !== "boolean")
          return "isMultiSign: boolean expected";
      return null;
    };

    /**
     * Creates an Account message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Account
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Account} Account
     */
    Account.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Account) return object;
      const message = new $root.protoc.Account();
      if (object.hdPath != null) message.hdPath = String(object.hdPath);
      if (object.xPub != null) message.xPub = String(object.xPub);
      if (object.addressLength != null)
        message.addressLength = object.addressLength | 0;
      if (object.isMultiSign != null)
        message.isMultiSign = Boolean(object.isMultiSign);
      return message;
    };

    /**
     * Creates a plain object from an Account message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Account
     * @static
     * @param {protoc.Account} message Account
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Account.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.hdPath = "";
        object.xPub = "";
        object.addressLength = 0;
        object.isMultiSign = false;
      }
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        object.hdPath = message.hdPath;
      if (message.xPub != null && message.hasOwnProperty("xPub"))
        object.xPub = message.xPub;
      if (
        message.addressLength != null &&
        message.hasOwnProperty("addressLength")
      )
        object.addressLength = message.addressLength;
      if (message.isMultiSign != null && message.hasOwnProperty("isMultiSign"))
        object.isMultiSign = message.isMultiSign;
      return object;
    };

    /**
     * Converts this Account to JSON.
     * @function toJSON
     * @memberof protoc.Account
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Account.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Account;
  })();

  protoc.Coin = (function () {
    /**
     * Properties of a Coin.
     * @memberof protoc
     * @interface ICoin
     * @property {string|null} [coinCode] Coin coinCode
     * @property {boolean|null} [active] Coin active
     * @property {Array.<protoc.IAccount>|null} [accounts] Coin accounts
     */

    /**
     * Constructs a new Coin.
     * @memberof protoc
     * @classdesc Represents a Coin.
     * @implements ICoin
     * @constructor
     * @param {protoc.ICoin=} [properties] Properties to set
     */
    function Coin(properties) {
      this.accounts = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Coin coinCode.
     * @member {string} coinCode
     * @memberof protoc.Coin
     * @instance
     */
    Coin.prototype.coinCode = "";

    /**
     * Coin active.
     * @member {boolean} active
     * @memberof protoc.Coin
     * @instance
     */
    Coin.prototype.active = false;

    /**
     * Coin accounts.
     * @member {Array.<protoc.IAccount>} accounts
     * @memberof protoc.Coin
     * @instance
     */
    Coin.prototype.accounts = $util.emptyArray;

    /**
     * Creates a new Coin instance using the specified properties.
     * @function create
     * @memberof protoc.Coin
     * @static
     * @param {protoc.ICoin=} [properties] Properties to set
     * @returns {protoc.Coin} Coin instance
     */
    Coin.create = function create(properties) {
      return new Coin(properties);
    };

    /**
     * Encodes the specified Coin message. Does not implicitly {@link protoc.Coin.verify|verify} messages.
     * @function encode
     * @memberof protoc.Coin
     * @static
     * @param {protoc.ICoin} message Coin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Coin.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.coinCode != null &&
        Object.hasOwnProperty.call(message, "coinCode")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.coinCode);
      if (
        message.active != null &&
        Object.hasOwnProperty.call(message, "active")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).bool(message.active);
      if (message.accounts != null && message.accounts.length)
        for (let i = 0; i < message.accounts.length; ++i)
          $root.protoc.Account.encode(
            message.accounts[i],
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified Coin message, length delimited. Does not implicitly {@link protoc.Coin.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Coin
     * @static
     * @param {protoc.ICoin} message Coin message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Coin.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Coin message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Coin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Coin} Coin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Coin.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Coin();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.coinCode = reader.string();
            break;
          case 2:
            message.active = reader.bool();
            break;
          case 3:
            if (!(message.accounts && message.accounts.length))
              message.accounts = [];
            message.accounts.push(
              $root.protoc.Account.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Coin message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Coin
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Coin} Coin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Coin.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Coin message.
     * @function verify
     * @memberof protoc.Coin
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Coin.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        if (!$util.isString(message.coinCode))
          return "coinCode: string expected";
      if (message.active != null && message.hasOwnProperty("active"))
        if (typeof message.active !== "boolean")
          return "active: boolean expected";
      if (message.accounts != null && message.hasOwnProperty("accounts")) {
        if (!Array.isArray(message.accounts)) return "accounts: array expected";
        for (let i = 0; i < message.accounts.length; ++i) {
          const error = $root.protoc.Account.verify(message.accounts[i]);
          if (error) return "accounts." + error;
        }
      }
      return null;
    };

    /**
     * Creates a Coin message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Coin
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Coin} Coin
     */
    Coin.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Coin) return object;
      const message = new $root.protoc.Coin();
      if (object.coinCode != null) message.coinCode = String(object.coinCode);
      if (object.active != null) message.active = Boolean(object.active);
      if (object.accounts) {
        if (!Array.isArray(object.accounts))
          throw TypeError(".protoc.Coin.accounts: array expected");
        message.accounts = [];
        for (let i = 0; i < object.accounts.length; ++i) {
          if (typeof object.accounts[i] !== "object")
            throw TypeError(".protoc.Coin.accounts: object expected");
          message.accounts[i] = $root.protoc.Account.fromObject(
            object.accounts[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a Coin message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Coin
     * @static
     * @param {protoc.Coin} message Coin
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Coin.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) object.accounts = [];
      if (options.defaults) {
        object.coinCode = "";
        object.active = false;
      }
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        object.coinCode = message.coinCode;
      if (message.active != null && message.hasOwnProperty("active"))
        object.active = message.active;
      if (message.accounts && message.accounts.length) {
        object.accounts = [];
        for (let j = 0; j < message.accounts.length; ++j)
          object.accounts[j] = $root.protoc.Account.toObject(
            message.accounts[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this Coin to JSON.
     * @function toJSON
     * @memberof protoc.Coin
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Coin.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Coin;
  })();

  protoc.Sync = (function () {
    /**
     * Properties of a Sync.
     * @memberof protoc
     * @interface ISync
     * @property {Array.<protoc.ICoin>|null} [coins] Sync coins
     */

    /**
     * Constructs a new Sync.
     * @memberof protoc
     * @classdesc Represents a Sync.
     * @implements ISync
     * @constructor
     * @param {protoc.ISync=} [properties] Properties to set
     */
    function Sync(properties) {
      this.coins = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Sync coins.
     * @member {Array.<protoc.ICoin>} coins
     * @memberof protoc.Sync
     * @instance
     */
    Sync.prototype.coins = $util.emptyArray;

    /**
     * Creates a new Sync instance using the specified properties.
     * @function create
     * @memberof protoc.Sync
     * @static
     * @param {protoc.ISync=} [properties] Properties to set
     * @returns {protoc.Sync} Sync instance
     */
    Sync.create = function create(properties) {
      return new Sync(properties);
    };

    /**
     * Encodes the specified Sync message. Does not implicitly {@link protoc.Sync.verify|verify} messages.
     * @function encode
     * @memberof protoc.Sync
     * @static
     * @param {protoc.ISync} message Sync message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sync.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.coins != null && message.coins.length)
        for (let i = 0; i < message.coins.length; ++i)
          $root.protoc.Coin.encode(
            message.coins[i],
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified Sync message, length delimited. Does not implicitly {@link protoc.Sync.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Sync
     * @static
     * @param {protoc.ISync} message Sync message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Sync.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Sync message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Sync
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Sync} Sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sync.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Sync();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (!(message.coins && message.coins.length)) message.coins = [];
            message.coins.push(
              $root.protoc.Coin.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Sync message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Sync
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Sync} Sync
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Sync.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Sync message.
     * @function verify
     * @memberof protoc.Sync
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Sync.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.coins != null && message.hasOwnProperty("coins")) {
        if (!Array.isArray(message.coins)) return "coins: array expected";
        for (let i = 0; i < message.coins.length; ++i) {
          const error = $root.protoc.Coin.verify(message.coins[i]);
          if (error) return "coins." + error;
        }
      }
      return null;
    };

    /**
     * Creates a Sync message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Sync
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Sync} Sync
     */
    Sync.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Sync) return object;
      const message = new $root.protoc.Sync();
      if (object.coins) {
        if (!Array.isArray(object.coins))
          throw TypeError(".protoc.Sync.coins: array expected");
        message.coins = [];
        for (let i = 0; i < object.coins.length; ++i) {
          if (typeof object.coins[i] !== "object")
            throw TypeError(".protoc.Sync.coins: object expected");
          message.coins[i] = $root.protoc.Coin.fromObject(object.coins[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a Sync message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Sync
     * @static
     * @param {protoc.Sync} message Sync
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Sync.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) object.coins = [];
      if (message.coins && message.coins.length) {
        object.coins = [];
        for (let j = 0; j < message.coins.length; ++j)
          object.coins[j] = $root.protoc.Coin.toObject(
            message.coins[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this Sync to JSON.
     * @function toJSON
     * @memberof protoc.Sync
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Sync.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Sync;
  })();

  protoc.SignTransaction = (function () {
    /**
     * Properties of a SignTransaction.
     * @memberof protoc
     * @interface ISignTransaction
     * @property {string|null} [coinCode] SignTransaction coinCode
     * @property {string|null} [signId] SignTransaction signId
     * @property {string|null} [hdPath] SignTransaction hdPath
     * @property {number|Long|null} [timestamp] SignTransaction timestamp
     * @property {number|null} [decimal] SignTransaction decimal
     * @property {protoc.IBtcTx|null} [btcTx] SignTransaction btcTx
     * @property {protoc.IEthTx|null} [ethTx] SignTransaction ethTx
     * @property {protoc.ITronTx|null} [tronTx] SignTransaction tronTx
     * @property {protoc.IEtcTx|null} [etcTx] SignTransaction etcTx
     * @property {protoc.IBchTx|null} [bchTx] SignTransaction bchTx
     * @property {protoc.IDashTx|null} [dashTx] SignTransaction dashTx
     * @property {protoc.ILtcTx|null} [ltcTx] SignTransaction ltcTx
     * @property {protoc.IDcrTx|null} [dcrTx] SignTransaction dcrTx
     * @property {protoc.IXzcTx|null} [xzcTx] SignTransaction xzcTx
     * @property {protoc.IXrpTx|null} [xrpTx] SignTransaction xrpTx
     * @property {protoc.IIostTx|null} [iostTx] SignTransaction iostTx
     * @property {protoc.IOmniTx|null} [omniTx] SignTransaction omniTx
     * @property {protoc.IEosTx|null} [eosTx] SignTransaction eosTx
     * @property {protoc.IDotTx|null} [dotTx] SignTransaction dotTx
     * @property {protoc.IKsmTx|null} [ksmTx] SignTransaction ksmTx
     * @property {protoc.ICfxTx|null} [cfxTx] SignTransaction cfxTx
     */

    /**
     * Constructs a new SignTransaction.
     * @memberof protoc
     * @classdesc Represents a SignTransaction.
     * @implements ISignTransaction
     * @constructor
     * @param {protoc.ISignTransaction=} [properties] Properties to set
     */
    function SignTransaction(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SignTransaction coinCode.
     * @member {string} coinCode
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.coinCode = "";

    /**
     * SignTransaction signId.
     * @member {string} signId
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.signId = "";

    /**
     * SignTransaction hdPath.
     * @member {string} hdPath
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.hdPath = "";

    /**
     * SignTransaction timestamp.
     * @member {number|Long} timestamp
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.timestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * SignTransaction decimal.
     * @member {number} decimal
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.decimal = 0;

    /**
     * SignTransaction btcTx.
     * @member {protoc.IBtcTx|null|undefined} btcTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.btcTx = null;

    /**
     * SignTransaction ethTx.
     * @member {protoc.IEthTx|null|undefined} ethTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.ethTx = null;

    /**
     * SignTransaction tronTx.
     * @member {protoc.ITronTx|null|undefined} tronTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.tronTx = null;

    /**
     * SignTransaction etcTx.
     * @member {protoc.IEtcTx|null|undefined} etcTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.etcTx = null;

    /**
     * SignTransaction bchTx.
     * @member {protoc.IBchTx|null|undefined} bchTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.bchTx = null;

    /**
     * SignTransaction dashTx.
     * @member {protoc.IDashTx|null|undefined} dashTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.dashTx = null;

    /**
     * SignTransaction ltcTx.
     * @member {protoc.ILtcTx|null|undefined} ltcTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.ltcTx = null;

    /**
     * SignTransaction dcrTx.
     * @member {protoc.IDcrTx|null|undefined} dcrTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.dcrTx = null;

    /**
     * SignTransaction xzcTx.
     * @member {protoc.IXzcTx|null|undefined} xzcTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.xzcTx = null;

    /**
     * SignTransaction xrpTx.
     * @member {protoc.IXrpTx|null|undefined} xrpTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.xrpTx = null;

    /**
     * SignTransaction iostTx.
     * @member {protoc.IIostTx|null|undefined} iostTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.iostTx = null;

    /**
     * SignTransaction omniTx.
     * @member {protoc.IOmniTx|null|undefined} omniTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.omniTx = null;

    /**
     * SignTransaction eosTx.
     * @member {protoc.IEosTx|null|undefined} eosTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.eosTx = null;

    /**
     * SignTransaction dotTx.
     * @member {protoc.IDotTx|null|undefined} dotTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.dotTx = null;

    /**
     * SignTransaction ksmTx.
     * @member {protoc.IKsmTx|null|undefined} ksmTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.ksmTx = null;

    /**
     * SignTransaction cfxTx.
     * @member {protoc.ICfxTx|null|undefined} cfxTx
     * @memberof protoc.SignTransaction
     * @instance
     */
    SignTransaction.prototype.cfxTx = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * SignTransaction Transaction.
     * @member {"btcTx"|"ethTx"|"tronTx"|"etcTx"|"bchTx"|"dashTx"|"ltcTx"|"dcrTx"|"xzcTx"|"xrpTx"|"iostTx"|"omniTx"|"eosTx"|"dotTx"|"ksmTx"|"cfxTx"|undefined} Transaction
     * @memberof protoc.SignTransaction
     * @instance
     */
    Object.defineProperty(SignTransaction.prototype, "Transaction", {
      get: $util.oneOfGetter(
        ($oneOfFields = [
          "btcTx",
          "ethTx",
          "tronTx",
          "etcTx",
          "bchTx",
          "dashTx",
          "ltcTx",
          "dcrTx",
          "xzcTx",
          "xrpTx",
          "iostTx",
          "omniTx",
          "eosTx",
          "dotTx",
          "ksmTx",
          "cfxTx",
        ])
      ),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new SignTransaction instance using the specified properties.
     * @function create
     * @memberof protoc.SignTransaction
     * @static
     * @param {protoc.ISignTransaction=} [properties] Properties to set
     * @returns {protoc.SignTransaction} SignTransaction instance
     */
    SignTransaction.create = function create(properties) {
      return new SignTransaction(properties);
    };

    /**
     * Encodes the specified SignTransaction message. Does not implicitly {@link protoc.SignTransaction.verify|verify} messages.
     * @function encode
     * @memberof protoc.SignTransaction
     * @static
     * @param {protoc.ISignTransaction} message SignTransaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignTransaction.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.coinCode != null &&
        Object.hasOwnProperty.call(message, "coinCode")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.coinCode);
      if (
        message.signId != null &&
        Object.hasOwnProperty.call(message, "signId")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.signId);
      if (
        message.hdPath != null &&
        Object.hasOwnProperty.call(message, "hdPath")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.hdPath);
      if (
        message.timestamp != null &&
        Object.hasOwnProperty.call(message, "timestamp")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.timestamp);
      if (
        message.decimal != null &&
        Object.hasOwnProperty.call(message, "decimal")
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.decimal);
      if (message.btcTx != null && Object.hasOwnProperty.call(message, "btcTx"))
        $root.protoc.BtcTx.encode(
          message.btcTx,
          writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
        ).ldelim();
      if (message.ethTx != null && Object.hasOwnProperty.call(message, "ethTx"))
        $root.protoc.EthTx.encode(
          message.ethTx,
          writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
        ).ldelim();
      if (
        message.tronTx != null &&
        Object.hasOwnProperty.call(message, "tronTx")
      )
        $root.protoc.TronTx.encode(
          message.tronTx,
          writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
        ).ldelim();
      if (message.etcTx != null && Object.hasOwnProperty.call(message, "etcTx"))
        $root.protoc.EtcTx.encode(
          message.etcTx,
          writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
        ).ldelim();
      if (message.bchTx != null && Object.hasOwnProperty.call(message, "bchTx"))
        $root.protoc.BchTx.encode(
          message.bchTx,
          writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
        ).ldelim();
      if (
        message.dashTx != null &&
        Object.hasOwnProperty.call(message, "dashTx")
      )
        $root.protoc.DashTx.encode(
          message.dashTx,
          writer.uint32(/* id 11, wireType 2 =*/ 90).fork()
        ).ldelim();
      if (message.ltcTx != null && Object.hasOwnProperty.call(message, "ltcTx"))
        $root.protoc.LtcTx.encode(
          message.ltcTx,
          writer.uint32(/* id 12, wireType 2 =*/ 98).fork()
        ).ldelim();
      if (message.dcrTx != null && Object.hasOwnProperty.call(message, "dcrTx"))
        $root.protoc.DcrTx.encode(
          message.dcrTx,
          writer.uint32(/* id 13, wireType 2 =*/ 106).fork()
        ).ldelim();
      if (message.xzcTx != null && Object.hasOwnProperty.call(message, "xzcTx"))
        $root.protoc.XzcTx.encode(
          message.xzcTx,
          writer.uint32(/* id 14, wireType 2 =*/ 114).fork()
        ).ldelim();
      if (message.xrpTx != null && Object.hasOwnProperty.call(message, "xrpTx"))
        $root.protoc.XrpTx.encode(
          message.xrpTx,
          writer.uint32(/* id 15, wireType 2 =*/ 122).fork()
        ).ldelim();
      if (
        message.iostTx != null &&
        Object.hasOwnProperty.call(message, "iostTx")
      )
        $root.protoc.IostTx.encode(
          message.iostTx,
          writer.uint32(/* id 16, wireType 2 =*/ 130).fork()
        ).ldelim();
      if (
        message.omniTx != null &&
        Object.hasOwnProperty.call(message, "omniTx")
      )
        $root.protoc.OmniTx.encode(
          message.omniTx,
          writer.uint32(/* id 17, wireType 2 =*/ 138).fork()
        ).ldelim();
      if (message.eosTx != null && Object.hasOwnProperty.call(message, "eosTx"))
        $root.protoc.EosTx.encode(
          message.eosTx,
          writer.uint32(/* id 18, wireType 2 =*/ 146).fork()
        ).ldelim();
      if (message.dotTx != null && Object.hasOwnProperty.call(message, "dotTx"))
        $root.protoc.DotTx.encode(
          message.dotTx,
          writer.uint32(/* id 19, wireType 2 =*/ 154).fork()
        ).ldelim();
      if (message.ksmTx != null && Object.hasOwnProperty.call(message, "ksmTx"))
        $root.protoc.KsmTx.encode(
          message.ksmTx,
          writer.uint32(/* id 20, wireType 2 =*/ 162).fork()
        ).ldelim();
      if (message.cfxTx != null && Object.hasOwnProperty.call(message, "cfxTx"))
        $root.protoc.CfxTx.encode(
          message.cfxTx,
          writer.uint32(/* id 21, wireType 2 =*/ 170).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified SignTransaction message, length delimited. Does not implicitly {@link protoc.SignTransaction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.SignTransaction
     * @static
     * @param {protoc.ISignTransaction} message SignTransaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignTransaction.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignTransaction message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.SignTransaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.SignTransaction} SignTransaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignTransaction.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.SignTransaction();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.coinCode = reader.string();
            break;
          case 2:
            message.signId = reader.string();
            break;
          case 3:
            message.hdPath = reader.string();
            break;
          case 4:
            message.timestamp = reader.int64();
            break;
          case 5:
            message.decimal = reader.int32();
            break;
          case 6:
            message.btcTx = $root.protoc.BtcTx.decode(reader, reader.uint32());
            break;
          case 7:
            message.ethTx = $root.protoc.EthTx.decode(reader, reader.uint32());
            break;
          case 8:
            message.tronTx = $root.protoc.TronTx.decode(
              reader,
              reader.uint32()
            );
            break;
          case 9:
            message.etcTx = $root.protoc.EtcTx.decode(reader, reader.uint32());
            break;
          case 10:
            message.bchTx = $root.protoc.BchTx.decode(reader, reader.uint32());
            break;
          case 11:
            message.dashTx = $root.protoc.DashTx.decode(
              reader,
              reader.uint32()
            );
            break;
          case 12:
            message.ltcTx = $root.protoc.LtcTx.decode(reader, reader.uint32());
            break;
          case 13:
            message.dcrTx = $root.protoc.DcrTx.decode(reader, reader.uint32());
            break;
          case 14:
            message.xzcTx = $root.protoc.XzcTx.decode(reader, reader.uint32());
            break;
          case 15:
            message.xrpTx = $root.protoc.XrpTx.decode(reader, reader.uint32());
            break;
          case 16:
            message.iostTx = $root.protoc.IostTx.decode(
              reader,
              reader.uint32()
            );
            break;
          case 17:
            message.omniTx = $root.protoc.OmniTx.decode(
              reader,
              reader.uint32()
            );
            break;
          case 18:
            message.eosTx = $root.protoc.EosTx.decode(reader, reader.uint32());
            break;
          case 19:
            message.dotTx = $root.protoc.DotTx.decode(reader, reader.uint32());
            break;
          case 20:
            message.ksmTx = $root.protoc.KsmTx.decode(reader, reader.uint32());
            break;
          case 21:
            message.cfxTx = $root.protoc.CfxTx.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SignTransaction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.SignTransaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.SignTransaction} SignTransaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignTransaction.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignTransaction message.
     * @function verify
     * @memberof protoc.SignTransaction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignTransaction.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      const properties = {};
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        if (!$util.isString(message.coinCode))
          return "coinCode: string expected";
      if (message.signId != null && message.hasOwnProperty("signId"))
        if (!$util.isString(message.signId)) return "signId: string expected";
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        if (!$util.isString(message.hdPath)) return "hdPath: string expected";
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (
          !$util.isInteger(message.timestamp) &&
          !(
            message.timestamp &&
            $util.isInteger(message.timestamp.low) &&
            $util.isInteger(message.timestamp.high)
          )
        )
          return "timestamp: integer|Long expected";
      if (message.decimal != null && message.hasOwnProperty("decimal"))
        if (!$util.isInteger(message.decimal))
          return "decimal: integer expected";
      if (message.btcTx != null && message.hasOwnProperty("btcTx")) {
        properties.Transaction = 1;
        {
          const error = $root.protoc.BtcTx.verify(message.btcTx);
          if (error) return "btcTx." + error;
        }
      }
      if (message.ethTx != null && message.hasOwnProperty("ethTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.EthTx.verify(message.ethTx);
          if (error) return "ethTx." + error;
        }
      }
      if (message.tronTx != null && message.hasOwnProperty("tronTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.TronTx.verify(message.tronTx);
          if (error) return "tronTx." + error;
        }
      }
      if (message.etcTx != null && message.hasOwnProperty("etcTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.EtcTx.verify(message.etcTx);
          if (error) return "etcTx." + error;
        }
      }
      if (message.bchTx != null && message.hasOwnProperty("bchTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.BchTx.verify(message.bchTx);
          if (error) return "bchTx." + error;
        }
      }
      if (message.dashTx != null && message.hasOwnProperty("dashTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.DashTx.verify(message.dashTx);
          if (error) return "dashTx." + error;
        }
      }
      if (message.ltcTx != null && message.hasOwnProperty("ltcTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.LtcTx.verify(message.ltcTx);
          if (error) return "ltcTx." + error;
        }
      }
      if (message.dcrTx != null && message.hasOwnProperty("dcrTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.DcrTx.verify(message.dcrTx);
          if (error) return "dcrTx." + error;
        }
      }
      if (message.xzcTx != null && message.hasOwnProperty("xzcTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.XzcTx.verify(message.xzcTx);
          if (error) return "xzcTx." + error;
        }
      }
      if (message.xrpTx != null && message.hasOwnProperty("xrpTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.XrpTx.verify(message.xrpTx);
          if (error) return "xrpTx." + error;
        }
      }
      if (message.iostTx != null && message.hasOwnProperty("iostTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.IostTx.verify(message.iostTx);
          if (error) return "iostTx." + error;
        }
      }
      if (message.omniTx != null && message.hasOwnProperty("omniTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.OmniTx.verify(message.omniTx);
          if (error) return "omniTx." + error;
        }
      }
      if (message.eosTx != null && message.hasOwnProperty("eosTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.EosTx.verify(message.eosTx);
          if (error) return "eosTx." + error;
        }
      }
      if (message.dotTx != null && message.hasOwnProperty("dotTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.DotTx.verify(message.dotTx);
          if (error) return "dotTx." + error;
        }
      }
      if (message.ksmTx != null && message.hasOwnProperty("ksmTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.KsmTx.verify(message.ksmTx);
          if (error) return "ksmTx." + error;
        }
      }
      if (message.cfxTx != null && message.hasOwnProperty("cfxTx")) {
        if (properties.Transaction === 1) return "Transaction: multiple values";
        properties.Transaction = 1;
        {
          const error = $root.protoc.CfxTx.verify(message.cfxTx);
          if (error) return "cfxTx." + error;
        }
      }
      return null;
    };

    /**
     * Creates a SignTransaction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.SignTransaction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.SignTransaction} SignTransaction
     */
    SignTransaction.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.SignTransaction) return object;
      const message = new $root.protoc.SignTransaction();
      if (object.coinCode != null) message.coinCode = String(object.coinCode);
      if (object.signId != null) message.signId = String(object.signId);
      if (object.hdPath != null) message.hdPath = String(object.hdPath);
      if (object.timestamp != null)
        if ($util.Long)
          (message.timestamp = $util.Long.fromValue(
            object.timestamp
          )).unsigned = false;
        else if (typeof object.timestamp === "string")
          message.timestamp = parseInt(object.timestamp, 10);
        else if (typeof object.timestamp === "number")
          message.timestamp = object.timestamp;
        else if (typeof object.timestamp === "object")
          message.timestamp = new $util.LongBits(
            object.timestamp.low >>> 0,
            object.timestamp.high >>> 0
          ).toNumber();
      if (object.decimal != null) message.decimal = object.decimal | 0;
      if (object.btcTx != null) {
        if (typeof object.btcTx !== "object")
          throw TypeError(".protoc.SignTransaction.btcTx: object expected");
        message.btcTx = $root.protoc.BtcTx.fromObject(object.btcTx);
      }
      if (object.ethTx != null) {
        if (typeof object.ethTx !== "object")
          throw TypeError(".protoc.SignTransaction.ethTx: object expected");
        message.ethTx = $root.protoc.EthTx.fromObject(object.ethTx);
      }
      if (object.tronTx != null) {
        if (typeof object.tronTx !== "object")
          throw TypeError(".protoc.SignTransaction.tronTx: object expected");
        message.tronTx = $root.protoc.TronTx.fromObject(object.tronTx);
      }
      if (object.etcTx != null) {
        if (typeof object.etcTx !== "object")
          throw TypeError(".protoc.SignTransaction.etcTx: object expected");
        message.etcTx = $root.protoc.EtcTx.fromObject(object.etcTx);
      }
      if (object.bchTx != null) {
        if (typeof object.bchTx !== "object")
          throw TypeError(".protoc.SignTransaction.bchTx: object expected");
        message.bchTx = $root.protoc.BchTx.fromObject(object.bchTx);
      }
      if (object.dashTx != null) {
        if (typeof object.dashTx !== "object")
          throw TypeError(".protoc.SignTransaction.dashTx: object expected");
        message.dashTx = $root.protoc.DashTx.fromObject(object.dashTx);
      }
      if (object.ltcTx != null) {
        if (typeof object.ltcTx !== "object")
          throw TypeError(".protoc.SignTransaction.ltcTx: object expected");
        message.ltcTx = $root.protoc.LtcTx.fromObject(object.ltcTx);
      }
      if (object.dcrTx != null) {
        if (typeof object.dcrTx !== "object")
          throw TypeError(".protoc.SignTransaction.dcrTx: object expected");
        message.dcrTx = $root.protoc.DcrTx.fromObject(object.dcrTx);
      }
      if (object.xzcTx != null) {
        if (typeof object.xzcTx !== "object")
          throw TypeError(".protoc.SignTransaction.xzcTx: object expected");
        message.xzcTx = $root.protoc.XzcTx.fromObject(object.xzcTx);
      }
      if (object.xrpTx != null) {
        if (typeof object.xrpTx !== "object")
          throw TypeError(".protoc.SignTransaction.xrpTx: object expected");
        message.xrpTx = $root.protoc.XrpTx.fromObject(object.xrpTx);
      }
      if (object.iostTx != null) {
        if (typeof object.iostTx !== "object")
          throw TypeError(".protoc.SignTransaction.iostTx: object expected");
        message.iostTx = $root.protoc.IostTx.fromObject(object.iostTx);
      }
      if (object.omniTx != null) {
        if (typeof object.omniTx !== "object")
          throw TypeError(".protoc.SignTransaction.omniTx: object expected");
        message.omniTx = $root.protoc.OmniTx.fromObject(object.omniTx);
      }
      if (object.eosTx != null) {
        if (typeof object.eosTx !== "object")
          throw TypeError(".protoc.SignTransaction.eosTx: object expected");
        message.eosTx = $root.protoc.EosTx.fromObject(object.eosTx);
      }
      if (object.dotTx != null) {
        if (typeof object.dotTx !== "object")
          throw TypeError(".protoc.SignTransaction.dotTx: object expected");
        message.dotTx = $root.protoc.DotTx.fromObject(object.dotTx);
      }
      if (object.ksmTx != null) {
        if (typeof object.ksmTx !== "object")
          throw TypeError(".protoc.SignTransaction.ksmTx: object expected");
        message.ksmTx = $root.protoc.KsmTx.fromObject(object.ksmTx);
      }
      if (object.cfxTx != null) {
        if (typeof object.cfxTx !== "object")
          throw TypeError(".protoc.SignTransaction.cfxTx: object expected");
        message.cfxTx = $root.protoc.CfxTx.fromObject(object.cfxTx);
      }
      return message;
    };

    /**
     * Creates a plain object from a SignTransaction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.SignTransaction
     * @static
     * @param {protoc.SignTransaction} message SignTransaction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SignTransaction.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.coinCode = "";
        object.signId = "";
        object.hdPath = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.timestamp =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timestamp = options.longs === String ? "0" : 0;
        object.decimal = 0;
      }
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        object.coinCode = message.coinCode;
      if (message.signId != null && message.hasOwnProperty("signId"))
        object.signId = message.signId;
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        object.hdPath = message.hdPath;
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (typeof message.timestamp === "number")
          object.timestamp =
            options.longs === String
              ? String(message.timestamp)
              : message.timestamp;
        else
          object.timestamp =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timestamp)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timestamp.low >>> 0,
                  message.timestamp.high >>> 0
                ).toNumber()
              : message.timestamp;
      if (message.decimal != null && message.hasOwnProperty("decimal"))
        object.decimal = message.decimal;
      if (message.btcTx != null && message.hasOwnProperty("btcTx")) {
        object.btcTx = $root.protoc.BtcTx.toObject(message.btcTx, options);
        if (options.oneofs) object.Transaction = "btcTx";
      }
      if (message.ethTx != null && message.hasOwnProperty("ethTx")) {
        object.ethTx = $root.protoc.EthTx.toObject(message.ethTx, options);
        if (options.oneofs) object.Transaction = "ethTx";
      }
      if (message.tronTx != null && message.hasOwnProperty("tronTx")) {
        object.tronTx = $root.protoc.TronTx.toObject(message.tronTx, options);
        if (options.oneofs) object.Transaction = "tronTx";
      }
      if (message.etcTx != null && message.hasOwnProperty("etcTx")) {
        object.etcTx = $root.protoc.EtcTx.toObject(message.etcTx, options);
        if (options.oneofs) object.Transaction = "etcTx";
      }
      if (message.bchTx != null && message.hasOwnProperty("bchTx")) {
        object.bchTx = $root.protoc.BchTx.toObject(message.bchTx, options);
        if (options.oneofs) object.Transaction = "bchTx";
      }
      if (message.dashTx != null && message.hasOwnProperty("dashTx")) {
        object.dashTx = $root.protoc.DashTx.toObject(message.dashTx, options);
        if (options.oneofs) object.Transaction = "dashTx";
      }
      if (message.ltcTx != null && message.hasOwnProperty("ltcTx")) {
        object.ltcTx = $root.protoc.LtcTx.toObject(message.ltcTx, options);
        if (options.oneofs) object.Transaction = "ltcTx";
      }
      if (message.dcrTx != null && message.hasOwnProperty("dcrTx")) {
        object.dcrTx = $root.protoc.DcrTx.toObject(message.dcrTx, options);
        if (options.oneofs) object.Transaction = "dcrTx";
      }
      if (message.xzcTx != null && message.hasOwnProperty("xzcTx")) {
        object.xzcTx = $root.protoc.XzcTx.toObject(message.xzcTx, options);
        if (options.oneofs) object.Transaction = "xzcTx";
      }
      if (message.xrpTx != null && message.hasOwnProperty("xrpTx")) {
        object.xrpTx = $root.protoc.XrpTx.toObject(message.xrpTx, options);
        if (options.oneofs) object.Transaction = "xrpTx";
      }
      if (message.iostTx != null && message.hasOwnProperty("iostTx")) {
        object.iostTx = $root.protoc.IostTx.toObject(message.iostTx, options);
        if (options.oneofs) object.Transaction = "iostTx";
      }
      if (message.omniTx != null && message.hasOwnProperty("omniTx")) {
        object.omniTx = $root.protoc.OmniTx.toObject(message.omniTx, options);
        if (options.oneofs) object.Transaction = "omniTx";
      }
      if (message.eosTx != null && message.hasOwnProperty("eosTx")) {
        object.eosTx = $root.protoc.EosTx.toObject(message.eosTx, options);
        if (options.oneofs) object.Transaction = "eosTx";
      }
      if (message.dotTx != null && message.hasOwnProperty("dotTx")) {
        object.dotTx = $root.protoc.DotTx.toObject(message.dotTx, options);
        if (options.oneofs) object.Transaction = "dotTx";
      }
      if (message.ksmTx != null && message.hasOwnProperty("ksmTx")) {
        object.ksmTx = $root.protoc.KsmTx.toObject(message.ksmTx, options);
        if (options.oneofs) object.Transaction = "ksmTx";
      }
      if (message.cfxTx != null && message.hasOwnProperty("cfxTx")) {
        object.cfxTx = $root.protoc.CfxTx.toObject(message.cfxTx, options);
        if (options.oneofs) object.Transaction = "cfxTx";
      }
      return object;
    };

    /**
     * Converts this SignTransaction to JSON.
     * @function toJSON
     * @memberof protoc.SignTransaction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SignTransaction.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SignTransaction;
  })();

  protoc.BtcTx = (function () {
    /**
     * Properties of a BtcTx.
     * @memberof protoc
     * @interface IBtcTx
     * @property {number|Long|null} [fee] BtcTx fee
     * @property {number|null} [dustThreshold] BtcTx dustThreshold
     * @property {string|null} [memo] BtcTx memo
     * @property {Array.<protoc.IInput>|null} [inputs] BtcTx inputs
     * @property {Array.<protoc.IOutput>|null} [outputs] BtcTx outputs
     * @property {protoc.IOmni|null} [omni] BtcTx omni
     */

    /**
     * Constructs a new BtcTx.
     * @memberof protoc
     * @classdesc Represents a BtcTx.
     * @implements IBtcTx
     * @constructor
     * @param {protoc.IBtcTx=} [properties] Properties to set
     */
    function BtcTx(properties) {
      this.inputs = [];
      this.outputs = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * BtcTx fee.
     * @member {number|Long} fee
     * @memberof protoc.BtcTx
     * @instance
     */
    BtcTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * BtcTx dustThreshold.
     * @member {number} dustThreshold
     * @memberof protoc.BtcTx
     * @instance
     */
    BtcTx.prototype.dustThreshold = 0;

    /**
     * BtcTx memo.
     * @member {string} memo
     * @memberof protoc.BtcTx
     * @instance
     */
    BtcTx.prototype.memo = "";

    /**
     * BtcTx inputs.
     * @member {Array.<protoc.IInput>} inputs
     * @memberof protoc.BtcTx
     * @instance
     */
    BtcTx.prototype.inputs = $util.emptyArray;

    /**
     * BtcTx outputs.
     * @member {Array.<protoc.IOutput>} outputs
     * @memberof protoc.BtcTx
     * @instance
     */
    BtcTx.prototype.outputs = $util.emptyArray;

    /**
     * BtcTx omni.
     * @member {protoc.IOmni|null|undefined} omni
     * @memberof protoc.BtcTx
     * @instance
     */
    BtcTx.prototype.omni = null;

    /**
     * Creates a new BtcTx instance using the specified properties.
     * @function create
     * @memberof protoc.BtcTx
     * @static
     * @param {protoc.IBtcTx=} [properties] Properties to set
     * @returns {protoc.BtcTx} BtcTx instance
     */
    BtcTx.create = function create(properties) {
      return new BtcTx(properties);
    };

    /**
     * Encodes the specified BtcTx message. Does not implicitly {@link protoc.BtcTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.BtcTx
     * @static
     * @param {protoc.IBtcTx} message BtcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BtcTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.fee);
      if (
        message.dustThreshold != null &&
        Object.hasOwnProperty.call(message, "dustThreshold")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.dustThreshold);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.memo);
      if (message.inputs != null && message.inputs.length)
        for (let i = 0; i < message.inputs.length; ++i)
          $root.protoc.Input.encode(
            message.inputs[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
      if (message.outputs != null && message.outputs.length)
        for (let i = 0; i < message.outputs.length; ++i)
          $root.protoc.Output.encode(
            message.outputs[i],
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
      if (message.omni != null && Object.hasOwnProperty.call(message, "omni"))
        $root.protoc.Omni.encode(
          message.omni,
          writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified BtcTx message, length delimited. Does not implicitly {@link protoc.BtcTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.BtcTx
     * @static
     * @param {protoc.IBtcTx} message BtcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BtcTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BtcTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.BtcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.BtcTx} BtcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BtcTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.BtcTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee = reader.int64();
            break;
          case 2:
            message.dustThreshold = reader.int32();
            break;
          case 3:
            message.memo = reader.string();
            break;
          case 4:
            if (!(message.inputs && message.inputs.length)) message.inputs = [];
            message.inputs.push(
              $root.protoc.Input.decode(reader, reader.uint32())
            );
            break;
          case 5:
            if (!(message.outputs && message.outputs.length))
              message.outputs = [];
            message.outputs.push(
              $root.protoc.Output.decode(reader, reader.uint32())
            );
            break;
          case 6:
            message.omni = $root.protoc.Omni.decode(reader, reader.uint32());
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a BtcTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.BtcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.BtcTx} BtcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BtcTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BtcTx message.
     * @function verify
     * @memberof protoc.BtcTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BtcTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        if (!$util.isInteger(message.dustThreshold))
          return "dustThreshold: integer expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.inputs != null && message.hasOwnProperty("inputs")) {
        if (!Array.isArray(message.inputs)) return "inputs: array expected";
        for (let i = 0; i < message.inputs.length; ++i) {
          const error = $root.protoc.Input.verify(message.inputs[i]);
          if (error) return "inputs." + error;
        }
      }
      if (message.outputs != null && message.hasOwnProperty("outputs")) {
        if (!Array.isArray(message.outputs)) return "outputs: array expected";
        for (let i = 0; i < message.outputs.length; ++i) {
          const error = $root.protoc.Output.verify(message.outputs[i]);
          if (error) return "outputs." + error;
        }
      }
      if (message.omni != null && message.hasOwnProperty("omni")) {
        const error = $root.protoc.Omni.verify(message.omni);
        if (error) return "omni." + error;
      }
      return null;
    };

    /**
     * Creates a BtcTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.BtcTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.BtcTx} BtcTx
     */
    BtcTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.BtcTx) return object;
      const message = new $root.protoc.BtcTx();
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.dustThreshold != null)
        message.dustThreshold = object.dustThreshold | 0;
      if (object.memo != null) message.memo = String(object.memo);
      if (object.inputs) {
        if (!Array.isArray(object.inputs))
          throw TypeError(".protoc.BtcTx.inputs: array expected");
        message.inputs = [];
        for (let i = 0; i < object.inputs.length; ++i) {
          if (typeof object.inputs[i] !== "object")
            throw TypeError(".protoc.BtcTx.inputs: object expected");
          message.inputs[i] = $root.protoc.Input.fromObject(object.inputs[i]);
        }
      }
      if (object.outputs) {
        if (!Array.isArray(object.outputs))
          throw TypeError(".protoc.BtcTx.outputs: array expected");
        message.outputs = [];
        for (let i = 0; i < object.outputs.length; ++i) {
          if (typeof object.outputs[i] !== "object")
            throw TypeError(".protoc.BtcTx.outputs: object expected");
          message.outputs[i] = $root.protoc.Output.fromObject(
            object.outputs[i]
          );
        }
      }
      if (object.omni != null) {
        if (typeof object.omni !== "object")
          throw TypeError(".protoc.BtcTx.omni: object expected");
        message.omni = $root.protoc.Omni.fromObject(object.omni);
      }
      return message;
    };

    /**
     * Creates a plain object from a BtcTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.BtcTx
     * @static
     * @param {protoc.BtcTx} message BtcTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BtcTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) {
        object.inputs = [];
        object.outputs = [];
      }
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        object.dustThreshold = 0;
        object.memo = "";
        object.omni = null;
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        object.dustThreshold = message.dustThreshold;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.inputs && message.inputs.length) {
        object.inputs = [];
        for (let j = 0; j < message.inputs.length; ++j)
          object.inputs[j] = $root.protoc.Input.toObject(
            message.inputs[j],
            options
          );
      }
      if (message.outputs && message.outputs.length) {
        object.outputs = [];
        for (let j = 0; j < message.outputs.length; ++j)
          object.outputs[j] = $root.protoc.Output.toObject(
            message.outputs[j],
            options
          );
      }
      if (message.omni != null && message.hasOwnProperty("omni"))
        object.omni = $root.protoc.Omni.toObject(message.omni, options);
      return object;
    };

    /**
     * Converts this BtcTx to JSON.
     * @function toJSON
     * @memberof protoc.BtcTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BtcTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BtcTx;
  })();

  protoc.Omni = (function () {
    /**
     * Properties of an Omni.
     * @memberof protoc
     * @interface IOmni
     * @property {string|null} [to] Omni to
     * @property {string|null} [changeAddress] Omni changeAddress
     * @property {number|Long|null} [omniAmount] Omni omniAmount
     * @property {number|null} [propertyId] Omni propertyId
     */

    /**
     * Constructs a new Omni.
     * @memberof protoc
     * @classdesc Represents an Omni.
     * @implements IOmni
     * @constructor
     * @param {protoc.IOmni=} [properties] Properties to set
     */
    function Omni(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Omni to.
     * @member {string} to
     * @memberof protoc.Omni
     * @instance
     */
    Omni.prototype.to = "";

    /**
     * Omni changeAddress.
     * @member {string} changeAddress
     * @memberof protoc.Omni
     * @instance
     */
    Omni.prototype.changeAddress = "";

    /**
     * Omni omniAmount.
     * @member {number|Long} omniAmount
     * @memberof protoc.Omni
     * @instance
     */
    Omni.prototype.omniAmount = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Omni propertyId.
     * @member {number} propertyId
     * @memberof protoc.Omni
     * @instance
     */
    Omni.prototype.propertyId = 0;

    /**
     * Creates a new Omni instance using the specified properties.
     * @function create
     * @memberof protoc.Omni
     * @static
     * @param {protoc.IOmni=} [properties] Properties to set
     * @returns {protoc.Omni} Omni instance
     */
    Omni.create = function create(properties) {
      return new Omni(properties);
    };

    /**
     * Encodes the specified Omni message. Does not implicitly {@link protoc.Omni.verify|verify} messages.
     * @function encode
     * @memberof protoc.Omni
     * @static
     * @param {protoc.IOmni} message Omni message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Omni.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.to);
      if (
        message.changeAddress != null &&
        Object.hasOwnProperty.call(message, "changeAddress")
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.changeAddress);
      if (
        message.omniAmount != null &&
        Object.hasOwnProperty.call(message, "omniAmount")
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.omniAmount);
      if (
        message.propertyId != null &&
        Object.hasOwnProperty.call(message, "propertyId")
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.propertyId);
      return writer;
    };

    /**
     * Encodes the specified Omni message, length delimited. Does not implicitly {@link protoc.Omni.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Omni
     * @static
     * @param {protoc.IOmni} message Omni message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Omni.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Omni message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Omni
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Omni} Omni
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Omni.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Omni();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 5:
            message.to = reader.string();
            break;
          case 6:
            message.changeAddress = reader.string();
            break;
          case 7:
            message.omniAmount = reader.int64();
            break;
          case 8:
            message.propertyId = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Omni message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Omni
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Omni} Omni
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Omni.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Omni message.
     * @function verify
     * @memberof protoc.Omni
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Omni.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        if (!$util.isString(message.changeAddress))
          return "changeAddress: string expected";
      if (message.omniAmount != null && message.hasOwnProperty("omniAmount"))
        if (
          !$util.isInteger(message.omniAmount) &&
          !(
            message.omniAmount &&
            $util.isInteger(message.omniAmount.low) &&
            $util.isInteger(message.omniAmount.high)
          )
        )
          return "omniAmount: integer|Long expected";
      if (message.propertyId != null && message.hasOwnProperty("propertyId"))
        if (!$util.isInteger(message.propertyId))
          return "propertyId: integer expected";
      return null;
    };

    /**
     * Creates an Omni message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Omni
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Omni} Omni
     */
    Omni.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Omni) return object;
      const message = new $root.protoc.Omni();
      if (object.to != null) message.to = String(object.to);
      if (object.changeAddress != null)
        message.changeAddress = String(object.changeAddress);
      if (object.omniAmount != null)
        if ($util.Long)
          (message.omniAmount = $util.Long.fromValue(
            object.omniAmount
          )).unsigned = false;
        else if (typeof object.omniAmount === "string")
          message.omniAmount = parseInt(object.omniAmount, 10);
        else if (typeof object.omniAmount === "number")
          message.omniAmount = object.omniAmount;
        else if (typeof object.omniAmount === "object")
          message.omniAmount = new $util.LongBits(
            object.omniAmount.low >>> 0,
            object.omniAmount.high >>> 0
          ).toNumber();
      if (object.propertyId != null) message.propertyId = object.propertyId | 0;
      return message;
    };

    /**
     * Creates a plain object from an Omni message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Omni
     * @static
     * @param {protoc.Omni} message Omni
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Omni.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.to = "";
        object.changeAddress = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.omniAmount =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.omniAmount = options.longs === String ? "0" : 0;
        object.propertyId = 0;
      }
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        object.changeAddress = message.changeAddress;
      if (message.omniAmount != null && message.hasOwnProperty("omniAmount"))
        if (typeof message.omniAmount === "number")
          object.omniAmount =
            options.longs === String
              ? String(message.omniAmount)
              : message.omniAmount;
        else
          object.omniAmount =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.omniAmount)
              : options.longs === Number
              ? new $util.LongBits(
                  message.omniAmount.low >>> 0,
                  message.omniAmount.high >>> 0
                ).toNumber()
              : message.omniAmount;
      if (message.propertyId != null && message.hasOwnProperty("propertyId"))
        object.propertyId = message.propertyId;
      return object;
    };

    /**
     * Converts this Omni to JSON.
     * @function toJSON
     * @memberof protoc.Omni
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Omni.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Omni;
  })();

  protoc.Input = (function () {
    /**
     * Properties of an Input.
     * @memberof protoc
     * @interface IInput
     * @property {string|null} [hash] Input hash
     * @property {number|null} [index] Input index
     * @property {protoc.Iutxo|null} [utxo] Input utxo
     * @property {string|null} [ownerKeyPath] Input ownerKeyPath
     */

    /**
     * Constructs a new Input.
     * @memberof protoc
     * @classdesc Represents an Input.
     * @implements IInput
     * @constructor
     * @param {protoc.IInput=} [properties] Properties to set
     */
    function Input(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Input hash.
     * @member {string} hash
     * @memberof protoc.Input
     * @instance
     */
    Input.prototype.hash = "";

    /**
     * Input index.
     * @member {number} index
     * @memberof protoc.Input
     * @instance
     */
    Input.prototype.index = 0;

    /**
     * Input utxo.
     * @member {protoc.Iutxo|null|undefined} utxo
     * @memberof protoc.Input
     * @instance
     */
    Input.prototype.utxo = null;

    /**
     * Input ownerKeyPath.
     * @member {string} ownerKeyPath
     * @memberof protoc.Input
     * @instance
     */
    Input.prototype.ownerKeyPath = "";

    /**
     * Creates a new Input instance using the specified properties.
     * @function create
     * @memberof protoc.Input
     * @static
     * @param {protoc.IInput=} [properties] Properties to set
     * @returns {protoc.Input} Input instance
     */
    Input.create = function create(properties) {
      return new Input(properties);
    };

    /**
     * Encodes the specified Input message. Does not implicitly {@link protoc.Input.verify|verify} messages.
     * @function encode
     * @memberof protoc.Input
     * @static
     * @param {protoc.IInput} message Input message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Input.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.hash);
      if (message.index != null && Object.hasOwnProperty.call(message, "index"))
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.index);
      if (message.utxo != null && Object.hasOwnProperty.call(message, "utxo"))
        $root.protoc.utxo
          .encode(
            message.utxo,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          )
          .ldelim();
      if (
        message.ownerKeyPath != null &&
        Object.hasOwnProperty.call(message, "ownerKeyPath")
      )
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.ownerKeyPath);
      return writer;
    };

    /**
     * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.Input.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Input
     * @static
     * @param {protoc.IInput} message Input message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Input.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Input message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Input
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Input} Input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Input.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Input();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.hash = reader.string();
            break;
          case 2:
            message.index = reader.int32();
            break;
          case 3:
            message.utxo = $root.protoc.utxo.decode(reader, reader.uint32());
            break;
          case 4:
            message.ownerKeyPath = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Input message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Input
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Input} Input
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Input.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Input message.
     * @function verify
     * @memberof protoc.Input
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Input.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.hash != null && message.hasOwnProperty("hash"))
        if (!$util.isString(message.hash)) return "hash: string expected";
      if (message.index != null && message.hasOwnProperty("index"))
        if (!$util.isInteger(message.index)) return "index: integer expected";
      if (message.utxo != null && message.hasOwnProperty("utxo")) {
        const error = $root.protoc.utxo.verify(message.utxo);
        if (error) return "utxo." + error;
      }
      if (
        message.ownerKeyPath != null &&
        message.hasOwnProperty("ownerKeyPath")
      )
        if (!$util.isString(message.ownerKeyPath))
          return "ownerKeyPath: string expected";
      return null;
    };

    /**
     * Creates an Input message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Input
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Input} Input
     */
    Input.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Input) return object;
      const message = new $root.protoc.Input();
      if (object.hash != null) message.hash = String(object.hash);
      if (object.index != null) message.index = object.index | 0;
      if (object.utxo != null) {
        if (typeof object.utxo !== "object")
          throw TypeError(".protoc.Input.utxo: object expected");
        message.utxo = $root.protoc.utxo.fromObject(object.utxo);
      }
      if (object.ownerKeyPath != null)
        message.ownerKeyPath = String(object.ownerKeyPath);
      return message;
    };

    /**
     * Creates a plain object from an Input message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Input
     * @static
     * @param {protoc.Input} message Input
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Input.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.hash = "";
        object.index = 0;
        object.utxo = null;
        object.ownerKeyPath = "";
      }
      if (message.hash != null && message.hasOwnProperty("hash"))
        object.hash = message.hash;
      if (message.index != null && message.hasOwnProperty("index"))
        object.index = message.index;
      if (message.utxo != null && message.hasOwnProperty("utxo"))
        object.utxo = $root.protoc.utxo.toObject(message.utxo, options);
      if (
        message.ownerKeyPath != null &&
        message.hasOwnProperty("ownerKeyPath")
      )
        object.ownerKeyPath = message.ownerKeyPath;
      return object;
    };

    /**
     * Converts this Input to JSON.
     * @function toJSON
     * @memberof protoc.Input
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Input.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Input;
  })();

  protoc.utxo = (function () {
    /**
     * Properties of an utxo.
     * @memberof protoc
     * @interface Iutxo
     * @property {string|null} [publicKey] utxo publicKey
     * @property {string|null} [script] utxo script
     * @property {number|Long|null} [value] utxo value
     */

    /**
     * Constructs a new utxo.
     * @memberof protoc
     * @classdesc Represents an utxo.
     * @implements Iutxo
     * @constructor
     * @param {protoc.Iutxo=} [properties] Properties to set
     */
    function utxo(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * utxo publicKey.
     * @member {string} publicKey
     * @memberof protoc.utxo
     * @instance
     */
    utxo.prototype.publicKey = "";

    /**
     * utxo script.
     * @member {string} script
     * @memberof protoc.utxo
     * @instance
     */
    utxo.prototype.script = "";

    /**
     * utxo value.
     * @member {number|Long} value
     * @memberof protoc.utxo
     * @instance
     */
    utxo.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Creates a new utxo instance using the specified properties.
     * @function create
     * @memberof protoc.utxo
     * @static
     * @param {protoc.Iutxo=} [properties] Properties to set
     * @returns {protoc.utxo} utxo instance
     */
    utxo.create = function create(properties) {
      return new utxo(properties);
    };

    /**
     * Encodes the specified utxo message. Does not implicitly {@link protoc.utxo.verify|verify} messages.
     * @function encode
     * @memberof protoc.utxo
     * @static
     * @param {protoc.Iutxo} message utxo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    utxo.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.publicKey != null &&
        Object.hasOwnProperty.call(message, "publicKey")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.publicKey);
      if (
        message.script != null &&
        Object.hasOwnProperty.call(message, "script")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.script);
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.value);
      return writer;
    };

    /**
     * Encodes the specified utxo message, length delimited. Does not implicitly {@link protoc.utxo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.utxo
     * @static
     * @param {protoc.Iutxo} message utxo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    utxo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an utxo message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.utxo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.utxo} utxo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    utxo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.utxo();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.publicKey = reader.string();
            break;
          case 2:
            message.script = reader.string();
            break;
          case 3:
            message.value = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an utxo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.utxo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.utxo} utxo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    utxo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an utxo message.
     * @function verify
     * @memberof protoc.utxo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    utxo.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.publicKey != null && message.hasOwnProperty("publicKey"))
        if (!$util.isString(message.publicKey))
          return "publicKey: string expected";
      if (message.script != null && message.hasOwnProperty("script"))
        if (!$util.isString(message.script)) return "script: string expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (
          !$util.isInteger(message.value) &&
          !(
            message.value &&
            $util.isInteger(message.value.low) &&
            $util.isInteger(message.value.high)
          )
        )
          return "value: integer|Long expected";
      return null;
    };

    /**
     * Creates an utxo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.utxo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.utxo} utxo
     */
    utxo.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.utxo) return object;
      const message = new $root.protoc.utxo();
      if (object.publicKey != null)
        message.publicKey = String(object.publicKey);
      if (object.script != null) message.script = String(object.script);
      if (object.value != null)
        if ($util.Long)
          (message.value = $util.Long.fromValue(object.value)).unsigned = false;
        else if (typeof object.value === "string")
          message.value = parseInt(object.value, 10);
        else if (typeof object.value === "number") message.value = object.value;
        else if (typeof object.value === "object")
          message.value = new $util.LongBits(
            object.value.low >>> 0,
            object.value.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from an utxo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.utxo
     * @static
     * @param {protoc.utxo} message utxo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    utxo.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.publicKey = "";
        object.script = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.value =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.value = options.longs === String ? "0" : 0;
      }
      if (message.publicKey != null && message.hasOwnProperty("publicKey"))
        object.publicKey = message.publicKey;
      if (message.script != null && message.hasOwnProperty("script"))
        object.script = message.script;
      if (message.value != null && message.hasOwnProperty("value"))
        if (typeof message.value === "number")
          object.value =
            options.longs === String ? String(message.value) : message.value;
        else
          object.value =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.value)
              : options.longs === Number
              ? new $util.LongBits(
                  message.value.low >>> 0,
                  message.value.high >>> 0
                ).toNumber()
              : message.value;
      return object;
    };

    /**
     * Converts this utxo to JSON.
     * @function toJSON
     * @memberof protoc.utxo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    utxo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return utxo;
  })();

  protoc.Output = (function () {
    /**
     * Properties of an Output.
     * @memberof protoc
     * @interface IOutput
     * @property {string|null} [address] Output address
     * @property {number|Long|null} [value] Output value
     * @property {boolean|null} [isChange] Output isChange
     * @property {string|null} [changeAddressPath] Output changeAddressPath
     */

    /**
     * Constructs a new Output.
     * @memberof protoc
     * @classdesc Represents an Output.
     * @implements IOutput
     * @constructor
     * @param {protoc.IOutput=} [properties] Properties to set
     */
    function Output(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Output address.
     * @member {string} address
     * @memberof protoc.Output
     * @instance
     */
    Output.prototype.address = "";

    /**
     * Output value.
     * @member {number|Long} value
     * @memberof protoc.Output
     * @instance
     */
    Output.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * Output isChange.
     * @member {boolean} isChange
     * @memberof protoc.Output
     * @instance
     */
    Output.prototype.isChange = false;

    /**
     * Output changeAddressPath.
     * @member {string} changeAddressPath
     * @memberof protoc.Output
     * @instance
     */
    Output.prototype.changeAddressPath = "";

    /**
     * Creates a new Output instance using the specified properties.
     * @function create
     * @memberof protoc.Output
     * @static
     * @param {protoc.IOutput=} [properties] Properties to set
     * @returns {protoc.Output} Output instance
     */
    Output.create = function create(properties) {
      return new Output(properties);
    };

    /**
     * Encodes the specified Output message. Does not implicitly {@link protoc.Output.verify|verify} messages.
     * @function encode
     * @memberof protoc.Output
     * @static
     * @param {protoc.IOutput} message Output message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Output.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.address != null &&
        Object.hasOwnProperty.call(message, "address")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.value);
      if (
        message.isChange != null &&
        Object.hasOwnProperty.call(message, "isChange")
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).bool(message.isChange);
      if (
        message.changeAddressPath != null &&
        Object.hasOwnProperty.call(message, "changeAddressPath")
      )
        writer
          .uint32(/* id 4, wireType 2 =*/ 34)
          .string(message.changeAddressPath);
      return writer;
    };

    /**
     * Encodes the specified Output message, length delimited. Does not implicitly {@link protoc.Output.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Output
     * @static
     * @param {protoc.IOutput} message Output message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Output.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Output message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Output
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Output} Output
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Output.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Output();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.address = reader.string();
            break;
          case 2:
            message.value = reader.int64();
            break;
          case 3:
            message.isChange = reader.bool();
            break;
          case 4:
            message.changeAddressPath = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Output message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Output
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Output} Output
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Output.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Output message.
     * @function verify
     * @memberof protoc.Output
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Output.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.address != null && message.hasOwnProperty("address"))
        if (!$util.isString(message.address)) return "address: string expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (
          !$util.isInteger(message.value) &&
          !(
            message.value &&
            $util.isInteger(message.value.low) &&
            $util.isInteger(message.value.high)
          )
        )
          return "value: integer|Long expected";
      if (message.isChange != null && message.hasOwnProperty("isChange"))
        if (typeof message.isChange !== "boolean")
          return "isChange: boolean expected";
      if (
        message.changeAddressPath != null &&
        message.hasOwnProperty("changeAddressPath")
      )
        if (!$util.isString(message.changeAddressPath))
          return "changeAddressPath: string expected";
      return null;
    };

    /**
     * Creates an Output message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Output
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Output} Output
     */
    Output.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Output) return object;
      const message = new $root.protoc.Output();
      if (object.address != null) message.address = String(object.address);
      if (object.value != null)
        if ($util.Long)
          (message.value = $util.Long.fromValue(object.value)).unsigned = false;
        else if (typeof object.value === "string")
          message.value = parseInt(object.value, 10);
        else if (typeof object.value === "number") message.value = object.value;
        else if (typeof object.value === "object")
          message.value = new $util.LongBits(
            object.value.low >>> 0,
            object.value.high >>> 0
          ).toNumber();
      if (object.isChange != null) message.isChange = Boolean(object.isChange);
      if (object.changeAddressPath != null)
        message.changeAddressPath = String(object.changeAddressPath);
      return message;
    };

    /**
     * Creates a plain object from an Output message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Output
     * @static
     * @param {protoc.Output} message Output
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Output.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.address = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.value =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.value = options.longs === String ? "0" : 0;
        object.isChange = false;
        object.changeAddressPath = "";
      }
      if (message.address != null && message.hasOwnProperty("address"))
        object.address = message.address;
      if (message.value != null && message.hasOwnProperty("value"))
        if (typeof message.value === "number")
          object.value =
            options.longs === String ? String(message.value) : message.value;
        else
          object.value =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.value)
              : options.longs === Number
              ? new $util.LongBits(
                  message.value.low >>> 0,
                  message.value.high >>> 0
                ).toNumber()
              : message.value;
      if (message.isChange != null && message.hasOwnProperty("isChange"))
        object.isChange = message.isChange;
      if (
        message.changeAddressPath != null &&
        message.hasOwnProperty("changeAddressPath")
      )
        object.changeAddressPath = message.changeAddressPath;
      return object;
    };

    /**
     * Converts this Output to JSON.
     * @function toJSON
     * @memberof protoc.Output
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Output.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Output;
  })();

  protoc.EthTx = (function () {
    /**
     * Properties of an EthTx.
     * @memberof protoc
     * @interface IEthTx
     * @property {string|null} [to] EthTx to
     * @property {string|null} [value] EthTx value
     * @property {string|null} [gasPrice] EthTx gasPrice
     * @property {string|null} [gasLimit] EthTx gasLimit
     * @property {string|null} [memo] EthTx memo
     * @property {number|null} [nonce] EthTx nonce
     * @property {protoc.EthTx.IOverride|null} [override] EthTx override
     */

    /**
     * Constructs a new EthTx.
     * @memberof protoc
     * @classdesc Represents an EthTx.
     * @implements IEthTx
     * @constructor
     * @param {protoc.IEthTx=} [properties] Properties to set
     */
    function EthTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EthTx to.
     * @member {string} to
     * @memberof protoc.EthTx
     * @instance
     */
    EthTx.prototype.to = "";

    /**
     * EthTx value.
     * @member {string} value
     * @memberof protoc.EthTx
     * @instance
     */
    EthTx.prototype.value = "";

    /**
     * EthTx gasPrice.
     * @member {string} gasPrice
     * @memberof protoc.EthTx
     * @instance
     */
    EthTx.prototype.gasPrice = "";

    /**
     * EthTx gasLimit.
     * @member {string} gasLimit
     * @memberof protoc.EthTx
     * @instance
     */
    EthTx.prototype.gasLimit = "";

    /**
     * EthTx memo.
     * @member {string} memo
     * @memberof protoc.EthTx
     * @instance
     */
    EthTx.prototype.memo = "";

    /**
     * EthTx nonce.
     * @member {number} nonce
     * @memberof protoc.EthTx
     * @instance
     */
    EthTx.prototype.nonce = 0;

    /**
     * EthTx override.
     * @member {protoc.EthTx.IOverride|null|undefined} override
     * @memberof protoc.EthTx
     * @instance
     */
    EthTx.prototype.override = null;

    /**
     * Creates a new EthTx instance using the specified properties.
     * @function create
     * @memberof protoc.EthTx
     * @static
     * @param {protoc.IEthTx=} [properties] Properties to set
     * @returns {protoc.EthTx} EthTx instance
     */
    EthTx.create = function create(properties) {
      return new EthTx(properties);
    };

    /**
     * Encodes the specified EthTx message. Does not implicitly {@link protoc.EthTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.EthTx
     * @static
     * @param {protoc.IEthTx} message EthTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EthTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.to);
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.value);
      if (
        message.gasPrice != null &&
        Object.hasOwnProperty.call(message, "gasPrice")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.gasPrice);
      if (
        message.gasLimit != null &&
        Object.hasOwnProperty.call(message, "gasLimit")
      )
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.gasLimit);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.memo);
      if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
        writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.nonce);
      if (
        message.override != null &&
        Object.hasOwnProperty.call(message, "override")
      )
        $root.protoc.EthTx.Override.encode(
          message.override,
          writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified EthTx message, length delimited. Does not implicitly {@link protoc.EthTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.EthTx
     * @static
     * @param {protoc.IEthTx} message EthTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EthTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EthTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.EthTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.EthTx} EthTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EthTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.EthTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          case 3:
            message.gasPrice = reader.string();
            break;
          case 4:
            message.gasLimit = reader.string();
            break;
          case 5:
            message.memo = reader.string();
            break;
          case 6:
            message.nonce = reader.int32();
            break;
          case 7:
            message.override = $root.protoc.EthTx.Override.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EthTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.EthTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.EthTx} EthTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EthTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EthTx message.
     * @function verify
     * @memberof protoc.EthTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EthTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (!$util.isString(message.value)) return "value: string expected";
      if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
        if (!$util.isString(message.gasPrice))
          return "gasPrice: string expected";
      if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
        if (!$util.isString(message.gasLimit))
          return "gasLimit: string expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        if (!$util.isInteger(message.nonce)) return "nonce: integer expected";
      if (message.override != null && message.hasOwnProperty("override")) {
        const error = $root.protoc.EthTx.Override.verify(message.override);
        if (error) return "override." + error;
      }
      return null;
    };

    /**
     * Creates an EthTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.EthTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.EthTx} EthTx
     */
    EthTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.EthTx) return object;
      const message = new $root.protoc.EthTx();
      if (object.to != null) message.to = String(object.to);
      if (object.value != null) message.value = String(object.value);
      if (object.gasPrice != null) message.gasPrice = String(object.gasPrice);
      if (object.gasLimit != null) message.gasLimit = String(object.gasLimit);
      if (object.memo != null) message.memo = String(object.memo);
      if (object.nonce != null) message.nonce = object.nonce | 0;
      if (object.override != null) {
        if (typeof object.override !== "object")
          throw TypeError(".protoc.EthTx.override: object expected");
        message.override = $root.protoc.EthTx.Override.fromObject(
          object.override
        );
      }
      return message;
    };

    /**
     * Creates a plain object from an EthTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.EthTx
     * @static
     * @param {protoc.EthTx} message EthTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EthTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.to = "";
        object.value = "";
        object.gasPrice = "";
        object.gasLimit = "";
        object.memo = "";
        object.nonce = 0;
        object.override = null;
      }
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.value != null && message.hasOwnProperty("value"))
        object.value = message.value;
      if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
        object.gasPrice = message.gasPrice;
      if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
        object.gasLimit = message.gasLimit;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        object.nonce = message.nonce;
      if (message.override != null && message.hasOwnProperty("override"))
        object.override = $root.protoc.EthTx.Override.toObject(
          message.override,
          options
        );
      return object;
    };

    /**
     * Converts this EthTx to JSON.
     * @function toJSON
     * @memberof protoc.EthTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EthTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    EthTx.Override = (function () {
      /**
       * Properties of an Override.
       * @memberof protoc.EthTx
       * @interface IOverride
       * @property {number|null} [decimals] Override decimals
       * @property {string|null} [tokenShortName] Override tokenShortName
       * @property {string|null} [tokenFullName] Override tokenFullName
       * @property {string|null} [contractAddress] Override contractAddress
       */

      /**
       * Constructs a new Override.
       * @memberof protoc.EthTx
       * @classdesc Represents an Override.
       * @implements IOverride
       * @constructor
       * @param {protoc.EthTx.IOverride=} [properties] Properties to set
       */
      function Override(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Override decimals.
       * @member {number} decimals
       * @memberof protoc.EthTx.Override
       * @instance
       */
      Override.prototype.decimals = 0;

      /**
       * Override tokenShortName.
       * @member {string} tokenShortName
       * @memberof protoc.EthTx.Override
       * @instance
       */
      Override.prototype.tokenShortName = "";

      /**
       * Override tokenFullName.
       * @member {string} tokenFullName
       * @memberof protoc.EthTx.Override
       * @instance
       */
      Override.prototype.tokenFullName = "";

      /**
       * Override contractAddress.
       * @member {string} contractAddress
       * @memberof protoc.EthTx.Override
       * @instance
       */
      Override.prototype.contractAddress = "";

      /**
       * Creates a new Override instance using the specified properties.
       * @function create
       * @memberof protoc.EthTx.Override
       * @static
       * @param {protoc.EthTx.IOverride=} [properties] Properties to set
       * @returns {protoc.EthTx.Override} Override instance
       */
      Override.create = function create(properties) {
        return new Override(properties);
      };

      /**
       * Encodes the specified Override message. Does not implicitly {@link protoc.EthTx.Override.verify|verify} messages.
       * @function encode
       * @memberof protoc.EthTx.Override
       * @static
       * @param {protoc.EthTx.IOverride} message Override message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Override.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.decimals != null &&
          Object.hasOwnProperty.call(message, "decimals")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.decimals);
        if (
          message.tokenShortName != null &&
          Object.hasOwnProperty.call(message, "tokenShortName")
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.tokenShortName);
        if (
          message.tokenFullName != null &&
          Object.hasOwnProperty.call(message, "tokenFullName")
        )
          writer
            .uint32(/* id 3, wireType 2 =*/ 26)
            .string(message.tokenFullName);
        if (
          message.contractAddress != null &&
          Object.hasOwnProperty.call(message, "contractAddress")
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.contractAddress);
        return writer;
      };

      /**
       * Encodes the specified Override message, length delimited. Does not implicitly {@link protoc.EthTx.Override.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.EthTx.Override
       * @static
       * @param {protoc.EthTx.IOverride} message Override message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Override.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Override message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.EthTx.Override
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.EthTx.Override} Override
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Override.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.EthTx.Override();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.decimals = reader.int32();
              break;
            case 2:
              message.tokenShortName = reader.string();
              break;
            case 3:
              message.tokenFullName = reader.string();
              break;
            case 4:
              message.contractAddress = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Override message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.EthTx.Override
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.EthTx.Override} Override
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Override.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Override message.
       * @function verify
       * @memberof protoc.EthTx.Override
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Override.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.decimals != null && message.hasOwnProperty("decimals"))
          if (!$util.isInteger(message.decimals))
            return "decimals: integer expected";
        if (
          message.tokenShortName != null &&
          message.hasOwnProperty("tokenShortName")
        )
          if (!$util.isString(message.tokenShortName))
            return "tokenShortName: string expected";
        if (
          message.tokenFullName != null &&
          message.hasOwnProperty("tokenFullName")
        )
          if (!$util.isString(message.tokenFullName))
            return "tokenFullName: string expected";
        if (
          message.contractAddress != null &&
          message.hasOwnProperty("contractAddress")
        )
          if (!$util.isString(message.contractAddress))
            return "contractAddress: string expected";
        return null;
      };

      /**
       * Creates an Override message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.EthTx.Override
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.EthTx.Override} Override
       */
      Override.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.EthTx.Override) return object;
        const message = new $root.protoc.EthTx.Override();
        if (object.decimals != null) message.decimals = object.decimals | 0;
        if (object.tokenShortName != null)
          message.tokenShortName = String(object.tokenShortName);
        if (object.tokenFullName != null)
          message.tokenFullName = String(object.tokenFullName);
        if (object.contractAddress != null)
          message.contractAddress = String(object.contractAddress);
        return message;
      };

      /**
       * Creates a plain object from an Override message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.EthTx.Override
       * @static
       * @param {protoc.EthTx.Override} message Override
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Override.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.decimals = 0;
          object.tokenShortName = "";
          object.tokenFullName = "";
          object.contractAddress = "";
        }
        if (message.decimals != null && message.hasOwnProperty("decimals"))
          object.decimals = message.decimals;
        if (
          message.tokenShortName != null &&
          message.hasOwnProperty("tokenShortName")
        )
          object.tokenShortName = message.tokenShortName;
        if (
          message.tokenFullName != null &&
          message.hasOwnProperty("tokenFullName")
        )
          object.tokenFullName = message.tokenFullName;
        if (
          message.contractAddress != null &&
          message.hasOwnProperty("contractAddress")
        )
          object.contractAddress = message.contractAddress;
        return object;
      };

      /**
       * Converts this Override to JSON.
       * @function toJSON
       * @memberof protoc.EthTx.Override
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Override.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Override;
    })();

    return EthTx;
  })();

  protoc.EtcTx = (function () {
    /**
     * Properties of an EtcTx.
     * @memberof protoc
     * @interface IEtcTx
     * @property {string|null} [to] EtcTx to
     * @property {string|null} [value] EtcTx value
     * @property {string|null} [gasPrice] EtcTx gasPrice
     * @property {string|null} [gasLimit] EtcTx gasLimit
     * @property {string|null} [memo] EtcTx memo
     * @property {number|null} [nonce] EtcTx nonce
     */

    /**
     * Constructs a new EtcTx.
     * @memberof protoc
     * @classdesc Represents an EtcTx.
     * @implements IEtcTx
     * @constructor
     * @param {protoc.IEtcTx=} [properties] Properties to set
     */
    function EtcTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EtcTx to.
     * @member {string} to
     * @memberof protoc.EtcTx
     * @instance
     */
    EtcTx.prototype.to = "";

    /**
     * EtcTx value.
     * @member {string} value
     * @memberof protoc.EtcTx
     * @instance
     */
    EtcTx.prototype.value = "";

    /**
     * EtcTx gasPrice.
     * @member {string} gasPrice
     * @memberof protoc.EtcTx
     * @instance
     */
    EtcTx.prototype.gasPrice = "";

    /**
     * EtcTx gasLimit.
     * @member {string} gasLimit
     * @memberof protoc.EtcTx
     * @instance
     */
    EtcTx.prototype.gasLimit = "";

    /**
     * EtcTx memo.
     * @member {string} memo
     * @memberof protoc.EtcTx
     * @instance
     */
    EtcTx.prototype.memo = "";

    /**
     * EtcTx nonce.
     * @member {number} nonce
     * @memberof protoc.EtcTx
     * @instance
     */
    EtcTx.prototype.nonce = 0;

    /**
     * Creates a new EtcTx instance using the specified properties.
     * @function create
     * @memberof protoc.EtcTx
     * @static
     * @param {protoc.IEtcTx=} [properties] Properties to set
     * @returns {protoc.EtcTx} EtcTx instance
     */
    EtcTx.create = function create(properties) {
      return new EtcTx(properties);
    };

    /**
     * Encodes the specified EtcTx message. Does not implicitly {@link protoc.EtcTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.EtcTx
     * @static
     * @param {protoc.IEtcTx} message EtcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EtcTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.to);
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.value);
      if (
        message.gasPrice != null &&
        Object.hasOwnProperty.call(message, "gasPrice")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.gasPrice);
      if (
        message.gasLimit != null &&
        Object.hasOwnProperty.call(message, "gasLimit")
      )
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.gasLimit);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.memo);
      if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
        writer.uint32(/* id 6, wireType 0 =*/ 48).int32(message.nonce);
      return writer;
    };

    /**
     * Encodes the specified EtcTx message, length delimited. Does not implicitly {@link protoc.EtcTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.EtcTx
     * @static
     * @param {protoc.IEtcTx} message EtcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EtcTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EtcTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.EtcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.EtcTx} EtcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EtcTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.EtcTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          case 3:
            message.gasPrice = reader.string();
            break;
          case 4:
            message.gasLimit = reader.string();
            break;
          case 5:
            message.memo = reader.string();
            break;
          case 6:
            message.nonce = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EtcTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.EtcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.EtcTx} EtcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EtcTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EtcTx message.
     * @function verify
     * @memberof protoc.EtcTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EtcTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (!$util.isString(message.value)) return "value: string expected";
      if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
        if (!$util.isString(message.gasPrice))
          return "gasPrice: string expected";
      if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
        if (!$util.isString(message.gasLimit))
          return "gasLimit: string expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        if (!$util.isInteger(message.nonce)) return "nonce: integer expected";
      return null;
    };

    /**
     * Creates an EtcTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.EtcTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.EtcTx} EtcTx
     */
    EtcTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.EtcTx) return object;
      const message = new $root.protoc.EtcTx();
      if (object.to != null) message.to = String(object.to);
      if (object.value != null) message.value = String(object.value);
      if (object.gasPrice != null) message.gasPrice = String(object.gasPrice);
      if (object.gasLimit != null) message.gasLimit = String(object.gasLimit);
      if (object.memo != null) message.memo = String(object.memo);
      if (object.nonce != null) message.nonce = object.nonce | 0;
      return message;
    };

    /**
     * Creates a plain object from an EtcTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.EtcTx
     * @static
     * @param {protoc.EtcTx} message EtcTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EtcTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.to = "";
        object.value = "";
        object.gasPrice = "";
        object.gasLimit = "";
        object.memo = "";
        object.nonce = 0;
      }
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.value != null && message.hasOwnProperty("value"))
        object.value = message.value;
      if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
        object.gasPrice = message.gasPrice;
      if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
        object.gasLimit = message.gasLimit;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        object.nonce = message.nonce;
      return object;
    };

    /**
     * Converts this EtcTx to JSON.
     * @function toJSON
     * @memberof protoc.EtcTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EtcTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EtcTx;
  })();

  protoc.LatestBlock = (function () {
    /**
     * Properties of a LatestBlock.
     * @memberof protoc
     * @interface ILatestBlock
     * @property {string|null} [hash] LatestBlock hash
     * @property {number|null} [number] LatestBlock number
     * @property {number|Long|null} [timestamp] LatestBlock timestamp
     */

    /**
     * Constructs a new LatestBlock.
     * @memberof protoc
     * @classdesc Represents a LatestBlock.
     * @implements ILatestBlock
     * @constructor
     * @param {protoc.ILatestBlock=} [properties] Properties to set
     */
    function LatestBlock(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * LatestBlock hash.
     * @member {string} hash
     * @memberof protoc.LatestBlock
     * @instance
     */
    LatestBlock.prototype.hash = "";

    /**
     * LatestBlock number.
     * @member {number} number
     * @memberof protoc.LatestBlock
     * @instance
     */
    LatestBlock.prototype.number = 0;

    /**
     * LatestBlock timestamp.
     * @member {number|Long} timestamp
     * @memberof protoc.LatestBlock
     * @instance
     */
    LatestBlock.prototype.timestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * Creates a new LatestBlock instance using the specified properties.
     * @function create
     * @memberof protoc.LatestBlock
     * @static
     * @param {protoc.ILatestBlock=} [properties] Properties to set
     * @returns {protoc.LatestBlock} LatestBlock instance
     */
    LatestBlock.create = function create(properties) {
      return new LatestBlock(properties);
    };

    /**
     * Encodes the specified LatestBlock message. Does not implicitly {@link protoc.LatestBlock.verify|verify} messages.
     * @function encode
     * @memberof protoc.LatestBlock
     * @static
     * @param {protoc.ILatestBlock} message LatestBlock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LatestBlock.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.hash);
      if (
        message.number != null &&
        Object.hasOwnProperty.call(message, "number")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.number);
      if (
        message.timestamp != null &&
        Object.hasOwnProperty.call(message, "timestamp")
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.timestamp);
      return writer;
    };

    /**
     * Encodes the specified LatestBlock message, length delimited. Does not implicitly {@link protoc.LatestBlock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.LatestBlock
     * @static
     * @param {protoc.ILatestBlock} message LatestBlock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LatestBlock.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LatestBlock message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.LatestBlock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.LatestBlock} LatestBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LatestBlock.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.LatestBlock();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.hash = reader.string();
            break;
          case 2:
            message.number = reader.int32();
            break;
          case 3:
            message.timestamp = reader.int64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a LatestBlock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.LatestBlock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.LatestBlock} LatestBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LatestBlock.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LatestBlock message.
     * @function verify
     * @memberof protoc.LatestBlock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LatestBlock.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.hash != null && message.hasOwnProperty("hash"))
        if (!$util.isString(message.hash)) return "hash: string expected";
      if (message.number != null && message.hasOwnProperty("number"))
        if (!$util.isInteger(message.number)) return "number: integer expected";
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (
          !$util.isInteger(message.timestamp) &&
          !(
            message.timestamp &&
            $util.isInteger(message.timestamp.low) &&
            $util.isInteger(message.timestamp.high)
          )
        )
          return "timestamp: integer|Long expected";
      return null;
    };

    /**
     * Creates a LatestBlock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.LatestBlock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.LatestBlock} LatestBlock
     */
    LatestBlock.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.LatestBlock) return object;
      const message = new $root.protoc.LatestBlock();
      if (object.hash != null) message.hash = String(object.hash);
      if (object.number != null) message.number = object.number | 0;
      if (object.timestamp != null)
        if ($util.Long)
          (message.timestamp = $util.Long.fromValue(
            object.timestamp
          )).unsigned = false;
        else if (typeof object.timestamp === "string")
          message.timestamp = parseInt(object.timestamp, 10);
        else if (typeof object.timestamp === "number")
          message.timestamp = object.timestamp;
        else if (typeof object.timestamp === "object")
          message.timestamp = new $util.LongBits(
            object.timestamp.low >>> 0,
            object.timestamp.high >>> 0
          ).toNumber();
      return message;
    };

    /**
     * Creates a plain object from a LatestBlock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.LatestBlock
     * @static
     * @param {protoc.LatestBlock} message LatestBlock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LatestBlock.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.hash = "";
        object.number = 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.timestamp =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timestamp = options.longs === String ? "0" : 0;
      }
      if (message.hash != null && message.hasOwnProperty("hash"))
        object.hash = message.hash;
      if (message.number != null && message.hasOwnProperty("number"))
        object.number = message.number;
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (typeof message.timestamp === "number")
          object.timestamp =
            options.longs === String
              ? String(message.timestamp)
              : message.timestamp;
        else
          object.timestamp =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timestamp)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timestamp.low >>> 0,
                  message.timestamp.high >>> 0
                ).toNumber()
              : message.timestamp;
      return object;
    };

    /**
     * Converts this LatestBlock to JSON.
     * @function toJSON
     * @memberof protoc.LatestBlock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LatestBlock.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LatestBlock;
  })();

  protoc.Override = (function () {
    /**
     * Properties of an Override.
     * @memberof protoc
     * @interface IOverride
     * @property {string|null} [tokenShortName] Override tokenShortName
     * @property {string|null} [tokenFullName] Override tokenFullName
     * @property {number|null} [decimals] Override decimals
     */

    /**
     * Constructs a new Override.
     * @memberof protoc
     * @classdesc Represents an Override.
     * @implements IOverride
     * @constructor
     * @param {protoc.IOverride=} [properties] Properties to set
     */
    function Override(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Override tokenShortName.
     * @member {string} tokenShortName
     * @memberof protoc.Override
     * @instance
     */
    Override.prototype.tokenShortName = "";

    /**
     * Override tokenFullName.
     * @member {string} tokenFullName
     * @memberof protoc.Override
     * @instance
     */
    Override.prototype.tokenFullName = "";

    /**
     * Override decimals.
     * @member {number} decimals
     * @memberof protoc.Override
     * @instance
     */
    Override.prototype.decimals = 0;

    /**
     * Creates a new Override instance using the specified properties.
     * @function create
     * @memberof protoc.Override
     * @static
     * @param {protoc.IOverride=} [properties] Properties to set
     * @returns {protoc.Override} Override instance
     */
    Override.create = function create(properties) {
      return new Override(properties);
    };

    /**
     * Encodes the specified Override message. Does not implicitly {@link protoc.Override.verify|verify} messages.
     * @function encode
     * @memberof protoc.Override
     * @static
     * @param {protoc.IOverride} message Override message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Override.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.tokenShortName != null &&
        Object.hasOwnProperty.call(message, "tokenShortName")
      )
        writer
          .uint32(/* id 1, wireType 2 =*/ 10)
          .string(message.tokenShortName);
      if (
        message.tokenFullName != null &&
        Object.hasOwnProperty.call(message, "tokenFullName")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.tokenFullName);
      if (
        message.decimals != null &&
        Object.hasOwnProperty.call(message, "decimals")
      )
        writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.decimals);
      return writer;
    };

    /**
     * Encodes the specified Override message, length delimited. Does not implicitly {@link protoc.Override.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Override
     * @static
     * @param {protoc.IOverride} message Override message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Override.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Override message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Override
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Override} Override
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Override.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Override();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.tokenShortName = reader.string();
            break;
          case 2:
            message.tokenFullName = reader.string();
            break;
          case 3:
            message.decimals = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an Override message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Override
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Override} Override
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Override.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Override message.
     * @function verify
     * @memberof protoc.Override
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Override.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (
        message.tokenShortName != null &&
        message.hasOwnProperty("tokenShortName")
      )
        if (!$util.isString(message.tokenShortName))
          return "tokenShortName: string expected";
      if (
        message.tokenFullName != null &&
        message.hasOwnProperty("tokenFullName")
      )
        if (!$util.isString(message.tokenFullName))
          return "tokenFullName: string expected";
      if (message.decimals != null && message.hasOwnProperty("decimals"))
        if (!$util.isInteger(message.decimals))
          return "decimals: integer expected";
      return null;
    };

    /**
     * Creates an Override message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Override
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Override} Override
     */
    Override.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Override) return object;
      const message = new $root.protoc.Override();
      if (object.tokenShortName != null)
        message.tokenShortName = String(object.tokenShortName);
      if (object.tokenFullName != null)
        message.tokenFullName = String(object.tokenFullName);
      if (object.decimals != null) message.decimals = object.decimals | 0;
      return message;
    };

    /**
     * Creates a plain object from an Override message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Override
     * @static
     * @param {protoc.Override} message Override
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Override.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.tokenShortName = "";
        object.tokenFullName = "";
        object.decimals = 0;
      }
      if (
        message.tokenShortName != null &&
        message.hasOwnProperty("tokenShortName")
      )
        object.tokenShortName = message.tokenShortName;
      if (
        message.tokenFullName != null &&
        message.hasOwnProperty("tokenFullName")
      )
        object.tokenFullName = message.tokenFullName;
      if (message.decimals != null && message.hasOwnProperty("decimals"))
        object.decimals = message.decimals;
      return object;
    };

    /**
     * Converts this Override to JSON.
     * @function toJSON
     * @memberof protoc.Override
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Override.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Override;
  })();

  protoc.TronTx = (function () {
    /**
     * Properties of a TronTx.
     * @memberof protoc
     * @interface ITronTx
     * @property {string|null} [token] TronTx token
     * @property {string|null} [contractAddress] TronTx contractAddress
     * @property {string|null} [from] TronTx from
     * @property {string|null} [to] TronTx to
     * @property {string|null} [memo] TronTx memo
     * @property {string|null} [value] TronTx value
     * @property {protoc.ILatestBlock|null} [latestBlock] TronTx latestBlock
     * @property {protoc.IOverride|null} [override] TronTx override
     * @property {number|null} [fee] TronTx fee
     */

    /**
     * Constructs a new TronTx.
     * @memberof protoc
     * @classdesc Represents a TronTx.
     * @implements ITronTx
     * @constructor
     * @param {protoc.ITronTx=} [properties] Properties to set
     */
    function TronTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * TronTx token.
     * @member {string} token
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.token = "";

    /**
     * TronTx contractAddress.
     * @member {string} contractAddress
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.contractAddress = "";

    /**
     * TronTx from.
     * @member {string} from
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.from = "";

    /**
     * TronTx to.
     * @member {string} to
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.to = "";

    /**
     * TronTx memo.
     * @member {string} memo
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.memo = "";

    /**
     * TronTx value.
     * @member {string} value
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.value = "";

    /**
     * TronTx latestBlock.
     * @member {protoc.ILatestBlock|null|undefined} latestBlock
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.latestBlock = null;

    /**
     * TronTx override.
     * @member {protoc.IOverride|null|undefined} override
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.override = null;

    /**
     * TronTx fee.
     * @member {number} fee
     * @memberof protoc.TronTx
     * @instance
     */
    TronTx.prototype.fee = 0;

    /**
     * Creates a new TronTx instance using the specified properties.
     * @function create
     * @memberof protoc.TronTx
     * @static
     * @param {protoc.ITronTx=} [properties] Properties to set
     * @returns {protoc.TronTx} TronTx instance
     */
    TronTx.create = function create(properties) {
      return new TronTx(properties);
    };

    /**
     * Encodes the specified TronTx message. Does not implicitly {@link protoc.TronTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.TronTx
     * @static
     * @param {protoc.ITronTx} message TronTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TronTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.token != null && Object.hasOwnProperty.call(message, "token"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.token);
      if (
        message.contractAddress != null &&
        Object.hasOwnProperty.call(message, "contractAddress")
      )
        writer
          .uint32(/* id 2, wireType 2 =*/ 18)
          .string(message.contractAddress);
      if (message.from != null && Object.hasOwnProperty.call(message, "from"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.from);
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.to);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.memo);
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.value);
      if (
        message.latestBlock != null &&
        Object.hasOwnProperty.call(message, "latestBlock")
      )
        $root.protoc.LatestBlock.encode(
          message.latestBlock,
          writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
        ).ldelim();
      if (
        message.override != null &&
        Object.hasOwnProperty.call(message, "override")
      )
        $root.protoc.Override.encode(
          message.override,
          writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
        ).ldelim();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 9, wireType 0 =*/ 72).int32(message.fee);
      return writer;
    };

    /**
     * Encodes the specified TronTx message, length delimited. Does not implicitly {@link protoc.TronTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.TronTx
     * @static
     * @param {protoc.ITronTx} message TronTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TronTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TronTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.TronTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.TronTx} TronTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TronTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.TronTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token = reader.string();
            break;
          case 2:
            message.contractAddress = reader.string();
            break;
          case 3:
            message.from = reader.string();
            break;
          case 4:
            message.to = reader.string();
            break;
          case 5:
            message.memo = reader.string();
            break;
          case 6:
            message.value = reader.string();
            break;
          case 7:
            message.latestBlock = $root.protoc.LatestBlock.decode(
              reader,
              reader.uint32()
            );
            break;
          case 8:
            message.override = $root.protoc.Override.decode(
              reader,
              reader.uint32()
            );
            break;
          case 9:
            message.fee = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a TronTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.TronTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.TronTx} TronTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TronTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TronTx message.
     * @function verify
     * @memberof protoc.TronTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TronTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.token != null && message.hasOwnProperty("token"))
        if (!$util.isString(message.token)) return "token: string expected";
      if (
        message.contractAddress != null &&
        message.hasOwnProperty("contractAddress")
      )
        if (!$util.isString(message.contractAddress))
          return "contractAddress: string expected";
      if (message.from != null && message.hasOwnProperty("from"))
        if (!$util.isString(message.from)) return "from: string expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (!$util.isString(message.value)) return "value: string expected";
      if (
        message.latestBlock != null &&
        message.hasOwnProperty("latestBlock")
      ) {
        const error = $root.protoc.LatestBlock.verify(message.latestBlock);
        if (error) return "latestBlock." + error;
      }
      if (message.override != null && message.hasOwnProperty("override")) {
        const error = $root.protoc.Override.verify(message.override);
        if (error) return "override." + error;
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (!$util.isInteger(message.fee)) return "fee: integer expected";
      return null;
    };

    /**
     * Creates a TronTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.TronTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.TronTx} TronTx
     */
    TronTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.TronTx) return object;
      const message = new $root.protoc.TronTx();
      if (object.token != null) message.token = String(object.token);
      if (object.contractAddress != null)
        message.contractAddress = String(object.contractAddress);
      if (object.from != null) message.from = String(object.from);
      if (object.to != null) message.to = String(object.to);
      if (object.memo != null) message.memo = String(object.memo);
      if (object.value != null) message.value = String(object.value);
      if (object.latestBlock != null) {
        if (typeof object.latestBlock !== "object")
          throw TypeError(".protoc.TronTx.latestBlock: object expected");
        message.latestBlock = $root.protoc.LatestBlock.fromObject(
          object.latestBlock
        );
      }
      if (object.override != null) {
        if (typeof object.override !== "object")
          throw TypeError(".protoc.TronTx.override: object expected");
        message.override = $root.protoc.Override.fromObject(object.override);
      }
      if (object.fee != null) message.fee = object.fee | 0;
      return message;
    };

    /**
     * Creates a plain object from a TronTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.TronTx
     * @static
     * @param {protoc.TronTx} message TronTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TronTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.token = "";
        object.contractAddress = "";
        object.from = "";
        object.to = "";
        object.memo = "";
        object.value = "";
        object.latestBlock = null;
        object.override = null;
        object.fee = 0;
      }
      if (message.token != null && message.hasOwnProperty("token"))
        object.token = message.token;
      if (
        message.contractAddress != null &&
        message.hasOwnProperty("contractAddress")
      )
        object.contractAddress = message.contractAddress;
      if (message.from != null && message.hasOwnProperty("from"))
        object.from = message.from;
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.value != null && message.hasOwnProperty("value"))
        object.value = message.value;
      if (message.latestBlock != null && message.hasOwnProperty("latestBlock"))
        object.latestBlock = $root.protoc.LatestBlock.toObject(
          message.latestBlock,
          options
        );
      if (message.override != null && message.hasOwnProperty("override"))
        object.override = $root.protoc.Override.toObject(
          message.override,
          options
        );
      if (message.fee != null && message.hasOwnProperty("fee"))
        object.fee = message.fee;
      return object;
    };

    /**
     * Converts this TronTx to JSON.
     * @function toJSON
     * @memberof protoc.TronTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TronTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TronTx;
  })();

  protoc.BchTx = (function () {
    /**
     * Properties of a BchTx.
     * @memberof protoc
     * @interface IBchTx
     * @property {number|Long|null} [fee] BchTx fee
     * @property {number|null} [dustThreshold] BchTx dustThreshold
     * @property {string|null} [memo] BchTx memo
     * @property {Array.<protoc.BchTx.IInput>|null} [inputs] BchTx inputs
     * @property {Array.<protoc.IOutput>|null} [outputs] BchTx outputs
     */

    /**
     * Constructs a new BchTx.
     * @memberof protoc
     * @classdesc Represents a BchTx.
     * @implements IBchTx
     * @constructor
     * @param {protoc.IBchTx=} [properties] Properties to set
     */
    function BchTx(properties) {
      this.inputs = [];
      this.outputs = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * BchTx fee.
     * @member {number|Long} fee
     * @memberof protoc.BchTx
     * @instance
     */
    BchTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * BchTx dustThreshold.
     * @member {number} dustThreshold
     * @memberof protoc.BchTx
     * @instance
     */
    BchTx.prototype.dustThreshold = 0;

    /**
     * BchTx memo.
     * @member {string} memo
     * @memberof protoc.BchTx
     * @instance
     */
    BchTx.prototype.memo = "";

    /**
     * BchTx inputs.
     * @member {Array.<protoc.BchTx.IInput>} inputs
     * @memberof protoc.BchTx
     * @instance
     */
    BchTx.prototype.inputs = $util.emptyArray;

    /**
     * BchTx outputs.
     * @member {Array.<protoc.IOutput>} outputs
     * @memberof protoc.BchTx
     * @instance
     */
    BchTx.prototype.outputs = $util.emptyArray;

    /**
     * Creates a new BchTx instance using the specified properties.
     * @function create
     * @memberof protoc.BchTx
     * @static
     * @param {protoc.IBchTx=} [properties] Properties to set
     * @returns {protoc.BchTx} BchTx instance
     */
    BchTx.create = function create(properties) {
      return new BchTx(properties);
    };

    /**
     * Encodes the specified BchTx message. Does not implicitly {@link protoc.BchTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.BchTx
     * @static
     * @param {protoc.IBchTx} message BchTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BchTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.fee);
      if (
        message.dustThreshold != null &&
        Object.hasOwnProperty.call(message, "dustThreshold")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.dustThreshold);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.memo);
      if (message.inputs != null && message.inputs.length)
        for (let i = 0; i < message.inputs.length; ++i)
          $root.protoc.BchTx.Input.encode(
            message.inputs[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
      if (message.outputs != null && message.outputs.length)
        for (let i = 0; i < message.outputs.length; ++i)
          $root.protoc.Output.encode(
            message.outputs[i],
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified BchTx message, length delimited. Does not implicitly {@link protoc.BchTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.BchTx
     * @static
     * @param {protoc.IBchTx} message BchTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BchTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BchTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.BchTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.BchTx} BchTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BchTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.BchTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee = reader.int64();
            break;
          case 2:
            message.dustThreshold = reader.int32();
            break;
          case 3:
            message.memo = reader.string();
            break;
          case 4:
            if (!(message.inputs && message.inputs.length)) message.inputs = [];
            message.inputs.push(
              $root.protoc.BchTx.Input.decode(reader, reader.uint32())
            );
            break;
          case 5:
            if (!(message.outputs && message.outputs.length))
              message.outputs = [];
            message.outputs.push(
              $root.protoc.Output.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a BchTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.BchTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.BchTx} BchTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BchTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BchTx message.
     * @function verify
     * @memberof protoc.BchTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BchTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        if (!$util.isInteger(message.dustThreshold))
          return "dustThreshold: integer expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.inputs != null && message.hasOwnProperty("inputs")) {
        if (!Array.isArray(message.inputs)) return "inputs: array expected";
        for (let i = 0; i < message.inputs.length; ++i) {
          const error = $root.protoc.BchTx.Input.verify(message.inputs[i]);
          if (error) return "inputs." + error;
        }
      }
      if (message.outputs != null && message.hasOwnProperty("outputs")) {
        if (!Array.isArray(message.outputs)) return "outputs: array expected";
        for (let i = 0; i < message.outputs.length; ++i) {
          const error = $root.protoc.Output.verify(message.outputs[i]);
          if (error) return "outputs." + error;
        }
      }
      return null;
    };

    /**
     * Creates a BchTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.BchTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.BchTx} BchTx
     */
    BchTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.BchTx) return object;
      const message = new $root.protoc.BchTx();
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.dustThreshold != null)
        message.dustThreshold = object.dustThreshold | 0;
      if (object.memo != null) message.memo = String(object.memo);
      if (object.inputs) {
        if (!Array.isArray(object.inputs))
          throw TypeError(".protoc.BchTx.inputs: array expected");
        message.inputs = [];
        for (let i = 0; i < object.inputs.length; ++i) {
          if (typeof object.inputs[i] !== "object")
            throw TypeError(".protoc.BchTx.inputs: object expected");
          message.inputs[i] = $root.protoc.BchTx.Input.fromObject(
            object.inputs[i]
          );
        }
      }
      if (object.outputs) {
        if (!Array.isArray(object.outputs))
          throw TypeError(".protoc.BchTx.outputs: array expected");
        message.outputs = [];
        for (let i = 0; i < object.outputs.length; ++i) {
          if (typeof object.outputs[i] !== "object")
            throw TypeError(".protoc.BchTx.outputs: object expected");
          message.outputs[i] = $root.protoc.Output.fromObject(
            object.outputs[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a BchTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.BchTx
     * @static
     * @param {protoc.BchTx} message BchTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BchTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) {
        object.inputs = [];
        object.outputs = [];
      }
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        object.dustThreshold = 0;
        object.memo = "";
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        object.dustThreshold = message.dustThreshold;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.inputs && message.inputs.length) {
        object.inputs = [];
        for (let j = 0; j < message.inputs.length; ++j)
          object.inputs[j] = $root.protoc.BchTx.Input.toObject(
            message.inputs[j],
            options
          );
      }
      if (message.outputs && message.outputs.length) {
        object.outputs = [];
        for (let j = 0; j < message.outputs.length; ++j)
          object.outputs[j] = $root.protoc.Output.toObject(
            message.outputs[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this BchTx to JSON.
     * @function toJSON
     * @memberof protoc.BchTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BchTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    BchTx.Input = (function () {
      /**
       * Properties of an Input.
       * @memberof protoc.BchTx
       * @interface IInput
       * @property {string|null} [hash] Input hash
       * @property {number|null} [index] Input index
       * @property {number|Long|null} [value] Input value
       * @property {string|null} [pubkey] Input pubkey
       * @property {string|null} [ownerKeyPath] Input ownerKeyPath
       */

      /**
       * Constructs a new Input.
       * @memberof protoc.BchTx
       * @classdesc Represents an Input.
       * @implements IInput
       * @constructor
       * @param {protoc.BchTx.IInput=} [properties] Properties to set
       */
      function Input(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Input hash.
       * @member {string} hash
       * @memberof protoc.BchTx.Input
       * @instance
       */
      Input.prototype.hash = "";

      /**
       * Input index.
       * @member {number} index
       * @memberof protoc.BchTx.Input
       * @instance
       */
      Input.prototype.index = 0;

      /**
       * Input value.
       * @member {number|Long} value
       * @memberof protoc.BchTx.Input
       * @instance
       */
      Input.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Input pubkey.
       * @member {string} pubkey
       * @memberof protoc.BchTx.Input
       * @instance
       */
      Input.prototype.pubkey = "";

      /**
       * Input ownerKeyPath.
       * @member {string} ownerKeyPath
       * @memberof protoc.BchTx.Input
       * @instance
       */
      Input.prototype.ownerKeyPath = "";

      /**
       * Creates a new Input instance using the specified properties.
       * @function create
       * @memberof protoc.BchTx.Input
       * @static
       * @param {protoc.BchTx.IInput=} [properties] Properties to set
       * @returns {protoc.BchTx.Input} Input instance
       */
      Input.create = function create(properties) {
        return new Input(properties);
      };

      /**
       * Encodes the specified Input message. Does not implicitly {@link protoc.BchTx.Input.verify|verify} messages.
       * @function encode
       * @memberof protoc.BchTx.Input
       * @static
       * @param {protoc.BchTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.hash);
        if (
          message.index != null &&
          Object.hasOwnProperty.call(message, "index")
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.index);
        if (
          message.value != null &&
          Object.hasOwnProperty.call(message, "value")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.value);
        if (
          message.pubkey != null &&
          Object.hasOwnProperty.call(message, "pubkey")
        )
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.pubkey);
        if (
          message.ownerKeyPath != null &&
          Object.hasOwnProperty.call(message, "ownerKeyPath")
        )
          writer
            .uint32(/* id 5, wireType 2 =*/ 42)
            .string(message.ownerKeyPath);
        return writer;
      };

      /**
       * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.BchTx.Input.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.BchTx.Input
       * @static
       * @param {protoc.BchTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Input message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.BchTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.BchTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.BchTx.Input();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.hash = reader.string();
              break;
            case 2:
              message.index = reader.int32();
              break;
            case 3:
              message.value = reader.int64();
              break;
            case 4:
              message.pubkey = reader.string();
              break;
            case 5:
              message.ownerKeyPath = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Input message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.BchTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.BchTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Input message.
       * @function verify
       * @memberof protoc.BchTx.Input
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Input.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
          if (!$util.isString(message.hash)) return "hash: string expected";
        if (message.index != null && message.hasOwnProperty("index"))
          if (!$util.isInteger(message.index)) return "index: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
          if (
            !$util.isInteger(message.value) &&
            !(
              message.value &&
              $util.isInteger(message.value.low) &&
              $util.isInteger(message.value.high)
            )
          )
            return "value: integer|Long expected";
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
          if (!$util.isString(message.pubkey)) return "pubkey: string expected";
        if (
          message.ownerKeyPath != null &&
          message.hasOwnProperty("ownerKeyPath")
        )
          if (!$util.isString(message.ownerKeyPath))
            return "ownerKeyPath: string expected";
        return null;
      };

      /**
       * Creates an Input message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.BchTx.Input
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.BchTx.Input} Input
       */
      Input.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.BchTx.Input) return object;
        const message = new $root.protoc.BchTx.Input();
        if (object.hash != null) message.hash = String(object.hash);
        if (object.index != null) message.index = object.index | 0;
        if (object.value != null)
          if ($util.Long)
            (message.value = $util.Long.fromValue(
              object.value
            )).unsigned = false;
          else if (typeof object.value === "string")
            message.value = parseInt(object.value, 10);
          else if (typeof object.value === "number")
            message.value = object.value;
          else if (typeof object.value === "object")
            message.value = new $util.LongBits(
              object.value.low >>> 0,
              object.value.high >>> 0
            ).toNumber();
        if (object.pubkey != null) message.pubkey = String(object.pubkey);
        if (object.ownerKeyPath != null)
          message.ownerKeyPath = String(object.ownerKeyPath);
        return message;
      };

      /**
       * Creates a plain object from an Input message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.BchTx.Input
       * @static
       * @param {protoc.BchTx.Input} message Input
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Input.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.hash = "";
          object.index = 0;
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.value =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.value = options.longs === String ? "0" : 0;
          object.pubkey = "";
          object.ownerKeyPath = "";
        }
        if (message.hash != null && message.hasOwnProperty("hash"))
          object.hash = message.hash;
        if (message.index != null && message.hasOwnProperty("index"))
          object.index = message.index;
        if (message.value != null && message.hasOwnProperty("value"))
          if (typeof message.value === "number")
            object.value =
              options.longs === String ? String(message.value) : message.value;
          else
            object.value =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.value)
                : options.longs === Number
                ? new $util.LongBits(
                    message.value.low >>> 0,
                    message.value.high >>> 0
                  ).toNumber()
                : message.value;
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
          object.pubkey = message.pubkey;
        if (
          message.ownerKeyPath != null &&
          message.hasOwnProperty("ownerKeyPath")
        )
          object.ownerKeyPath = message.ownerKeyPath;
        return object;
      };

      /**
       * Converts this Input to JSON.
       * @function toJSON
       * @memberof protoc.BchTx.Input
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Input.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Input;
    })();

    return BchTx;
  })();

  protoc.DashTx = (function () {
    /**
     * Properties of a DashTx.
     * @memberof protoc
     * @interface IDashTx
     * @property {number|Long|null} [fee] DashTx fee
     * @property {number|null} [dustThreshold] DashTx dustThreshold
     * @property {string|null} [memo] DashTx memo
     * @property {Array.<protoc.DashTx.IInput>|null} [inputs] DashTx inputs
     * @property {Array.<protoc.IOutput>|null} [outputs] DashTx outputs
     */

    /**
     * Constructs a new DashTx.
     * @memberof protoc
     * @classdesc Represents a DashTx.
     * @implements IDashTx
     * @constructor
     * @param {protoc.IDashTx=} [properties] Properties to set
     */
    function DashTx(properties) {
      this.inputs = [];
      this.outputs = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DashTx fee.
     * @member {number|Long} fee
     * @memberof protoc.DashTx
     * @instance
     */
    DashTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * DashTx dustThreshold.
     * @member {number} dustThreshold
     * @memberof protoc.DashTx
     * @instance
     */
    DashTx.prototype.dustThreshold = 0;

    /**
     * DashTx memo.
     * @member {string} memo
     * @memberof protoc.DashTx
     * @instance
     */
    DashTx.prototype.memo = "";

    /**
     * DashTx inputs.
     * @member {Array.<protoc.DashTx.IInput>} inputs
     * @memberof protoc.DashTx
     * @instance
     */
    DashTx.prototype.inputs = $util.emptyArray;

    /**
     * DashTx outputs.
     * @member {Array.<protoc.IOutput>} outputs
     * @memberof protoc.DashTx
     * @instance
     */
    DashTx.prototype.outputs = $util.emptyArray;

    /**
     * Creates a new DashTx instance using the specified properties.
     * @function create
     * @memberof protoc.DashTx
     * @static
     * @param {protoc.IDashTx=} [properties] Properties to set
     * @returns {protoc.DashTx} DashTx instance
     */
    DashTx.create = function create(properties) {
      return new DashTx(properties);
    };

    /**
     * Encodes the specified DashTx message. Does not implicitly {@link protoc.DashTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.DashTx
     * @static
     * @param {protoc.IDashTx} message DashTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DashTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.fee);
      if (
        message.dustThreshold != null &&
        Object.hasOwnProperty.call(message, "dustThreshold")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.dustThreshold);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.memo);
      if (message.inputs != null && message.inputs.length)
        for (let i = 0; i < message.inputs.length; ++i)
          $root.protoc.DashTx.Input.encode(
            message.inputs[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
      if (message.outputs != null && message.outputs.length)
        for (let i = 0; i < message.outputs.length; ++i)
          $root.protoc.Output.encode(
            message.outputs[i],
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified DashTx message, length delimited. Does not implicitly {@link protoc.DashTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.DashTx
     * @static
     * @param {protoc.IDashTx} message DashTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DashTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DashTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.DashTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.DashTx} DashTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DashTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.DashTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee = reader.int64();
            break;
          case 2:
            message.dustThreshold = reader.int32();
            break;
          case 3:
            message.memo = reader.string();
            break;
          case 4:
            if (!(message.inputs && message.inputs.length)) message.inputs = [];
            message.inputs.push(
              $root.protoc.DashTx.Input.decode(reader, reader.uint32())
            );
            break;
          case 5:
            if (!(message.outputs && message.outputs.length))
              message.outputs = [];
            message.outputs.push(
              $root.protoc.Output.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DashTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.DashTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.DashTx} DashTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DashTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DashTx message.
     * @function verify
     * @memberof protoc.DashTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DashTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        if (!$util.isInteger(message.dustThreshold))
          return "dustThreshold: integer expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.inputs != null && message.hasOwnProperty("inputs")) {
        if (!Array.isArray(message.inputs)) return "inputs: array expected";
        for (let i = 0; i < message.inputs.length; ++i) {
          const error = $root.protoc.DashTx.Input.verify(message.inputs[i]);
          if (error) return "inputs." + error;
        }
      }
      if (message.outputs != null && message.hasOwnProperty("outputs")) {
        if (!Array.isArray(message.outputs)) return "outputs: array expected";
        for (let i = 0; i < message.outputs.length; ++i) {
          const error = $root.protoc.Output.verify(message.outputs[i]);
          if (error) return "outputs." + error;
        }
      }
      return null;
    };

    /**
     * Creates a DashTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.DashTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.DashTx} DashTx
     */
    DashTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.DashTx) return object;
      const message = new $root.protoc.DashTx();
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.dustThreshold != null)
        message.dustThreshold = object.dustThreshold | 0;
      if (object.memo != null) message.memo = String(object.memo);
      if (object.inputs) {
        if (!Array.isArray(object.inputs))
          throw TypeError(".protoc.DashTx.inputs: array expected");
        message.inputs = [];
        for (let i = 0; i < object.inputs.length; ++i) {
          if (typeof object.inputs[i] !== "object")
            throw TypeError(".protoc.DashTx.inputs: object expected");
          message.inputs[i] = $root.protoc.DashTx.Input.fromObject(
            object.inputs[i]
          );
        }
      }
      if (object.outputs) {
        if (!Array.isArray(object.outputs))
          throw TypeError(".protoc.DashTx.outputs: array expected");
        message.outputs = [];
        for (let i = 0; i < object.outputs.length; ++i) {
          if (typeof object.outputs[i] !== "object")
            throw TypeError(".protoc.DashTx.outputs: object expected");
          message.outputs[i] = $root.protoc.Output.fromObject(
            object.outputs[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a DashTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.DashTx
     * @static
     * @param {protoc.DashTx} message DashTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DashTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) {
        object.inputs = [];
        object.outputs = [];
      }
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        object.dustThreshold = 0;
        object.memo = "";
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        object.dustThreshold = message.dustThreshold;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.inputs && message.inputs.length) {
        object.inputs = [];
        for (let j = 0; j < message.inputs.length; ++j)
          object.inputs[j] = $root.protoc.DashTx.Input.toObject(
            message.inputs[j],
            options
          );
      }
      if (message.outputs && message.outputs.length) {
        object.outputs = [];
        for (let j = 0; j < message.outputs.length; ++j)
          object.outputs[j] = $root.protoc.Output.toObject(
            message.outputs[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this DashTx to JSON.
     * @function toJSON
     * @memberof protoc.DashTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DashTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    DashTx.Input = (function () {
      /**
       * Properties of an Input.
       * @memberof protoc.DashTx
       * @interface IInput
       * @property {string|null} [hash] Input hash
       * @property {number|null} [index] Input index
       * @property {number|Long|null} [value] Input value
       * @property {string|null} [pubkey] Input pubkey
       * @property {string|null} [ownerKeyPath] Input ownerKeyPath
       */

      /**
       * Constructs a new Input.
       * @memberof protoc.DashTx
       * @classdesc Represents an Input.
       * @implements IInput
       * @constructor
       * @param {protoc.DashTx.IInput=} [properties] Properties to set
       */
      function Input(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Input hash.
       * @member {string} hash
       * @memberof protoc.DashTx.Input
       * @instance
       */
      Input.prototype.hash = "";

      /**
       * Input index.
       * @member {number} index
       * @memberof protoc.DashTx.Input
       * @instance
       */
      Input.prototype.index = 0;

      /**
       * Input value.
       * @member {number|Long} value
       * @memberof protoc.DashTx.Input
       * @instance
       */
      Input.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Input pubkey.
       * @member {string} pubkey
       * @memberof protoc.DashTx.Input
       * @instance
       */
      Input.prototype.pubkey = "";

      /**
       * Input ownerKeyPath.
       * @member {string} ownerKeyPath
       * @memberof protoc.DashTx.Input
       * @instance
       */
      Input.prototype.ownerKeyPath = "";

      /**
       * Creates a new Input instance using the specified properties.
       * @function create
       * @memberof protoc.DashTx.Input
       * @static
       * @param {protoc.DashTx.IInput=} [properties] Properties to set
       * @returns {protoc.DashTx.Input} Input instance
       */
      Input.create = function create(properties) {
        return new Input(properties);
      };

      /**
       * Encodes the specified Input message. Does not implicitly {@link protoc.DashTx.Input.verify|verify} messages.
       * @function encode
       * @memberof protoc.DashTx.Input
       * @static
       * @param {protoc.DashTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.hash);
        if (
          message.index != null &&
          Object.hasOwnProperty.call(message, "index")
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.index);
        if (
          message.value != null &&
          Object.hasOwnProperty.call(message, "value")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.value);
        if (
          message.pubkey != null &&
          Object.hasOwnProperty.call(message, "pubkey")
        )
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.pubkey);
        if (
          message.ownerKeyPath != null &&
          Object.hasOwnProperty.call(message, "ownerKeyPath")
        )
          writer
            .uint32(/* id 5, wireType 2 =*/ 42)
            .string(message.ownerKeyPath);
        return writer;
      };

      /**
       * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.DashTx.Input.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.DashTx.Input
       * @static
       * @param {protoc.DashTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Input message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.DashTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.DashTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.DashTx.Input();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.hash = reader.string();
              break;
            case 2:
              message.index = reader.int32();
              break;
            case 3:
              message.value = reader.int64();
              break;
            case 4:
              message.pubkey = reader.string();
              break;
            case 5:
              message.ownerKeyPath = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Input message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.DashTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.DashTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Input message.
       * @function verify
       * @memberof protoc.DashTx.Input
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Input.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
          if (!$util.isString(message.hash)) return "hash: string expected";
        if (message.index != null && message.hasOwnProperty("index"))
          if (!$util.isInteger(message.index)) return "index: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
          if (
            !$util.isInteger(message.value) &&
            !(
              message.value &&
              $util.isInteger(message.value.low) &&
              $util.isInteger(message.value.high)
            )
          )
            return "value: integer|Long expected";
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
          if (!$util.isString(message.pubkey)) return "pubkey: string expected";
        if (
          message.ownerKeyPath != null &&
          message.hasOwnProperty("ownerKeyPath")
        )
          if (!$util.isString(message.ownerKeyPath))
            return "ownerKeyPath: string expected";
        return null;
      };

      /**
       * Creates an Input message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.DashTx.Input
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.DashTx.Input} Input
       */
      Input.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.DashTx.Input) return object;
        const message = new $root.protoc.DashTx.Input();
        if (object.hash != null) message.hash = String(object.hash);
        if (object.index != null) message.index = object.index | 0;
        if (object.value != null)
          if ($util.Long)
            (message.value = $util.Long.fromValue(
              object.value
            )).unsigned = false;
          else if (typeof object.value === "string")
            message.value = parseInt(object.value, 10);
          else if (typeof object.value === "number")
            message.value = object.value;
          else if (typeof object.value === "object")
            message.value = new $util.LongBits(
              object.value.low >>> 0,
              object.value.high >>> 0
            ).toNumber();
        if (object.pubkey != null) message.pubkey = String(object.pubkey);
        if (object.ownerKeyPath != null)
          message.ownerKeyPath = String(object.ownerKeyPath);
        return message;
      };

      /**
       * Creates a plain object from an Input message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.DashTx.Input
       * @static
       * @param {protoc.DashTx.Input} message Input
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Input.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.hash = "";
          object.index = 0;
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.value =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.value = options.longs === String ? "0" : 0;
          object.pubkey = "";
          object.ownerKeyPath = "";
        }
        if (message.hash != null && message.hasOwnProperty("hash"))
          object.hash = message.hash;
        if (message.index != null && message.hasOwnProperty("index"))
          object.index = message.index;
        if (message.value != null && message.hasOwnProperty("value"))
          if (typeof message.value === "number")
            object.value =
              options.longs === String ? String(message.value) : message.value;
          else
            object.value =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.value)
                : options.longs === Number
                ? new $util.LongBits(
                    message.value.low >>> 0,
                    message.value.high >>> 0
                  ).toNumber()
                : message.value;
        if (message.pubkey != null && message.hasOwnProperty("pubkey"))
          object.pubkey = message.pubkey;
        if (
          message.ownerKeyPath != null &&
          message.hasOwnProperty("ownerKeyPath")
        )
          object.ownerKeyPath = message.ownerKeyPath;
        return object;
      };

      /**
       * Converts this Input to JSON.
       * @function toJSON
       * @memberof protoc.DashTx.Input
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Input.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Input;
    })();

    return DashTx;
  })();

  protoc.LtcTx = (function () {
    /**
     * Properties of a LtcTx.
     * @memberof protoc
     * @interface ILtcTx
     * @property {number|Long|null} [fee] LtcTx fee
     * @property {number|null} [dustThreshold] LtcTx dustThreshold
     * @property {string|null} [memo] LtcTx memo
     * @property {Array.<protoc.IInput>|null} [inputs] LtcTx inputs
     * @property {Array.<protoc.IOutput>|null} [outputs] LtcTx outputs
     */

    /**
     * Constructs a new LtcTx.
     * @memberof protoc
     * @classdesc Represents a LtcTx.
     * @implements ILtcTx
     * @constructor
     * @param {protoc.ILtcTx=} [properties] Properties to set
     */
    function LtcTx(properties) {
      this.inputs = [];
      this.outputs = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * LtcTx fee.
     * @member {number|Long} fee
     * @memberof protoc.LtcTx
     * @instance
     */
    LtcTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * LtcTx dustThreshold.
     * @member {number} dustThreshold
     * @memberof protoc.LtcTx
     * @instance
     */
    LtcTx.prototype.dustThreshold = 0;

    /**
     * LtcTx memo.
     * @member {string} memo
     * @memberof protoc.LtcTx
     * @instance
     */
    LtcTx.prototype.memo = "";

    /**
     * LtcTx inputs.
     * @member {Array.<protoc.IInput>} inputs
     * @memberof protoc.LtcTx
     * @instance
     */
    LtcTx.prototype.inputs = $util.emptyArray;

    /**
     * LtcTx outputs.
     * @member {Array.<protoc.IOutput>} outputs
     * @memberof protoc.LtcTx
     * @instance
     */
    LtcTx.prototype.outputs = $util.emptyArray;

    /**
     * Creates a new LtcTx instance using the specified properties.
     * @function create
     * @memberof protoc.LtcTx
     * @static
     * @param {protoc.ILtcTx=} [properties] Properties to set
     * @returns {protoc.LtcTx} LtcTx instance
     */
    LtcTx.create = function create(properties) {
      return new LtcTx(properties);
    };

    /**
     * Encodes the specified LtcTx message. Does not implicitly {@link protoc.LtcTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.LtcTx
     * @static
     * @param {protoc.ILtcTx} message LtcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LtcTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.fee);
      if (
        message.dustThreshold != null &&
        Object.hasOwnProperty.call(message, "dustThreshold")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.dustThreshold);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.memo);
      if (message.inputs != null && message.inputs.length)
        for (let i = 0; i < message.inputs.length; ++i)
          $root.protoc.Input.encode(
            message.inputs[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
      if (message.outputs != null && message.outputs.length)
        for (let i = 0; i < message.outputs.length; ++i)
          $root.protoc.Output.encode(
            message.outputs[i],
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified LtcTx message, length delimited. Does not implicitly {@link protoc.LtcTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.LtcTx
     * @static
     * @param {protoc.ILtcTx} message LtcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LtcTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LtcTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.LtcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.LtcTx} LtcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LtcTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.LtcTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee = reader.int64();
            break;
          case 2:
            message.dustThreshold = reader.int32();
            break;
          case 3:
            message.memo = reader.string();
            break;
          case 4:
            if (!(message.inputs && message.inputs.length)) message.inputs = [];
            message.inputs.push(
              $root.protoc.Input.decode(reader, reader.uint32())
            );
            break;
          case 5:
            if (!(message.outputs && message.outputs.length))
              message.outputs = [];
            message.outputs.push(
              $root.protoc.Output.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a LtcTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.LtcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.LtcTx} LtcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LtcTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LtcTx message.
     * @function verify
     * @memberof protoc.LtcTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LtcTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        if (!$util.isInteger(message.dustThreshold))
          return "dustThreshold: integer expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.inputs != null && message.hasOwnProperty("inputs")) {
        if (!Array.isArray(message.inputs)) return "inputs: array expected";
        for (let i = 0; i < message.inputs.length; ++i) {
          const error = $root.protoc.Input.verify(message.inputs[i]);
          if (error) return "inputs." + error;
        }
      }
      if (message.outputs != null && message.hasOwnProperty("outputs")) {
        if (!Array.isArray(message.outputs)) return "outputs: array expected";
        for (let i = 0; i < message.outputs.length; ++i) {
          const error = $root.protoc.Output.verify(message.outputs[i]);
          if (error) return "outputs." + error;
        }
      }
      return null;
    };

    /**
     * Creates a LtcTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.LtcTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.LtcTx} LtcTx
     */
    LtcTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.LtcTx) return object;
      const message = new $root.protoc.LtcTx();
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.dustThreshold != null)
        message.dustThreshold = object.dustThreshold | 0;
      if (object.memo != null) message.memo = String(object.memo);
      if (object.inputs) {
        if (!Array.isArray(object.inputs))
          throw TypeError(".protoc.LtcTx.inputs: array expected");
        message.inputs = [];
        for (let i = 0; i < object.inputs.length; ++i) {
          if (typeof object.inputs[i] !== "object")
            throw TypeError(".protoc.LtcTx.inputs: object expected");
          message.inputs[i] = $root.protoc.Input.fromObject(object.inputs[i]);
        }
      }
      if (object.outputs) {
        if (!Array.isArray(object.outputs))
          throw TypeError(".protoc.LtcTx.outputs: array expected");
        message.outputs = [];
        for (let i = 0; i < object.outputs.length; ++i) {
          if (typeof object.outputs[i] !== "object")
            throw TypeError(".protoc.LtcTx.outputs: object expected");
          message.outputs[i] = $root.protoc.Output.fromObject(
            object.outputs[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a LtcTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.LtcTx
     * @static
     * @param {protoc.LtcTx} message LtcTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LtcTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) {
        object.inputs = [];
        object.outputs = [];
      }
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        object.dustThreshold = 0;
        object.memo = "";
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        object.dustThreshold = message.dustThreshold;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.inputs && message.inputs.length) {
        object.inputs = [];
        for (let j = 0; j < message.inputs.length; ++j)
          object.inputs[j] = $root.protoc.Input.toObject(
            message.inputs[j],
            options
          );
      }
      if (message.outputs && message.outputs.length) {
        object.outputs = [];
        for (let j = 0; j < message.outputs.length; ++j)
          object.outputs[j] = $root.protoc.Output.toObject(
            message.outputs[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this LtcTx to JSON.
     * @function toJSON
     * @memberof protoc.LtcTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LtcTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LtcTx;
  })();

  protoc.DcrTx = (function () {
    /**
     * Properties of a DcrTx.
     * @memberof protoc
     * @interface IDcrTx
     * @property {number|Long|null} [fee] DcrTx fee
     * @property {string|null} [to] DcrTx to
     * @property {string|null} [memo] DcrTx memo
     * @property {number|Long|null} [amount] DcrTx amount
     * @property {Array.<protoc.DcrTx.IInput>|null} [inputs] DcrTx inputs
     * @property {string|null} [changeAddress] DcrTx changeAddress
     */

    /**
     * Constructs a new DcrTx.
     * @memberof protoc
     * @classdesc Represents a DcrTx.
     * @implements IDcrTx
     * @constructor
     * @param {protoc.IDcrTx=} [properties] Properties to set
     */
    function DcrTx(properties) {
      this.inputs = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DcrTx fee.
     * @member {number|Long} fee
     * @memberof protoc.DcrTx
     * @instance
     */
    DcrTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * DcrTx to.
     * @member {string} to
     * @memberof protoc.DcrTx
     * @instance
     */
    DcrTx.prototype.to = "";

    /**
     * DcrTx memo.
     * @member {string} memo
     * @memberof protoc.DcrTx
     * @instance
     */
    DcrTx.prototype.memo = "";

    /**
     * DcrTx amount.
     * @member {number|Long} amount
     * @memberof protoc.DcrTx
     * @instance
     */
    DcrTx.prototype.amount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * DcrTx inputs.
     * @member {Array.<protoc.DcrTx.IInput>} inputs
     * @memberof protoc.DcrTx
     * @instance
     */
    DcrTx.prototype.inputs = $util.emptyArray;

    /**
     * DcrTx changeAddress.
     * @member {string} changeAddress
     * @memberof protoc.DcrTx
     * @instance
     */
    DcrTx.prototype.changeAddress = "";

    /**
     * Creates a new DcrTx instance using the specified properties.
     * @function create
     * @memberof protoc.DcrTx
     * @static
     * @param {protoc.IDcrTx=} [properties] Properties to set
     * @returns {protoc.DcrTx} DcrTx instance
     */
    DcrTx.create = function create(properties) {
      return new DcrTx(properties);
    };

    /**
     * Encodes the specified DcrTx message. Does not implicitly {@link protoc.DcrTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.DcrTx
     * @static
     * @param {protoc.IDcrTx} message DcrTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DcrTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.fee);
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.to);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.memo);
      if (
        message.amount != null &&
        Object.hasOwnProperty.call(message, "amount")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.amount);
      if (message.inputs != null && message.inputs.length)
        for (let i = 0; i < message.inputs.length; ++i)
          $root.protoc.DcrTx.Input.encode(
            message.inputs[i],
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
      if (
        message.changeAddress != null &&
        Object.hasOwnProperty.call(message, "changeAddress")
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.changeAddress);
      return writer;
    };

    /**
     * Encodes the specified DcrTx message, length delimited. Does not implicitly {@link protoc.DcrTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.DcrTx
     * @static
     * @param {protoc.IDcrTx} message DcrTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DcrTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DcrTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.DcrTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.DcrTx} DcrTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DcrTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.DcrTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee = reader.int64();
            break;
          case 2:
            message.to = reader.string();
            break;
          case 3:
            message.memo = reader.string();
            break;
          case 4:
            message.amount = reader.int64();
            break;
          case 5:
            if (!(message.inputs && message.inputs.length)) message.inputs = [];
            message.inputs.push(
              $root.protoc.DcrTx.Input.decode(reader, reader.uint32())
            );
            break;
          case 6:
            message.changeAddress = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DcrTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.DcrTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.DcrTx} DcrTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DcrTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DcrTx message.
     * @function verify
     * @memberof protoc.DcrTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DcrTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.amount != null && message.hasOwnProperty("amount"))
        if (
          !$util.isInteger(message.amount) &&
          !(
            message.amount &&
            $util.isInteger(message.amount.low) &&
            $util.isInteger(message.amount.high)
          )
        )
          return "amount: integer|Long expected";
      if (message.inputs != null && message.hasOwnProperty("inputs")) {
        if (!Array.isArray(message.inputs)) return "inputs: array expected";
        for (let i = 0; i < message.inputs.length; ++i) {
          const error = $root.protoc.DcrTx.Input.verify(message.inputs[i]);
          if (error) return "inputs." + error;
        }
      }
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        if (!$util.isString(message.changeAddress))
          return "changeAddress: string expected";
      return null;
    };

    /**
     * Creates a DcrTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.DcrTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.DcrTx} DcrTx
     */
    DcrTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.DcrTx) return object;
      const message = new $root.protoc.DcrTx();
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.to != null) message.to = String(object.to);
      if (object.memo != null) message.memo = String(object.memo);
      if (object.amount != null)
        if ($util.Long)
          (message.amount = $util.Long.fromValue(
            object.amount
          )).unsigned = false;
        else if (typeof object.amount === "string")
          message.amount = parseInt(object.amount, 10);
        else if (typeof object.amount === "number")
          message.amount = object.amount;
        else if (typeof object.amount === "object")
          message.amount = new $util.LongBits(
            object.amount.low >>> 0,
            object.amount.high >>> 0
          ).toNumber();
      if (object.inputs) {
        if (!Array.isArray(object.inputs))
          throw TypeError(".protoc.DcrTx.inputs: array expected");
        message.inputs = [];
        for (let i = 0; i < object.inputs.length; ++i) {
          if (typeof object.inputs[i] !== "object")
            throw TypeError(".protoc.DcrTx.inputs: object expected");
          message.inputs[i] = $root.protoc.DcrTx.Input.fromObject(
            object.inputs[i]
          );
        }
      }
      if (object.changeAddress != null)
        message.changeAddress = String(object.changeAddress);
      return message;
    };

    /**
     * Creates a plain object from a DcrTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.DcrTx
     * @static
     * @param {protoc.DcrTx} message DcrTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DcrTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) object.inputs = [];
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        object.to = "";
        object.memo = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.amount =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.amount = options.longs === String ? "0" : 0;
        object.changeAddress = "";
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.amount != null && message.hasOwnProperty("amount"))
        if (typeof message.amount === "number")
          object.amount =
            options.longs === String ? String(message.amount) : message.amount;
        else
          object.amount =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.amount)
              : options.longs === Number
              ? new $util.LongBits(
                  message.amount.low >>> 0,
                  message.amount.high >>> 0
                ).toNumber()
              : message.amount;
      if (message.inputs && message.inputs.length) {
        object.inputs = [];
        for (let j = 0; j < message.inputs.length; ++j)
          object.inputs[j] = $root.protoc.DcrTx.Input.toObject(
            message.inputs[j],
            options
          );
      }
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        object.changeAddress = message.changeAddress;
      return object;
    };

    /**
     * Converts this DcrTx to JSON.
     * @function toJSON
     * @memberof protoc.DcrTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DcrTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    DcrTx.Input = (function () {
      /**
       * Properties of an Input.
       * @memberof protoc.DcrTx
       * @interface IInput
       * @property {string|null} [address] Input address
       * @property {string|null} [txId] Input txId
       * @property {number|null} [outputIndex] Input outputIndex
       * @property {number|Long|null} [atoms] Input atoms
       */

      /**
       * Constructs a new Input.
       * @memberof protoc.DcrTx
       * @classdesc Represents an Input.
       * @implements IInput
       * @constructor
       * @param {protoc.DcrTx.IInput=} [properties] Properties to set
       */
      function Input(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Input address.
       * @member {string} address
       * @memberof protoc.DcrTx.Input
       * @instance
       */
      Input.prototype.address = "";

      /**
       * Input txId.
       * @member {string} txId
       * @memberof protoc.DcrTx.Input
       * @instance
       */
      Input.prototype.txId = "";

      /**
       * Input outputIndex.
       * @member {number} outputIndex
       * @memberof protoc.DcrTx.Input
       * @instance
       */
      Input.prototype.outputIndex = 0;

      /**
       * Input atoms.
       * @member {number|Long} atoms
       * @memberof protoc.DcrTx.Input
       * @instance
       */
      Input.prototype.atoms = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Creates a new Input instance using the specified properties.
       * @function create
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {protoc.DcrTx.IInput=} [properties] Properties to set
       * @returns {protoc.DcrTx.Input} Input instance
       */
      Input.create = function create(properties) {
        return new Input(properties);
      };

      /**
       * Encodes the specified Input message. Does not implicitly {@link protoc.DcrTx.Input.verify|verify} messages.
       * @function encode
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {protoc.DcrTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.address != null &&
          Object.hasOwnProperty.call(message, "address")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
        if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.txId);
        if (
          message.outputIndex != null &&
          Object.hasOwnProperty.call(message, "outputIndex")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.outputIndex);
        if (
          message.atoms != null &&
          Object.hasOwnProperty.call(message, "atoms")
        )
          writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.atoms);
        return writer;
      };

      /**
       * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.DcrTx.Input.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {protoc.DcrTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Input message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.DcrTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.DcrTx.Input();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.address = reader.string();
              break;
            case 2:
              message.txId = reader.string();
              break;
            case 3:
              message.outputIndex = reader.int32();
              break;
            case 4:
              message.atoms = reader.int64();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Input message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.DcrTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Input message.
       * @function verify
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Input.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
          if (!$util.isString(message.address))
            return "address: string expected";
        if (message.txId != null && message.hasOwnProperty("txId"))
          if (!$util.isString(message.txId)) return "txId: string expected";
        if (
          message.outputIndex != null &&
          message.hasOwnProperty("outputIndex")
        )
          if (!$util.isInteger(message.outputIndex))
            return "outputIndex: integer expected";
        if (message.atoms != null && message.hasOwnProperty("atoms"))
          if (
            !$util.isInteger(message.atoms) &&
            !(
              message.atoms &&
              $util.isInteger(message.atoms.low) &&
              $util.isInteger(message.atoms.high)
            )
          )
            return "atoms: integer|Long expected";
        return null;
      };

      /**
       * Creates an Input message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.DcrTx.Input} Input
       */
      Input.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.DcrTx.Input) return object;
        const message = new $root.protoc.DcrTx.Input();
        if (object.address != null) message.address = String(object.address);
        if (object.txId != null) message.txId = String(object.txId);
        if (object.outputIndex != null)
          message.outputIndex = object.outputIndex | 0;
        if (object.atoms != null)
          if ($util.Long)
            (message.atoms = $util.Long.fromValue(
              object.atoms
            )).unsigned = false;
          else if (typeof object.atoms === "string")
            message.atoms = parseInt(object.atoms, 10);
          else if (typeof object.atoms === "number")
            message.atoms = object.atoms;
          else if (typeof object.atoms === "object")
            message.atoms = new $util.LongBits(
              object.atoms.low >>> 0,
              object.atoms.high >>> 0
            ).toNumber();
        return message;
      };

      /**
       * Creates a plain object from an Input message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.DcrTx.Input
       * @static
       * @param {protoc.DcrTx.Input} message Input
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Input.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.address = "";
          object.txId = "";
          object.outputIndex = 0;
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.atoms =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.atoms = options.longs === String ? "0" : 0;
        }
        if (message.address != null && message.hasOwnProperty("address"))
          object.address = message.address;
        if (message.txId != null && message.hasOwnProperty("txId"))
          object.txId = message.txId;
        if (
          message.outputIndex != null &&
          message.hasOwnProperty("outputIndex")
        )
          object.outputIndex = message.outputIndex;
        if (message.atoms != null && message.hasOwnProperty("atoms"))
          if (typeof message.atoms === "number")
            object.atoms =
              options.longs === String ? String(message.atoms) : message.atoms;
          else
            object.atoms =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.atoms)
                : options.longs === Number
                ? new $util.LongBits(
                    message.atoms.low >>> 0,
                    message.atoms.high >>> 0
                  ).toNumber()
                : message.atoms;
        return object;
      };

      /**
       * Converts this Input to JSON.
       * @function toJSON
       * @memberof protoc.DcrTx.Input
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Input.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Input;
    })();

    return DcrTx;
  })();

  protoc.XzcTx = (function () {
    /**
     * Properties of a XzcTx.
     * @memberof protoc
     * @interface IXzcTx
     * @property {number|Long|null} [fee] XzcTx fee
     * @property {string|null} [to] XzcTx to
     * @property {string|null} [memo] XzcTx memo
     * @property {number|Long|null} [amount] XzcTx amount
     * @property {Array.<protoc.XzcTx.IInput>|null} [inputs] XzcTx inputs
     * @property {string|null} [changeAddress] XzcTx changeAddress
     */

    /**
     * Constructs a new XzcTx.
     * @memberof protoc
     * @classdesc Represents a XzcTx.
     * @implements IXzcTx
     * @constructor
     * @param {protoc.IXzcTx=} [properties] Properties to set
     */
    function XzcTx(properties) {
      this.inputs = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * XzcTx fee.
     * @member {number|Long} fee
     * @memberof protoc.XzcTx
     * @instance
     */
    XzcTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * XzcTx to.
     * @member {string} to
     * @memberof protoc.XzcTx
     * @instance
     */
    XzcTx.prototype.to = "";

    /**
     * XzcTx memo.
     * @member {string} memo
     * @memberof protoc.XzcTx
     * @instance
     */
    XzcTx.prototype.memo = "";

    /**
     * XzcTx amount.
     * @member {number|Long} amount
     * @memberof protoc.XzcTx
     * @instance
     */
    XzcTx.prototype.amount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * XzcTx inputs.
     * @member {Array.<protoc.XzcTx.IInput>} inputs
     * @memberof protoc.XzcTx
     * @instance
     */
    XzcTx.prototype.inputs = $util.emptyArray;

    /**
     * XzcTx changeAddress.
     * @member {string} changeAddress
     * @memberof protoc.XzcTx
     * @instance
     */
    XzcTx.prototype.changeAddress = "";

    /**
     * Creates a new XzcTx instance using the specified properties.
     * @function create
     * @memberof protoc.XzcTx
     * @static
     * @param {protoc.IXzcTx=} [properties] Properties to set
     * @returns {protoc.XzcTx} XzcTx instance
     */
    XzcTx.create = function create(properties) {
      return new XzcTx(properties);
    };

    /**
     * Encodes the specified XzcTx message. Does not implicitly {@link protoc.XzcTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.XzcTx
     * @static
     * @param {protoc.IXzcTx} message XzcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XzcTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.fee);
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.to);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.memo);
      if (
        message.amount != null &&
        Object.hasOwnProperty.call(message, "amount")
      )
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.amount);
      if (message.inputs != null && message.inputs.length)
        for (let i = 0; i < message.inputs.length; ++i)
          $root.protoc.XzcTx.Input.encode(
            message.inputs[i],
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
      if (
        message.changeAddress != null &&
        Object.hasOwnProperty.call(message, "changeAddress")
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.changeAddress);
      return writer;
    };

    /**
     * Encodes the specified XzcTx message, length delimited. Does not implicitly {@link protoc.XzcTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.XzcTx
     * @static
     * @param {protoc.IXzcTx} message XzcTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XzcTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XzcTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.XzcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.XzcTx} XzcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XzcTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.XzcTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee = reader.int64();
            break;
          case 2:
            message.to = reader.string();
            break;
          case 3:
            message.memo = reader.string();
            break;
          case 4:
            message.amount = reader.int64();
            break;
          case 5:
            if (!(message.inputs && message.inputs.length)) message.inputs = [];
            message.inputs.push(
              $root.protoc.XzcTx.Input.decode(reader, reader.uint32())
            );
            break;
          case 6:
            message.changeAddress = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a XzcTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.XzcTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.XzcTx} XzcTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XzcTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XzcTx message.
     * @function verify
     * @memberof protoc.XzcTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XzcTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.amount != null && message.hasOwnProperty("amount"))
        if (
          !$util.isInteger(message.amount) &&
          !(
            message.amount &&
            $util.isInteger(message.amount.low) &&
            $util.isInteger(message.amount.high)
          )
        )
          return "amount: integer|Long expected";
      if (message.inputs != null && message.hasOwnProperty("inputs")) {
        if (!Array.isArray(message.inputs)) return "inputs: array expected";
        for (let i = 0; i < message.inputs.length; ++i) {
          const error = $root.protoc.XzcTx.Input.verify(message.inputs[i]);
          if (error) return "inputs." + error;
        }
      }
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        if (!$util.isString(message.changeAddress))
          return "changeAddress: string expected";
      return null;
    };

    /**
     * Creates a XzcTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.XzcTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.XzcTx} XzcTx
     */
    XzcTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.XzcTx) return object;
      const message = new $root.protoc.XzcTx();
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.to != null) message.to = String(object.to);
      if (object.memo != null) message.memo = String(object.memo);
      if (object.amount != null)
        if ($util.Long)
          (message.amount = $util.Long.fromValue(
            object.amount
          )).unsigned = false;
        else if (typeof object.amount === "string")
          message.amount = parseInt(object.amount, 10);
        else if (typeof object.amount === "number")
          message.amount = object.amount;
        else if (typeof object.amount === "object")
          message.amount = new $util.LongBits(
            object.amount.low >>> 0,
            object.amount.high >>> 0
          ).toNumber();
      if (object.inputs) {
        if (!Array.isArray(object.inputs))
          throw TypeError(".protoc.XzcTx.inputs: array expected");
        message.inputs = [];
        for (let i = 0; i < object.inputs.length; ++i) {
          if (typeof object.inputs[i] !== "object")
            throw TypeError(".protoc.XzcTx.inputs: object expected");
          message.inputs[i] = $root.protoc.XzcTx.Input.fromObject(
            object.inputs[i]
          );
        }
      }
      if (object.changeAddress != null)
        message.changeAddress = String(object.changeAddress);
      return message;
    };

    /**
     * Creates a plain object from a XzcTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.XzcTx
     * @static
     * @param {protoc.XzcTx} message XzcTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XzcTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) object.inputs = [];
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        object.to = "";
        object.memo = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.amount =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.amount = options.longs === String ? "0" : 0;
        object.changeAddress = "";
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.amount != null && message.hasOwnProperty("amount"))
        if (typeof message.amount === "number")
          object.amount =
            options.longs === String ? String(message.amount) : message.amount;
        else
          object.amount =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.amount)
              : options.longs === Number
              ? new $util.LongBits(
                  message.amount.low >>> 0,
                  message.amount.high >>> 0
                ).toNumber()
              : message.amount;
      if (message.inputs && message.inputs.length) {
        object.inputs = [];
        for (let j = 0; j < message.inputs.length; ++j)
          object.inputs[j] = $root.protoc.XzcTx.Input.toObject(
            message.inputs[j],
            options
          );
      }
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        object.changeAddress = message.changeAddress;
      return object;
    };

    /**
     * Converts this XzcTx to JSON.
     * @function toJSON
     * @memberof protoc.XzcTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XzcTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    XzcTx.Input = (function () {
      /**
       * Properties of an Input.
       * @memberof protoc.XzcTx
       * @interface IInput
       * @property {string|null} [address] Input address
       * @property {string|null} [txId] Input txId
       * @property {number|null} [outputIndex] Input outputIndex
       * @property {number|Long|null} [satoshis] Input satoshis
       */

      /**
       * Constructs a new Input.
       * @memberof protoc.XzcTx
       * @classdesc Represents an Input.
       * @implements IInput
       * @constructor
       * @param {protoc.XzcTx.IInput=} [properties] Properties to set
       */
      function Input(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Input address.
       * @member {string} address
       * @memberof protoc.XzcTx.Input
       * @instance
       */
      Input.prototype.address = "";

      /**
       * Input txId.
       * @member {string} txId
       * @memberof protoc.XzcTx.Input
       * @instance
       */
      Input.prototype.txId = "";

      /**
       * Input outputIndex.
       * @member {number} outputIndex
       * @memberof protoc.XzcTx.Input
       * @instance
       */
      Input.prototype.outputIndex = 0;

      /**
       * Input satoshis.
       * @member {number|Long} satoshis
       * @memberof protoc.XzcTx.Input
       * @instance
       */
      Input.prototype.satoshis = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      /**
       * Creates a new Input instance using the specified properties.
       * @function create
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {protoc.XzcTx.IInput=} [properties] Properties to set
       * @returns {protoc.XzcTx.Input} Input instance
       */
      Input.create = function create(properties) {
        return new Input(properties);
      };

      /**
       * Encodes the specified Input message. Does not implicitly {@link protoc.XzcTx.Input.verify|verify} messages.
       * @function encode
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {protoc.XzcTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.address != null &&
          Object.hasOwnProperty.call(message, "address")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
        if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.txId);
        if (
          message.outputIndex != null &&
          Object.hasOwnProperty.call(message, "outputIndex")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.outputIndex);
        if (
          message.satoshis != null &&
          Object.hasOwnProperty.call(message, "satoshis")
        )
          writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.satoshis);
        return writer;
      };

      /**
       * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.XzcTx.Input.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {protoc.XzcTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Input message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.XzcTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.XzcTx.Input();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.address = reader.string();
              break;
            case 2:
              message.txId = reader.string();
              break;
            case 3:
              message.outputIndex = reader.int32();
              break;
            case 4:
              message.satoshis = reader.int64();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Input message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.XzcTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Input message.
       * @function verify
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Input.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
          if (!$util.isString(message.address))
            return "address: string expected";
        if (message.txId != null && message.hasOwnProperty("txId"))
          if (!$util.isString(message.txId)) return "txId: string expected";
        if (
          message.outputIndex != null &&
          message.hasOwnProperty("outputIndex")
        )
          if (!$util.isInteger(message.outputIndex))
            return "outputIndex: integer expected";
        if (message.satoshis != null && message.hasOwnProperty("satoshis"))
          if (
            !$util.isInteger(message.satoshis) &&
            !(
              message.satoshis &&
              $util.isInteger(message.satoshis.low) &&
              $util.isInteger(message.satoshis.high)
            )
          )
            return "satoshis: integer|Long expected";
        return null;
      };

      /**
       * Creates an Input message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.XzcTx.Input} Input
       */
      Input.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.XzcTx.Input) return object;
        const message = new $root.protoc.XzcTx.Input();
        if (object.address != null) message.address = String(object.address);
        if (object.txId != null) message.txId = String(object.txId);
        if (object.outputIndex != null)
          message.outputIndex = object.outputIndex | 0;
        if (object.satoshis != null)
          if ($util.Long)
            (message.satoshis = $util.Long.fromValue(
              object.satoshis
            )).unsigned = false;
          else if (typeof object.satoshis === "string")
            message.satoshis = parseInt(object.satoshis, 10);
          else if (typeof object.satoshis === "number")
            message.satoshis = object.satoshis;
          else if (typeof object.satoshis === "object")
            message.satoshis = new $util.LongBits(
              object.satoshis.low >>> 0,
              object.satoshis.high >>> 0
            ).toNumber();
        return message;
      };

      /**
       * Creates a plain object from an Input message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.XzcTx.Input
       * @static
       * @param {protoc.XzcTx.Input} message Input
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Input.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.address = "";
          object.txId = "";
          object.outputIndex = 0;
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.satoshis =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.satoshis = options.longs === String ? "0" : 0;
        }
        if (message.address != null && message.hasOwnProperty("address"))
          object.address = message.address;
        if (message.txId != null && message.hasOwnProperty("txId"))
          object.txId = message.txId;
        if (
          message.outputIndex != null &&
          message.hasOwnProperty("outputIndex")
        )
          object.outputIndex = message.outputIndex;
        if (message.satoshis != null && message.hasOwnProperty("satoshis"))
          if (typeof message.satoshis === "number")
            object.satoshis =
              options.longs === String
                ? String(message.satoshis)
                : message.satoshis;
          else
            object.satoshis =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.satoshis)
                : options.longs === Number
                ? new $util.LongBits(
                    message.satoshis.low >>> 0,
                    message.satoshis.high >>> 0
                  ).toNumber()
                : message.satoshis;
        return object;
      };

      /**
       * Converts this Input to JSON.
       * @function toJSON
       * @memberof protoc.XzcTx.Input
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Input.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Input;
    })();

    return XzcTx;
  })();

  protoc.XrpTx = (function () {
    /**
     * Properties of a XrpTx.
     * @memberof protoc
     * @interface IXrpTx
     * @property {string|null} [to] XrpTx to
     * @property {number|Long|null} [amount] XrpTx amount
     * @property {string|null} [changeAddress] XrpTx changeAddress
     * @property {number|Long|null} [fee] XrpTx fee
     * @property {number|Long|null} [sequence] XrpTx sequence
     * @property {number|Long|null} [tag] XrpTx tag
     * @property {string|null} [memo] XrpTx memo
     */

    /**
     * Constructs a new XrpTx.
     * @memberof protoc
     * @classdesc Represents a XrpTx.
     * @implements IXrpTx
     * @constructor
     * @param {protoc.IXrpTx=} [properties] Properties to set
     */
    function XrpTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * XrpTx to.
     * @member {string} to
     * @memberof protoc.XrpTx
     * @instance
     */
    XrpTx.prototype.to = "";

    /**
     * XrpTx amount.
     * @member {number|Long} amount
     * @memberof protoc.XrpTx
     * @instance
     */
    XrpTx.prototype.amount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * XrpTx changeAddress.
     * @member {string} changeAddress
     * @memberof protoc.XrpTx
     * @instance
     */
    XrpTx.prototype.changeAddress = "";

    /**
     * XrpTx fee.
     * @member {number|Long} fee
     * @memberof protoc.XrpTx
     * @instance
     */
    XrpTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * XrpTx sequence.
     * @member {number|Long} sequence
     * @memberof protoc.XrpTx
     * @instance
     */
    XrpTx.prototype.sequence = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * XrpTx tag.
     * @member {number|Long} tag
     * @memberof protoc.XrpTx
     * @instance
     */
    XrpTx.prototype.tag = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * XrpTx memo.
     * @member {string} memo
     * @memberof protoc.XrpTx
     * @instance
     */
    XrpTx.prototype.memo = "";

    /**
     * Creates a new XrpTx instance using the specified properties.
     * @function create
     * @memberof protoc.XrpTx
     * @static
     * @param {protoc.IXrpTx=} [properties] Properties to set
     * @returns {protoc.XrpTx} XrpTx instance
     */
    XrpTx.create = function create(properties) {
      return new XrpTx(properties);
    };

    /**
     * Encodes the specified XrpTx message. Does not implicitly {@link protoc.XrpTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.XrpTx
     * @static
     * @param {protoc.IXrpTx} message XrpTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XrpTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.to);
      if (
        message.amount != null &&
        Object.hasOwnProperty.call(message, "amount")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.amount);
      if (
        message.changeAddress != null &&
        Object.hasOwnProperty.call(message, "changeAddress")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.changeAddress);
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.fee);
      if (
        message.sequence != null &&
        Object.hasOwnProperty.call(message, "sequence")
      )
        writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.sequence);
      if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.tag);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.memo);
      return writer;
    };

    /**
     * Encodes the specified XrpTx message, length delimited. Does not implicitly {@link protoc.XrpTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.XrpTx
     * @static
     * @param {protoc.IXrpTx} message XrpTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    XrpTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a XrpTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.XrpTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.XrpTx} XrpTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XrpTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.XrpTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.string();
            break;
          case 2:
            message.amount = reader.int64();
            break;
          case 3:
            message.changeAddress = reader.string();
            break;
          case 4:
            message.fee = reader.int64();
            break;
          case 5:
            message.sequence = reader.int64();
            break;
          case 6:
            message.tag = reader.int64();
            break;
          case 7:
            message.memo = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a XrpTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.XrpTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.XrpTx} XrpTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    XrpTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a XrpTx message.
     * @function verify
     * @memberof protoc.XrpTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    XrpTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.amount != null && message.hasOwnProperty("amount"))
        if (
          !$util.isInteger(message.amount) &&
          !(
            message.amount &&
            $util.isInteger(message.amount.low) &&
            $util.isInteger(message.amount.high)
          )
        )
          return "amount: integer|Long expected";
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        if (!$util.isString(message.changeAddress))
          return "changeAddress: string expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (message.sequence != null && message.hasOwnProperty("sequence"))
        if (
          !$util.isInteger(message.sequence) &&
          !(
            message.sequence &&
            $util.isInteger(message.sequence.low) &&
            $util.isInteger(message.sequence.high)
          )
        )
          return "sequence: integer|Long expected";
      if (message.tag != null && message.hasOwnProperty("tag"))
        if (
          !$util.isInteger(message.tag) &&
          !(
            message.tag &&
            $util.isInteger(message.tag.low) &&
            $util.isInteger(message.tag.high)
          )
        )
          return "tag: integer|Long expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      return null;
    };

    /**
     * Creates a XrpTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.XrpTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.XrpTx} XrpTx
     */
    XrpTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.XrpTx) return object;
      const message = new $root.protoc.XrpTx();
      if (object.to != null) message.to = String(object.to);
      if (object.amount != null)
        if ($util.Long)
          (message.amount = $util.Long.fromValue(
            object.amount
          )).unsigned = false;
        else if (typeof object.amount === "string")
          message.amount = parseInt(object.amount, 10);
        else if (typeof object.amount === "number")
          message.amount = object.amount;
        else if (typeof object.amount === "object")
          message.amount = new $util.LongBits(
            object.amount.low >>> 0,
            object.amount.high >>> 0
          ).toNumber();
      if (object.changeAddress != null)
        message.changeAddress = String(object.changeAddress);
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.sequence != null)
        if ($util.Long)
          (message.sequence = $util.Long.fromValue(
            object.sequence
          )).unsigned = false;
        else if (typeof object.sequence === "string")
          message.sequence = parseInt(object.sequence, 10);
        else if (typeof object.sequence === "number")
          message.sequence = object.sequence;
        else if (typeof object.sequence === "object")
          message.sequence = new $util.LongBits(
            object.sequence.low >>> 0,
            object.sequence.high >>> 0
          ).toNumber();
      if (object.tag != null)
        if ($util.Long)
          (message.tag = $util.Long.fromValue(object.tag)).unsigned = false;
        else if (typeof object.tag === "string")
          message.tag = parseInt(object.tag, 10);
        else if (typeof object.tag === "number") message.tag = object.tag;
        else if (typeof object.tag === "object")
          message.tag = new $util.LongBits(
            object.tag.low >>> 0,
            object.tag.high >>> 0
          ).toNumber();
      if (object.memo != null) message.memo = String(object.memo);
      return message;
    };

    /**
     * Creates a plain object from a XrpTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.XrpTx
     * @static
     * @param {protoc.XrpTx} message XrpTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    XrpTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.to = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.amount =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.amount = options.longs === String ? "0" : 0;
        object.changeAddress = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.sequence =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.sequence = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.tag =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.tag = options.longs === String ? "0" : 0;
        object.memo = "";
      }
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.amount != null && message.hasOwnProperty("amount"))
        if (typeof message.amount === "number")
          object.amount =
            options.longs === String ? String(message.amount) : message.amount;
        else
          object.amount =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.amount)
              : options.longs === Number
              ? new $util.LongBits(
                  message.amount.low >>> 0,
                  message.amount.high >>> 0
                ).toNumber()
              : message.amount;
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        object.changeAddress = message.changeAddress;
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (message.sequence != null && message.hasOwnProperty("sequence"))
        if (typeof message.sequence === "number")
          object.sequence =
            options.longs === String
              ? String(message.sequence)
              : message.sequence;
        else
          object.sequence =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.sequence)
              : options.longs === Number
              ? new $util.LongBits(
                  message.sequence.low >>> 0,
                  message.sequence.high >>> 0
                ).toNumber()
              : message.sequence;
      if (message.tag != null && message.hasOwnProperty("tag"))
        if (typeof message.tag === "number")
          object.tag =
            options.longs === String ? String(message.tag) : message.tag;
        else
          object.tag =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.tag)
              : options.longs === Number
              ? new $util.LongBits(
                  message.tag.low >>> 0,
                  message.tag.high >>> 0
                ).toNumber()
              : message.tag;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      return object;
    };

    /**
     * Converts this XrpTx to JSON.
     * @function toJSON
     * @memberof protoc.XrpTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    XrpTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return XrpTx;
  })();

  protoc.IostTx = (function () {
    /**
     * Properties of an IostTx.
     * @memberof protoc
     * @interface IIostTx
     * @property {string|null} [tokenName] IostTx tokenName
     * @property {string|null} [from] IostTx from
     * @property {string|null} [to] IostTx to
     * @property {string|null} [memo] IostTx memo
     * @property {string|null} [amount] IostTx amount
     * @property {number|Long|null} [timestamp] IostTx timestamp
     * @property {number|null} [expiration] IostTx expiration
     * @property {protoc.IostTx.IConfig|null} [config] IostTx config
     */

    /**
     * Constructs a new IostTx.
     * @memberof protoc
     * @classdesc Represents an IostTx.
     * @implements IIostTx
     * @constructor
     * @param {protoc.IIostTx=} [properties] Properties to set
     */
    function IostTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * IostTx tokenName.
     * @member {string} tokenName
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.tokenName = "";

    /**
     * IostTx from.
     * @member {string} from
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.from = "";

    /**
     * IostTx to.
     * @member {string} to
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.to = "";

    /**
     * IostTx memo.
     * @member {string} memo
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.memo = "";

    /**
     * IostTx amount.
     * @member {string} amount
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.amount = "";

    /**
     * IostTx timestamp.
     * @member {number|Long} timestamp
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.timestamp = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * IostTx expiration.
     * @member {number} expiration
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.expiration = 0;

    /**
     * IostTx config.
     * @member {protoc.IostTx.IConfig|null|undefined} config
     * @memberof protoc.IostTx
     * @instance
     */
    IostTx.prototype.config = null;

    /**
     * Creates a new IostTx instance using the specified properties.
     * @function create
     * @memberof protoc.IostTx
     * @static
     * @param {protoc.IIostTx=} [properties] Properties to set
     * @returns {protoc.IostTx} IostTx instance
     */
    IostTx.create = function create(properties) {
      return new IostTx(properties);
    };

    /**
     * Encodes the specified IostTx message. Does not implicitly {@link protoc.IostTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.IostTx
     * @static
     * @param {protoc.IIostTx} message IostTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IostTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.tokenName != null &&
        Object.hasOwnProperty.call(message, "tokenName")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.tokenName);
      if (message.from != null && Object.hasOwnProperty.call(message, "from"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.from);
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.to);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.memo);
      if (
        message.amount != null &&
        Object.hasOwnProperty.call(message, "amount")
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.amount);
      if (
        message.timestamp != null &&
        Object.hasOwnProperty.call(message, "timestamp")
      )
        writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.timestamp);
      if (
        message.expiration != null &&
        Object.hasOwnProperty.call(message, "expiration")
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.expiration);
      if (
        message.config != null &&
        Object.hasOwnProperty.call(message, "config")
      )
        $root.protoc.IostTx.Config.encode(
          message.config,
          writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified IostTx message, length delimited. Does not implicitly {@link protoc.IostTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.IostTx
     * @static
     * @param {protoc.IIostTx} message IostTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IostTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an IostTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.IostTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.IostTx} IostTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IostTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.IostTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.tokenName = reader.string();
            break;
          case 2:
            message.from = reader.string();
            break;
          case 3:
            message.to = reader.string();
            break;
          case 4:
            message.memo = reader.string();
            break;
          case 5:
            message.amount = reader.string();
            break;
          case 6:
            message.timestamp = reader.int64();
            break;
          case 7:
            message.expiration = reader.int32();
            break;
          case 8:
            message.config = $root.protoc.IostTx.Config.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an IostTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.IostTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.IostTx} IostTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IostTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an IostTx message.
     * @function verify
     * @memberof protoc.IostTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IostTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.tokenName != null && message.hasOwnProperty("tokenName"))
        if (!$util.isString(message.tokenName))
          return "tokenName: string expected";
      if (message.from != null && message.hasOwnProperty("from"))
        if (!$util.isString(message.from)) return "from: string expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.amount != null && message.hasOwnProperty("amount"))
        if (!$util.isString(message.amount)) return "amount: string expected";
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (
          !$util.isInteger(message.timestamp) &&
          !(
            message.timestamp &&
            $util.isInteger(message.timestamp.low) &&
            $util.isInteger(message.timestamp.high)
          )
        )
          return "timestamp: integer|Long expected";
      if (message.expiration != null && message.hasOwnProperty("expiration"))
        if (!$util.isInteger(message.expiration))
          return "expiration: integer expected";
      if (message.config != null && message.hasOwnProperty("config")) {
        const error = $root.protoc.IostTx.Config.verify(message.config);
        if (error) return "config." + error;
      }
      return null;
    };

    /**
     * Creates an IostTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.IostTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.IostTx} IostTx
     */
    IostTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.IostTx) return object;
      const message = new $root.protoc.IostTx();
      if (object.tokenName != null)
        message.tokenName = String(object.tokenName);
      if (object.from != null) message.from = String(object.from);
      if (object.to != null) message.to = String(object.to);
      if (object.memo != null) message.memo = String(object.memo);
      if (object.amount != null) message.amount = String(object.amount);
      if (object.timestamp != null)
        if ($util.Long)
          (message.timestamp = $util.Long.fromValue(
            object.timestamp
          )).unsigned = false;
        else if (typeof object.timestamp === "string")
          message.timestamp = parseInt(object.timestamp, 10);
        else if (typeof object.timestamp === "number")
          message.timestamp = object.timestamp;
        else if (typeof object.timestamp === "object")
          message.timestamp = new $util.LongBits(
            object.timestamp.low >>> 0,
            object.timestamp.high >>> 0
          ).toNumber();
      if (object.expiration != null) message.expiration = object.expiration | 0;
      if (object.config != null) {
        if (typeof object.config !== "object")
          throw TypeError(".protoc.IostTx.config: object expected");
        message.config = $root.protoc.IostTx.Config.fromObject(object.config);
      }
      return message;
    };

    /**
     * Creates a plain object from an IostTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.IostTx
     * @static
     * @param {protoc.IostTx} message IostTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IostTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.tokenName = "";
        object.from = "";
        object.to = "";
        object.memo = "";
        object.amount = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.timestamp =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.timestamp = options.longs === String ? "0" : 0;
        object.expiration = 0;
        object.config = null;
      }
      if (message.tokenName != null && message.hasOwnProperty("tokenName"))
        object.tokenName = message.tokenName;
      if (message.from != null && message.hasOwnProperty("from"))
        object.from = message.from;
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.amount != null && message.hasOwnProperty("amount"))
        object.amount = message.amount;
      if (message.timestamp != null && message.hasOwnProperty("timestamp"))
        if (typeof message.timestamp === "number")
          object.timestamp =
            options.longs === String
              ? String(message.timestamp)
              : message.timestamp;
        else
          object.timestamp =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.timestamp)
              : options.longs === Number
              ? new $util.LongBits(
                  message.timestamp.low >>> 0,
                  message.timestamp.high >>> 0
                ).toNumber()
              : message.timestamp;
      if (message.expiration != null && message.hasOwnProperty("expiration"))
        object.expiration = message.expiration;
      if (message.config != null && message.hasOwnProperty("config"))
        object.config = $root.protoc.IostTx.Config.toObject(
          message.config,
          options
        );
      return object;
    };

    /**
     * Converts this IostTx to JSON.
     * @function toJSON
     * @memberof protoc.IostTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IostTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    IostTx.Config = (function () {
      /**
       * Properties of a Config.
       * @memberof protoc.IostTx
       * @interface IConfig
       * @property {number|Long|null} [gasRatio] Config gasRatio
       * @property {number|Long|null} [gasLimit] Config gasLimit
       * @property {number|null} [delay] Config delay
       * @property {string|null} [defaultLimit] Config defaultLimit
       */

      /**
       * Constructs a new Config.
       * @memberof protoc.IostTx
       * @classdesc Represents a Config.
       * @implements IConfig
       * @constructor
       * @param {protoc.IostTx.IConfig=} [properties] Properties to set
       */
      function Config(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Config gasRatio.
       * @member {number|Long} gasRatio
       * @memberof protoc.IostTx.Config
       * @instance
       */
      Config.prototype.gasRatio = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      /**
       * Config gasLimit.
       * @member {number|Long} gasLimit
       * @memberof protoc.IostTx.Config
       * @instance
       */
      Config.prototype.gasLimit = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      /**
       * Config delay.
       * @member {number} delay
       * @memberof protoc.IostTx.Config
       * @instance
       */
      Config.prototype.delay = 0;

      /**
       * Config defaultLimit.
       * @member {string} defaultLimit
       * @memberof protoc.IostTx.Config
       * @instance
       */
      Config.prototype.defaultLimit = "";

      /**
       * Creates a new Config instance using the specified properties.
       * @function create
       * @memberof protoc.IostTx.Config
       * @static
       * @param {protoc.IostTx.IConfig=} [properties] Properties to set
       * @returns {protoc.IostTx.Config} Config instance
       */
      Config.create = function create(properties) {
        return new Config(properties);
      };

      /**
       * Encodes the specified Config message. Does not implicitly {@link protoc.IostTx.Config.verify|verify} messages.
       * @function encode
       * @memberof protoc.IostTx.Config
       * @static
       * @param {protoc.IostTx.IConfig} message Config message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Config.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.gasRatio != null &&
          Object.hasOwnProperty.call(message, "gasRatio")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.gasRatio);
        if (
          message.gasLimit != null &&
          Object.hasOwnProperty.call(message, "gasLimit")
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int64(message.gasLimit);
        if (
          message.delay != null &&
          Object.hasOwnProperty.call(message, "delay")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.delay);
        if (
          message.defaultLimit != null &&
          Object.hasOwnProperty.call(message, "defaultLimit")
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.defaultLimit);
        return writer;
      };

      /**
       * Encodes the specified Config message, length delimited. Does not implicitly {@link protoc.IostTx.Config.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.IostTx.Config
       * @static
       * @param {protoc.IostTx.IConfig} message Config message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Config.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Config message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.IostTx.Config
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.IostTx.Config} Config
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Config.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.IostTx.Config();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.gasRatio = reader.int64();
              break;
            case 2:
              message.gasLimit = reader.int64();
              break;
            case 3:
              message.delay = reader.int32();
              break;
            case 4:
              message.defaultLimit = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Config message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.IostTx.Config
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.IostTx.Config} Config
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Config.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Config message.
       * @function verify
       * @memberof protoc.IostTx.Config
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Config.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.gasRatio != null && message.hasOwnProperty("gasRatio"))
          if (
            !$util.isInteger(message.gasRatio) &&
            !(
              message.gasRatio &&
              $util.isInteger(message.gasRatio.low) &&
              $util.isInteger(message.gasRatio.high)
            )
          )
            return "gasRatio: integer|Long expected";
        if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
          if (
            !$util.isInteger(message.gasLimit) &&
            !(
              message.gasLimit &&
              $util.isInteger(message.gasLimit.low) &&
              $util.isInteger(message.gasLimit.high)
            )
          )
            return "gasLimit: integer|Long expected";
        if (message.delay != null && message.hasOwnProperty("delay"))
          if (!$util.isInteger(message.delay)) return "delay: integer expected";
        if (
          message.defaultLimit != null &&
          message.hasOwnProperty("defaultLimit")
        )
          if (!$util.isString(message.defaultLimit))
            return "defaultLimit: string expected";
        return null;
      };

      /**
       * Creates a Config message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.IostTx.Config
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.IostTx.Config} Config
       */
      Config.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.IostTx.Config) return object;
        const message = new $root.protoc.IostTx.Config();
        if (object.gasRatio != null)
          if ($util.Long)
            (message.gasRatio = $util.Long.fromValue(
              object.gasRatio
            )).unsigned = false;
          else if (typeof object.gasRatio === "string")
            message.gasRatio = parseInt(object.gasRatio, 10);
          else if (typeof object.gasRatio === "number")
            message.gasRatio = object.gasRatio;
          else if (typeof object.gasRatio === "object")
            message.gasRatio = new $util.LongBits(
              object.gasRatio.low >>> 0,
              object.gasRatio.high >>> 0
            ).toNumber();
        if (object.gasLimit != null)
          if ($util.Long)
            (message.gasLimit = $util.Long.fromValue(
              object.gasLimit
            )).unsigned = false;
          else if (typeof object.gasLimit === "string")
            message.gasLimit = parseInt(object.gasLimit, 10);
          else if (typeof object.gasLimit === "number")
            message.gasLimit = object.gasLimit;
          else if (typeof object.gasLimit === "object")
            message.gasLimit = new $util.LongBits(
              object.gasLimit.low >>> 0,
              object.gasLimit.high >>> 0
            ).toNumber();
        if (object.delay != null) message.delay = object.delay | 0;
        if (object.defaultLimit != null)
          message.defaultLimit = String(object.defaultLimit);
        return message;
      };

      /**
       * Creates a plain object from a Config message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.IostTx.Config
       * @static
       * @param {protoc.IostTx.Config} message Config
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Config.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.gasRatio =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.gasRatio = options.longs === String ? "0" : 0;
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.gasLimit =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.gasLimit = options.longs === String ? "0" : 0;
          object.delay = 0;
          object.defaultLimit = "";
        }
        if (message.gasRatio != null && message.hasOwnProperty("gasRatio"))
          if (typeof message.gasRatio === "number")
            object.gasRatio =
              options.longs === String
                ? String(message.gasRatio)
                : message.gasRatio;
          else
            object.gasRatio =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.gasRatio)
                : options.longs === Number
                ? new $util.LongBits(
                    message.gasRatio.low >>> 0,
                    message.gasRatio.high >>> 0
                  ).toNumber()
                : message.gasRatio;
        if (message.gasLimit != null && message.hasOwnProperty("gasLimit"))
          if (typeof message.gasLimit === "number")
            object.gasLimit =
              options.longs === String
                ? String(message.gasLimit)
                : message.gasLimit;
          else
            object.gasLimit =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.gasLimit)
                : options.longs === Number
                ? new $util.LongBits(
                    message.gasLimit.low >>> 0,
                    message.gasLimit.high >>> 0
                  ).toNumber()
                : message.gasLimit;
        if (message.delay != null && message.hasOwnProperty("delay"))
          object.delay = message.delay;
        if (
          message.defaultLimit != null &&
          message.hasOwnProperty("defaultLimit")
        )
          object.defaultLimit = message.defaultLimit;
        return object;
      };

      /**
       * Converts this Config to JSON.
       * @function toJSON
       * @memberof protoc.IostTx.Config
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Config.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Config;
    })();

    return IostTx;
  })();

  protoc.OmniTx = (function () {
    /**
     * Properties of an OmniTx.
     * @memberof protoc
     * @interface IOmniTx
     * @property {number|Long|null} [fee] OmniTx fee
     * @property {number|null} [dustThreshold] OmniTx dustThreshold
     * @property {string|null} [memo] OmniTx memo
     * @property {Array.<protoc.OmniTx.IInput>|null} [inputs] OmniTx inputs
     * @property {string|null} [to] OmniTx to
     * @property {string|null} [changeAddress] OmniTx changeAddress
     * @property {number|Long|null} [omniAmount] OmniTx omniAmount
     * @property {number|null} [propertyId] OmniTx propertyId
     */

    /**
     * Constructs a new OmniTx.
     * @memberof protoc
     * @classdesc Represents an OmniTx.
     * @implements IOmniTx
     * @constructor
     * @param {protoc.IOmniTx=} [properties] Properties to set
     */
    function OmniTx(properties) {
      this.inputs = [];
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * OmniTx fee.
     * @member {number|Long} fee
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * OmniTx dustThreshold.
     * @member {number} dustThreshold
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.dustThreshold = 0;

    /**
     * OmniTx memo.
     * @member {string} memo
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.memo = "";

    /**
     * OmniTx inputs.
     * @member {Array.<protoc.OmniTx.IInput>} inputs
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.inputs = $util.emptyArray;

    /**
     * OmniTx to.
     * @member {string} to
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.to = "";

    /**
     * OmniTx changeAddress.
     * @member {string} changeAddress
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.changeAddress = "";

    /**
     * OmniTx omniAmount.
     * @member {number|Long} omniAmount
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.omniAmount = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * OmniTx propertyId.
     * @member {number} propertyId
     * @memberof protoc.OmniTx
     * @instance
     */
    OmniTx.prototype.propertyId = 0;

    /**
     * Creates a new OmniTx instance using the specified properties.
     * @function create
     * @memberof protoc.OmniTx
     * @static
     * @param {protoc.IOmniTx=} [properties] Properties to set
     * @returns {protoc.OmniTx} OmniTx instance
     */
    OmniTx.create = function create(properties) {
      return new OmniTx(properties);
    };

    /**
     * Encodes the specified OmniTx message. Does not implicitly {@link protoc.OmniTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.OmniTx
     * @static
     * @param {protoc.IOmniTx} message OmniTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OmniTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.fee);
      if (
        message.dustThreshold != null &&
        Object.hasOwnProperty.call(message, "dustThreshold")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.dustThreshold);
      if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.memo);
      if (message.inputs != null && message.inputs.length)
        for (let i = 0; i < message.inputs.length; ++i)
          $root.protoc.OmniTx.Input.encode(
            message.inputs[i],
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.to);
      if (
        message.changeAddress != null &&
        Object.hasOwnProperty.call(message, "changeAddress")
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.changeAddress);
      if (
        message.omniAmount != null &&
        Object.hasOwnProperty.call(message, "omniAmount")
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.omniAmount);
      if (
        message.propertyId != null &&
        Object.hasOwnProperty.call(message, "propertyId")
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int32(message.propertyId);
      return writer;
    };

    /**
     * Encodes the specified OmniTx message, length delimited. Does not implicitly {@link protoc.OmniTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.OmniTx
     * @static
     * @param {protoc.IOmniTx} message OmniTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OmniTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OmniTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.OmniTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.OmniTx} OmniTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OmniTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.OmniTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.fee = reader.int64();
            break;
          case 2:
            message.dustThreshold = reader.int32();
            break;
          case 3:
            message.memo = reader.string();
            break;
          case 4:
            if (!(message.inputs && message.inputs.length)) message.inputs = [];
            message.inputs.push(
              $root.protoc.OmniTx.Input.decode(reader, reader.uint32())
            );
            break;
          case 5:
            message.to = reader.string();
            break;
          case 6:
            message.changeAddress = reader.string();
            break;
          case 7:
            message.omniAmount = reader.int64();
            break;
          case 8:
            message.propertyId = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an OmniTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.OmniTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.OmniTx} OmniTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OmniTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OmniTx message.
     * @function verify
     * @memberof protoc.OmniTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OmniTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (
          !$util.isInteger(message.fee) &&
          !(
            message.fee &&
            $util.isInteger(message.fee.low) &&
            $util.isInteger(message.fee.high)
          )
        )
          return "fee: integer|Long expected";
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        if (!$util.isInteger(message.dustThreshold))
          return "dustThreshold: integer expected";
      if (message.memo != null && message.hasOwnProperty("memo"))
        if (!$util.isString(message.memo)) return "memo: string expected";
      if (message.inputs != null && message.hasOwnProperty("inputs")) {
        if (!Array.isArray(message.inputs)) return "inputs: array expected";
        for (let i = 0; i < message.inputs.length; ++i) {
          const error = $root.protoc.OmniTx.Input.verify(message.inputs[i]);
          if (error) return "inputs." + error;
        }
      }
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        if (!$util.isString(message.changeAddress))
          return "changeAddress: string expected";
      if (message.omniAmount != null && message.hasOwnProperty("omniAmount"))
        if (
          !$util.isInteger(message.omniAmount) &&
          !(
            message.omniAmount &&
            $util.isInteger(message.omniAmount.low) &&
            $util.isInteger(message.omniAmount.high)
          )
        )
          return "omniAmount: integer|Long expected";
      if (message.propertyId != null && message.hasOwnProperty("propertyId"))
        if (!$util.isInteger(message.propertyId))
          return "propertyId: integer expected";
      return null;
    };

    /**
     * Creates an OmniTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.OmniTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.OmniTx} OmniTx
     */
    OmniTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.OmniTx) return object;
      const message = new $root.protoc.OmniTx();
      if (object.fee != null)
        if ($util.Long)
          (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
        else if (typeof object.fee === "string")
          message.fee = parseInt(object.fee, 10);
        else if (typeof object.fee === "number") message.fee = object.fee;
        else if (typeof object.fee === "object")
          message.fee = new $util.LongBits(
            object.fee.low >>> 0,
            object.fee.high >>> 0
          ).toNumber();
      if (object.dustThreshold != null)
        message.dustThreshold = object.dustThreshold | 0;
      if (object.memo != null) message.memo = String(object.memo);
      if (object.inputs) {
        if (!Array.isArray(object.inputs))
          throw TypeError(".protoc.OmniTx.inputs: array expected");
        message.inputs = [];
        for (let i = 0; i < object.inputs.length; ++i) {
          if (typeof object.inputs[i] !== "object")
            throw TypeError(".protoc.OmniTx.inputs: object expected");
          message.inputs[i] = $root.protoc.OmniTx.Input.fromObject(
            object.inputs[i]
          );
        }
      }
      if (object.to != null) message.to = String(object.to);
      if (object.changeAddress != null)
        message.changeAddress = String(object.changeAddress);
      if (object.omniAmount != null)
        if ($util.Long)
          (message.omniAmount = $util.Long.fromValue(
            object.omniAmount
          )).unsigned = false;
        else if (typeof object.omniAmount === "string")
          message.omniAmount = parseInt(object.omniAmount, 10);
        else if (typeof object.omniAmount === "number")
          message.omniAmount = object.omniAmount;
        else if (typeof object.omniAmount === "object")
          message.omniAmount = new $util.LongBits(
            object.omniAmount.low >>> 0,
            object.omniAmount.high >>> 0
          ).toNumber();
      if (object.propertyId != null) message.propertyId = object.propertyId | 0;
      return message;
    };

    /**
     * Creates a plain object from an OmniTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.OmniTx
     * @static
     * @param {protoc.OmniTx} message OmniTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OmniTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.arrays || options.defaults) object.inputs = [];
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.fee =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.fee = options.longs === String ? "0" : 0;
        object.dustThreshold = 0;
        object.memo = "";
        object.to = "";
        object.changeAddress = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.omniAmount =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.omniAmount = options.longs === String ? "0" : 0;
        object.propertyId = 0;
      }
      if (message.fee != null && message.hasOwnProperty("fee"))
        if (typeof message.fee === "number")
          object.fee =
            options.longs === String ? String(message.fee) : message.fee;
        else
          object.fee =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.fee)
              : options.longs === Number
              ? new $util.LongBits(
                  message.fee.low >>> 0,
                  message.fee.high >>> 0
                ).toNumber()
              : message.fee;
      if (
        message.dustThreshold != null &&
        message.hasOwnProperty("dustThreshold")
      )
        object.dustThreshold = message.dustThreshold;
      if (message.memo != null && message.hasOwnProperty("memo"))
        object.memo = message.memo;
      if (message.inputs && message.inputs.length) {
        object.inputs = [];
        for (let j = 0; j < message.inputs.length; ++j)
          object.inputs[j] = $root.protoc.OmniTx.Input.toObject(
            message.inputs[j],
            options
          );
      }
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (
        message.changeAddress != null &&
        message.hasOwnProperty("changeAddress")
      )
        object.changeAddress = message.changeAddress;
      if (message.omniAmount != null && message.hasOwnProperty("omniAmount"))
        if (typeof message.omniAmount === "number")
          object.omniAmount =
            options.longs === String
              ? String(message.omniAmount)
              : message.omniAmount;
        else
          object.omniAmount =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.omniAmount)
              : options.longs === Number
              ? new $util.LongBits(
                  message.omniAmount.low >>> 0,
                  message.omniAmount.high >>> 0
                ).toNumber()
              : message.omniAmount;
      if (message.propertyId != null && message.hasOwnProperty("propertyId"))
        object.propertyId = message.propertyId;
      return object;
    };

    /**
     * Converts this OmniTx to JSON.
     * @function toJSON
     * @memberof protoc.OmniTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OmniTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    OmniTx.Input = (function () {
      /**
       * Properties of an Input.
       * @memberof protoc.OmniTx
       * @interface IInput
       * @property {string|null} [hash] Input hash
       * @property {number|null} [index] Input index
       * @property {protoc.OmniTx.Iutxo|null} [utxo] Input utxo
       * @property {string|null} [ownerKeyPath] Input ownerKeyPath
       */

      /**
       * Constructs a new Input.
       * @memberof protoc.OmniTx
       * @classdesc Represents an Input.
       * @implements IInput
       * @constructor
       * @param {protoc.OmniTx.IInput=} [properties] Properties to set
       */
      function Input(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Input hash.
       * @member {string} hash
       * @memberof protoc.OmniTx.Input
       * @instance
       */
      Input.prototype.hash = "";

      /**
       * Input index.
       * @member {number} index
       * @memberof protoc.OmniTx.Input
       * @instance
       */
      Input.prototype.index = 0;

      /**
       * Input utxo.
       * @member {protoc.OmniTx.Iutxo|null|undefined} utxo
       * @memberof protoc.OmniTx.Input
       * @instance
       */
      Input.prototype.utxo = null;

      /**
       * Input ownerKeyPath.
       * @member {string} ownerKeyPath
       * @memberof protoc.OmniTx.Input
       * @instance
       */
      Input.prototype.ownerKeyPath = "";

      /**
       * Creates a new Input instance using the specified properties.
       * @function create
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {protoc.OmniTx.IInput=} [properties] Properties to set
       * @returns {protoc.OmniTx.Input} Input instance
       */
      Input.create = function create(properties) {
        return new Input(properties);
      };

      /**
       * Encodes the specified Input message. Does not implicitly {@link protoc.OmniTx.Input.verify|verify} messages.
       * @function encode
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {protoc.OmniTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.hash);
        if (
          message.index != null &&
          Object.hasOwnProperty.call(message, "index")
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.index);
        if (message.utxo != null && Object.hasOwnProperty.call(message, "utxo"))
          $root.protoc.OmniTx.utxo
            .encode(
              message.utxo,
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
            )
            .ldelim();
        if (
          message.ownerKeyPath != null &&
          Object.hasOwnProperty.call(message, "ownerKeyPath")
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.ownerKeyPath);
        return writer;
      };

      /**
       * Encodes the specified Input message, length delimited. Does not implicitly {@link protoc.OmniTx.Input.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {protoc.OmniTx.IInput} message Input message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Input.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Input message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.OmniTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.OmniTx.Input();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.hash = reader.string();
              break;
            case 2:
              message.index = reader.int32();
              break;
            case 3:
              message.utxo = $root.protoc.OmniTx.utxo.decode(
                reader,
                reader.uint32()
              );
              break;
            case 4:
              message.ownerKeyPath = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Input message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.OmniTx.Input} Input
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Input.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Input message.
       * @function verify
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Input.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
          if (!$util.isString(message.hash)) return "hash: string expected";
        if (message.index != null && message.hasOwnProperty("index"))
          if (!$util.isInteger(message.index)) return "index: integer expected";
        if (message.utxo != null && message.hasOwnProperty("utxo")) {
          const error = $root.protoc.OmniTx.utxo.verify(message.utxo);
          if (error) return "utxo." + error;
        }
        if (
          message.ownerKeyPath != null &&
          message.hasOwnProperty("ownerKeyPath")
        )
          if (!$util.isString(message.ownerKeyPath))
            return "ownerKeyPath: string expected";
        return null;
      };

      /**
       * Creates an Input message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.OmniTx.Input} Input
       */
      Input.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.OmniTx.Input) return object;
        const message = new $root.protoc.OmniTx.Input();
        if (object.hash != null) message.hash = String(object.hash);
        if (object.index != null) message.index = object.index | 0;
        if (object.utxo != null) {
          if (typeof object.utxo !== "object")
            throw TypeError(".protoc.OmniTx.Input.utxo: object expected");
          message.utxo = $root.protoc.OmniTx.utxo.fromObject(object.utxo);
        }
        if (object.ownerKeyPath != null)
          message.ownerKeyPath = String(object.ownerKeyPath);
        return message;
      };

      /**
       * Creates a plain object from an Input message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.OmniTx.Input
       * @static
       * @param {protoc.OmniTx.Input} message Input
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Input.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.hash = "";
          object.index = 0;
          object.utxo = null;
          object.ownerKeyPath = "";
        }
        if (message.hash != null && message.hasOwnProperty("hash"))
          object.hash = message.hash;
        if (message.index != null && message.hasOwnProperty("index"))
          object.index = message.index;
        if (message.utxo != null && message.hasOwnProperty("utxo"))
          object.utxo = $root.protoc.OmniTx.utxo.toObject(
            message.utxo,
            options
          );
        if (
          message.ownerKeyPath != null &&
          message.hasOwnProperty("ownerKeyPath")
        )
          object.ownerKeyPath = message.ownerKeyPath;
        return object;
      };

      /**
       * Converts this Input to JSON.
       * @function toJSON
       * @memberof protoc.OmniTx.Input
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Input.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Input;
    })();

    OmniTx.utxo = (function () {
      /**
       * Properties of an utxo.
       * @memberof protoc.OmniTx
       * @interface Iutxo
       * @property {string|null} [publicKey] utxo publicKey
       * @property {string|null} [script] utxo script
       * @property {number|Long|null} [value] utxo value
       */

      /**
       * Constructs a new utxo.
       * @memberof protoc.OmniTx
       * @classdesc Represents an utxo.
       * @implements Iutxo
       * @constructor
       * @param {protoc.OmniTx.Iutxo=} [properties] Properties to set
       */
      function utxo(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * utxo publicKey.
       * @member {string} publicKey
       * @memberof protoc.OmniTx.utxo
       * @instance
       */
      utxo.prototype.publicKey = "";

      /**
       * utxo script.
       * @member {string} script
       * @memberof protoc.OmniTx.utxo
       * @instance
       */
      utxo.prototype.script = "";

      /**
       * utxo value.
       * @member {number|Long} value
       * @memberof protoc.OmniTx.utxo
       * @instance
       */
      utxo.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Creates a new utxo instance using the specified properties.
       * @function create
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {protoc.OmniTx.Iutxo=} [properties] Properties to set
       * @returns {protoc.OmniTx.utxo} utxo instance
       */
      utxo.create = function create(properties) {
        return new utxo(properties);
      };

      /**
       * Encodes the specified utxo message. Does not implicitly {@link protoc.OmniTx.utxo.verify|verify} messages.
       * @function encode
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {protoc.OmniTx.Iutxo} message utxo message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      utxo.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.publicKey != null &&
          Object.hasOwnProperty.call(message, "publicKey")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.publicKey);
        if (
          message.script != null &&
          Object.hasOwnProperty.call(message, "script")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.script);
        if (
          message.value != null &&
          Object.hasOwnProperty.call(message, "value")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.value);
        return writer;
      };

      /**
       * Encodes the specified utxo message, length delimited. Does not implicitly {@link protoc.OmniTx.utxo.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {protoc.OmniTx.Iutxo} message utxo message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      utxo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an utxo message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.OmniTx.utxo} utxo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      utxo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.OmniTx.utxo();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.publicKey = reader.string();
              break;
            case 2:
              message.script = reader.string();
              break;
            case 3:
              message.value = reader.int64();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an utxo message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.OmniTx.utxo} utxo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      utxo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an utxo message.
       * @function verify
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      utxo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
          if (!$util.isString(message.publicKey))
            return "publicKey: string expected";
        if (message.script != null && message.hasOwnProperty("script"))
          if (!$util.isString(message.script)) return "script: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
          if (
            !$util.isInteger(message.value) &&
            !(
              message.value &&
              $util.isInteger(message.value.low) &&
              $util.isInteger(message.value.high)
            )
          )
            return "value: integer|Long expected";
        return null;
      };

      /**
       * Creates an utxo message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.OmniTx.utxo} utxo
       */
      utxo.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.OmniTx.utxo) return object;
        const message = new $root.protoc.OmniTx.utxo();
        if (object.publicKey != null)
          message.publicKey = String(object.publicKey);
        if (object.script != null) message.script = String(object.script);
        if (object.value != null)
          if ($util.Long)
            (message.value = $util.Long.fromValue(
              object.value
            )).unsigned = false;
          else if (typeof object.value === "string")
            message.value = parseInt(object.value, 10);
          else if (typeof object.value === "number")
            message.value = object.value;
          else if (typeof object.value === "object")
            message.value = new $util.LongBits(
              object.value.low >>> 0,
              object.value.high >>> 0
            ).toNumber();
        return message;
      };

      /**
       * Creates a plain object from an utxo message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.OmniTx.utxo
       * @static
       * @param {protoc.OmniTx.utxo} message utxo
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      utxo.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.publicKey = "";
          object.script = "";
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.value =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.value = options.longs === String ? "0" : 0;
        }
        if (message.publicKey != null && message.hasOwnProperty("publicKey"))
          object.publicKey = message.publicKey;
        if (message.script != null && message.hasOwnProperty("script"))
          object.script = message.script;
        if (message.value != null && message.hasOwnProperty("value"))
          if (typeof message.value === "number")
            object.value =
              options.longs === String ? String(message.value) : message.value;
          else
            object.value =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.value)
                : options.longs === Number
                ? new $util.LongBits(
                    message.value.low >>> 0,
                    message.value.high >>> 0
                  ).toNumber()
                : message.value;
        return object;
      };

      /**
       * Converts this utxo to JSON.
       * @function toJSON
       * @memberof protoc.OmniTx.utxo
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      utxo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return utxo;
    })();

    return OmniTx;
  })();

  protoc.EosTx = (function () {
    /**
     * Properties of an EosTx.
     * @memberof protoc
     * @interface IEosTx
     * @property {string|null} [type] EosTx type
     * @property {string|null} [tokenAccount] EosTx tokenAccount
     * @property {protoc.EosTx.IData|null} [data] EosTx data
     * @property {protoc.EosTx.IHeader|null} [header] EosTx header
     */

    /**
     * Constructs a new EosTx.
     * @memberof protoc
     * @classdesc Represents an EosTx.
     * @implements IEosTx
     * @constructor
     * @param {protoc.IEosTx=} [properties] Properties to set
     */
    function EosTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * EosTx type.
     * @member {string} type
     * @memberof protoc.EosTx
     * @instance
     */
    EosTx.prototype.type = "";

    /**
     * EosTx tokenAccount.
     * @member {string} tokenAccount
     * @memberof protoc.EosTx
     * @instance
     */
    EosTx.prototype.tokenAccount = "";

    /**
     * EosTx data.
     * @member {protoc.EosTx.IData|null|undefined} data
     * @memberof protoc.EosTx
     * @instance
     */
    EosTx.prototype.data = null;

    /**
     * EosTx header.
     * @member {protoc.EosTx.IHeader|null|undefined} header
     * @memberof protoc.EosTx
     * @instance
     */
    EosTx.prototype.header = null;

    /**
     * Creates a new EosTx instance using the specified properties.
     * @function create
     * @memberof protoc.EosTx
     * @static
     * @param {protoc.IEosTx=} [properties] Properties to set
     * @returns {protoc.EosTx} EosTx instance
     */
    EosTx.create = function create(properties) {
      return new EosTx(properties);
    };

    /**
     * Encodes the specified EosTx message. Does not implicitly {@link protoc.EosTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.EosTx
     * @static
     * @param {protoc.IEosTx} message EosTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EosTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.type != null && Object.hasOwnProperty.call(message, "type"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.type);
      if (
        message.tokenAccount != null &&
        Object.hasOwnProperty.call(message, "tokenAccount")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.tokenAccount);
      if (message.data != null && Object.hasOwnProperty.call(message, "data"))
        $root.protoc.EosTx.Data.encode(
          message.data,
          writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
        ).ldelim();
      if (
        message.header != null &&
        Object.hasOwnProperty.call(message, "header")
      )
        $root.protoc.EosTx.Header.encode(
          message.header,
          writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified EosTx message, length delimited. Does not implicitly {@link protoc.EosTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.EosTx
     * @static
     * @param {protoc.IEosTx} message EosTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EosTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EosTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.EosTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.EosTx} EosTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EosTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.EosTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.string();
            break;
          case 2:
            message.tokenAccount = reader.string();
            break;
          case 3:
            message.data = $root.protoc.EosTx.Data.decode(
              reader,
              reader.uint32()
            );
            break;
          case 4:
            message.header = $root.protoc.EosTx.Header.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an EosTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.EosTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.EosTx} EosTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EosTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EosTx message.
     * @function verify
     * @memberof protoc.EosTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EosTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.type != null && message.hasOwnProperty("type"))
        if (!$util.isString(message.type)) return "type: string expected";
      if (
        message.tokenAccount != null &&
        message.hasOwnProperty("tokenAccount")
      )
        if (!$util.isString(message.tokenAccount))
          return "tokenAccount: string expected";
      if (message.data != null && message.hasOwnProperty("data")) {
        const error = $root.protoc.EosTx.Data.verify(message.data);
        if (error) return "data." + error;
      }
      if (message.header != null && message.hasOwnProperty("header")) {
        const error = $root.protoc.EosTx.Header.verify(message.header);
        if (error) return "header." + error;
      }
      return null;
    };

    /**
     * Creates an EosTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.EosTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.EosTx} EosTx
     */
    EosTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.EosTx) return object;
      const message = new $root.protoc.EosTx();
      if (object.type != null) message.type = String(object.type);
      if (object.tokenAccount != null)
        message.tokenAccount = String(object.tokenAccount);
      if (object.data != null) {
        if (typeof object.data !== "object")
          throw TypeError(".protoc.EosTx.data: object expected");
        message.data = $root.protoc.EosTx.Data.fromObject(object.data);
      }
      if (object.header != null) {
        if (typeof object.header !== "object")
          throw TypeError(".protoc.EosTx.header: object expected");
        message.header = $root.protoc.EosTx.Header.fromObject(object.header);
      }
      return message;
    };

    /**
     * Creates a plain object from an EosTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.EosTx
     * @static
     * @param {protoc.EosTx} message EosTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EosTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.type = "";
        object.tokenAccount = "";
        object.data = null;
        object.header = null;
      }
      if (message.type != null && message.hasOwnProperty("type"))
        object.type = message.type;
      if (
        message.tokenAccount != null &&
        message.hasOwnProperty("tokenAccount")
      )
        object.tokenAccount = message.tokenAccount;
      if (message.data != null && message.hasOwnProperty("data"))
        object.data = $root.protoc.EosTx.Data.toObject(message.data, options);
      if (message.header != null && message.hasOwnProperty("header"))
        object.header = $root.protoc.EosTx.Header.toObject(
          message.header,
          options
        );
      return object;
    };

    /**
     * Converts this EosTx to JSON.
     * @function toJSON
     * @memberof protoc.EosTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EosTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    EosTx.Data = (function () {
      /**
       * Properties of a Data.
       * @memberof protoc.EosTx
       * @interface IData
       * @property {string|null} [from] Data from
       * @property {string|null} [to] Data to
       * @property {number|Long|null} [amount] Data amount
       * @property {string|null} [symbol] Data symbol
       * @property {string|null} [memo] Data memo
       * @property {number|Long|null} [fee] Data fee
       * @property {number|null} [decimal] Data decimal
       */

      /**
       * Constructs a new Data.
       * @memberof protoc.EosTx
       * @classdesc Represents a Data.
       * @implements IData
       * @constructor
       * @param {protoc.EosTx.IData=} [properties] Properties to set
       */
      function Data(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Data from.
       * @member {string} from
       * @memberof protoc.EosTx.Data
       * @instance
       */
      Data.prototype.from = "";

      /**
       * Data to.
       * @member {string} to
       * @memberof protoc.EosTx.Data
       * @instance
       */
      Data.prototype.to = "";

      /**
       * Data amount.
       * @member {number|Long} amount
       * @memberof protoc.EosTx.Data
       * @instance
       */
      Data.prototype.amount = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Data symbol.
       * @member {string} symbol
       * @memberof protoc.EosTx.Data
       * @instance
       */
      Data.prototype.symbol = "";

      /**
       * Data memo.
       * @member {string} memo
       * @memberof protoc.EosTx.Data
       * @instance
       */
      Data.prototype.memo = "";

      /**
       * Data fee.
       * @member {number|Long} fee
       * @memberof protoc.EosTx.Data
       * @instance
       */
      Data.prototype.fee = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Data decimal.
       * @member {number} decimal
       * @memberof protoc.EosTx.Data
       * @instance
       */
      Data.prototype.decimal = 0;

      /**
       * Creates a new Data instance using the specified properties.
       * @function create
       * @memberof protoc.EosTx.Data
       * @static
       * @param {protoc.EosTx.IData=} [properties] Properties to set
       * @returns {protoc.EosTx.Data} Data instance
       */
      Data.create = function create(properties) {
        return new Data(properties);
      };

      /**
       * Encodes the specified Data message. Does not implicitly {@link protoc.EosTx.Data.verify|verify} messages.
       * @function encode
       * @memberof protoc.EosTx.Data
       * @static
       * @param {protoc.EosTx.IData} message Data message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Data.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.from != null && Object.hasOwnProperty.call(message, "from"))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.from);
        if (message.to != null && Object.hasOwnProperty.call(message, "to"))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.to);
        if (
          message.amount != null &&
          Object.hasOwnProperty.call(message, "amount")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.amount);
        if (
          message.symbol != null &&
          Object.hasOwnProperty.call(message, "symbol")
        )
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.symbol);
        if (message.memo != null && Object.hasOwnProperty.call(message, "memo"))
          writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.memo);
        if (message.fee != null && Object.hasOwnProperty.call(message, "fee"))
          writer.uint32(/* id 6, wireType 0 =*/ 48).int64(message.fee);
        if (
          message.decimal != null &&
          Object.hasOwnProperty.call(message, "decimal")
        )
          writer.uint32(/* id 7, wireType 0 =*/ 56).int32(message.decimal);
        return writer;
      };

      /**
       * Encodes the specified Data message, length delimited. Does not implicitly {@link protoc.EosTx.Data.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.EosTx.Data
       * @static
       * @param {protoc.EosTx.IData} message Data message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Data.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Data message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.EosTx.Data
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.EosTx.Data} Data
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Data.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.EosTx.Data();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.from = reader.string();
              break;
            case 2:
              message.to = reader.string();
              break;
            case 3:
              message.amount = reader.int64();
              break;
            case 4:
              message.symbol = reader.string();
              break;
            case 5:
              message.memo = reader.string();
              break;
            case 6:
              message.fee = reader.int64();
              break;
            case 7:
              message.decimal = reader.int32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Data message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.EosTx.Data
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.EosTx.Data} Data
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Data.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Data message.
       * @function verify
       * @memberof protoc.EosTx.Data
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Data.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.from != null && message.hasOwnProperty("from"))
          if (!$util.isString(message.from)) return "from: string expected";
        if (message.to != null && message.hasOwnProperty("to"))
          if (!$util.isString(message.to)) return "to: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
          if (
            !$util.isInteger(message.amount) &&
            !(
              message.amount &&
              $util.isInteger(message.amount.low) &&
              $util.isInteger(message.amount.high)
            )
          )
            return "amount: integer|Long expected";
        if (message.symbol != null && message.hasOwnProperty("symbol"))
          if (!$util.isString(message.symbol)) return "symbol: string expected";
        if (message.memo != null && message.hasOwnProperty("memo"))
          if (!$util.isString(message.memo)) return "memo: string expected";
        if (message.fee != null && message.hasOwnProperty("fee"))
          if (
            !$util.isInteger(message.fee) &&
            !(
              message.fee &&
              $util.isInteger(message.fee.low) &&
              $util.isInteger(message.fee.high)
            )
          )
            return "fee: integer|Long expected";
        if (message.decimal != null && message.hasOwnProperty("decimal"))
          if (!$util.isInteger(message.decimal))
            return "decimal: integer expected";
        return null;
      };

      /**
       * Creates a Data message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.EosTx.Data
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.EosTx.Data} Data
       */
      Data.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.EosTx.Data) return object;
        const message = new $root.protoc.EosTx.Data();
        if (object.from != null) message.from = String(object.from);
        if (object.to != null) message.to = String(object.to);
        if (object.amount != null)
          if ($util.Long)
            (message.amount = $util.Long.fromValue(
              object.amount
            )).unsigned = false;
          else if (typeof object.amount === "string")
            message.amount = parseInt(object.amount, 10);
          else if (typeof object.amount === "number")
            message.amount = object.amount;
          else if (typeof object.amount === "object")
            message.amount = new $util.LongBits(
              object.amount.low >>> 0,
              object.amount.high >>> 0
            ).toNumber();
        if (object.symbol != null) message.symbol = String(object.symbol);
        if (object.memo != null) message.memo = String(object.memo);
        if (object.fee != null)
          if ($util.Long)
            (message.fee = $util.Long.fromValue(object.fee)).unsigned = false;
          else if (typeof object.fee === "string")
            message.fee = parseInt(object.fee, 10);
          else if (typeof object.fee === "number") message.fee = object.fee;
          else if (typeof object.fee === "object")
            message.fee = new $util.LongBits(
              object.fee.low >>> 0,
              object.fee.high >>> 0
            ).toNumber();
        if (object.decimal != null) message.decimal = object.decimal | 0;
        return message;
      };

      /**
       * Creates a plain object from a Data message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.EosTx.Data
       * @static
       * @param {protoc.EosTx.Data} message Data
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Data.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.from = "";
          object.to = "";
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.amount =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.amount = options.longs === String ? "0" : 0;
          object.symbol = "";
          object.memo = "";
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.fee =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.fee = options.longs === String ? "0" : 0;
          object.decimal = 0;
        }
        if (message.from != null && message.hasOwnProperty("from"))
          object.from = message.from;
        if (message.to != null && message.hasOwnProperty("to"))
          object.to = message.to;
        if (message.amount != null && message.hasOwnProperty("amount"))
          if (typeof message.amount === "number")
            object.amount =
              options.longs === String
                ? String(message.amount)
                : message.amount;
          else
            object.amount =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.amount)
                : options.longs === Number
                ? new $util.LongBits(
                    message.amount.low >>> 0,
                    message.amount.high >>> 0
                  ).toNumber()
                : message.amount;
        if (message.symbol != null && message.hasOwnProperty("symbol"))
          object.symbol = message.symbol;
        if (message.memo != null && message.hasOwnProperty("memo"))
          object.memo = message.memo;
        if (message.fee != null && message.hasOwnProperty("fee"))
          if (typeof message.fee === "number")
            object.fee =
              options.longs === String ? String(message.fee) : message.fee;
          else
            object.fee =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.fee)
                : options.longs === Number
                ? new $util.LongBits(
                    message.fee.low >>> 0,
                    message.fee.high >>> 0
                  ).toNumber()
                : message.fee;
        if (message.decimal != null && message.hasOwnProperty("decimal"))
          object.decimal = message.decimal;
        return object;
      };

      /**
       * Converts this Data to JSON.
       * @function toJSON
       * @memberof protoc.EosTx.Data
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Data.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Data;
    })();

    EosTx.Header = (function () {
      /**
       * Properties of a Header.
       * @memberof protoc.EosTx
       * @interface IHeader
       * @property {number|Long|null} [time] Header time
       * @property {number|null} [expireInSeconds] Header expireInSeconds
       * @property {number|Long|null} [refBlockNum] Header refBlockNum
       * @property {number|Long|null} [refBlockPrefix] Header refBlockPrefix
       */

      /**
       * Constructs a new Header.
       * @memberof protoc.EosTx
       * @classdesc Represents a Header.
       * @implements IHeader
       * @constructor
       * @param {protoc.EosTx.IHeader=} [properties] Properties to set
       */
      function Header(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Header time.
       * @member {number|Long} time
       * @memberof protoc.EosTx.Header
       * @instance
       */
      Header.prototype.time = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

      /**
       * Header expireInSeconds.
       * @member {number} expireInSeconds
       * @memberof protoc.EosTx.Header
       * @instance
       */
      Header.prototype.expireInSeconds = 0;

      /**
       * Header refBlockNum.
       * @member {number|Long} refBlockNum
       * @memberof protoc.EosTx.Header
       * @instance
       */
      Header.prototype.refBlockNum = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      /**
       * Header refBlockPrefix.
       * @member {number|Long} refBlockPrefix
       * @memberof protoc.EosTx.Header
       * @instance
       */
      Header.prototype.refBlockPrefix = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      /**
       * Creates a new Header instance using the specified properties.
       * @function create
       * @memberof protoc.EosTx.Header
       * @static
       * @param {protoc.EosTx.IHeader=} [properties] Properties to set
       * @returns {protoc.EosTx.Header} Header instance
       */
      Header.create = function create(properties) {
        return new Header(properties);
      };

      /**
       * Encodes the specified Header message. Does not implicitly {@link protoc.EosTx.Header.verify|verify} messages.
       * @function encode
       * @memberof protoc.EosTx.Header
       * @static
       * @param {protoc.EosTx.IHeader} message Header message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Header.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.time);
        if (
          message.expireInSeconds != null &&
          Object.hasOwnProperty.call(message, "expireInSeconds")
        )
          writer
            .uint32(/* id 2, wireType 0 =*/ 16)
            .int32(message.expireInSeconds);
        if (
          message.refBlockNum != null &&
          Object.hasOwnProperty.call(message, "refBlockNum")
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int64(message.refBlockNum);
        if (
          message.refBlockPrefix != null &&
          Object.hasOwnProperty.call(message, "refBlockPrefix")
        )
          writer
            .uint32(/* id 4, wireType 0 =*/ 32)
            .int64(message.refBlockPrefix);
        return writer;
      };

      /**
       * Encodes the specified Header message, length delimited. Does not implicitly {@link protoc.EosTx.Header.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.EosTx.Header
       * @static
       * @param {protoc.EosTx.IHeader} message Header message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Header.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Header message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.EosTx.Header
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.EosTx.Header} Header
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Header.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.EosTx.Header();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.time = reader.int64();
              break;
            case 2:
              message.expireInSeconds = reader.int32();
              break;
            case 3:
              message.refBlockNum = reader.int64();
              break;
            case 4:
              message.refBlockPrefix = reader.int64();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Header message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.EosTx.Header
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.EosTx.Header} Header
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Header.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Header message.
       * @function verify
       * @memberof protoc.EosTx.Header
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Header.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.time != null && message.hasOwnProperty("time"))
          if (
            !$util.isInteger(message.time) &&
            !(
              message.time &&
              $util.isInteger(message.time.low) &&
              $util.isInteger(message.time.high)
            )
          )
            return "time: integer|Long expected";
        if (
          message.expireInSeconds != null &&
          message.hasOwnProperty("expireInSeconds")
        )
          if (!$util.isInteger(message.expireInSeconds))
            return "expireInSeconds: integer expected";
        if (
          message.refBlockNum != null &&
          message.hasOwnProperty("refBlockNum")
        )
          if (
            !$util.isInteger(message.refBlockNum) &&
            !(
              message.refBlockNum &&
              $util.isInteger(message.refBlockNum.low) &&
              $util.isInteger(message.refBlockNum.high)
            )
          )
            return "refBlockNum: integer|Long expected";
        if (
          message.refBlockPrefix != null &&
          message.hasOwnProperty("refBlockPrefix")
        )
          if (
            !$util.isInteger(message.refBlockPrefix) &&
            !(
              message.refBlockPrefix &&
              $util.isInteger(message.refBlockPrefix.low) &&
              $util.isInteger(message.refBlockPrefix.high)
            )
          )
            return "refBlockPrefix: integer|Long expected";
        return null;
      };

      /**
       * Creates a Header message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.EosTx.Header
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.EosTx.Header} Header
       */
      Header.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.EosTx.Header) return object;
        const message = new $root.protoc.EosTx.Header();
        if (object.time != null)
          if ($util.Long)
            (message.time = $util.Long.fromValue(object.time)).unsigned = false;
          else if (typeof object.time === "string")
            message.time = parseInt(object.time, 10);
          else if (typeof object.time === "number") message.time = object.time;
          else if (typeof object.time === "object")
            message.time = new $util.LongBits(
              object.time.low >>> 0,
              object.time.high >>> 0
            ).toNumber();
        if (object.expireInSeconds != null)
          message.expireInSeconds = object.expireInSeconds | 0;
        if (object.refBlockNum != null)
          if ($util.Long)
            (message.refBlockNum = $util.Long.fromValue(
              object.refBlockNum
            )).unsigned = false;
          else if (typeof object.refBlockNum === "string")
            message.refBlockNum = parseInt(object.refBlockNum, 10);
          else if (typeof object.refBlockNum === "number")
            message.refBlockNum = object.refBlockNum;
          else if (typeof object.refBlockNum === "object")
            message.refBlockNum = new $util.LongBits(
              object.refBlockNum.low >>> 0,
              object.refBlockNum.high >>> 0
            ).toNumber();
        if (object.refBlockPrefix != null)
          if ($util.Long)
            (message.refBlockPrefix = $util.Long.fromValue(
              object.refBlockPrefix
            )).unsigned = false;
          else if (typeof object.refBlockPrefix === "string")
            message.refBlockPrefix = parseInt(object.refBlockPrefix, 10);
          else if (typeof object.refBlockPrefix === "number")
            message.refBlockPrefix = object.refBlockPrefix;
          else if (typeof object.refBlockPrefix === "object")
            message.refBlockPrefix = new $util.LongBits(
              object.refBlockPrefix.low >>> 0,
              object.refBlockPrefix.high >>> 0
            ).toNumber();
        return message;
      };

      /**
       * Creates a plain object from a Header message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.EosTx.Header
       * @static
       * @param {protoc.EosTx.Header} message Header
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Header.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.time =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.time = options.longs === String ? "0" : 0;
          object.expireInSeconds = 0;
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.refBlockNum =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.refBlockNum = options.longs === String ? "0" : 0;
          if ($util.Long) {
            const long = new $util.Long(0, 0, false);
            object.refBlockPrefix =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.refBlockPrefix = options.longs === String ? "0" : 0;
        }
        if (message.time != null && message.hasOwnProperty("time"))
          if (typeof message.time === "number")
            object.time =
              options.longs === String ? String(message.time) : message.time;
          else
            object.time =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.time)
                : options.longs === Number
                ? new $util.LongBits(
                    message.time.low >>> 0,
                    message.time.high >>> 0
                  ).toNumber()
                : message.time;
        if (
          message.expireInSeconds != null &&
          message.hasOwnProperty("expireInSeconds")
        )
          object.expireInSeconds = message.expireInSeconds;
        if (
          message.refBlockNum != null &&
          message.hasOwnProperty("refBlockNum")
        )
          if (typeof message.refBlockNum === "number")
            object.refBlockNum =
              options.longs === String
                ? String(message.refBlockNum)
                : message.refBlockNum;
          else
            object.refBlockNum =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.refBlockNum)
                : options.longs === Number
                ? new $util.LongBits(
                    message.refBlockNum.low >>> 0,
                    message.refBlockNum.high >>> 0
                  ).toNumber()
                : message.refBlockNum;
        if (
          message.refBlockPrefix != null &&
          message.hasOwnProperty("refBlockPrefix")
        )
          if (typeof message.refBlockPrefix === "number")
            object.refBlockPrefix =
              options.longs === String
                ? String(message.refBlockPrefix)
                : message.refBlockPrefix;
          else
            object.refBlockPrefix =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.refBlockPrefix)
                : options.longs === Number
                ? new $util.LongBits(
                    message.refBlockPrefix.low >>> 0,
                    message.refBlockPrefix.high >>> 0
                  ).toNumber()
                : message.refBlockPrefix;
        return object;
      };

      /**
       * Converts this Header to JSON.
       * @function toJSON
       * @memberof protoc.EosTx.Header
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Header.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Header;
    })();

    return EosTx;
  })();

  protoc.DotTx = (function () {
    /**
     * Properties of a DotTx.
     * @memberof protoc
     * @interface IDotTx
     * @property {number|Long|null} [value] DotTx value
     * @property {string|null} [dest] DotTx dest
     * @property {string|null} [blockHash] DotTx blockHash
     * @property {number|Long|null} [nonce] DotTx nonce
     * @property {number|Long|null} [tip] DotTx tip
     * @property {number|Long|null} [transactionVersion] DotTx transactionVersion
     * @property {number|Long|null} [specVersion] DotTx specVersion
     * @property {number|Long|null} [validityPeriod] DotTx validityPeriod
     * @property {number|Long|null} [implVersion] DotTx implVersion
     * @property {number|Long|null} [authoringVersion] DotTx authoringVersion
     * @property {number|null} [blockNumber] DotTx blockNumber
     */

    /**
     * Constructs a new DotTx.
     * @memberof protoc
     * @classdesc Represents a DotTx.
     * @implements IDotTx
     * @constructor
     * @param {protoc.IDotTx=} [properties] Properties to set
     */
    function DotTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DotTx value.
     * @member {number|Long} value
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * DotTx dest.
     * @member {string} dest
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.dest = "";

    /**
     * DotTx blockHash.
     * @member {string} blockHash
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.blockHash = "";

    /**
     * DotTx nonce.
     * @member {number|Long} nonce
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.nonce = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * DotTx tip.
     * @member {number|Long} tip
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.tip = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * DotTx transactionVersion.
     * @member {number|Long} transactionVersion
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.transactionVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * DotTx specVersion.
     * @member {number|Long} specVersion
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.specVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * DotTx validityPeriod.
     * @member {number|Long} validityPeriod
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.validityPeriod = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * DotTx implVersion.
     * @member {number|Long} implVersion
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.implVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * DotTx authoringVersion.
     * @member {number|Long} authoringVersion
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.authoringVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * DotTx blockNumber.
     * @member {number} blockNumber
     * @memberof protoc.DotTx
     * @instance
     */
    DotTx.prototype.blockNumber = 0;

    /**
     * Creates a new DotTx instance using the specified properties.
     * @function create
     * @memberof protoc.DotTx
     * @static
     * @param {protoc.IDotTx=} [properties] Properties to set
     * @returns {protoc.DotTx} DotTx instance
     */
    DotTx.create = function create(properties) {
      return new DotTx(properties);
    };

    /**
     * Encodes the specified DotTx message. Does not implicitly {@link protoc.DotTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.DotTx
     * @static
     * @param {protoc.IDotTx} message DotTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DotTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.value);
      if (message.dest != null && Object.hasOwnProperty.call(message, "dest"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.dest);
      if (
        message.blockHash != null &&
        Object.hasOwnProperty.call(message, "blockHash")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.blockHash);
      if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.nonce);
      if (message.tip != null && Object.hasOwnProperty.call(message, "tip"))
        writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.tip);
      if (
        message.transactionVersion != null &&
        Object.hasOwnProperty.call(message, "transactionVersion")
      )
        writer
          .uint32(/* id 6, wireType 0 =*/ 48)
          .int64(message.transactionVersion);
      if (
        message.specVersion != null &&
        Object.hasOwnProperty.call(message, "specVersion")
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.specVersion);
      if (
        message.validityPeriod != null &&
        Object.hasOwnProperty.call(message, "validityPeriod")
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.validityPeriod);
      if (
        message.implVersion != null &&
        Object.hasOwnProperty.call(message, "implVersion")
      )
        writer.uint32(/* id 9, wireType 0 =*/ 72).int64(message.implVersion);
      if (
        message.authoringVersion != null &&
        Object.hasOwnProperty.call(message, "authoringVersion")
      )
        writer
          .uint32(/* id 10, wireType 0 =*/ 80)
          .int64(message.authoringVersion);
      if (
        message.blockNumber != null &&
        Object.hasOwnProperty.call(message, "blockNumber")
      )
        writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.blockNumber);
      return writer;
    };

    /**
     * Encodes the specified DotTx message, length delimited. Does not implicitly {@link protoc.DotTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.DotTx
     * @static
     * @param {protoc.IDotTx} message DotTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DotTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DotTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.DotTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.DotTx} DotTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DotTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.DotTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.int64();
            break;
          case 2:
            message.dest = reader.string();
            break;
          case 3:
            message.blockHash = reader.string();
            break;
          case 4:
            message.nonce = reader.int64();
            break;
          case 5:
            message.tip = reader.int64();
            break;
          case 6:
            message.transactionVersion = reader.int64();
            break;
          case 7:
            message.specVersion = reader.int64();
            break;
          case 8:
            message.validityPeriod = reader.int64();
            break;
          case 9:
            message.implVersion = reader.int64();
            break;
          case 10:
            message.authoringVersion = reader.int64();
            break;
          case 11:
            message.blockNumber = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DotTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.DotTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.DotTx} DotTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DotTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DotTx message.
     * @function verify
     * @memberof protoc.DotTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DotTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (
          !$util.isInteger(message.value) &&
          !(
            message.value &&
            $util.isInteger(message.value.low) &&
            $util.isInteger(message.value.high)
          )
        )
          return "value: integer|Long expected";
      if (message.dest != null && message.hasOwnProperty("dest"))
        if (!$util.isString(message.dest)) return "dest: string expected";
      if (message.blockHash != null && message.hasOwnProperty("blockHash"))
        if (!$util.isString(message.blockHash))
          return "blockHash: string expected";
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        if (
          !$util.isInteger(message.nonce) &&
          !(
            message.nonce &&
            $util.isInteger(message.nonce.low) &&
            $util.isInteger(message.nonce.high)
          )
        )
          return "nonce: integer|Long expected";
      if (message.tip != null && message.hasOwnProperty("tip"))
        if (
          !$util.isInteger(message.tip) &&
          !(
            message.tip &&
            $util.isInteger(message.tip.low) &&
            $util.isInteger(message.tip.high)
          )
        )
          return "tip: integer|Long expected";
      if (
        message.transactionVersion != null &&
        message.hasOwnProperty("transactionVersion")
      )
        if (
          !$util.isInteger(message.transactionVersion) &&
          !(
            message.transactionVersion &&
            $util.isInteger(message.transactionVersion.low) &&
            $util.isInteger(message.transactionVersion.high)
          )
        )
          return "transactionVersion: integer|Long expected";
      if (message.specVersion != null && message.hasOwnProperty("specVersion"))
        if (
          !$util.isInteger(message.specVersion) &&
          !(
            message.specVersion &&
            $util.isInteger(message.specVersion.low) &&
            $util.isInteger(message.specVersion.high)
          )
        )
          return "specVersion: integer|Long expected";
      if (
        message.validityPeriod != null &&
        message.hasOwnProperty("validityPeriod")
      )
        if (
          !$util.isInteger(message.validityPeriod) &&
          !(
            message.validityPeriod &&
            $util.isInteger(message.validityPeriod.low) &&
            $util.isInteger(message.validityPeriod.high)
          )
        )
          return "validityPeriod: integer|Long expected";
      if (message.implVersion != null && message.hasOwnProperty("implVersion"))
        if (
          !$util.isInteger(message.implVersion) &&
          !(
            message.implVersion &&
            $util.isInteger(message.implVersion.low) &&
            $util.isInteger(message.implVersion.high)
          )
        )
          return "implVersion: integer|Long expected";
      if (
        message.authoringVersion != null &&
        message.hasOwnProperty("authoringVersion")
      )
        if (
          !$util.isInteger(message.authoringVersion) &&
          !(
            message.authoringVersion &&
            $util.isInteger(message.authoringVersion.low) &&
            $util.isInteger(message.authoringVersion.high)
          )
        )
          return "authoringVersion: integer|Long expected";
      if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
        if (!$util.isInteger(message.blockNumber))
          return "blockNumber: integer expected";
      return null;
    };

    /**
     * Creates a DotTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.DotTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.DotTx} DotTx
     */
    DotTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.DotTx) return object;
      const message = new $root.protoc.DotTx();
      if (object.value != null)
        if ($util.Long)
          (message.value = $util.Long.fromValue(object.value)).unsigned = false;
        else if (typeof object.value === "string")
          message.value = parseInt(object.value, 10);
        else if (typeof object.value === "number") message.value = object.value;
        else if (typeof object.value === "object")
          message.value = new $util.LongBits(
            object.value.low >>> 0,
            object.value.high >>> 0
          ).toNumber();
      if (object.dest != null) message.dest = String(object.dest);
      if (object.blockHash != null)
        message.blockHash = String(object.blockHash);
      if (object.nonce != null)
        if ($util.Long)
          (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = false;
        else if (typeof object.nonce === "string")
          message.nonce = parseInt(object.nonce, 10);
        else if (typeof object.nonce === "number") message.nonce = object.nonce;
        else if (typeof object.nonce === "object")
          message.nonce = new $util.LongBits(
            object.nonce.low >>> 0,
            object.nonce.high >>> 0
          ).toNumber();
      if (object.tip != null)
        if ($util.Long)
          (message.tip = $util.Long.fromValue(object.tip)).unsigned = false;
        else if (typeof object.tip === "string")
          message.tip = parseInt(object.tip, 10);
        else if (typeof object.tip === "number") message.tip = object.tip;
        else if (typeof object.tip === "object")
          message.tip = new $util.LongBits(
            object.tip.low >>> 0,
            object.tip.high >>> 0
          ).toNumber();
      if (object.transactionVersion != null)
        if ($util.Long)
          (message.transactionVersion = $util.Long.fromValue(
            object.transactionVersion
          )).unsigned = false;
        else if (typeof object.transactionVersion === "string")
          message.transactionVersion = parseInt(object.transactionVersion, 10);
        else if (typeof object.transactionVersion === "number")
          message.transactionVersion = object.transactionVersion;
        else if (typeof object.transactionVersion === "object")
          message.transactionVersion = new $util.LongBits(
            object.transactionVersion.low >>> 0,
            object.transactionVersion.high >>> 0
          ).toNumber();
      if (object.specVersion != null)
        if ($util.Long)
          (message.specVersion = $util.Long.fromValue(
            object.specVersion
          )).unsigned = false;
        else if (typeof object.specVersion === "string")
          message.specVersion = parseInt(object.specVersion, 10);
        else if (typeof object.specVersion === "number")
          message.specVersion = object.specVersion;
        else if (typeof object.specVersion === "object")
          message.specVersion = new $util.LongBits(
            object.specVersion.low >>> 0,
            object.specVersion.high >>> 0
          ).toNumber();
      if (object.validityPeriod != null)
        if ($util.Long)
          (message.validityPeriod = $util.Long.fromValue(
            object.validityPeriod
          )).unsigned = false;
        else if (typeof object.validityPeriod === "string")
          message.validityPeriod = parseInt(object.validityPeriod, 10);
        else if (typeof object.validityPeriod === "number")
          message.validityPeriod = object.validityPeriod;
        else if (typeof object.validityPeriod === "object")
          message.validityPeriod = new $util.LongBits(
            object.validityPeriod.low >>> 0,
            object.validityPeriod.high >>> 0
          ).toNumber();
      if (object.implVersion != null)
        if ($util.Long)
          (message.implVersion = $util.Long.fromValue(
            object.implVersion
          )).unsigned = false;
        else if (typeof object.implVersion === "string")
          message.implVersion = parseInt(object.implVersion, 10);
        else if (typeof object.implVersion === "number")
          message.implVersion = object.implVersion;
        else if (typeof object.implVersion === "object")
          message.implVersion = new $util.LongBits(
            object.implVersion.low >>> 0,
            object.implVersion.high >>> 0
          ).toNumber();
      if (object.authoringVersion != null)
        if ($util.Long)
          (message.authoringVersion = $util.Long.fromValue(
            object.authoringVersion
          )).unsigned = false;
        else if (typeof object.authoringVersion === "string")
          message.authoringVersion = parseInt(object.authoringVersion, 10);
        else if (typeof object.authoringVersion === "number")
          message.authoringVersion = object.authoringVersion;
        else if (typeof object.authoringVersion === "object")
          message.authoringVersion = new $util.LongBits(
            object.authoringVersion.low >>> 0,
            object.authoringVersion.high >>> 0
          ).toNumber();
      if (object.blockNumber != null)
        message.blockNumber = object.blockNumber | 0;
      return message;
    };

    /**
     * Creates a plain object from a DotTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.DotTx
     * @static
     * @param {protoc.DotTx} message DotTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DotTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.value =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.value = options.longs === String ? "0" : 0;
        object.dest = "";
        object.blockHash = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.nonce =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.nonce = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.tip =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.tip = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.transactionVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.transactionVersion = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.specVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.specVersion = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.validityPeriod =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.validityPeriod = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.implVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.implVersion = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.authoringVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.authoringVersion = options.longs === String ? "0" : 0;
        object.blockNumber = 0;
      }
      if (message.value != null && message.hasOwnProperty("value"))
        if (typeof message.value === "number")
          object.value =
            options.longs === String ? String(message.value) : message.value;
        else
          object.value =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.value)
              : options.longs === Number
              ? new $util.LongBits(
                  message.value.low >>> 0,
                  message.value.high >>> 0
                ).toNumber()
              : message.value;
      if (message.dest != null && message.hasOwnProperty("dest"))
        object.dest = message.dest;
      if (message.blockHash != null && message.hasOwnProperty("blockHash"))
        object.blockHash = message.blockHash;
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        if (typeof message.nonce === "number")
          object.nonce =
            options.longs === String ? String(message.nonce) : message.nonce;
        else
          object.nonce =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.nonce)
              : options.longs === Number
              ? new $util.LongBits(
                  message.nonce.low >>> 0,
                  message.nonce.high >>> 0
                ).toNumber()
              : message.nonce;
      if (message.tip != null && message.hasOwnProperty("tip"))
        if (typeof message.tip === "number")
          object.tip =
            options.longs === String ? String(message.tip) : message.tip;
        else
          object.tip =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.tip)
              : options.longs === Number
              ? new $util.LongBits(
                  message.tip.low >>> 0,
                  message.tip.high >>> 0
                ).toNumber()
              : message.tip;
      if (
        message.transactionVersion != null &&
        message.hasOwnProperty("transactionVersion")
      )
        if (typeof message.transactionVersion === "number")
          object.transactionVersion =
            options.longs === String
              ? String(message.transactionVersion)
              : message.transactionVersion;
        else
          object.transactionVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.transactionVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.transactionVersion.low >>> 0,
                  message.transactionVersion.high >>> 0
                ).toNumber()
              : message.transactionVersion;
      if (message.specVersion != null && message.hasOwnProperty("specVersion"))
        if (typeof message.specVersion === "number")
          object.specVersion =
            options.longs === String
              ? String(message.specVersion)
              : message.specVersion;
        else
          object.specVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.specVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.specVersion.low >>> 0,
                  message.specVersion.high >>> 0
                ).toNumber()
              : message.specVersion;
      if (
        message.validityPeriod != null &&
        message.hasOwnProperty("validityPeriod")
      )
        if (typeof message.validityPeriod === "number")
          object.validityPeriod =
            options.longs === String
              ? String(message.validityPeriod)
              : message.validityPeriod;
        else
          object.validityPeriod =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.validityPeriod)
              : options.longs === Number
              ? new $util.LongBits(
                  message.validityPeriod.low >>> 0,
                  message.validityPeriod.high >>> 0
                ).toNumber()
              : message.validityPeriod;
      if (message.implVersion != null && message.hasOwnProperty("implVersion"))
        if (typeof message.implVersion === "number")
          object.implVersion =
            options.longs === String
              ? String(message.implVersion)
              : message.implVersion;
        else
          object.implVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.implVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.implVersion.low >>> 0,
                  message.implVersion.high >>> 0
                ).toNumber()
              : message.implVersion;
      if (
        message.authoringVersion != null &&
        message.hasOwnProperty("authoringVersion")
      )
        if (typeof message.authoringVersion === "number")
          object.authoringVersion =
            options.longs === String
              ? String(message.authoringVersion)
              : message.authoringVersion;
        else
          object.authoringVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.authoringVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.authoringVersion.low >>> 0,
                  message.authoringVersion.high >>> 0
                ).toNumber()
              : message.authoringVersion;
      if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
        object.blockNumber = message.blockNumber;
      return object;
    };

    /**
     * Converts this DotTx to JSON.
     * @function toJSON
     * @memberof protoc.DotTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DotTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DotTx;
  })();

  protoc.KsmTx = (function () {
    /**
     * Properties of a KsmTx.
     * @memberof protoc
     * @interface IKsmTx
     * @property {number|Long|null} [value] KsmTx value
     * @property {string|null} [dest] KsmTx dest
     * @property {string|null} [blockHash] KsmTx blockHash
     * @property {number|Long|null} [nonce] KsmTx nonce
     * @property {number|Long|null} [tip] KsmTx tip
     * @property {number|Long|null} [transactionVersion] KsmTx transactionVersion
     * @property {number|Long|null} [specVersion] KsmTx specVersion
     * @property {number|Long|null} [validityPeriod] KsmTx validityPeriod
     * @property {number|Long|null} [implVersion] KsmTx implVersion
     * @property {number|Long|null} [authoringVersion] KsmTx authoringVersion
     * @property {number|null} [blockNumber] KsmTx blockNumber
     */

    /**
     * Constructs a new KsmTx.
     * @memberof protoc
     * @classdesc Represents a KsmTx.
     * @implements IKsmTx
     * @constructor
     * @param {protoc.IKsmTx=} [properties] Properties to set
     */
    function KsmTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * KsmTx value.
     * @member {number|Long} value
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * KsmTx dest.
     * @member {string} dest
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.dest = "";

    /**
     * KsmTx blockHash.
     * @member {string} blockHash
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.blockHash = "";

    /**
     * KsmTx nonce.
     * @member {number|Long} nonce
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.nonce = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * KsmTx tip.
     * @member {number|Long} tip
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.tip = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;

    /**
     * KsmTx transactionVersion.
     * @member {number|Long} transactionVersion
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.transactionVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * KsmTx specVersion.
     * @member {number|Long} specVersion
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.specVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * KsmTx validityPeriod.
     * @member {number|Long} validityPeriod
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.validityPeriod = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * KsmTx implVersion.
     * @member {number|Long} implVersion
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.implVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * KsmTx authoringVersion.
     * @member {number|Long} authoringVersion
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.authoringVersion = $util.Long
      ? $util.Long.fromBits(0, 0, false)
      : 0;

    /**
     * KsmTx blockNumber.
     * @member {number} blockNumber
     * @memberof protoc.KsmTx
     * @instance
     */
    KsmTx.prototype.blockNumber = 0;

    /**
     * Creates a new KsmTx instance using the specified properties.
     * @function create
     * @memberof protoc.KsmTx
     * @static
     * @param {protoc.IKsmTx=} [properties] Properties to set
     * @returns {protoc.KsmTx} KsmTx instance
     */
    KsmTx.create = function create(properties) {
      return new KsmTx(properties);
    };

    /**
     * Encodes the specified KsmTx message. Does not implicitly {@link protoc.KsmTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.KsmTx
     * @static
     * @param {protoc.IKsmTx} message KsmTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KsmTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.value);
      if (message.dest != null && Object.hasOwnProperty.call(message, "dest"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.dest);
      if (
        message.blockHash != null &&
        Object.hasOwnProperty.call(message, "blockHash")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.blockHash);
      if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
        writer.uint32(/* id 4, wireType 0 =*/ 32).int64(message.nonce);
      if (message.tip != null && Object.hasOwnProperty.call(message, "tip"))
        writer.uint32(/* id 5, wireType 0 =*/ 40).int64(message.tip);
      if (
        message.transactionVersion != null &&
        Object.hasOwnProperty.call(message, "transactionVersion")
      )
        writer
          .uint32(/* id 6, wireType 0 =*/ 48)
          .int64(message.transactionVersion);
      if (
        message.specVersion != null &&
        Object.hasOwnProperty.call(message, "specVersion")
      )
        writer.uint32(/* id 7, wireType 0 =*/ 56).int64(message.specVersion);
      if (
        message.validityPeriod != null &&
        Object.hasOwnProperty.call(message, "validityPeriod")
      )
        writer.uint32(/* id 8, wireType 0 =*/ 64).int64(message.validityPeriod);
      if (
        message.implVersion != null &&
        Object.hasOwnProperty.call(message, "implVersion")
      )
        writer.uint32(/* id 9, wireType 0 =*/ 72).int64(message.implVersion);
      if (
        message.authoringVersion != null &&
        Object.hasOwnProperty.call(message, "authoringVersion")
      )
        writer
          .uint32(/* id 10, wireType 0 =*/ 80)
          .int64(message.authoringVersion);
      if (
        message.blockNumber != null &&
        Object.hasOwnProperty.call(message, "blockNumber")
      )
        writer.uint32(/* id 11, wireType 0 =*/ 88).int32(message.blockNumber);
      return writer;
    };

    /**
     * Encodes the specified KsmTx message, length delimited. Does not implicitly {@link protoc.KsmTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.KsmTx
     * @static
     * @param {protoc.IKsmTx} message KsmTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    KsmTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a KsmTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.KsmTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.KsmTx} KsmTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KsmTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.KsmTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.int64();
            break;
          case 2:
            message.dest = reader.string();
            break;
          case 3:
            message.blockHash = reader.string();
            break;
          case 4:
            message.nonce = reader.int64();
            break;
          case 5:
            message.tip = reader.int64();
            break;
          case 6:
            message.transactionVersion = reader.int64();
            break;
          case 7:
            message.specVersion = reader.int64();
            break;
          case 8:
            message.validityPeriod = reader.int64();
            break;
          case 9:
            message.implVersion = reader.int64();
            break;
          case 10:
            message.authoringVersion = reader.int64();
            break;
          case 11:
            message.blockNumber = reader.int32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a KsmTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.KsmTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.KsmTx} KsmTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    KsmTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a KsmTx message.
     * @function verify
     * @memberof protoc.KsmTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    KsmTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (
          !$util.isInteger(message.value) &&
          !(
            message.value &&
            $util.isInteger(message.value.low) &&
            $util.isInteger(message.value.high)
          )
        )
          return "value: integer|Long expected";
      if (message.dest != null && message.hasOwnProperty("dest"))
        if (!$util.isString(message.dest)) return "dest: string expected";
      if (message.blockHash != null && message.hasOwnProperty("blockHash"))
        if (!$util.isString(message.blockHash))
          return "blockHash: string expected";
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        if (
          !$util.isInteger(message.nonce) &&
          !(
            message.nonce &&
            $util.isInteger(message.nonce.low) &&
            $util.isInteger(message.nonce.high)
          )
        )
          return "nonce: integer|Long expected";
      if (message.tip != null && message.hasOwnProperty("tip"))
        if (
          !$util.isInteger(message.tip) &&
          !(
            message.tip &&
            $util.isInteger(message.tip.low) &&
            $util.isInteger(message.tip.high)
          )
        )
          return "tip: integer|Long expected";
      if (
        message.transactionVersion != null &&
        message.hasOwnProperty("transactionVersion")
      )
        if (
          !$util.isInteger(message.transactionVersion) &&
          !(
            message.transactionVersion &&
            $util.isInteger(message.transactionVersion.low) &&
            $util.isInteger(message.transactionVersion.high)
          )
        )
          return "transactionVersion: integer|Long expected";
      if (message.specVersion != null && message.hasOwnProperty("specVersion"))
        if (
          !$util.isInteger(message.specVersion) &&
          !(
            message.specVersion &&
            $util.isInteger(message.specVersion.low) &&
            $util.isInteger(message.specVersion.high)
          )
        )
          return "specVersion: integer|Long expected";
      if (
        message.validityPeriod != null &&
        message.hasOwnProperty("validityPeriod")
      )
        if (
          !$util.isInteger(message.validityPeriod) &&
          !(
            message.validityPeriod &&
            $util.isInteger(message.validityPeriod.low) &&
            $util.isInteger(message.validityPeriod.high)
          )
        )
          return "validityPeriod: integer|Long expected";
      if (message.implVersion != null && message.hasOwnProperty("implVersion"))
        if (
          !$util.isInteger(message.implVersion) &&
          !(
            message.implVersion &&
            $util.isInteger(message.implVersion.low) &&
            $util.isInteger(message.implVersion.high)
          )
        )
          return "implVersion: integer|Long expected";
      if (
        message.authoringVersion != null &&
        message.hasOwnProperty("authoringVersion")
      )
        if (
          !$util.isInteger(message.authoringVersion) &&
          !(
            message.authoringVersion &&
            $util.isInteger(message.authoringVersion.low) &&
            $util.isInteger(message.authoringVersion.high)
          )
        )
          return "authoringVersion: integer|Long expected";
      if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
        if (!$util.isInteger(message.blockNumber))
          return "blockNumber: integer expected";
      return null;
    };

    /**
     * Creates a KsmTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.KsmTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.KsmTx} KsmTx
     */
    KsmTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.KsmTx) return object;
      const message = new $root.protoc.KsmTx();
      if (object.value != null)
        if ($util.Long)
          (message.value = $util.Long.fromValue(object.value)).unsigned = false;
        else if (typeof object.value === "string")
          message.value = parseInt(object.value, 10);
        else if (typeof object.value === "number") message.value = object.value;
        else if (typeof object.value === "object")
          message.value = new $util.LongBits(
            object.value.low >>> 0,
            object.value.high >>> 0
          ).toNumber();
      if (object.dest != null) message.dest = String(object.dest);
      if (object.blockHash != null)
        message.blockHash = String(object.blockHash);
      if (object.nonce != null)
        if ($util.Long)
          (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = false;
        else if (typeof object.nonce === "string")
          message.nonce = parseInt(object.nonce, 10);
        else if (typeof object.nonce === "number") message.nonce = object.nonce;
        else if (typeof object.nonce === "object")
          message.nonce = new $util.LongBits(
            object.nonce.low >>> 0,
            object.nonce.high >>> 0
          ).toNumber();
      if (object.tip != null)
        if ($util.Long)
          (message.tip = $util.Long.fromValue(object.tip)).unsigned = false;
        else if (typeof object.tip === "string")
          message.tip = parseInt(object.tip, 10);
        else if (typeof object.tip === "number") message.tip = object.tip;
        else if (typeof object.tip === "object")
          message.tip = new $util.LongBits(
            object.tip.low >>> 0,
            object.tip.high >>> 0
          ).toNumber();
      if (object.transactionVersion != null)
        if ($util.Long)
          (message.transactionVersion = $util.Long.fromValue(
            object.transactionVersion
          )).unsigned = false;
        else if (typeof object.transactionVersion === "string")
          message.transactionVersion = parseInt(object.transactionVersion, 10);
        else if (typeof object.transactionVersion === "number")
          message.transactionVersion = object.transactionVersion;
        else if (typeof object.transactionVersion === "object")
          message.transactionVersion = new $util.LongBits(
            object.transactionVersion.low >>> 0,
            object.transactionVersion.high >>> 0
          ).toNumber();
      if (object.specVersion != null)
        if ($util.Long)
          (message.specVersion = $util.Long.fromValue(
            object.specVersion
          )).unsigned = false;
        else if (typeof object.specVersion === "string")
          message.specVersion = parseInt(object.specVersion, 10);
        else if (typeof object.specVersion === "number")
          message.specVersion = object.specVersion;
        else if (typeof object.specVersion === "object")
          message.specVersion = new $util.LongBits(
            object.specVersion.low >>> 0,
            object.specVersion.high >>> 0
          ).toNumber();
      if (object.validityPeriod != null)
        if ($util.Long)
          (message.validityPeriod = $util.Long.fromValue(
            object.validityPeriod
          )).unsigned = false;
        else if (typeof object.validityPeriod === "string")
          message.validityPeriod = parseInt(object.validityPeriod, 10);
        else if (typeof object.validityPeriod === "number")
          message.validityPeriod = object.validityPeriod;
        else if (typeof object.validityPeriod === "object")
          message.validityPeriod = new $util.LongBits(
            object.validityPeriod.low >>> 0,
            object.validityPeriod.high >>> 0
          ).toNumber();
      if (object.implVersion != null)
        if ($util.Long)
          (message.implVersion = $util.Long.fromValue(
            object.implVersion
          )).unsigned = false;
        else if (typeof object.implVersion === "string")
          message.implVersion = parseInt(object.implVersion, 10);
        else if (typeof object.implVersion === "number")
          message.implVersion = object.implVersion;
        else if (typeof object.implVersion === "object")
          message.implVersion = new $util.LongBits(
            object.implVersion.low >>> 0,
            object.implVersion.high >>> 0
          ).toNumber();
      if (object.authoringVersion != null)
        if ($util.Long)
          (message.authoringVersion = $util.Long.fromValue(
            object.authoringVersion
          )).unsigned = false;
        else if (typeof object.authoringVersion === "string")
          message.authoringVersion = parseInt(object.authoringVersion, 10);
        else if (typeof object.authoringVersion === "number")
          message.authoringVersion = object.authoringVersion;
        else if (typeof object.authoringVersion === "object")
          message.authoringVersion = new $util.LongBits(
            object.authoringVersion.low >>> 0,
            object.authoringVersion.high >>> 0
          ).toNumber();
      if (object.blockNumber != null)
        message.blockNumber = object.blockNumber | 0;
      return message;
    };

    /**
     * Creates a plain object from a KsmTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.KsmTx
     * @static
     * @param {protoc.KsmTx} message KsmTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    KsmTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.value =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.value = options.longs === String ? "0" : 0;
        object.dest = "";
        object.blockHash = "";
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.nonce =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.nonce = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.tip =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.tip = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.transactionVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.transactionVersion = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.specVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.specVersion = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.validityPeriod =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.validityPeriod = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.implVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.implVersion = options.longs === String ? "0" : 0;
        if ($util.Long) {
          const long = new $util.Long(0, 0, false);
          object.authoringVersion =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.authoringVersion = options.longs === String ? "0" : 0;
        object.blockNumber = 0;
      }
      if (message.value != null && message.hasOwnProperty("value"))
        if (typeof message.value === "number")
          object.value =
            options.longs === String ? String(message.value) : message.value;
        else
          object.value =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.value)
              : options.longs === Number
              ? new $util.LongBits(
                  message.value.low >>> 0,
                  message.value.high >>> 0
                ).toNumber()
              : message.value;
      if (message.dest != null && message.hasOwnProperty("dest"))
        object.dest = message.dest;
      if (message.blockHash != null && message.hasOwnProperty("blockHash"))
        object.blockHash = message.blockHash;
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        if (typeof message.nonce === "number")
          object.nonce =
            options.longs === String ? String(message.nonce) : message.nonce;
        else
          object.nonce =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.nonce)
              : options.longs === Number
              ? new $util.LongBits(
                  message.nonce.low >>> 0,
                  message.nonce.high >>> 0
                ).toNumber()
              : message.nonce;
      if (message.tip != null && message.hasOwnProperty("tip"))
        if (typeof message.tip === "number")
          object.tip =
            options.longs === String ? String(message.tip) : message.tip;
        else
          object.tip =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.tip)
              : options.longs === Number
              ? new $util.LongBits(
                  message.tip.low >>> 0,
                  message.tip.high >>> 0
                ).toNumber()
              : message.tip;
      if (
        message.transactionVersion != null &&
        message.hasOwnProperty("transactionVersion")
      )
        if (typeof message.transactionVersion === "number")
          object.transactionVersion =
            options.longs === String
              ? String(message.transactionVersion)
              : message.transactionVersion;
        else
          object.transactionVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.transactionVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.transactionVersion.low >>> 0,
                  message.transactionVersion.high >>> 0
                ).toNumber()
              : message.transactionVersion;
      if (message.specVersion != null && message.hasOwnProperty("specVersion"))
        if (typeof message.specVersion === "number")
          object.specVersion =
            options.longs === String
              ? String(message.specVersion)
              : message.specVersion;
        else
          object.specVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.specVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.specVersion.low >>> 0,
                  message.specVersion.high >>> 0
                ).toNumber()
              : message.specVersion;
      if (
        message.validityPeriod != null &&
        message.hasOwnProperty("validityPeriod")
      )
        if (typeof message.validityPeriod === "number")
          object.validityPeriod =
            options.longs === String
              ? String(message.validityPeriod)
              : message.validityPeriod;
        else
          object.validityPeriod =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.validityPeriod)
              : options.longs === Number
              ? new $util.LongBits(
                  message.validityPeriod.low >>> 0,
                  message.validityPeriod.high >>> 0
                ).toNumber()
              : message.validityPeriod;
      if (message.implVersion != null && message.hasOwnProperty("implVersion"))
        if (typeof message.implVersion === "number")
          object.implVersion =
            options.longs === String
              ? String(message.implVersion)
              : message.implVersion;
        else
          object.implVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.implVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.implVersion.low >>> 0,
                  message.implVersion.high >>> 0
                ).toNumber()
              : message.implVersion;
      if (
        message.authoringVersion != null &&
        message.hasOwnProperty("authoringVersion")
      )
        if (typeof message.authoringVersion === "number")
          object.authoringVersion =
            options.longs === String
              ? String(message.authoringVersion)
              : message.authoringVersion;
        else
          object.authoringVersion =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.authoringVersion)
              : options.longs === Number
              ? new $util.LongBits(
                  message.authoringVersion.low >>> 0,
                  message.authoringVersion.high >>> 0
                ).toNumber()
              : message.authoringVersion;
      if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
        object.blockNumber = message.blockNumber;
      return object;
    };

    /**
     * Converts this KsmTx to JSON.
     * @function toJSON
     * @memberof protoc.KsmTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    KsmTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return KsmTx;
  })();

  protoc.CfxTx = (function () {
    /**
     * Properties of a CfxTx.
     * @memberof protoc
     * @interface ICfxTx
     * @property {string|null} [to] CfxTx to
     * @property {string|null} [value] CfxTx value
     * @property {string|null} [gasPrice] CfxTx gasPrice
     * @property {string|null} [gas] CfxTx gas
     * @property {number|null} [nonce] CfxTx nonce
     * @property {string|null} [storageLimit] CfxTx storageLimit
     * @property {string|null} [epochHeight] CfxTx epochHeight
     * @property {string|null} [chainId] CfxTx chainId
     * @property {string|null} [contractAddress] CfxTx contractAddress
     * @property {protoc.CfxTx.IOverride|null} [override] CfxTx override
     */

    /**
     * Constructs a new CfxTx.
     * @memberof protoc
     * @classdesc Represents a CfxTx.
     * @implements ICfxTx
     * @constructor
     * @param {protoc.ICfxTx=} [properties] Properties to set
     */
    function CfxTx(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * CfxTx to.
     * @member {string} to
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.to = "";

    /**
     * CfxTx value.
     * @member {string} value
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.value = "";

    /**
     * CfxTx gasPrice.
     * @member {string} gasPrice
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.gasPrice = "";

    /**
     * CfxTx gas.
     * @member {string} gas
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.gas = "";

    /**
     * CfxTx nonce.
     * @member {number} nonce
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.nonce = 0;

    /**
     * CfxTx storageLimit.
     * @member {string} storageLimit
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.storageLimit = "";

    /**
     * CfxTx epochHeight.
     * @member {string} epochHeight
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.epochHeight = "";

    /**
     * CfxTx chainId.
     * @member {string} chainId
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.chainId = "";

    /**
     * CfxTx contractAddress.
     * @member {string} contractAddress
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.contractAddress = "";

    /**
     * CfxTx override.
     * @member {protoc.CfxTx.IOverride|null|undefined} override
     * @memberof protoc.CfxTx
     * @instance
     */
    CfxTx.prototype.override = null;

    /**
     * Creates a new CfxTx instance using the specified properties.
     * @function create
     * @memberof protoc.CfxTx
     * @static
     * @param {protoc.ICfxTx=} [properties] Properties to set
     * @returns {protoc.CfxTx} CfxTx instance
     */
    CfxTx.create = function create(properties) {
      return new CfxTx(properties);
    };

    /**
     * Encodes the specified CfxTx message. Does not implicitly {@link protoc.CfxTx.verify|verify} messages.
     * @function encode
     * @memberof protoc.CfxTx
     * @static
     * @param {protoc.ICfxTx} message CfxTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CfxTx.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.to != null && Object.hasOwnProperty.call(message, "to"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.to);
      if (message.value != null && Object.hasOwnProperty.call(message, "value"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.value);
      if (
        message.gasPrice != null &&
        Object.hasOwnProperty.call(message, "gasPrice")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.gasPrice);
      if (message.gas != null && Object.hasOwnProperty.call(message, "gas"))
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.gas);
      if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
        writer.uint32(/* id 5, wireType 0 =*/ 40).int32(message.nonce);
      if (
        message.storageLimit != null &&
        Object.hasOwnProperty.call(message, "storageLimit")
      )
        writer.uint32(/* id 6, wireType 2 =*/ 50).string(message.storageLimit);
      if (
        message.epochHeight != null &&
        Object.hasOwnProperty.call(message, "epochHeight")
      )
        writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.epochHeight);
      if (
        message.chainId != null &&
        Object.hasOwnProperty.call(message, "chainId")
      )
        writer.uint32(/* id 8, wireType 2 =*/ 66).string(message.chainId);
      if (
        message.contractAddress != null &&
        Object.hasOwnProperty.call(message, "contractAddress")
      )
        writer
          .uint32(/* id 9, wireType 2 =*/ 74)
          .string(message.contractAddress);
      if (
        message.override != null &&
        Object.hasOwnProperty.call(message, "override")
      )
        $root.protoc.CfxTx.Override.encode(
          message.override,
          writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified CfxTx message, length delimited. Does not implicitly {@link protoc.CfxTx.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.CfxTx
     * @static
     * @param {protoc.ICfxTx} message CfxTx message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CfxTx.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CfxTx message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.CfxTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.CfxTx} CfxTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CfxTx.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.CfxTx();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.string();
            break;
          case 2:
            message.value = reader.string();
            break;
          case 3:
            message.gasPrice = reader.string();
            break;
          case 4:
            message.gas = reader.string();
            break;
          case 5:
            message.nonce = reader.int32();
            break;
          case 6:
            message.storageLimit = reader.string();
            break;
          case 7:
            message.epochHeight = reader.string();
            break;
          case 8:
            message.chainId = reader.string();
            break;
          case 9:
            message.contractAddress = reader.string();
            break;
          case 10:
            message.override = $root.protoc.CfxTx.Override.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a CfxTx message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.CfxTx
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.CfxTx} CfxTx
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CfxTx.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CfxTx message.
     * @function verify
     * @memberof protoc.CfxTx
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CfxTx.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.to != null && message.hasOwnProperty("to"))
        if (!$util.isString(message.to)) return "to: string expected";
      if (message.value != null && message.hasOwnProperty("value"))
        if (!$util.isString(message.value)) return "value: string expected";
      if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
        if (!$util.isString(message.gasPrice))
          return "gasPrice: string expected";
      if (message.gas != null && message.hasOwnProperty("gas"))
        if (!$util.isString(message.gas)) return "gas: string expected";
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        if (!$util.isInteger(message.nonce)) return "nonce: integer expected";
      if (
        message.storageLimit != null &&
        message.hasOwnProperty("storageLimit")
      )
        if (!$util.isString(message.storageLimit))
          return "storageLimit: string expected";
      if (message.epochHeight != null && message.hasOwnProperty("epochHeight"))
        if (!$util.isString(message.epochHeight))
          return "epochHeight: string expected";
      if (message.chainId != null && message.hasOwnProperty("chainId"))
        if (!$util.isString(message.chainId)) return "chainId: string expected";
      if (
        message.contractAddress != null &&
        message.hasOwnProperty("contractAddress")
      )
        if (!$util.isString(message.contractAddress))
          return "contractAddress: string expected";
      if (message.override != null && message.hasOwnProperty("override")) {
        const error = $root.protoc.CfxTx.Override.verify(message.override);
        if (error) return "override." + error;
      }
      return null;
    };

    /**
     * Creates a CfxTx message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.CfxTx
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.CfxTx} CfxTx
     */
    CfxTx.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.CfxTx) return object;
      const message = new $root.protoc.CfxTx();
      if (object.to != null) message.to = String(object.to);
      if (object.value != null) message.value = String(object.value);
      if (object.gasPrice != null) message.gasPrice = String(object.gasPrice);
      if (object.gas != null) message.gas = String(object.gas);
      if (object.nonce != null) message.nonce = object.nonce | 0;
      if (object.storageLimit != null)
        message.storageLimit = String(object.storageLimit);
      if (object.epochHeight != null)
        message.epochHeight = String(object.epochHeight);
      if (object.chainId != null) message.chainId = String(object.chainId);
      if (object.contractAddress != null)
        message.contractAddress = String(object.contractAddress);
      if (object.override != null) {
        if (typeof object.override !== "object")
          throw TypeError(".protoc.CfxTx.override: object expected");
        message.override = $root.protoc.CfxTx.Override.fromObject(
          object.override
        );
      }
      return message;
    };

    /**
     * Creates a plain object from a CfxTx message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.CfxTx
     * @static
     * @param {protoc.CfxTx} message CfxTx
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CfxTx.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.to = "";
        object.value = "";
        object.gasPrice = "";
        object.gas = "";
        object.nonce = 0;
        object.storageLimit = "";
        object.epochHeight = "";
        object.chainId = "";
        object.contractAddress = "";
        object.override = null;
      }
      if (message.to != null && message.hasOwnProperty("to"))
        object.to = message.to;
      if (message.value != null && message.hasOwnProperty("value"))
        object.value = message.value;
      if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
        object.gasPrice = message.gasPrice;
      if (message.gas != null && message.hasOwnProperty("gas"))
        object.gas = message.gas;
      if (message.nonce != null && message.hasOwnProperty("nonce"))
        object.nonce = message.nonce;
      if (
        message.storageLimit != null &&
        message.hasOwnProperty("storageLimit")
      )
        object.storageLimit = message.storageLimit;
      if (message.epochHeight != null && message.hasOwnProperty("epochHeight"))
        object.epochHeight = message.epochHeight;
      if (message.chainId != null && message.hasOwnProperty("chainId"))
        object.chainId = message.chainId;
      if (
        message.contractAddress != null &&
        message.hasOwnProperty("contractAddress")
      )
        object.contractAddress = message.contractAddress;
      if (message.override != null && message.hasOwnProperty("override"))
        object.override = $root.protoc.CfxTx.Override.toObject(
          message.override,
          options
        );
      return object;
    };

    /**
     * Converts this CfxTx to JSON.
     * @function toJSON
     * @memberof protoc.CfxTx
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CfxTx.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    CfxTx.Override = (function () {
      /**
       * Properties of an Override.
       * @memberof protoc.CfxTx
       * @interface IOverride
       * @property {number|null} [decimals] Override decimals
       * @property {string|null} [tokenShortName] Override tokenShortName
       * @property {string|null} [tokenFullName] Override tokenFullName
       * @property {string|null} [contractAddress] Override contractAddress
       */

      /**
       * Constructs a new Override.
       * @memberof protoc.CfxTx
       * @classdesc Represents an Override.
       * @implements IOverride
       * @constructor
       * @param {protoc.CfxTx.IOverride=} [properties] Properties to set
       */
      function Override(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Override decimals.
       * @member {number} decimals
       * @memberof protoc.CfxTx.Override
       * @instance
       */
      Override.prototype.decimals = 0;

      /**
       * Override tokenShortName.
       * @member {string} tokenShortName
       * @memberof protoc.CfxTx.Override
       * @instance
       */
      Override.prototype.tokenShortName = "";

      /**
       * Override tokenFullName.
       * @member {string} tokenFullName
       * @memberof protoc.CfxTx.Override
       * @instance
       */
      Override.prototype.tokenFullName = "";

      /**
       * Override contractAddress.
       * @member {string} contractAddress
       * @memberof protoc.CfxTx.Override
       * @instance
       */
      Override.prototype.contractAddress = "";

      /**
       * Creates a new Override instance using the specified properties.
       * @function create
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {protoc.CfxTx.IOverride=} [properties] Properties to set
       * @returns {protoc.CfxTx.Override} Override instance
       */
      Override.create = function create(properties) {
        return new Override(properties);
      };

      /**
       * Encodes the specified Override message. Does not implicitly {@link protoc.CfxTx.Override.verify|verify} messages.
       * @function encode
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {protoc.CfxTx.IOverride} message Override message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Override.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.decimals != null &&
          Object.hasOwnProperty.call(message, "decimals")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.decimals);
        if (
          message.tokenShortName != null &&
          Object.hasOwnProperty.call(message, "tokenShortName")
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.tokenShortName);
        if (
          message.tokenFullName != null &&
          Object.hasOwnProperty.call(message, "tokenFullName")
        )
          writer
            .uint32(/* id 3, wireType 2 =*/ 26)
            .string(message.tokenFullName);
        if (
          message.contractAddress != null &&
          Object.hasOwnProperty.call(message, "contractAddress")
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.contractAddress);
        return writer;
      };

      /**
       * Encodes the specified Override message, length delimited. Does not implicitly {@link protoc.CfxTx.Override.verify|verify} messages.
       * @function encodeDelimited
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {protoc.CfxTx.IOverride} message Override message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Override.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Override message from the specified reader or buffer.
       * @function decode
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {protoc.CfxTx.Override} Override
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Override.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        const end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.protoc.CfxTx.Override();
        while (reader.pos < end) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.decimals = reader.int32();
              break;
            case 2:
              message.tokenShortName = reader.string();
              break;
            case 3:
              message.tokenFullName = reader.string();
              break;
            case 4:
              message.contractAddress = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Override message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {protoc.CfxTx.Override} Override
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Override.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Override message.
       * @function verify
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Override.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.decimals != null && message.hasOwnProperty("decimals"))
          if (!$util.isInteger(message.decimals))
            return "decimals: integer expected";
        if (
          message.tokenShortName != null &&
          message.hasOwnProperty("tokenShortName")
        )
          if (!$util.isString(message.tokenShortName))
            return "tokenShortName: string expected";
        if (
          message.tokenFullName != null &&
          message.hasOwnProperty("tokenFullName")
        )
          if (!$util.isString(message.tokenFullName))
            return "tokenFullName: string expected";
        if (
          message.contractAddress != null &&
          message.hasOwnProperty("contractAddress")
        )
          if (!$util.isString(message.contractAddress))
            return "contractAddress: string expected";
        return null;
      };

      /**
       * Creates an Override message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {protoc.CfxTx.Override} Override
       */
      Override.fromObject = function fromObject(object) {
        if (object instanceof $root.protoc.CfxTx.Override) return object;
        const message = new $root.protoc.CfxTx.Override();
        if (object.decimals != null) message.decimals = object.decimals | 0;
        if (object.tokenShortName != null)
          message.tokenShortName = String(object.tokenShortName);
        if (object.tokenFullName != null)
          message.tokenFullName = String(object.tokenFullName);
        if (object.contractAddress != null)
          message.contractAddress = String(object.contractAddress);
        return message;
      };

      /**
       * Creates a plain object from an Override message. Also converts values to other types if specified.
       * @function toObject
       * @memberof protoc.CfxTx.Override
       * @static
       * @param {protoc.CfxTx.Override} message Override
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Override.toObject = function toObject(message, options) {
        if (!options) options = {};
        const object = {};
        if (options.defaults) {
          object.decimals = 0;
          object.tokenShortName = "";
          object.tokenFullName = "";
          object.contractAddress = "";
        }
        if (message.decimals != null && message.hasOwnProperty("decimals"))
          object.decimals = message.decimals;
        if (
          message.tokenShortName != null &&
          message.hasOwnProperty("tokenShortName")
        )
          object.tokenShortName = message.tokenShortName;
        if (
          message.tokenFullName != null &&
          message.hasOwnProperty("tokenFullName")
        )
          object.tokenFullName = message.tokenFullName;
        if (
          message.contractAddress != null &&
          message.hasOwnProperty("contractAddress")
        )
          object.contractAddress = message.contractAddress;
        return object;
      };

      /**
       * Converts this Override to JSON.
       * @function toJSON
       * @memberof protoc.CfxTx.Override
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Override.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Override;
    })();

    return CfxTx;
  })();

  protoc.SignMessage = (function () {
    /**
     * Properties of a SignMessage.
     * @memberof protoc
     * @interface ISignMessage
     * @property {string|null} [coinCode] SignMessage coinCode
     * @property {string|null} [hdPath] SignMessage hdPath
     * @property {string|null} [message] SignMessage message
     */

    /**
     * Constructs a new SignMessage.
     * @memberof protoc
     * @classdesc Represents a SignMessage.
     * @implements ISignMessage
     * @constructor
     * @param {protoc.ISignMessage=} [properties] Properties to set
     */
    function SignMessage(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SignMessage coinCode.
     * @member {string} coinCode
     * @memberof protoc.SignMessage
     * @instance
     */
    SignMessage.prototype.coinCode = "";

    /**
     * SignMessage hdPath.
     * @member {string} hdPath
     * @memberof protoc.SignMessage
     * @instance
     */
    SignMessage.prototype.hdPath = "";

    /**
     * SignMessage message.
     * @member {string} message
     * @memberof protoc.SignMessage
     * @instance
     */
    SignMessage.prototype.message = "";

    /**
     * Creates a new SignMessage instance using the specified properties.
     * @function create
     * @memberof protoc.SignMessage
     * @static
     * @param {protoc.ISignMessage=} [properties] Properties to set
     * @returns {protoc.SignMessage} SignMessage instance
     */
    SignMessage.create = function create(properties) {
      return new SignMessage(properties);
    };

    /**
     * Encodes the specified SignMessage message. Does not implicitly {@link protoc.SignMessage.verify|verify} messages.
     * @function encode
     * @memberof protoc.SignMessage
     * @static
     * @param {protoc.ISignMessage} message SignMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignMessage.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.coinCode != null &&
        Object.hasOwnProperty.call(message, "coinCode")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.coinCode);
      if (
        message.hdPath != null &&
        Object.hasOwnProperty.call(message, "hdPath")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.hdPath);
      if (
        message.message != null &&
        Object.hasOwnProperty.call(message, "message")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.message);
      return writer;
    };

    /**
     * Encodes the specified SignMessage message, length delimited. Does not implicitly {@link protoc.SignMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.SignMessage
     * @static
     * @param {protoc.ISignMessage} message SignMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignMessage.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignMessage message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.SignMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.SignMessage} SignMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignMessage.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.SignMessage();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.coinCode = reader.string();
            break;
          case 2:
            message.hdPath = reader.string();
            break;
          case 3:
            message.message = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SignMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.SignMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.SignMessage} SignMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignMessage.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignMessage message.
     * @function verify
     * @memberof protoc.SignMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignMessage.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        if (!$util.isString(message.coinCode))
          return "coinCode: string expected";
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        if (!$util.isString(message.hdPath)) return "hdPath: string expected";
      if (message.message != null && message.hasOwnProperty("message"))
        if (!$util.isString(message.message)) return "message: string expected";
      return null;
    };

    /**
     * Creates a SignMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.SignMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.SignMessage} SignMessage
     */
    SignMessage.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.SignMessage) return object;
      const message = new $root.protoc.SignMessage();
      if (object.coinCode != null) message.coinCode = String(object.coinCode);
      if (object.hdPath != null) message.hdPath = String(object.hdPath);
      if (object.message != null) message.message = String(object.message);
      return message;
    };

    /**
     * Creates a plain object from a SignMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.SignMessage
     * @static
     * @param {protoc.SignMessage} message SignMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SignMessage.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.coinCode = "";
        object.hdPath = "";
        object.message = "";
      }
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        object.coinCode = message.coinCode;
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        object.hdPath = message.hdPath;
      if (message.message != null && message.hasOwnProperty("message"))
        object.message = message.message;
      return object;
    };

    /**
     * Converts this SignMessage to JSON.
     * @function toJSON
     * @memberof protoc.SignMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SignMessage.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SignMessage;
  })();

  protoc.VerifyAddress = (function () {
    /**
     * Properties of a VerifyAddress.
     * @memberof protoc
     * @interface IVerifyAddress
     * @property {number|null} [coinType] VerifyAddress coinType
     * @property {number|null} [addressIndex] VerifyAddress addressIndex
     * @property {string|null} [address] VerifyAddress address
     */

    /**
     * Constructs a new VerifyAddress.
     * @memberof protoc
     * @classdesc Represents a VerifyAddress.
     * @implements IVerifyAddress
     * @constructor
     * @param {protoc.IVerifyAddress=} [properties] Properties to set
     */
    function VerifyAddress(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * VerifyAddress coinType.
     * @member {number} coinType
     * @memberof protoc.VerifyAddress
     * @instance
     */
    VerifyAddress.prototype.coinType = 0;

    /**
     * VerifyAddress addressIndex.
     * @member {number} addressIndex
     * @memberof protoc.VerifyAddress
     * @instance
     */
    VerifyAddress.prototype.addressIndex = 0;

    /**
     * VerifyAddress address.
     * @member {string} address
     * @memberof protoc.VerifyAddress
     * @instance
     */
    VerifyAddress.prototype.address = "";

    /**
     * Creates a new VerifyAddress instance using the specified properties.
     * @function create
     * @memberof protoc.VerifyAddress
     * @static
     * @param {protoc.IVerifyAddress=} [properties] Properties to set
     * @returns {protoc.VerifyAddress} VerifyAddress instance
     */
    VerifyAddress.create = function create(properties) {
      return new VerifyAddress(properties);
    };

    /**
     * Encodes the specified VerifyAddress message. Does not implicitly {@link protoc.VerifyAddress.verify|verify} messages.
     * @function encode
     * @memberof protoc.VerifyAddress
     * @static
     * @param {protoc.IVerifyAddress} message VerifyAddress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerifyAddress.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.coinType != null &&
        Object.hasOwnProperty.call(message, "coinType")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.coinType);
      if (
        message.addressIndex != null &&
        Object.hasOwnProperty.call(message, "addressIndex")
      )
        writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.addressIndex);
      if (
        message.address != null &&
        Object.hasOwnProperty.call(message, "address")
      )
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.address);
      return writer;
    };

    /**
     * Encodes the specified VerifyAddress message, length delimited. Does not implicitly {@link protoc.VerifyAddress.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.VerifyAddress
     * @static
     * @param {protoc.IVerifyAddress} message VerifyAddress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    VerifyAddress.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a VerifyAddress message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.VerifyAddress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.VerifyAddress} VerifyAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerifyAddress.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.VerifyAddress();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.coinType = reader.int32();
            break;
          case 2:
            message.addressIndex = reader.int32();
            break;
          case 3:
            message.address = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a VerifyAddress message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.VerifyAddress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.VerifyAddress} VerifyAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    VerifyAddress.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a VerifyAddress message.
     * @function verify
     * @memberof protoc.VerifyAddress
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    VerifyAddress.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.coinType != null && message.hasOwnProperty("coinType"))
        if (!$util.isInteger(message.coinType))
          return "coinType: integer expected";
      if (
        message.addressIndex != null &&
        message.hasOwnProperty("addressIndex")
      )
        if (!$util.isInteger(message.addressIndex))
          return "addressIndex: integer expected";
      if (message.address != null && message.hasOwnProperty("address"))
        if (!$util.isString(message.address)) return "address: string expected";
      return null;
    };

    /**
     * Creates a VerifyAddress message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.VerifyAddress
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.VerifyAddress} VerifyAddress
     */
    VerifyAddress.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.VerifyAddress) return object;
      const message = new $root.protoc.VerifyAddress();
      if (object.coinType != null) message.coinType = object.coinType | 0;
      if (object.addressIndex != null)
        message.addressIndex = object.addressIndex | 0;
      if (object.address != null) message.address = String(object.address);
      return message;
    };

    /**
     * Creates a plain object from a VerifyAddress message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.VerifyAddress
     * @static
     * @param {protoc.VerifyAddress} message VerifyAddress
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    VerifyAddress.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.coinType = 0;
        object.addressIndex = 0;
        object.address = "";
      }
      if (message.coinType != null && message.hasOwnProperty("coinType"))
        object.coinType = message.coinType;
      if (
        message.addressIndex != null &&
        message.hasOwnProperty("addressIndex")
      )
        object.addressIndex = message.addressIndex;
      if (message.address != null && message.hasOwnProperty("address"))
        object.address = message.address;
      return object;
    };

    /**
     * Converts this VerifyAddress to JSON.
     * @function toJSON
     * @memberof protoc.VerifyAddress
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    VerifyAddress.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return VerifyAddress;
  })();

  protoc.SignTransactionResult = (function () {
    /**
     * Properties of a SignTransactionResult.
     * @memberof protoc
     * @interface ISignTransactionResult
     * @property {string|null} [signId] SignTransactionResult signId
     * @property {string|null} [txId] SignTransactionResult txId
     * @property {string|null} [rawTx] SignTransactionResult rawTx
     */

    /**
     * Constructs a new SignTransactionResult.
     * @memberof protoc
     * @classdesc Represents a SignTransactionResult.
     * @implements ISignTransactionResult
     * @constructor
     * @param {protoc.ISignTransactionResult=} [properties] Properties to set
     */
    function SignTransactionResult(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SignTransactionResult signId.
     * @member {string} signId
     * @memberof protoc.SignTransactionResult
     * @instance
     */
    SignTransactionResult.prototype.signId = "";

    /**
     * SignTransactionResult txId.
     * @member {string} txId
     * @memberof protoc.SignTransactionResult
     * @instance
     */
    SignTransactionResult.prototype.txId = "";

    /**
     * SignTransactionResult rawTx.
     * @member {string} rawTx
     * @memberof protoc.SignTransactionResult
     * @instance
     */
    SignTransactionResult.prototype.rawTx = "";

    /**
     * Creates a new SignTransactionResult instance using the specified properties.
     * @function create
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {protoc.ISignTransactionResult=} [properties] Properties to set
     * @returns {protoc.SignTransactionResult} SignTransactionResult instance
     */
    SignTransactionResult.create = function create(properties) {
      return new SignTransactionResult(properties);
    };

    /**
     * Encodes the specified SignTransactionResult message. Does not implicitly {@link protoc.SignTransactionResult.verify|verify} messages.
     * @function encode
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {protoc.ISignTransactionResult} message SignTransactionResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignTransactionResult.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.signId != null &&
        Object.hasOwnProperty.call(message, "signId")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.signId);
      if (message.txId != null && Object.hasOwnProperty.call(message, "txId"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.txId);
      if (message.rawTx != null && Object.hasOwnProperty.call(message, "rawTx"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.rawTx);
      return writer;
    };

    /**
     * Encodes the specified SignTransactionResult message, length delimited. Does not implicitly {@link protoc.SignTransactionResult.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {protoc.ISignTransactionResult} message SignTransactionResult message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignTransactionResult.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignTransactionResult message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.SignTransactionResult} SignTransactionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignTransactionResult.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.SignTransactionResult();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.signId = reader.string();
            break;
          case 2:
            message.txId = reader.string();
            break;
          case 3:
            message.rawTx = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SignTransactionResult message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.SignTransactionResult} SignTransactionResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignTransactionResult.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignTransactionResult message.
     * @function verify
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignTransactionResult.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.signId != null && message.hasOwnProperty("signId"))
        if (!$util.isString(message.signId)) return "signId: string expected";
      if (message.txId != null && message.hasOwnProperty("txId"))
        if (!$util.isString(message.txId)) return "txId: string expected";
      if (message.rawTx != null && message.hasOwnProperty("rawTx"))
        if (!$util.isString(message.rawTx)) return "rawTx: string expected";
      return null;
    };

    /**
     * Creates a SignTransactionResult message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.SignTransactionResult} SignTransactionResult
     */
    SignTransactionResult.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.SignTransactionResult) return object;
      const message = new $root.protoc.SignTransactionResult();
      if (object.signId != null) message.signId = String(object.signId);
      if (object.txId != null) message.txId = String(object.txId);
      if (object.rawTx != null) message.rawTx = String(object.rawTx);
      return message;
    };

    /**
     * Creates a plain object from a SignTransactionResult message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.SignTransactionResult
     * @static
     * @param {protoc.SignTransactionResult} message SignTransactionResult
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SignTransactionResult.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.signId = "";
        object.txId = "";
        object.rawTx = "";
      }
      if (message.signId != null && message.hasOwnProperty("signId"))
        object.signId = message.signId;
      if (message.txId != null && message.hasOwnProperty("txId"))
        object.txId = message.txId;
      if (message.rawTx != null && message.hasOwnProperty("rawTx"))
        object.rawTx = message.rawTx;
      return object;
    };

    /**
     * Converts this SignTransactionResult to JSON.
     * @function toJSON
     * @memberof protoc.SignTransactionResult
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SignTransactionResult.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SignTransactionResult;
  })();

  protoc.DashStaking = (function () {
    /**
     * Properties of a DashStaking.
     * @memberof protoc
     * @interface IDashStaking
     * @property {string|null} [coinCode] DashStaking coinCode
     * @property {string|null} [hdPath] DashStaking hdPath
     * @property {string|null} [mnid] DashStaking mnid
     * @property {string|null} [address] DashStaking address
     * @property {string|null} [message] DashStaking message
     */

    /**
     * Constructs a new DashStaking.
     * @memberof protoc
     * @classdesc Represents a DashStaking.
     * @implements IDashStaking
     * @constructor
     * @param {protoc.IDashStaking=} [properties] Properties to set
     */
    function DashStaking(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * DashStaking coinCode.
     * @member {string} coinCode
     * @memberof protoc.DashStaking
     * @instance
     */
    DashStaking.prototype.coinCode = "";

    /**
     * DashStaking hdPath.
     * @member {string} hdPath
     * @memberof protoc.DashStaking
     * @instance
     */
    DashStaking.prototype.hdPath = "";

    /**
     * DashStaking mnid.
     * @member {string} mnid
     * @memberof protoc.DashStaking
     * @instance
     */
    DashStaking.prototype.mnid = "";

    /**
     * DashStaking address.
     * @member {string} address
     * @memberof protoc.DashStaking
     * @instance
     */
    DashStaking.prototype.address = "";

    /**
     * DashStaking message.
     * @member {string} message
     * @memberof protoc.DashStaking
     * @instance
     */
    DashStaking.prototype.message = "";

    /**
     * Creates a new DashStaking instance using the specified properties.
     * @function create
     * @memberof protoc.DashStaking
     * @static
     * @param {protoc.IDashStaking=} [properties] Properties to set
     * @returns {protoc.DashStaking} DashStaking instance
     */
    DashStaking.create = function create(properties) {
      return new DashStaking(properties);
    };

    /**
     * Encodes the specified DashStaking message. Does not implicitly {@link protoc.DashStaking.verify|verify} messages.
     * @function encode
     * @memberof protoc.DashStaking
     * @static
     * @param {protoc.IDashStaking} message DashStaking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DashStaking.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.coinCode != null &&
        Object.hasOwnProperty.call(message, "coinCode")
      )
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.coinCode);
      if (
        message.hdPath != null &&
        Object.hasOwnProperty.call(message, "hdPath")
      )
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.hdPath);
      if (message.mnid != null && Object.hasOwnProperty.call(message, "mnid"))
        writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.mnid);
      if (
        message.address != null &&
        Object.hasOwnProperty.call(message, "address")
      )
        writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.address);
      if (
        message.message != null &&
        Object.hasOwnProperty.call(message, "message")
      )
        writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.message);
      return writer;
    };

    /**
     * Encodes the specified DashStaking message, length delimited. Does not implicitly {@link protoc.DashStaking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.DashStaking
     * @static
     * @param {protoc.IDashStaking} message DashStaking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DashStaking.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DashStaking message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.DashStaking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.DashStaking} DashStaking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DashStaking.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.DashStaking();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.coinCode = reader.string();
            break;
          case 2:
            message.hdPath = reader.string();
            break;
          case 3:
            message.mnid = reader.string();
            break;
          case 4:
            message.address = reader.string();
            break;
          case 5:
            message.message = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a DashStaking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.DashStaking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.DashStaking} DashStaking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DashStaking.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DashStaking message.
     * @function verify
     * @memberof protoc.DashStaking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DashStaking.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        if (!$util.isString(message.coinCode))
          return "coinCode: string expected";
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        if (!$util.isString(message.hdPath)) return "hdPath: string expected";
      if (message.mnid != null && message.hasOwnProperty("mnid"))
        if (!$util.isString(message.mnid)) return "mnid: string expected";
      if (message.address != null && message.hasOwnProperty("address"))
        if (!$util.isString(message.address)) return "address: string expected";
      if (message.message != null && message.hasOwnProperty("message"))
        if (!$util.isString(message.message)) return "message: string expected";
      return null;
    };

    /**
     * Creates a DashStaking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.DashStaking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.DashStaking} DashStaking
     */
    DashStaking.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.DashStaking) return object;
      const message = new $root.protoc.DashStaking();
      if (object.coinCode != null) message.coinCode = String(object.coinCode);
      if (object.hdPath != null) message.hdPath = String(object.hdPath);
      if (object.mnid != null) message.mnid = String(object.mnid);
      if (object.address != null) message.address = String(object.address);
      if (object.message != null) message.message = String(object.message);
      return message;
    };

    /**
     * Creates a plain object from a DashStaking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.DashStaking
     * @static
     * @param {protoc.DashStaking} message DashStaking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DashStaking.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (options.defaults) {
        object.coinCode = "";
        object.hdPath = "";
        object.mnid = "";
        object.address = "";
        object.message = "";
      }
      if (message.coinCode != null && message.hasOwnProperty("coinCode"))
        object.coinCode = message.coinCode;
      if (message.hdPath != null && message.hasOwnProperty("hdPath"))
        object.hdPath = message.hdPath;
      if (message.mnid != null && message.hasOwnProperty("mnid"))
        object.mnid = message.mnid;
      if (message.address != null && message.hasOwnProperty("address"))
        object.address = message.address;
      if (message.message != null && message.hasOwnProperty("message"))
        object.message = message.message;
      return object;
    };

    /**
     * Converts this DashStaking to JSON.
     * @function toJSON
     * @memberof protoc.DashStaking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DashStaking.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DashStaking;
  })();

  protoc.Staking = (function () {
    /**
     * Properties of a Staking.
     * @memberof protoc
     * @interface IStaking
     * @property {protoc.IDashStaking|null} [dash] Staking dash
     */

    /**
     * Constructs a new Staking.
     * @memberof protoc
     * @classdesc Represents a Staking.
     * @implements IStaking
     * @constructor
     * @param {protoc.IStaking=} [properties] Properties to set
     */
    function Staking(properties) {
      if (properties)
        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Staking dash.
     * @member {protoc.IDashStaking|null|undefined} dash
     * @memberof protoc.Staking
     * @instance
     */
    Staking.prototype.dash = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Staking data.
     * @member {"dash"|undefined} data
     * @memberof protoc.Staking
     * @instance
     */
    Object.defineProperty(Staking.prototype, "data", {
      get: $util.oneOfGetter(($oneOfFields = ["dash"])),
      set: $util.oneOfSetter($oneOfFields),
    });

    /**
     * Creates a new Staking instance using the specified properties.
     * @function create
     * @memberof protoc.Staking
     * @static
     * @param {protoc.IStaking=} [properties] Properties to set
     * @returns {protoc.Staking} Staking instance
     */
    Staking.create = function create(properties) {
      return new Staking(properties);
    };

    /**
     * Encodes the specified Staking message. Does not implicitly {@link protoc.Staking.verify|verify} messages.
     * @function encode
     * @memberof protoc.Staking
     * @static
     * @param {protoc.IStaking} message Staking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Staking.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.dash != null && Object.hasOwnProperty.call(message, "dash"))
        $root.protoc.DashStaking.encode(
          message.dash,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified Staking message, length delimited. Does not implicitly {@link protoc.Staking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof protoc.Staking
     * @static
     * @param {protoc.IStaking} message Staking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Staking.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Staking message from the specified reader or buffer.
     * @function decode
     * @memberof protoc.Staking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {protoc.Staking} Staking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Staking.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      const end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.protoc.Staking();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.dash = $root.protoc.DashStaking.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Staking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof protoc.Staking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {protoc.Staking} Staking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Staking.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Staking message.
     * @function verify
     * @memberof protoc.Staking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Staking.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      const properties = {};
      if (message.dash != null && message.hasOwnProperty("dash")) {
        properties.data = 1;
        {
          const error = $root.protoc.DashStaking.verify(message.dash);
          if (error) return "dash." + error;
        }
      }
      return null;
    };

    /**
     * Creates a Staking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof protoc.Staking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {protoc.Staking} Staking
     */
    Staking.fromObject = function fromObject(object) {
      if (object instanceof $root.protoc.Staking) return object;
      const message = new $root.protoc.Staking();
      if (object.dash != null) {
        if (typeof object.dash !== "object")
          throw TypeError(".protoc.Staking.dash: object expected");
        message.dash = $root.protoc.DashStaking.fromObject(object.dash);
      }
      return message;
    };

    /**
     * Creates a plain object from a Staking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof protoc.Staking
     * @static
     * @param {protoc.Staking} message Staking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Staking.toObject = function toObject(message, options) {
      if (!options) options = {};
      const object = {};
      if (message.dash != null && message.hasOwnProperty("dash")) {
        object.dash = $root.protoc.DashStaking.toObject(message.dash, options);
        if (options.oneofs) object.data = "dash";
      }
      return object;
    };

    /**
     * Converts this Staking to JSON.
     * @function toJSON
     * @memberof protoc.Staking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Staking.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Staking;
  })();

  return protoc;
})());

export { $root as default };

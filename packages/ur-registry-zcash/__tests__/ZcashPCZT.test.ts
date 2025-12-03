import { ZcashPCZT } from "../src/ZcashPCZT";
import { ExtendedRegistryTypes } from "../src/RegistryType";

describe("ZcashPCZT", () => {
  const sampleData = Buffer.from(
    "50435a5401000000058ace9cb502b4a1db960c0100c88d06850100000100c49515f62996249233330193b3d553c443a8d45833630192249629f61595c40001ffffffff0f000000a08d061976a914010000000000000000000000000000000000000088ac00000101030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000005ac80808008858180800880808080080000000000000001a08d061976a914010000000000000000000000000000000000000088ac000001237431487874675859545057324a384265393148585337374d4667783537716b4872764b00000000fbc2f4300c01f0b7820d00e3347c8da4ee614674376cbc45359daa54f9b5493e0000030001ae2935f1dfd8a24aed7c70df7de3a668eb7a49b1319880dde2bbd9031ae5d82f0000",
    "hex"
  );

  describe("constructor", () => {
    it("should create a ZcashPCZT instance", () => {
      const pczt = new ZcashPCZT(sampleData);
      expect(pczt).toBeInstanceOf(ZcashPCZT);
    });
  });

  describe("CBOR encoding", () => {
    it("should encode to expected CBOR format", () => {
      const pczt = new ZcashPCZT(sampleData);
      const cbor = pczt.toCBOR();
      const expectedCbor =
        "a10159015050435a5401000000058ace9cb502b4a1db960c0100c88d06850100000100c49515f62996249233330193b3d553c443a8d45833630192249629f61595c40001ffffffff0f000000a08d061976a914010000000000000000000000000000000000000088ac00000101030000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000005ac80808008858180800880808080080000000000000001a08d061976a914010000000000000000000000000000000000000088ac000001237431487874675859545057324a384265393148585337374d4667783537716b4872764b00000000fbc2f4300c01f0b7820d00e3347c8da4ee614674376cbc45359daa54f9b5493e0000030001ae2935f1dfd8a24aed7c70df7de3a668eb7a49b1319880dde2bbd9031ae5d82f0000";
      expect(cbor.toString("hex")).toBe(expectedCbor);
    });
  });

  describe("getData", () => {
    it("should return the data", () => {
      const pczt = new ZcashPCZT(sampleData);
      expect(pczt.getData()).toEqual(sampleData);
    });
  });

  describe("getRegistryType", () => {
    it("should return the correct registry type", () => {
      const pczt = new ZcashPCZT(sampleData);
      expect(pczt.getRegistryType()).toBe(ExtendedRegistryTypes.ZCASH_PCZT);
    });
  });

  describe("toDataItem", () => {
    it("should convert to DataItem correctly", () => {
      const pczt = new ZcashPCZT(sampleData);
      const dataItem = pczt.toDataItem();
      expect(dataItem.getData()[1]).toEqual(sampleData);
    });
  });

  describe("fromDataItem", () => {
    it("should create ZcashPCZT from DataItem", () => {
      const pczt = new ZcashPCZT(sampleData);
      const dataItem = pczt.toDataItem();
      const decoded = ZcashPCZT.fromDataItem(dataItem);
      expect(decoded.getData()).toEqual(sampleData);
    });
  });

  describe("fromCBOR", () => {
    it("should create ZcashPCZT from CBOR payload", () => {
      const pczt = new ZcashPCZT(sampleData);
      const cbor = pczt.toCBOR();
      const decoded = ZcashPCZT.fromCBOR(cbor);
      expect(decoded.getData()).toEqual(sampleData);
    });
  });

  describe("round-trip", () => {
    it("should encode and decode correctly", () => {
      const original = new ZcashPCZT(sampleData);
      const cbor = original.toCBOR();
      const decoded = ZcashPCZT.fromCBOR(cbor);
      expect(decoded.getData()).toEqual(original.getData());
    });
  });
});

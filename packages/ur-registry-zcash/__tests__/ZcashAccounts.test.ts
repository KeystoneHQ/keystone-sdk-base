//ensure the tag are patched
import { ZcashAccounts, ZcashUnifiedFullViewingKey } from "../src";

describe("ZcashAccounts", () => {
    const seedFingerprint = Buffer.from("d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1", "hex");
    const testUfvk = "uview1qqqqqqqqqqqqqq8rzd0efkm6ej5n0twzum9czt9kj5y7jxjm9qz3uq9qgpqqqqqqqqqqqqqq9en0hkucteqncqcfqcqcpz4wuwl";

    describe("constructor and getters", () => {
        it("should create instance with seed fingerprint and accounts", () => {
            const ufvk1 = new ZcashUnifiedFullViewingKey(testUfvk, 0, "Keystone 1");
            const ufvk2 = new ZcashUnifiedFullViewingKey(testUfvk, 1, "Keystone 2");
            const accounts = new ZcashAccounts(seedFingerprint, [ufvk1, ufvk2]);

            expect(accounts.getSeedFingerprint()).toEqual(seedFingerprint);
            expect(accounts.getAccounts()).toHaveLength(2);
            expect(accounts.getAccounts()[0]).toBe(ufvk1);
            expect(accounts.getAccounts()[1]).toBe(ufvk2);
        });

        it("should create instance with empty accounts", () => {
            const accounts = new ZcashAccounts(seedFingerprint, []);

            expect(accounts.getSeedFingerprint()).toEqual(seedFingerprint);
            expect(accounts.getAccounts()).toHaveLength(0);
        });
    });

    describe("encode and decode", () => {
        it("should encode and decode with multiple accounts", () => {
            const ufvk1 = new ZcashUnifiedFullViewingKey(testUfvk, 0, "Keystone 1");
            const ufvk2 = new ZcashUnifiedFullViewingKey(testUfvk, 1, "Keystone 2");
            const accounts = new ZcashAccounts(seedFingerprint, [ufvk1, ufvk2]);

            const dataItem = accounts.toDataItem();

            const cbor = accounts.toCBOR().toString("hex");

            expect(cbor).toBe("a20150d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d10282d9c033a3017869757669657731717171717171717171717171717138727a643065666b6d36656a356e3074777a756d39637a74396b6a3579376a786a6d39717a33757139716770717171717171717171717171717139656e30686b75637465716e6371636671637163707a347775776c0200036a4b657973746f6e652031d9c033a3017869757669657731717171717171717171717171717138727a643065666b6d36656a356e3074777a756d39637a74396b6a3579376a786a6d39717a33757139716770717171717171717171717171717139656e30686b75637465716e6371636671637163707a347775776c0201036a4b657973746f6e652032");

            const decoded = ZcashAccounts.fromDataItem(dataItem);



            expect(decoded.getSeedFingerprint()).toEqual(accounts.getSeedFingerprint());
            expect(decoded.getAccounts()).toHaveLength(2);
            expect(decoded.getAccounts()[0].getUfvk()).toBe(accounts.getAccounts()[0].getUfvk());
            expect(decoded.getAccounts()[0].getIndex()).toBe(accounts.getAccounts()[0].getIndex());
            expect(decoded.getAccounts()[0].getName()).toBe(accounts.getAccounts()[0].getName());
            expect(decoded.getAccounts()[1].getUfvk()).toBe(accounts.getAccounts()[1].getUfvk());
            expect(decoded.getAccounts()[1].getIndex()).toBe(accounts.getAccounts()[1].getIndex());
            expect(decoded.getAccounts()[1].getName()).toBe(accounts.getAccounts()[1].getName());
        });

        it("should encode and decode with empty accounts", () => {
            const accounts = new ZcashAccounts(seedFingerprint, []);

            const dataItem = accounts.toDataItem();
            const decoded = ZcashAccounts.fromDataItem(dataItem);

            expect(decoded.getSeedFingerprint()).toEqual(accounts.getSeedFingerprint());
            expect(decoded.getAccounts()).toHaveLength(0);
        });

        it("should encode and decode from CBOR", () => {
            const ufvk1 = new ZcashUnifiedFullViewingKey(testUfvk, 0, "Keystone 1");
            const accounts = new ZcashAccounts(seedFingerprint, [ufvk1]);

            const cbor = accounts.toCBOR();
            const decoded = ZcashAccounts.fromCBOR(cbor);

            expect(decoded.getSeedFingerprint()).toEqual(accounts.getSeedFingerprint());
            expect(decoded.getAccounts()).toHaveLength(1);
            expect(decoded.getAccounts()[0].getUfvk()).toBe(accounts.getAccounts()[0].getUfvk());
        });
    });

    describe("registry type", () => {
        it("should return correct registry type", () => {
            const accounts = new ZcashAccounts(seedFingerprint, []);
            expect(accounts.getRegistryType()).toBeDefined();
        });
    });
});
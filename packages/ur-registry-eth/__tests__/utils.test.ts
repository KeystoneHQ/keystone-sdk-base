// @ts-nocheck

import { generateAddressFromXpub, findHDPathFromAddress } from "../src/utlis";

describe("utils", () => {

  // abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
  // m/44'/60'/0'
  const xpub = "xpub6DCoCpSuQZB2jawqnGMEPS63ePKWkwWPH4TU45Q7LPXWuNd8TMtVxRrgjtEshuqpK3mdhaWHPFsBngh5GFZaM6si3yZdUsT8ddYM3PwnATt";
  const firstAddress = "0x9858EfFD232B4033E47d90003D41EC34EcaEda94";
  const secondAddress = "0x6Fac4D18c912343BF86fa7049364Dd4E424Ab9C0";

  describe("generateAddressFromXpub", () => {
    it("should derive address from xpub", () => {
      expect(generateAddressFromXpub(xpub, "m/0/0")).toBe(firstAddress);
      expect(generateAddressFromXpub(xpub, "m/0/1")).toBe(secondAddress);
    })
  })

  describe("findHDPathFromAddress", () => {
    it("should find HD path from given address", () => {
      expect(findHDPathFromAddress(firstAddress, xpub, 10, "m/44'/60'/0'")).toBe("m/44'/60'/0'/0/0")
      expect(findHDPathFromAddress(secondAddress, xpub, 10, "m/44'/60'/0'")).toBe("m/44'/60'/0'/0/1")
    })
  })
});

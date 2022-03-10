const coins = [
  {
    coinCode: "BTC",
    active: true,
    accounts: [
      {
        hdPath: "M/49'/0'/0'",
        xPub: "xpub6D3i46Y43SFfjEBYheBK3btYMRm9Cfb8Tt4M5Bv16tArNBw5ATNyJWjdcMyLxoCdHWTvm3ak7j2BWacq5Lw478aYUeARoYm4dvaQgJBAGsb",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "ETC",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/61'/0'",
        xPub: "xpub6BoGYciy75JfrWWm1yJJctrCnEft6RtyECCjHDuhACfmShsSbcSp5ceAZzx1YpMtLfWHCbG6bKqEH9uoUCbvMWAkjSMkMeVuYYf23nWd76X",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "ETH",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/60'/0'",
        xPub: "xpub6CNhtuXAHDs84AhZj5ALZB6ii4sP5LnDXaKDSjiy6kcBbiysq89cDrLG29poKvZtX9z4FchZKTjTyiPuDeiFMUd1H4g5zViQxt4tpkronJr",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "BCH",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/145'/0'",
        xPub: "xpub6CjD9XYc1hEKcAMsSasAA87Mw8bSUr6WQKrJ1ErLofJPP9sxeZ3sh1dH2S5ywQTRNrXsfXzT686jJNdX2m9KhvMDh4eQM9AdSkkQLLMbDG6",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "DASH",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/5'/0'",
        xPub: "xpub6DTnbXgbPo6mrRhgim9sg7Jp571onenuioxgfSDJEREH7wudyDQMDSoTdLQiYq3tbvZVkzcPe7nMgL7mbSixQQcShekfhKt3Wdx6dE8MHCk",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "LTC",
    active: true,
    accounts: [
      {
        hdPath: "M/49'/2'/0'",
        xPub: "xpub6CKt97v4gEsG4FG9E4hEotEUtjmW8rAvVcUJ4jsmdrB437WBZnK8gs8ktzaFQHe9i7NqzcAUkc5SeNXsVoYfVNxd1AwDgbw2up8UdMWq91B",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "TRON",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/195'/0'",
        xPub: "xpub6CNbvRPo2jr5oMHPQxUWVpzYAG6HykWahLiQnkxdxcDoxDS6Yje1CUDhD49jxEno9kdS6EB4VTgXohA9ppmqk3wvH4W54nJRZk477Vnpupz",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "DCR",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/42'/0'",
        xPub: "xpub6BmQYH48mM1hm8B2TDXg7oDfa7dZfHVgi7pWFMsmSuJ3rVwi2YEgjZMN1cBFQtieHPgmoY3YQx5G85XyxMvppPxJToxmWjo64gaNutTn6iw",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "XZC",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/136'/0'",
        xPub: "xpub6CKMZBhyfgYMeK7UuVCwF56BXsm1kVbUQwmB7bDU2i2cGx2VXNwR7Z5tnGsuZbjc35LQvhyZJasrX12adMdAqtFno9fLJJxSksPDU7W3SEk",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "XRP",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/144'/0'",
        xPub: "xpub6C438jHkPCDoEy5jAH4a9hBtYrcprSwGvEA8L5HNhqDyJa1WZPpZXj9DNNtsRjcHxzsuZJq18sMSkbmqYKqpDacP8aMSK63ExzX2bPoMdAo",
        addressLength: 3,
      },
    ],
  },
  {
    coinCode: "IOST",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/291'/0'/0'/0'",
        xPub: "xpub6FUXmF5FUkGWU8Kz71voT63M9MmG3SzUtLTSfftsre2gwoxkKnecBjxdXR4SMN3pTYmNj8EMSznXvPrAJxx9fb7UxyTzHAgwvP11k878Cr7",
      },
    ],
  },
  {
    coinCode: "EOS",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/194'/0'",
        xPub: "xpub6BffWuUvhRpycrEq9H2gQDNT1xtzu2pfNvaf2j6JMxErTFbwAX7yaL5hCocYJwaKxmYgpNuoXkGFKHQv2brE1XEmX1aneH3AHtUrR8tMV6H",
      },
    ],
  },
  {
    coinCode: "DOT",
    active: true,
    accounts: [
      {
        hdPath: "//polkadot",
        xPub: "xpub69XF3sp9ePvENHmDenwg9humjwqtKuZbZ8go4p8qTpQWn1SFzXTT8DhMtPX66T6sPpaZjtdQrB7cqu3mcrn7Dch85GVrc9grt3n3AvC9BVb",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "KSM",
    active: true,
    accounts: [
      {
        hdPath: "//kusama",
        xPub: "xpub69XF3sp9ePvEND8dZXXvLSunn7DGcbmdTK5hWj8r7Bsz6NiAsKuTWeMa7u656cENuhKcRam2hiGzHknAbvyeZTgiheZdhQ2adBWNUGimuVK",
        addressLength: 1,
      },
    ],
  },
  {
    coinCode: "TCFX",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/503'/0'",
        xPub: "xpub6BfuP8AaZEqdkesFsnYKR3XrmiLM3ovccFMKnrGoTfL3EY7x2LTDFChFPEY9aixnrgWmLDLJUxQ57dFmiYH2g6PVWPX2boBTQ7PhUu8ARUb",
        addressLength: 11,
      },
    ],
  },
  {
    coinCode: "CFX",
    active: true,
    accounts: [
      {
        hdPath: "M/44'/503'/0'",
        xPub: "xpub6BfuP8AaZEqdkesFsnYKR3XrmiLM3ovccFMKnrGoTfL3EY7x2LTDFChFPEY9aixnrgWmLDLJUxQ57dFmiYH2g6PVWPX2boBTQ7PhUu8ARUb",
        addressLength: 10,
      },
    ],
  },
];

export const sync = {
  version: 1,
  description: "cobo vault qrcode",
  coldVersion: 10900,
  deviceType: "Cobo Vault Pro",
  data: {
    type: 1,
    xfp: "5271c071",
    sync: {
      coins: coins,
    },
  },
};

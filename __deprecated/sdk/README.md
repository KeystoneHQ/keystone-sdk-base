# `@keystonehq/sdk`

`@keystonehq/sdk` is library for helping developer to do integration with Keystone.

the main purpose is to encode and decode data for QR Code usage.

currently we use UR to encode data. check this for detail info about [UR](https://github.com/BlockchainCommons/Research/blob/master/papers/bcr-2020-005-ur.md)

## Install

```bash
yarn add @keystonehq/sdk
```

```base
npm install --save @keystonehq/sdk
```

## Usage

```
import sdk from '@keystonehq/sdk';
const read = async () => {
    const result = await sdk.read();
}

const play = async () => {
    await sdk.play("any data string");
}

```

## API

| Name | Parameters                                      | result                                                                      | Description                                                                        |
| ---- | ----------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| read |                                                 | Promise<{type: 'text' &#124; 'json' &#124; 'ur', data: string} &#124; null> | Open a modal and read qrcode with camera, will return null when click Close button |
| play | data: string, options?: {refreshSpeed?: number} | Promise<void>                                                               | Open a modal and display a dynamic qrcode, will resolve when click Finish button   |

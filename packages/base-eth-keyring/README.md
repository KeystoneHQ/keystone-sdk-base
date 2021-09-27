# `base-eth-keyring`

This package is the base module of Keystone implementations of `MetaMaskKeyring`, you can import this module and extend your own Keystone compatible keyring.

This package uses [bc-ur-registry-eth](https://github.com/KeystoneHQ/keystone-airgaped-base/tree/master/packages/ur-registry-eth) to struct QR code payload. 

Please check out [eth-keyring](https://github.com/KeystoneHQ/keystone-airgaped-base/tree/master/packages/eth-keyring) and [metamask-airgapped-keyring](https://github.com/KeystoneHQ/keystone-airgaped-base/tree/master/packages/metamask-airgapped-keyring) if you wanna an example.

## Install

```bash
yarn add @keystonehq/base-eth-keyring
```

```bash
npm install --save @keystonehq/base-eth-keyring
```


## Usage

```
import { BaseKeyring } from '@keystonehq/base-eth-keyring';

export class YouOwnKeyring extends BaseKeyring {}
```

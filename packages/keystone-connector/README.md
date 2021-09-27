# `keystone-connector`
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![npm version](https://badge.fury.io/js/%40keystonehq%2Fkeystone-connector.svg)](https://badge.fury.io/js/%40keystonehq%2Fkeystone-connector)
A web3 connector which can make Dapps to work with [Keystone Hardware wallet](https://keyst.one) inspired by [web3-react](https://github.com/NoahZinsmeister/web3-react)


## Install

```bash
yarn add @keystonehq/keystone-connector
```

```base
npm install --save @keystonehq/keystone-connector
```

## Usage

```
import KeystoneConnetor from '@keystonehq/keystone-connector'

const newConnector = new KeystoneConnetor({
    chainId: 1,
    url: 'xxx' // your rpc url
})
```

you can check this example for detail usage:
https://github.com/KeystoneHQ/web3-react/tree/v6/example


## Local Development

- Clone repo\
  `git clone https://github.com/NoahZinsmeister/web3-react.git`

- Install top-level dependencies\
  `yarn`

- Install sub-dependencies\
  `yarn bootstrap`

- Build and watch for changes\
  `yarn start`

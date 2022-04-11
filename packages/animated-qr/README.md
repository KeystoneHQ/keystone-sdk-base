# `animated-qr`

This package is the keystone implementation of AnimatedQRCode and AnimatedQRScanner 

## Install

```bash
yarn add @keystonehq/animated-qr
```

```bash
npm install --save @keystonehq/animated-qr
```


## Usage

### QR Code

#### Component

```jsx
import { AnimatedQRCode } from '@keystonehq/animated-qr';

const ContainerView = () => {
  return (
    <AnimatedQRCode cbor="01234567" type="bytes" />
  )
}
```

#### Hook

```jsx
import { useAnimatedQRCode } from '@keystonehq/animated-qr';

const ContainerView = () => {
  const currentQRCode = useAnimatedQRCode({ cbor, type })
  return (
    <MyOwnQRCode data="currentQRCode" />
  )
}
```


### QR Scanner

#### Important

Please check camera permission before rendering this Component.

#### Component

```jsx
import { AnimatedQRScanner, Purpose } from '@keystonehq/animated-qr';

const ContainerView = () => {
  const handleScan= useCallback(({type: string, cbor: string}) => {
    console.log("onScanSuccess", cbor)
  }, [])

  const handleError= useCallback((error: string) => {
    console.log("onScanError", error)
  }, [])


  return (
    <AnimatedQRScanner
      purpose={Purpose.SYNC}
      handleScan={handleScan}
      handleError={handleError} 
      options={{
        width: 300
      }}
    />
  )
}
```

#### Hook

```jsx
import { useAnimatedQRScanner, Purpose } from '@keystonehq/animated-qr';

const ContainerView = () => {
  const handleScan= useCallback(({type: string, cbor: string}) => {
    console.log("onScanSuccess", ur)
  }, [])

  const handleError= useCallback((error: string) => {
    console.log("onScanError", error)
  }, [])
  
  const { AnimatedQRScanner } = useAnimatedQRScanner({
    Scanner: MyOwnQRScanner, // Optional, using Keystone BaseQRScanner by default,
    scannerProps: { myOwnQRScannerPropsKey: "value" } // Optional
  })

  return (
    <AnimatedQRScanner
      purpose={Purpose.SYNC}
      handleScan={handleScan}
      handleError={handleError} 
    />
  )
}
```


Error List
- QR Code
  - UNEXPECTED_QRCODE
  - INVALID_QR_CODE

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

Component

```
import { AnimatedQRCode } from '@keystonehq/animated-qr';

const ContainerView = () => {
  return (
    <AnimatedQRCode cbor="01234567" type="bytes" />
  )
}
```

Hook

```
import { useAnimatedQRCode } from '@keystonehq/animated-qr';

const ContainerView = () => {
  const currentQRCode = useAnimatedQRCode({ cbor, type })
  return (
    <MyOwnQRCode data="currentQRCode" />
  )
}
```


### QR Scanner

Component

```
import { AnimatedQRScanner, Purpose } from '@keystonehq/animated-qr';

const ContainerView = () => {
  const handleScan= useCallback((ur: string) => {
    console.log("onScanSuccess", ur)
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

Hook

```
import { useAnimatedQRScanner, Purpose } from '@keystonehq/animated-qr';

const ContainerView = () => {
  const handleScan= useCallback((ur: string) => {
    console.log("onScanSuccess", ur)
  }, [])

  const handleError= useCallback((error: string) => {
    console.log("onScanError", error)
  }, [])
  
  const { AnimatedQRScanner } = useAnimatedQRScanner({
    purpose: Purpose.SYNC,
    Scanner: MyOwnQRScanner // Optional, using Keystone BaseQRScanner by default
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
- Camera
  - NO_WEBCAM_FOUND 
  - NO_WEBCAM_ACCESS 
  - UNKNOWN_CAMERA_ERROR
- QR Code
  - UNEXPECTED_QRCODE
  - INVALID_QR_CODE

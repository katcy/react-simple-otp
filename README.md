# react-simple-otp

> React OTP input

(https://www.npmjs.com/package/react-simple-otp) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-simple-otp
```

## Usage

```jsx
import React, { Component } from 'react'

import OTPField from 'react-simple-otp'

class Example extends Component {
  render() {
    return (
      <OTPField
        value={otp}
        length={6}
        inputStyle={{ outline: 'none' }} //custom styles for the input field
        onSubmit={(value) => {
          console.clear()
          console.log(value) //otp value on enter/return key
        }}
        enableClearAll={true} //enables clear button right to the input fields
        clearAllButton={'Clear'} //Button text for the clear all button
        clearAllButtonStyle={{ border: '2px solid' }} //custom style for the Clear button
        autoFocus={true} //enable Autofocus on the first input field on page load
        onChange={(value) => {
          console.log(value)
          setotp(value)
        }}
      />
    )
  }
}
```

## License

MIT © [katcy](https://github.com/katcy)

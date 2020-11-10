import React from 'react'

import OTPField from 'react-simple-otp'
import 'react-simple-otp/dist/index.css'

const App = () => {
  return (
    <OTPField
      length={6}
      onSubmit={(value) => {
        console.clear()
        console.log(value)
      }}
      enableClearAll={true}
      clearAllButtonText={'X'}
      clearAllButtonStyle={{ border: '2px solid' }}
      autoFocus={true}
      onChange={(val) => {
        console.log(val)
      }}
    />
  )
}

export default App

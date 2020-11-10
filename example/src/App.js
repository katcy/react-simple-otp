import React, { useState } from 'react'

import OTPField from 'react-simple-otp'
import 'react-simple-otp/dist/index.css'

const App = () => {
  const [otp, setotp] = useState('')
  return (
    <>
      <OTPField
        value={otp}
        length={6}
        onSubmit={(value) => {
          console.clear()
          console.log(value)
          setotp(value)
        }}
        enableClearAll={true}
        clearAllButton={'X'}
        clearAllButtonStyle={{ border: '2px solid' }}
        autoFocus={true}
        onChange={(value) => {
          console.log(value)
          setotp(value)
        }}
      />
      <button
        onClick={() => {
          setotp('')
        }}
      >
        cl
      </button>
    </>
  )
}

export default App

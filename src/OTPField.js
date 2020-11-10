import React, { useState, useRef } from 'react'

const OTPField = ({
  inputStyle,
  overrideInputStyle,
  length,
  onSubmit,
  enableClearAll,
  autoFocus,
  clearAllButtonText,
  clearAllButtonStyle,
  overrideButtonStyle
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''))
  const defaultInputStyle = {
    marginRight: '5px',
    border: 'none',
    borderBottom: '2px solid black',
    width: '20px',
    outline: 'none'
  }
  const defaultButtonStyle = {
    border: 'none',
    background: 'transparent',
    color: 'black',
    outline: 'none',
    cursor: 'pointer'
  }
  let refs = []
  otp.map((l, index) => {
    refs[index] = useRef(null)
  })

  const submitOnEnter = () => {
    onSubmit(otp.join(''))
  }

  return (
    <div style={{ display: 'flex' }}>
      {otp.map((otpField, index) => (
        <input
          key={index}
          ref={refs[index]}
          style={
            overrideInputStyle
              ? inputStyle
              : Object.assign({}, inputStyle, defaultInputStyle)
          }
          maxLength={1}
          autoFocus={index === 0 && autoFocus ? true : false}
          value={otp[index]}
          onKeyDown={(evt) => {
            if (evt.keyCode === 8) {
              evt.preventDefault()
              let newOtp = [...otp]
              newOtp[index] = ''
              setOtp(newOtp)
              index - 1 >= 0 && refs[index - 1].current.focus()
            }
            if (index + 1 === length && evt.keyCode === 13) {
              submitOnEnter()
            }
          }}
          onChange={(evt) => {
            let newOtp = [...otp]
            newOtp[index] = evt.target.value
            setOtp(newOtp)
            evt.target.value !== '' &&
              index + 1 < length &&
              refs[index + 1].current.focus()
          }}
        />
      ))}
      {enableClearAll && (
        <button
          style={
            overrideButtonStyle
              ? clearAllButtonStyle
              : Object.assign({}, clearAllButtonStyle, defaultButtonStyle)
          }
          onClick={() => {
            let newOtp = new Array(length).fill('')
            setOtp(newOtp)
            refs[0].current.focus()
          }}
        >
          {clearAllButtonText ? clearAllButtonText : 'X'}
        </button>
      )}
    </div>
  )
}

OTPField.defaultProps = {
  inputStyle: {},
  overrideInputStyle: false,
  onSubmit: () => {},
  enableClearAll: false,
  autoFocus: true,
  clearAllButtonText: 'X',
  clearAllButtonStyle: {},
  overrideButtonStyle: false
}

export default OTPField

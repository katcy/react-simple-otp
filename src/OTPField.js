import React, { useState, useRef, useEffect } from 'react'

const OTPField = ({
  value,
  inputStyle,
  length,
  onSubmit,
  enableClearAll,
  autoFocus,
  clearAllButton,
  clearAllButtonStyle,
  inputFieldClassName,
  clearAllButtonClassName,
  onChange
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(''))

  let refs = []
  otp.map((l, index) => {
    refs[index] = useRef(null)
  })

  const submitOnEnter = () => {
    onSubmit(otp.join(''))
  }

  useEffect(() => {
    if (!value) {
      setOtp(new Array(length).fill(''))
      refs[0].current.focus()
    }
  }, [value])

  useEffect(() => {
    onChange(otp.join(''))
  }, [otp])

  return (
    <div style={{ display: 'flex' }}>
      {otp.map((otpField, index) => (
        <input
          key={index}
          className={inputFieldClassName}
          ref={refs[index]}
          style={inputStyle}
          maxLength={1}
          autoFocus={index === 0 && autoFocus ? true : false}
          value={otp[index]}
          onKeyDown={(evt) => {
            if (evt.keyCode === 8) {
              evt.preventDefault()
              let newOtp = [...otp]
              let doesValueExist = newOtp[index]
              newOtp[index] = ''
              index - 1 >= 0 &&
                !doesValueExist &&
                refs[index - 1].current.focus()
              if (index - 1 >= 0 && !doesValueExist) newOtp[index - 1] = ''
              setOtp(newOtp)
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
          style={clearAllButtonStyle}
          className={clearAllButtonClassName}
          onClick={() => {
            let newOtp = new Array(length).fill('')
            setOtp(newOtp)
            refs[0].current.focus()
          }}
        >
          {clearAllButton}
        </button>
      )}
    </div>
  )
}

OTPField.defaultProps = {
  value: '',
  inputStyle: {
    outline: 'none',
    textAlign: 'center',
    width: '2rem',
    height: '30px',
    fontSize: '20px'
  },
  inputFieldClassName: '',
  onSubmit: () => {},
  enableClearAll: false,
  autoFocus: true,
  clearAllButton: 'Clear',
  clearAllButtonStyle: {
    cursor: 'pointer'
  },
  clearAllButtonClassName: '',
  onChange: () => {}
}

export default OTPField

import React, { useRef, useState } from 'react'
import '../css/EmailVerification.css'
import BackArrow from '../assets/BackArrow.png'
import portal_logo from '../assets/portal_logo.png'
import personImage from '../assets/personImage.png'
import emailVerificationImage from '../assets/emailVerificationImage.png'
import { useLocation, useNavigate } from 'react-router-dom'

function EmailVerification() {
  const location = useLocation()
  const email = location.state.email
  const navigate = useNavigate()
  const [verifyCode, setVerifyCode] = useState(false)
  const inputsRef = useRef<HTMLInputElement[]>([])

  const handleInput = (index: number, e: React.FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    const numericValue = parseInt(input.value)

    if(!isNaN(numericValue)) {
      if(inputsRef.current[index + 1]) {
        const nextInput = inputsRef.current[index + 1]
        nextInput.focus()
      }
      if(index === 3)
          setVerifyCode(true)
    } else {
      input.value = ''
    }
  }

  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0) {
      if(index === 3)
        setVerifyCode(false)
      e.preventDefault()
      const input = e.target as HTMLInputElement
      input.value = ''

      const prevInput = inputsRef.current[index - 1];
      prevInput.focus()
      prevInput.value = ''
    }
  }

  return (
    <div className='emailVerificationContainer'>
      <div className='backContainer'>
        <img className='backArrow' src={BackArrow} alt='arrow' onClick={() => navigate('/SignUp')}/>
        <p className='backText' onClick={() => navigate('/SignUp')}>Back</p>
      </div>

      <div className='leftBar'>
        <img className='portalLogo' src={portal_logo} alt='portal_logo' />
        <h1 className='leftBarHeader'>Verify your account</h1>
        <p className='leftBarP'>Check your Email!</p>
        <img className='leftBarPersonImage' src={personImage} alt='personImage'/>
      </div>

      <div className='emailVerifyForm'>
        <img className='emailImage' src={emailVerificationImage} alt='emailVerificationImage' />
        <p className='emailP'>Email Verification</p>
        <p className='emailSend'>Enter the code sent to <span className='email'>{email}</span></p>

        <div className='emailAuthCode'>
          <input
            className='inputCode'
            type='text'
            maxLength={1}
            onInput={(e) => handleInput(0, e)}
            onKeyDown={(e) => handleBackspace(0, e)}
            ref={(input) => (inputsRef.current[0] = input!)}
          />
          <input
            className='inputCode'
            type='text'
            maxLength={1}
            onInput={(e) => handleInput(1, e)}
            onKeyDown={(e) => handleBackspace(1, e)}
            ref={(input) => (inputsRef.current[1] = input!)}
          />
          <input
            className='inputCode'
            type='text'
            maxLength={1}
            onInput={(e) => handleInput(2, e)}
            onKeyDown={(e) => handleBackspace(2, e)}
            ref={(input) => (inputsRef.current[2] = input!)}
          />
          <input
            className='inputCode'
            type='text'
            maxLength={1}
            onInput={(e) => handleInput(3, e)}
            onKeyDown={(e) => handleBackspace(3, e)}
            ref={(input) => (inputsRef.current[3] = input!)}
          />
        </div>
        <div className='checkCode'>
          <p className='checkCodeP'>Didn't receive the email? <span><button className='checkCodeButton'>Resend email</button></span></p>
          {verifyCode ? (
            <button className='checkCodeMainButton' onClick={() => navigate('/InvestmentInterests', {state: {email}})}>Continue</button>
          ) : (
            <button className='checkCodeMainButtonDisabled'>Continue</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailVerification
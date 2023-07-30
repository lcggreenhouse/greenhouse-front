import React, { useState } from 'react'
import portal_logo from '../assets/portal_logo.png'
import personImage from '../assets/personImage.png'
import BackArrow from '../assets/BackArrow.png'
import googleIcon from '../assets/googleIcon.png'
import '../css/SignUpPage.css'
import { useNavigate } from 'react-router-dom'

function SignUpPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [password, setPassword] = useState('')
  const [validatePassword, setValidatePassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [termsAgree, setTermsAgree] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='signUpContainer'>
      <div className='backContainer'>
        <img className='backArrow' src={BackArrow} alt='arrow' onClick={() => navigate('/')}/>
        <p className='backText' onClick={() => navigate('/')}>Back</p>
      </div>
      <div className='leftBar'>
        <img className='portalLogo' src={portal_logo} alt='portal_logo' />
        <h1 className='leftBarHeader'>Invest in your future.</h1>
        <p className='leftBarP'>We will never sell your data for advertising or any other reason.</p>
        <p className='privacyLink'>Read our Privacy Policy</p>
        <p className='infoQuestion'>Why do we collect this info?</p>
        <img className='leftBarPersonImage' src={personImage} alt='personImage'/>
      </div>

      <div className='createAccountForm'>
        <h1 className='formHeader'>Create Investor Account</h1>
        <p className='loginText'>Already have an account? <span><button className='loginButton'>Login</button></span></p>
        <div className='formData'>
          <div>
            <p className='inputFieldName'>First name</p>
            <input
              className='inputField'
              type='text'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <p className='inputFieldName'>Last name</p>
            <input
              className='inputField'
              type='text'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <p className='inputFieldName'>Email</p>
            <input
              className='inputField'
              type='text'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p className='inputFieldName'>City, State</p>
            <input
              className='inputField'
              type='text'
              id='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <p className='inputFieldName'>Password</p>
            <input
              className='inputField'
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <p className='inputFieldName'>Confirm password</p>
            <input
              className='inputField'
              type='password'
              id='validatePassword'
              value={validatePassword}
              onChange={(e) => setValidatePassword(e.target.value)}
            />
            {password !== validatePassword && validatePassword !== '' ? (
              <p className='passwordMatch'>Passwords do not match</p>
            ) : null}
          </div>
        </div>

        <div className='createValidation'>
          <div className='inputLabel'>
            <input
              id='rememberMe' 
              className='checkBox'
              type='checkbox'
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className='rememberMe'>Remember me</label>
          </div>
          <div className='inputLabel'>
            <input
              id='agreeTerms' 
              className='checkBox'
              type='checkbox'
              onChange={() => setTermsAgree(!termsAgree)}
            />
            <label className='rememberMe'>I agree to all the <span><button className='rememberMeButton'>Terms</button></span> and <span><button className='rememberMeButton'>Privacy Policy</button></span></label>
          </div>
        </div>

        <div className='submitButtons'>
          {firstName !== '' && lastName !== '' && email !== '' && location !== '' && password !== '' && validatePassword !== '' && password === validatePassword && termsAgree !== false ? (
            <button className='createAccount' onClick={() => console.log(firstName)}>Create account</button>
          ) : (
            <button className='createAccountDisabled'>Create account</button>
          )}
          <div className='googleButton'>
            <img className='googleIcon' src={googleIcon} alt='googleIcon' />
            <button className='signInWithGoogle'>Sign-in with google</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage'
import reportWebVitals from './reportWebVitals'
import SignUpPage from './pages/SignUpPage'
import EmailVerification from './pages/EmailVerification'
import InvestmentInterests from './pages/InvestmentInterests'
import InvestorHomePage from './pages/InvestorHomePage'

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/SignUp' element={<SignUpPage />}/>
        <Route path='/EmailVerification' element={<EmailVerification />}/>
        <Route path='/InvestmentInterests' element={<InvestmentInterests />}/>
        <Route path='/InvestorHomePage' element={<InvestorHomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

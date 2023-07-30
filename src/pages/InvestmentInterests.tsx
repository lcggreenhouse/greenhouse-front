import '../css/InvestmentInterests.css'
import BackArrow from '../assets/BackArrow.png'
import portal_logo from '../assets/portal_logo.png'
import personImage from '../assets/personImage.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function InterestBlock({ value, selectedInterests, setSelectedInterests }: { value: string, selectedInterests: string[], setSelectedInterests: React.Dispatch<React.SetStateAction<string[]>> }) {
  const handleClick = () => {
    if (selectedInterests.includes(value)) {
      setSelectedInterests((prevInterests) => prevInterests.filter((interest) => interest !== value))
    } else {
      setSelectedInterests((prevInterests) => [...prevInterests, value])
    }
  }

  const isSelected = selectedInterests.includes(value)

  return (
    <button className={isSelected ? 'interestButtonselected' : 'interestButton'} onClick={handleClick}>
      {value}
    </button>
  )
}

function InvestmentInterests() {
  const location = useLocation()
  const email = location.state.email
  const navigate = useNavigate()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  return (
    <div className='IIContainer'>
      <div className='backContainer'>
        <img className='backArrow' src={BackArrow} alt='arrow' onClick={() => navigate('/EmailVerification', {state: {email}})}/>
        <p className='backText' onClick={() => navigate('/EmailVerification', {state: {email}})}>Back</p>
      </div>

      <div className='leftBar'>
        <img className='portalLogo' src={portal_logo} alt='portal_logo' />
        <h1 className='leftBarHeader'>Congratulations!</h1>
        <p className='leftBarP'>Welcome to Greenhouse Portal!</p>
        <img className='leftBarPersonImage' src={personImage} alt='personImage'/>
      </div>

      <div className='interestsContainer'>
        <h1 className='interestsHeader'>What are you interested in?</h1>
        <p className='interestsSubHeader'>Select <span className='interestsSubHeaderSpan'>three</span> to continue</p>
        <div className='interestsGrid'>
          <InterestBlock value='Geography/Proximity' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='Valuation Size/Investment Size' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='Listing Recency' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='Sector' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='Round Completion/Stage' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='Entity Structure (B-Corp)' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='Women Owned' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='Eco-Friendly' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
          <InterestBlock value='# Round/STO' selectedInterests={selectedInterests} setSelectedInterests={setSelectedInterests}/>
        </div>
        <div className='interestsContinue'>
          {selectedInterests.length >= 3 ? (
            <button className='interestsButton' onClick={() => console.log(selectedInterests)}>Continue</button>
          ) : (
            <button className='interestsButtonDisabled'>Continue</button>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default InvestmentInterests
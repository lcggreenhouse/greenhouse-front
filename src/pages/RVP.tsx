import NavBar from './NavBar'
import '../css/RVP.css'
import placeholderHomeImage from '../assets/placeholderHomeImage.png'

function RVP() {
  return (
    <div>
      <NavBar />
      <div className='RVPContainer'>
        <div className='RVPTop'>
          <img className='RVPTopImage' src={placeholderHomeImage} alt='placeHolderHomeImage'/>
          <div className='RVPTopCard'>
            <RVPCard />
          </div>
        </div>
      </div>
    </div>
  )
}

function RVPCard() {
  return (
    <div>
      <h1 className='RVPCardHeader'>Reverse Petting Zoo</h1>
      <h1 className='RVPCardHeader2'>$184,054 of 250,000 raised (61%)</h1>
      <p className='RVPCardP1'>$5M Pre-money Valuation</p>
      <p className='RVPCardP'>Hampton, New Brumshire</p>
      <p className='RVPCardP'>404 Investors</p>
      <p className='RVPCardP3'>12 days remaining</p>
      <div className='cardButtons'>
        <button>Invest in Reverse Petting Zoo</button>
        <button>Why Owns this Company?</button>
      </div>
    </div>
  )
}

export default RVP
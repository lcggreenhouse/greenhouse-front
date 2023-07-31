import '../css/InvestorHomePage.css'
import NavBar from './NavBar'
import raisesIcon from '../assets/raisesIcon.png'
import heartIcon from '../assets/heartIcon.png'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'

function InvestorHomePage() { 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!
  })

  return (
    <div>
      <NavBar />
      <div className='investorHomePageContainer'>
        <div className='leftSideScreen'>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <div>
              <Map />
              <h1 className='leftSideHeader'>Make a creative project a reality</h1>
              <div className='buttonContainer'>
                <button className='container1button1'>
                  Invest in your community with Portal
                </button>
                <button className='container1button2'>
                  Learn more about how Portal works
                </button>
              </div>
            </div>
          )}
        </div>
        <div className='rightSideScreen'>
          <h1 className='rightSideHeader'>Explore Recent Raises</h1>
          <div className='raisesGrid'>
            <RaisesBlock />
            <RaisesBlock />
            <RaisesBlock />
            <RaisesBlock />
            <RaisesBlock />
            <RaisesBlock />
          </div>
        </div>
      </div>
    </div>
  )
}

function RaisesBlock() {
  return (
    <div className='raisesBlock'>
      <div className='raisesBlockHeader'>
        <img className='raisesIcon' src={raisesIcon} alt='raisesIcon' />
        <div className='raisesHeaderText'>
          <p className='text1'>Reverse Petting Zoo</p>
          <p className='text2'>Hampton, New Brumshire</p>
        </div>
        <img className='heartIcon' src={heartIcon} alt='heartIcon' />
      </div>

      <div className='raisesBlockBody'>
        <h1 className='raisesBodyHeader'>$184,054 raised (61%)</h1>
        <p className='raisesBodyText'>12 Days Remaining</p>
        <p className='raisesBodyText'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
        <p className='raisesBadges'>BADGES</p>
      </div>

      <div className='raisesBlockFooter'>
        <h1 className='footer1'>404 Investors</h1>
        <h1 className='footer2'>Read More</h1>
      </div>
    </div>
  )
}

function Map() {
  return <GoogleMap zoom={15} center={{lat: 32.43407470585248, lng: -80.67018427362142}} mapContainerClassName='mapContainer'></GoogleMap>
}

export default InvestorHomePage
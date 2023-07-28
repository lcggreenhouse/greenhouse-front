import React from 'react'
import HomeNavBar from './HomeNavBar'
import placeholderHomeImage from '../assets/placeholderHomeImage.png'

function App() {
  return (
    <div>
      <HomeNavBar />
      <div className='flex items-center justify-center mt-56'>
        <div className='flex flex-col mr-7'>
          <h1 className='text-42px font-Inter'>Get in on the ground floor.</h1>
          <button className='text-xl font-Roberto font-semibold rounded-searchBarRadius text-white w-521 h-16 bg-homePageButtonBackground mt-5'>
            Invest in your community with Portal
          </button>
          <button className='text-xl font-Roberto font-semibold w-521 h-16 text-homePageButtonBackground border-2 rounded-searchBarRadius border-homePageButtonBackground mt-5'>
            Learn more about how Portal works
          </button>
        </div>
        <img className='w-477 h-309' src={placeholderHomeImage} alt="placeholderHomeImage" />
      </div>
    </div>
  );
}

export default App

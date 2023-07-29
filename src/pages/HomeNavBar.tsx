import React, { useState } from 'react'
import portal_logo from '../assets/portal_logo.png'
import search_icon from '../assets/search_icon.png'
import '../css/HomeNavBar.css'

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQueryChange = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <div className='homeNavBarContainer'>
      <img className='portalLogo' src={portal_logo} alt='portal_logo'/>
      <p className='portalLogoText'>
        ortal
      </p>
      <div className='searchBarContainer'>
        <img className='searchIcon' src={search_icon} alt='search_icon' onClick={() => {console.log(searchQuery)}}/>
        <input
          className='searchInput'
          type='text'
          id='fundraiserInput'
          placeholder='Find a Fundraiser'
          value={searchQuery}
          onChange={e => handleSearchQueryChange(e.target.value)}
        />
      </div>
      <button className='loginButton'>
        Log In
      </button>
      <button className='signupButton'>
        Invest with Portal
      </button>
    </div>
  )
}

export default NavBar
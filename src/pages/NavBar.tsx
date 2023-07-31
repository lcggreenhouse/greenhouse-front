import { useState } from 'react'
import portal_logo from '../assets/portal_logo.png'
import search_icon from '../assets/search_icon.png'
import bellIcon from '../assets/bellIcon.png'
import settingsIcon from '../assets/settingsIcon.png'
import userProfileImage from '../assets/userProfileImage.png'
import '../css/NavBar.css'

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQueryChange = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <div className='navBarContainer'>
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
      <div className='accountInfo'>
        <img className='bellIcon' src={bellIcon} alt='bellIcon' />
        <img className='settingsIcon' src={settingsIcon} alt='settingsIcon' />
        <img className='userProfileImage' src={userProfileImage} alt='userProfileImage' />
      </div>
    </div>
  )
}

export default NavBar
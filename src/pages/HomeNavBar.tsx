import React, { useState } from 'react'
import portal_logo from '../assets/portal_logo.png'
import search_icon from '../assets/search_icon.png'

function NavBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQueryChange = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <div className='flex shadow-md'>
      <img className='w-14 h-14' src={portal_logo} alt="portal_logo"/>
      <p className='font-Inter font-normal text-3xl font mt-2 ml-12 absolute z-1'>
        ortal
      </p>
      <div className='ml-16 self-center'>
        <img src={search_icon} alt="search_icon" className="absolute w-5 h-5 mt-3 ml-3 cursor-pointer" onClick={() => {console.log(searchQuery)}}/>
        <input
          className='bg-searchBackground pl-12 pr-3 py-2 w-593 h-10 rounded-searchBarRadius font-Roboto'
          type='text'
          id='fundraiserInput'
          placeholder='Find a Fundraiser'
          value={searchQuery}
          onChange={e => handleSearchQueryChange(e.target.value)}
        />
      </div>
      <button className='font-Roboto ml-auto mr-4'>
        Log In
      </button>
      <button className='font-Roboto text-white font-semibold bg-homePageButtonBackground w-64 h-10 self-center rounded-searchBarRadius mr-4'>
        Invest with Portal
      </button>
    </div>
  )
}

export default NavBar
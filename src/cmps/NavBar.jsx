import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav'>
        <div className='title'>Weather App</div>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        </div>
    </div>
  )
}

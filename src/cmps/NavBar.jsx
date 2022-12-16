import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='nav'>
        <div className='title'><NavLink to='/'>Weather App</NavLink></div>
        <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        </div>
    </div>
  )
}

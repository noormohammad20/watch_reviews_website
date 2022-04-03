import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <NavLink className='nav-btn' to='/home'>Home</NavLink>
            <NavLink className='nav-btn' to='/reviews'>Reviews</NavLink>
            <NavLink className='nav-btn' to='/dashboard'>Dashboard</NavLink>
            <NavLink className='nav-btn' to='/blogs'>Blogs</NavLink>
            <NavLink className='nav-btn' to='/about'>About</NavLink>
        </nav>
    )
}

export default Header
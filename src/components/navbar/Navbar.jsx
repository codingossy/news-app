import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Navbar = () => {
  return (
    <nav className='capitalize hidden lg:flex'>
    <ul className='flex items-center space-x-12'>
      <Link to='/'><li className='nav-link'>Top News</li></Link>
      <Link to='/business'><li className='nav-link'>business</li></Link>
      <Link to='/tech'><li className='nav-link'>Tech</li></Link>
      <Link to='/sports'><li className='nav-link'>sports</li></Link>
      <Link to='/entertainment'><li className='nav-link'>entertainment</li></Link>
     
    </ul> 
</nav>
  )
}

export default Navbar
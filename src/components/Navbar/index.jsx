import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
      <div id='nav-left'>
        <Link to='/'>Ecommerce App</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div id='nav-right'>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    </div>
  )
}

export default Navbar

/*
  # Note:
  - Avoid using 'a' tag for linking
  - Use 'Link' component from'react-router-dom' package
    - to prop instead of href attribute
*/
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='nav'>
        <img src='public/brand_logo.png'></img>
        <ul className='navbar-items'>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li> 
        </ul>
        <button className='login-btn'>Login</button>
      </div>
    </nav>
  )
} 

export default Navbar
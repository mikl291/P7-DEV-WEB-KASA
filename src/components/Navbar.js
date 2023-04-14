import React from 'react' 
import { NavLink } from 'react-router-dom' 
import "../style/layout/Navbar.scss" 

function Navig() {
  return (
    <nav className="navbar">
      <NavLink  to="/">
        <div className='navbar__logo'>
            <img src="logo.png" alt="logo Kasa" />
        </div>
      </NavLink>
        <div className='navbar__links'>
            <NavLink to="/">Acceuil</NavLink>
            <NavLink className='about' to="/About">Á propos</NavLink>
        </div>
    </nav>
  ) 
}

export default Navig 

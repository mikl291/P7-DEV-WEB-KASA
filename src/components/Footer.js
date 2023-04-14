import React from 'react' 
import "../style/layout/Footer.scss" 

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img className='logo' src='logo.png' alt="logo kasa" />
      </div>
      <div className='footer__txt'>
      2020 Kasa. © All rights reserved
      </div>
    </div>
            
  ) 
}

export default Footer 
import React from 'react'
import "../style/layout/Main.scss"
import "./Banner"
import "./ApartmentThumbnail"

function Main({children}) {
  return <div className='main'>{children}</div>
    
  
}

export default Main

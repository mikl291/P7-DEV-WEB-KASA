import React from 'react' 
import "../style/layout/ApartmentThumbanail.scss" 
import { NavLink } from 'react-router-dom' 

const ApartmentThumbnail = (props) => {


    return (
            <NavLink className="LinkToApartmentPage" to={`/ApartmentPage/${props.id}`} state={ {
                ApartmentId: props.id
            }}>
        <div className='Apartment'>
            <img src={props.imageUrl} alt="" />
            <div className="Apartment__sub">{props.title}</div>
        </div>
            </NavLink>
    ) 
} 

export default ApartmentThumbnail 
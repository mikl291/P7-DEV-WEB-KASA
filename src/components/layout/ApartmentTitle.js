import React from 'react' 
import "../../style/layout/ApartmentTitle.scss" 


const ApartmentTitle = (props) => {
    return (
        <div className='Apartment__title'>
            <h1>{props.flat.title}</h1>
            <h2>{props.flat.location}</h2>
            <div className="Apartment__title__tags">
                {props.flat.tags.map((tag) => (<span key={tag}>{tag}</span>))}
            </div>
        </div>
    ) 
} 

export default ApartmentTitle 
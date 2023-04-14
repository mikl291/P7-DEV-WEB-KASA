import React from 'react' 
import "../../style/layout/ApartmentAside.scss" 

const ApartmentAside = (props) => {

    const flat = props.flat
    const {name} = flat.host 
    const [firstName, LastName] = name.split(" ") 

    return (
        <div className="Apartment__aside">
                    <div className="Apartment__aside__owner">
                        <h3>
                            <span>{firstName}</span>
                            <span>{LastName}</span>
                        </h3>
                        <div className="Apartment__aside__owner__portrait">
                            <img src={flat.host.picture} alt="" />
                        </div>
                    </div>
                    <div className="Apartment__aside__stars">

                        { [1, 2, 3, 4, 5].map((number) => 
                        <span key={number} className={props.flat.rating >= number ? 'on' : ''}>★</span>)}

                    </div>
                </div>
    ) 
} 

export default ApartmentAside 
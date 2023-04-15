import "../../style/layout/ModelApartment.scss" 
import DescriptionPan from './DescriptionPan' 
import ApartmentBanner from './ApartmentBanner'
import ApartmentTitle from './ApartmentTitle' 
import ApartmentAside from './ApartmentAside' 
import { flats } from "react"
import { useEffect, useState } from "react"
import { useApartment } from "../../hooks/useApartment"



const ModelApartment = ({apartmentId}) => {

    
    console.log(apartmentId)

    
    const flat =useApartment(apartmentId)
    if (flat == null) return <div>...Loading</div> 
    return (
        <section className='ApartmentPage'>
            <ApartmentBanner pictures={flat.pictures} />
            <div className="ApartmentHeader">
                <ApartmentTitle flat={flat} />
                <ApartmentAside flat={flat} />
            </div>
            <div className="Apartment__pan">
                <DescriptionPan title="Description" content={flat.description} />
                <DescriptionPan title="Equipements" content={flat.equipments.map((eq, index) => <li key={index}>{eq}</li>)} />
            </div>
        </section>
    ) 
} 

export default ModelApartment 
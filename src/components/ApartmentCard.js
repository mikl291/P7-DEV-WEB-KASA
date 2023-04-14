import "../style/layout/ApartmentCards.scss"
import ApartmentThumbnail from "../components/ApartmentThumbnail"
import { useApartments } from '../hooks/useApartments' 




const ApartmentCards = () => {

    const Apartments = useApartments() 
    return (
        <div className='ApartmentCards'>
            {Apartments.map((appart, index) => (
                <ApartmentThumbnail key={index} title={appart.title} imageUrl={appart.cover} id={appart.id} />
            ))}
        </div>
    ) 
}

export default ApartmentCards 
import React from 'react' 
import Navbar from '../components/Navbar' 
import Main from '../components/Main' 
import Footer from '../components/Footer' 
import ModelApartment from '../components/layout/ModelApartment.js' 
import { useParams } from 'react-router-dom'


const ApartmentPage = () => {

    const params = useParams();
    const apartmentId = params.id

    
    console.log(apartmentId)

    

    return (
        <div>
            <Main>
                <Navbar />
                <ModelApartment apartmentId={apartmentId} />
            </Main>
            <Footer />
        </div>
    ) 
} 

export default ApartmentPage 
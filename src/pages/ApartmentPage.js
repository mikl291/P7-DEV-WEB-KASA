import React from 'react' 
import Navbar from '../components/Navbar' 
import Main from '../components/Main' 
import Footer from '../components/Footer' 
import ModelApartment from '../components/layout/ModelApartment.js' 

const apartmentPage = () => {
    return (
        <div>
            <Main>
                <Navbar />
                <ModelApartment />
            </Main>
            <Footer />
        </div>
    ) 
} 

export default apartmentPage 
import React from 'react' 
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Main from "../components/Main" 
import Footer from "../components/Footer.js"
import ApartmentCards from '../components/ApartmentCard' 


const Home = () => {
  return (
    <div>
      <Main>
        <Navbar />
        <Banner />
        <ApartmentCards />
      </Main>
      <Footer />

    </div>
  ) 
} 


export default Home 
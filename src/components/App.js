import React from 'react' 
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from "../pages/HomePage" 
import About from '../pages/AboutPage' 
import ApartmentPage from '../pages/ApartmentPage' 
import Error from "./Error" 
import ErrorPage from '../pages/ErrorPage' 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/ApartmentPage' element={<ApartmentPage />} />
        <Route path='*' element={<ErrorPage />} errorElement={<Error />} />
      </Routes>
    </BrowserRouter>
  ) 
} 

export default App 



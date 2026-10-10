import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './landing_page/home/Homepage'
import Signup from './landing_page/signup/Signup'
import Aboutpage from './landing_page/about/Aboutpage'
import Pricingpage from './landing_page/pricing/Pricingpage'
import Productspage from './landing_page/products/Productspage'
import Supportpage from './landing_page/support/Supportpage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Notfound from './landing_page/notfound'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={ <Homepage/>}/>
         <Route path='/signup' element={ <Signup/>}/>
         <Route path='/about' element={ <Aboutpage/>}/>
         <Route path='/product' element={ <Productspage/>}/>
         <Route path='/pricing' element={ <Pricingpage/>}/>
         <Route path='/support' element={ <Supportpage/>}/>
         <Route path='*' element={ <Notfound/>}/>
         
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)

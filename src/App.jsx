 import React from 'react'
 
 import Navbar from "./component/navbar/Navbar"
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./component/pages/Home"
import Services from "./component/pages/Services"
import Products from "./component/pages/Products"
import ContactUs from "./component/pages/ContactUs"
import SignUp from "./component/pages/SignUp"
import Marketing from "./component/pages/Marketing"
import Consalting from "./component/pages/Consalting"


function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/services' element={Services} />
        <Route path='/products' element={Products} />
        <Route path='/contact-us' element={ContactUs} />
        <Route path='/sign-up' element={SignUp} /> 
        <Route path='/marketing' element={Marketing} />
        <Route path='/consalting' element={Consalting} />       
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// http://localhost:5173/

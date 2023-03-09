import React from 'react'
import Navbar from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/Navbar.js'
import '/Users/admin/PlacementPrep/placement_prep/src/App13.css'
import Services from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/pages/Services.js'
import Products from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/pages/Products.js'
import Contact from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/pages/Contact.js'
import Signup from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/pages/Signup.js'
import Marketing from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/pages/Marketing.js'
import Consulting from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/pages/Consulting.js'
import Home from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/pages/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App13 = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/services' exact element={<Services />} />
                    <Route path='/products' exact element={<Products />} />
                    <Route path='/contact-us' exact element={<Contact />} />
                    <Route path='/signup' exact element={<Signup />} />
                    <Route path='/marketing' exact element={<Marketing />} />
                    <Route path='/consulting' exact element={<Consulting />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App13

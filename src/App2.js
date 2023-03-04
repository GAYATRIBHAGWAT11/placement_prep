import React from 'react'
import Home from '../src/router/Home'
import About from '../src/router/About'
import Contact from '/Users/admin/PlacementPrep/placement_prep/src/router/Contact.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App2() {
    return (
        <>
            <h1>practice router</h1>
            <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
            </div>





        </>
    )
}
export default App2;
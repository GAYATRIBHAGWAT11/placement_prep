import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/Navbar.css'
import Dropdown from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/Dropdown.js'
import {Button} from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)

        } else {
            setDropdown(true)
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }



    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Epic
                    <i className='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-time" : "fas fa-bars"} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>

                    </li>
                    <li className='nav-item'>
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}

                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services<i className='fas fa-caret-down' />

                        </Link>
                        {dropdown && <Dropdown />}

                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links'
                            onClick={closeMobileMenu}>
                            Products

                        </Link>

                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links'
                            onClick={closeMobileMenu}>
                            Contact Us

                        </Link>

                    </li>
                    <li className='nav-item'>
                        <Link to='/Sign up' className='nav-links-mobile'
                            onClick={closeMobileMenu}>
                            Sign up

                        </Link>

                    </li>

                </ul>
                <Button />

            </nav>

        </>
    )
}
export default Navbar;
import { MenuItems } from '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/Menuitem.js'
import { Link } from 'react-router-dom'
import '/Users/admin/PlacementPrep/placement_prep/src/React_Navbar_Dropdown/components/Dropdown.css'
import { useState } from 'react'
const Dropdown = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

            </ul>

        </>
    )
}

export default Dropdown

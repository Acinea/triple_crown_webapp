import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import './header.css'

export function Header() {
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        active === false ? setActive(true) : setActive(false)
    }
    return (
        <main>
            <header>
                <div className={"header-menu-button-inactive"} >
                    <MenuIcon fontSize='large' onClick={toggleMenu} />
                </div>
                <h1 className='header-text'>PlaceHolder</h1>
                <div>
                    <FacebookIcon fontSize='large'/>
                </div>
            </header>
        </main>
    )
}
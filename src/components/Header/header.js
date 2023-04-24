import React, {useState, Link} from 'react'
import CloseIcon from '@mui/icons-material/CloseIcon'
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
                <nav className={active ? 'nav-menu-container-active' : 'nav-menu-container-inactive'}>
                    <div className="menu-title-container">
                        <div className="header-menu-button-active">
                            <CloseIcon fontSize='large' onClick={toggleMenu} />
                        </div>
                        <h2>Menu</h2>
                    </div>
                    <ul className="menu-list">
                        <Link to='/' className="nav-link" onClick={toggleMenu}><li>Home</li></Link>
                        <Link to='/about' className="nav-link" onClick={toggleMenu}><li>About Me</li></Link>
                        <Link to='/resume' className="nav-link" onClick={toggleMenu}><li>Resume</li></Link>
                        <Link to='/contact' className="nav-link" onClick={toggleMenu}><li>Contact Me!</li></Link>
                    </ul>
                </nav>
                <div className={"header-menu-button-inactive"} >
                    <MenuIcon fontSize='large' onClick={toggleMenu} />
                </div>
                
                <div>
                    <FacebookIcon fontSize='large'/>
                </div>
            </header>
        </main>
    )
}
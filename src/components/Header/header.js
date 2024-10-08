import React, {useState} from 'react'
import logo from '../../resources/tcp logo.png'
import CloseIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Vendor} from '../Vendor/vendor'
import {Past} from '../Past/past'
import './header.css'

export function Header() {
    const [active, setActive] = useState(false);
    const [showVendor, setShowVendor] = useState(false);
    const [showPast, setShowPast] = useState(false);
    const toggleMenu = () => {
        active === false ? setActive(true) : setActive(false)
    }
    const toggleVendor = () => {
        showVendor === false ? setShowVendor(true) : setShowVendor(false)
    }
    const togglePast = () => {
        showPast === false ? setShowPast(true) : setShowPast(false)
    }
    const openVendor = () => {
        toggleMenu();
        toggleVendor();
    }

    const openPast = () => {
        toggleMenu();
        togglePast();
    }
    const scrollSmoothTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
        toggleMenu();
      }

    return (
        <main>
            <header id="home">
                <nav className={active ? 'nav-menu-container-active' : 'nav-menu-container-inactive'}>
                    <div className="menu-title-container">
                        <div className="header-menu-button-active">
                            <CloseIcon fontSize='large' onClick={toggleMenu} />
                        </div>
                        <h2>Menu</h2>
                    </div>
                    <div className={active ? 'blackout-active' : 'blackout-inactive'} onClick={toggleMenu}>

                    </div>
                    <ul className="menu-list">
                        <li className='menu-item' onClick={() => scrollSmoothTo('home')}>Home</li>
                        <li className='menu-item' onClick={()=> scrollSmoothTo('upcoming-container-title')}>Upcoming Events</li>
                        <li className='menu-item' onClick={() => scrollSmoothTo('contact')}>Contact</li>
                        <li className='menu-item' onClick={() => scrollSmoothTo('about')}>About Us</li>
                        {/*<li className='menu-item' onClick={openPast}>Past Events</li>*/}
                        <li className='menu-item' onClick={() => scrollSmoothTo('mail-main')}>Mail-In Form</li>
                        {/*<li id="menu-purchase" onClick={() => window.open('https://www.eventbrite.com/e/sportscards-memorabilia-show-featuring-dwight-gooden-tickets-624616594047', '_blank')}><b>Purchase Tickets</b></li>*/}
                        <li><img src={logo} alt="company logo" id="menu-logo" /><br></br>Triple Crown Promotion LLC</li>
                    </ul>
                    
                </nav>
                <div className={"header-menu-button-inactive"} >
                    <MenuIcon fontSize='large' onClick={toggleMenu} />
                </div>
                
                <div id="social-media-container">
                    <a id="fb-icon" href="https://www.facebook.com/profile.php?id=100091648703312" target="_blank" rel="noreferrer"><FacebookIcon fontSize='large'/></a>
                    <a id="ig-icon" href="https://www.instagram.com/triplecrownpromotion/" taget="_blank" rel="noreferrer"><InstagramIcon fontSize='large'/></a>
                </div>
            </header>
            <Vendor showVendor={showVendor} openVendor={openVendor} toggleVendor={toggleVendor} />
            <Past showPast={showPast} openPast={openPast} togglePast={togglePast} />
        </main>
    )
}
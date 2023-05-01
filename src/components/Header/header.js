import React, {useState, Link} from 'react'
import logo from '../../resources/tcp logo.png'
import CloseIcon from '@mui/icons-material/MenuOpen'
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './header.css'

export function Header() {
    const [active, setActive] = useState(false);
    const toggleMenu = () => {
        active === false ? setActive(true) : setActive(false)
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
                        <li className='menu-item' onClick={() => scrollSmoothTo('contact')}>Contact</li>
                        <li className='menu-item' onClick={() => scrollSmoothTo('about')}>About Us</li>
                        <li className='menu-item'>Past Events<br></br>*Coming Soon*</li>
                        <li id="menu-purchase" onClick={() => window.open('https://www.eventbrite.com/e/sportscards-memorabilia-show-featuring-dwight-gooden-tickets-624616594047', '_blank')}><b>Purchase Tickets</b></li>
                    </ul>
                    <div className="menu-footer">
                        <img src={logo} alt="company logo" id="menu-logo" />
                        <b><p>Triple Crown Production LLC.</p></b>
                    </div>
                </nav>
                <div className={"header-menu-button-inactive"} >
                    <MenuIcon fontSize='large' onClick={toggleMenu} />
                </div>
                
                <div id="social-media-container">
                    <a id="fb-icon" href="https://www.facebook.com/profile.php?id=100091648703312" target="_blank"><FacebookIcon fontSize='large'/></a>
                    <a id="ig-icon" href="https://www.instagram.com/triplecrownpromotion/" taget="_blank"><InstagramIcon fontSize='large'/></a>
                </div>
            </header>
        </main>
    )
}
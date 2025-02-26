import React from 'react'; //usestate removed
import logo from '../../resources/tcp logo.png'
import mark from '../../resources/Mark Gastin.jpg'
import card from '../../resources/sportcard.jpg'
import wild from '../../resources/wildboys.jpg'
import mail from '../Vendor/mail.pdf'
//import {Price} from '../Price/price'
//import {Schedule} from '../Schedule/schedule'
import './home.css'

export function Home() {
    /*const [showPrice, setShowPrice] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const togglePrice = () => {
        showPrice === false ? setShowPrice(true) : setShowPrice(false)
    }
    const toggleSchedule = () => {
        showSchedule === false ? setShowSchedule(true) : setShowSchedule(false)
    }*/

    const scrollSmoothTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
    return (
        <main className='homepage'>
            <section className='banner-container'>
                <article className='banner-text-container'>
                    <img id="banner-logo" src={logo} alt='company-logo' />
                    <p id='banner-info'>Triple Crown Promotion is a premier sports event organizing company in New Jersey which specializes in bringing sports fans and athletes together through autographing events.</p>
                    <div className="banner-button-container">
                        <button id="banner-button"  onClick={() => scrollSmoothTo('contact')}>Contact</button>
                        <button id="banner-button"  onClick={() => scrollSmoothTo('mail-main')}>Mail-In Form</button>
                    </div>
                </article>
            </section>
            <section>
                <article className='presents'>
                    <h2 className='presents-title'>Triple Crown Promotion Presents:<br></br> Sportscards/Pokemon Cards & Collectibles Show</h2>
                    <h4 className='presents-title-info'>Saturday, March 1st, 9am - 2pm</h4>
                    <h4 className='presents-title-info'>Philo Lodge, South River, NJ</h4>
                    <img className='presents-image' src={card} alt='image of trading cards'></img>
                    <p className='presents-info'>Join us at <b>Philo Lodge</b>, Saturday, March 1st as we showcase a trove of autographed cards and Collectibles. Relive the moments share stories, and connect with fellow enthusiasts who love the game just as much as you do.</p>
                    <p className='presents-info'><b>Admission Price: </b>$3</p>
                    <p className='presents-info'><b>Location:</b> 120 Old Bridge Turnpike, South River, NJ</p>
                </article>
            </section>
        </main>

    )
}
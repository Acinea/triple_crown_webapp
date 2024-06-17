import React from 'react'; //usestate removed
import logo from '../../resources/tcp logo.png'
import card from '../../resources/sportcard.jpg'
//import {Price} from '../Price/price'
//import {Schedule} from '../Schedule/schedule'
import map from '../../resources/map.PNG'
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
                        <button id="banner-button" onClick={() => window.open('https://www.ezevent.com/Event/sports-card-collectibles-show-tickets-7622', '_blank')}>Purchase Tickets</button>
                        <button id="banner-button"  onClick={() => scrollSmoothTo('contact')}>Contact</button>
                    </div>
                </article>
            </section>
            <section>
                <article className='presents'>
                    <h2 className='presents-title'>Triple Crown Promotion Presents:<br></br> Sportscards & Collectibles Show</h2>
                    <h4 className='presents-title-info'>Saturday, June 22nd, 9am - 2pm</h4>
                    <h4 className='presents-title-info'>Old Bridge First Aid & Rescue Squad</h4>
                    <img className='presents-image' src={card} alt='image of trading cards'></img>
                    <p className='presents-info'>Join us at <b>Old Bridge First Aid & Rescue Squad</b>, Saturday, June 22nd as we showcase a trove of autographed cards and Collectibles. Relive the moments share stories, and connect with fellow enthusiasts who love the game just as much as you do.</p>
                    <p className='presents-info'><b>Admission Price: </b>$3</p>
                    <p className='presents-info'><b>Location:</b> 200 Marlboro Road, Old Bridge, NJ 08857</p>
                </article>
            </section>
        </main>

    )
}
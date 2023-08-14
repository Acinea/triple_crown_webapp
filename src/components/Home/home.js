import React from 'react'; //usestate removed
import card from '../../resources/sportcard.jpg'
import logo from '../../resources/tcp logo.png'
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
                        <button id="banner-button"  onClick={() => scrollSmoothTo('contact')}>Contact</button>
                        
                    </div>
                </article>
            </section>
            <section>
                <article className='presents'>
                    <h2 className='presents-title'>Triple Crown Promotion Presents:<br></br> Sportscards & Memorabilia Show</h2>
                    <h4 className='presents-title-info'>Septmeber 9th, 10am - 4pm</h4>
                    <h4 className='presents-title-info'>Friendly Sons of the Shillelagh</h4>
                    <img id="player-image" src={card} alt='Dwight Gooden' />
                    <p className='presents-info'>Join us at <b>Friendly Sons of the Shillelagh</b>, Saturday, Septmeber 9th as we showcase a trove of autographed cards and memorabilia. Relive the moments share stories, and connect with fellow enthusiasts who love the game just as much as you do.</p>
                    <p className='presents-info'><b>Admission Price: </b>$3</p>
                    <p className='presents-info'><b>Location:</b> 15 Oak Street, Old Bridge, NJ 08857</p>
                    <img id="map" src={map} alt="Map to Sons of the Shillelagh" />
                </article>
            </section>
        </main>

    )
}
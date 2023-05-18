import React, {useState} from 'react';
import player from '../../resources/GoodenDwight.png'
import logo from '../../resources/tcp logo.png'
import {Price} from '../Price/price'
import {Schedule} from '../Schedule/schedule'
import './home.css'

export function Home() {
    const [showPrice, setShowPrice] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);
    const togglePrice = () => {
        showPrice === false ? setShowPrice(true) : setShowPrice(false)
    }
    const toggleSchedule = () => {
        showSchedule === false ? setShowSchedule(true) : setShowSchedule(false)
    }

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
                        <button onClick={() => window.open('https://www.eventbrite.com/e/sportscards-memorabilia-show-featuring-dwight-gooden-tickets-624616594047', '_blank')} id="banner-purchase-button">Purchase Tickets</button>
                    </div>
                </article>
            </section>
            <section>
                <article className='presents'>
                    <h2 className='presents-title'>Triple Crown Promotion Presents: Dwight Gooden</h2>
                    <h3 className='presents-title'>June 11th, 1pm - 5pm</h3>
                    <h3 className='presents-title'>Old Bridge Knights of Columbus</h3>
                    <img id="player-image" src={player} alt='Dwight Gooden' />
                    <p className='presents-info'>Join us at <b>The Old Bridge Knights of Columbus</b>, Sunday June 11th for an afternoon with the legendary Dwight Gooden. As one of the most iconic figures in baseball history, Gooden's impact on the sport is immeasurable. Fans from all over are gathering to this event to witness his incredible talent and have the opportunity to get their memoriabilia signed by the man himself.</p>
                    <p className='presents-info'><b>Event Schedule:</b> <a className="info-menu" href='/' onClick={toggleSchedule}>Click here.</a><Schedule toggleSchedule={toggleSchedule} showSchedule={showSchedule} /></p>
                    <p className='presents-info'><b>Price Guide</b>: <a className="info-menu" href='/' onClick={togglePrice}>Click here.</a><Price togglePrice={togglePrice} showPrice={showPrice} /></p>
                    <p className='presents-info'><b>Location:</b> 61 Pine Street, Old Bridge, NJ</p>
                </article>
            </section>
        </main>

    )
}
import React from 'react';
import player from '../../resources/GoodenDwight.png'
import logo from '../../resources/tcp logo.jpg'
import './home.css'

export function Home() {
    return (
        <main className='homepage'>
            <section className='banner-container'>
                <article className='banner-text-container'>
                    <img id="banner-logo" src={logo} alt='company-logo' />
                    <p id='banner-info'>Triple Crown Promotion is a premier sports event organizing company in New Jersey which specializes in bringing sports fans and athletes together through autographing events.</p>
                    <button id="banner-button">Contact</button>
                </article>
            </section>
            <section>
                <article className='presents'>
                    <h2 className='presents-title'>Triple Crown Promotion Presents: Dwight Gooden</h2>
                    <h3 className='presents-title'>June 11th, 1pm - 4pm</h3>
                    <img id="player-image" src={player} alt='Dwight Gooden' />
                    <p>Join us at <b>The Old Bridge Knights of Columbus</b>, Sunday June 11th for an afternoon of sports autography featuring none other than the legendary Dwight Gooden. As one of the most iconic figures in baseball history, Gooden's impact on the sport is immeasurable. Fans from all over are gathering to this event to witness his incredible talent and have the opportunity to get their memoriabilia signed by the man himself.</p>
                    <p><b>Location:</b> 61 Pine Street, Old Bridge, NJ</p>
                </article>
            </section>
        </main>

    )
}
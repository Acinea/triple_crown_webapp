import React from 'react';
import player from '../../resources/GoodenDwight.png'
import './home.css'

export function Home() {
    return (
        <main className='homepage'>
            <section className='banner-container'>
                <article className='banner-text-container'>
                    <h1 id='banner-title'>Triple Crown Promotions</h1>
                    <p id='banner-info'>Triple Crown Promotions is the premier sports event organizing company in New Jersey which specializes in bringing sports fans and athletes together through autographing events.</p>
                    <button id="banner-button">Contact</button>
                </article>
            </section>
            <section>
                <article className='presents'>
                    <h2 className='presents-title'>Triple Crown Promotions Presents: Dwight Gooden</h2>
                    <h3 className='presents-title'>June 11th, 1pm - 4pm</h3>
                    <img id="player-image" src={player} alt='Dwight Gooden' />
                    <p>Join us, Sunday June 11th for an afternoon of sports autography featuring none other than the legendary Dwight Gooden. As one of the most iconic figures in baseball history, Gooden's impact on the sport is immeasurable. Fans from all over are gathering to this event to witness his incredible talent and have the opportunity to get their memoriabilia signed by the man himself.</p>
                </article>
            </section>
        </main>

    )
}
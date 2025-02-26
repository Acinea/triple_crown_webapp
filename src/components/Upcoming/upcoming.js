import React from 'react'
import card from '../../resources/sportcard.jpg'
import poke from '../../resources/Pokemon.jpg'


import './upcoming.css'

export function Upcoming() {
    return(
        <main className='upcoming-container'>
            <h1 id="upcoming-container-title">Upcoming Events</h1>
            <section className='upcoming-event-container'>
                <div className='upcoming-event-title'>
                    <h2 className='upcoming-event-title-info'>Saturday, March 8th</h2>
                    <h2 className='upcoming-event-title-info'>Triple Crown Promotion Presents:<br></br> Sportscards/Pokemon Cards & Collectibles Show</h2>
                    <h2 className='upcoming-event-title-info'>American Legion Post 895, East Windosr, NJ</h2>
                    <img className='upcoming-image' src={poke} alt="sports cards" />
                </div>
            </section>
            <section className='upcoming-event-container'>
                <div className='upcoming-event-title'>
                    <h2 className='upcoming-event-title-info'>Saturday, April 5th</h2>
                    <h2 className='upcoming-event-title-info'>Triple Crown Promotion Presents:<br></br> Sportscards/Pokemon Cards & Collectibles Show</h2>
                    <h2 className='upcoming-event-title-info'>Philo Lodge, South River, NJ</h2>
                    <img className='upcoming-image' src={poke} alt="sports cards" />
                </div>
            </section>
            <section className='upcoming-event-container'>
                <div className='upcoming-event-title'>
                    <h2 className='upcoming-event-title-info'>Saturday, April 19th</h2>
                    <h2 className='upcoming-event-title-info'>Triple Crown Promotion Presents:<br></br> Sportscards/Pokemon Cards & Collectibles Show</h2>
                    <h2 className='upcoming-event-title-info'>American Legion Post 895, East Windosr, NJ</h2>
                    <img className='upcoming-image' src={poke} alt="sports cards" />
                </div>
            </section>
        </main>
    )
}
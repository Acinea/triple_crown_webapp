import React from 'react'
import card from '../../resources/sportcard.jpg'
import mark from '../../resources/Mark Gastin.jpg'
import wild from '../../resources/wildboys.jpg'


import './upcoming.css'

export function Upcoming() {
    return(
        <main className='upcoming-container'>
            <h1 id="upcoming-container-title">Upcoming Events</h1>
            <section className='upcoming-event-container'>
                <div className='upcoming-event-title'>
                    <h2 className='upcoming-event-title-info'>Saturday, November 2nd</h2>
                    <h2 className='upcoming-event-title-info'>Triple Crown Promotion Presents:<br></br> Sportscards & Collectibles Show</h2>
                    <h2 className='upcoming-event-title-info'>Old Bridge First Aid & Rescue Squad, Old Bridge NJ</h2>
                    <img className='upcoming-image' src={card} alt="sports cards" />
                </div>
            </section>
            <section className='upcoming-event-container'>
                <div className='upcoming-event-title'>
                    <h2 className='upcoming-event-title-info'>Saturday, December 7th</h2>
                    <h2 className='upcoming-event-title-info'>Triple Crown Promotion Presents:<br></br> Sportscards & Collectibles Show</h2>
                    <h2 className='upcoming-event-title-info'>Old Bridge First Aid & Rescue Squad, Old Bridge NJ</h2>
                    <img className='upcoming-image' src={card} alt="sports cards" />
                </div>
            </section>
        </main>
    )
}
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
                    <h2 className='upcoming-event-title-info'>Saturday, October 5th</h2>
                    <h2 className='upcoming-event-title-info'>Triple Crown Promotion Presents:<br></br> Mark Gastineau</h2>
                    <h2 className='upcoming-event-title-info'>Imperial Music Center, South River NJ</h2>
                    <img className='upcoming-image' src={mark} alt="sports cards" />
                    {/*<button id="banner-button" onClick={() => window.open('https://www.ezevent.com/Event/sports-card-collectibles-show-tickets-7622', '_blank')}>Purchase Tickets</button>*/}
                    {/*<h2>More Events Coming Soon.</h2> */}
                </div>
            </section>
        </main>
    )
}
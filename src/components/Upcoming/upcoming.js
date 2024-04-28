import React from 'react'
import card from '../../resources/sportcard.jpg'
import './upcoming.css'

export function Upcoming() {
    return(
        <main className='upcoming-container'>
            <h1 id="upcoming-container-title">Upcoming Events</h1>
            <section className='upcoming-event-container'>
                <div className='upcoming-event-title'>
                    <h2 className='upcoming-event-title-info'>Saturday, June 22nd</h2>
                    <h2 className='upcoming-event-title-info'>Triple Crown Promotion Presents:<br></br> Sportscards & Collectibles Show</h2>
                    <h2 className='upcoming-event-title-info'>Old Bridge First Aid & Rescue</h2>
                    <img className='upcoming-image' src={card} alt="sports cards" />
                    {/*<h2>More Events Coming Soon.</h2> */}
                </div>
            </section>
        </main>
    )
}
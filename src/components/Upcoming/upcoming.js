import React from 'react'
import banner from '../../resources/ian.jpg'
import './upcoming.css'

export function Upcoming() {
    return(
        <main className='upcoming-container'>
            <h1 id="upcoming-container-title">Upcoming Events</h1>
            <section className='upcoming-event-container'>
                <div className='upcoming-event-title'>
                    <h2 className='upcoming-event-title-info'>Saturday, November 11th</h2>
                    <h2 className='upcoming-event-title-info'>Featuring: Thomas Ian Nicholas</h2>
                    <h2 className='upcoming-event-title-info'>30th Anniversary of "Rookie of the Year"</h2>
                    <h2 className='upcoming-event-title-info'>Friendly Sons of the Shillelagh</h2>
                </div>
                <div className='upcoming-event-banner-container' id='upcoming-event2-banner-container'>

                </div>
                <article className='upcoming-event-info'>

                </article>
            </section>
        </main>
    )
}
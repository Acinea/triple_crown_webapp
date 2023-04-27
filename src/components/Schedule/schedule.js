import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../resources/tcp logo.jpg'
import './schedule.css'


export function Schedule(props) {
    return (
        <section className={props.showSchedule ? 'schedule-container' : 'hide-schedule-container'}>
            <div>
                <div className='close-schedule-button' onClick={props.toggleSchedule}><CloseIcon/></div>
                <h1 className='schedule-title'>Event Schedule</h1>
            </div>
            <div>
                <h2>1:00pm</h2><p>Doors Open</p>
                <h2>2:00pm - 2:30pm</h2><p>Photo Opportunities</p>
                <h2>2:30pm - 4:00pm</h2><p>Memoriabilia Signing</p>
                <h2>5:00pm</h2><p>Event Ends</p>
            </div>
            <img  className='schedule-logo' src={logo} alt='company logo' />
        </section>
    )
}
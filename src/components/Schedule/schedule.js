import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './schedule.css'


export function Schedule(props) {
    return (
        <section className={props.showSchedule ? 'schedule-container' : 'hide-schedule-container'}>
            <div className='close-schedule-button' onClick={props.toggleSchedule}><CloseIcon/></div>
            <h1 className='schedule-title'>Event Schedule</h1>
            <h3><b>Schedule</b></h3>
            <p>Inscription: $12</p>
            <p>Autograph: $30</p>
            <p>Photo Op: $25</p>
            <p>Combo {`(Autograph & Photo)`}: $50</p>
            <h3>Tables</h3>
            <p>6' Table: $50 or 2 for $90</p>
            <p>8' Table: $60 or 2 for $100</p>
            
        </section>
    )
}
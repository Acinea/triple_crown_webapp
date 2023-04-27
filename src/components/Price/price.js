import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './price.css'


export function Price(props) {
    return (
        <section className={props.showPrice ? 'price-container' : 'hide-price-container'}>
            <div className='close-price-menu-button' onClick={props.togglePrice}><CloseIcon/></div>
            <h1 className='price-title'>Pricing Information</h1>
            <h3><b>Signings</b></h3>
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
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../resources/tcp logo.png'
import './price.css'


export function Price(props) {
    return (
        <section className={props.showPrice ? 'price-container' : 'hide-price-container'}>
            <div className='close-price-menu-button' onClick={props.togglePrice}><CloseIcon/></div>
            <h1 className='price-title'>Pricing Information</h1>
            <h3><b>Admission</b></h3>
            <p>General Admission: $3</p>
            <p>Kids under 10: Free</p>
            <h3><b>Dwight Gooden</b></h3>
            <p>Inscription: $12</p>
            <p>Photo Op: $25</p>
            <p>Autograph: $30</p>
            <p>Premium Item: $40</p>
            <p>Combo {`(Autograph & Photo)`}: $50</p>
            <img  className='price-logo' src={logo} alt='company logo' />
        </section>
    )
}
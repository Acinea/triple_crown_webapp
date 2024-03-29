import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import './vendor.css'

export function Vendor(props) {
    return (
        <main id={props.showVendor ? 'vendor-main' : 'hide-vendor-main'}>
            <div className='close-vendor-menu-button' onClick={props.toggleVendor}><CloseIcon/></div>
            <h1 id="vendor-title">Vendor Information</h1>
            <h2 id="vendor-title">Please Contact Us for Current Vendor Information:<br></br>(732) 824-2486<br></br>triplecrownpromotion@gmail.com</h2>
            {/*<div className='vendor-pricing'>
                <h2>Table Pricing</h2>
                <p className='table-info'>6' Table: $50</p>
                <p id="vendor-disclaimer"><b>*Limited vendor service is available on a first paid, first served basis. It is recommended that tables are purchased in advance to ensure space is available.*</b></p>
            </div>
            <div className='vendor-event'>
                <h2>Event Information</h2>
                <ol>
                    <li>An NJ Tax ID is recommended for all vendors</li>
                    <li>Triple Crown Promotion does not condone and is not liable for the vendor's sale of unlicensed merchandise</li>
                    <li>Setup for the Dwight Gooden Event begins promptly at 1pm.</li>
                    <li>Vendors must clearly display their return policy and all prices for merchandise</li>
                    <li>Walkways must remain clear at all times</li>
                    <li>No game of chance or raffles</li>
                </ol>
            </div>
            <div>
                <h2>Vendor Forms</h2>
                <Link to="../../../files/file.pdf" target="_blank" rel="noreferrer" className='table-info'>Vendor Space Application</Link>
            </div>*/}
        </main>
    )
}
import React from 'react';
import './footer.css'

export function Footer() {
    return (
        <footer className='footer-container'>
            <h3>Triple Crown Promotion</h3>
            <div className='footer-contact-container'>
                <span><h4 className='footer-title'>Phone</h4><p className='footer-info'>(732) 824-2486</p></span>
                <span><h4 className='footer-title'>Email</h4><p className='footer-info'>triplecrownpromotion@gmail.com</p></span>
            </div>
        </footer>
    )
}
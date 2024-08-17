import React from 'react';
import mail from '../Vendor/mail.pdf'
import './mail.css'

export function Mail(props) {
    return (
        <main id='mail-main'>
            <h1 id="mail-title">Vendor Mail In Form</h1>
            <iframe id='mail-form' src={mail} width='100%' height="800vh"></iframe>
        </main>
    )
}
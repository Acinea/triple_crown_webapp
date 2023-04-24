import React from 'react';
import './contact.css'

export function Contact() {
    return (
        <main className='contact-container'>
            <section>
                <h3>Triple Crown Promotion</h3>
                <p>With a passion for sports and a commitment to providing unnforgettable experiences for fans, Triple Crown Promotion is quickly becoming renowned for its highly-anticipated events. For more information on upcoming events, or to inquire about potiential partnerships, please complete the form below, and one of our event specialists will get back to you shortly!</p>
            </section>
            <section className='contact-form-container'>
                <form className='contact-form'>
                    <label>Name</label>
                    <input></input>
                    <label>Email</label>
                    <input></input>
                    <label>Message</label>
                    <textarea></textarea>
                    <div className='submit-container'>
                        <button id="submit-button">Submit</button>
                    </div>
                </form>
            </section>
        </main>
    )
}
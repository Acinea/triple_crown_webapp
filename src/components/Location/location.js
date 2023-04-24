import React from 'react';
import './location.css'

export function Location() {
    return (
        <main>
            <img id="location-img" width="300" src="https://maps.googleapis.com/maps/api/staticmap?center=Knights+of+Columbus+61+pine+street%2C+Old+Bridge%2C+NJ&zoom=14&scale=2&size=300x500&maptype=roadmap&format=png&key=AIzaSyDaqeG5Ji7o7w4wkL6T7M7xmgibWIemxDQ&markers=size:mid%7Ccolor:0xf9061f%7Clabel:%7CKnights%20of%20Columbus%2061%20pine%20street%2C%20Old%20Bridge%2C%20NJ" alt="Google map of Knights of Columbus 61 pine street, Old Bridge, NJ" />
        </main>
    )
}
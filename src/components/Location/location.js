import React from 'react';
import {url} from '../../resources/local'
import './location.css'

export function Location() {
    return (
        <main>
            <img id="location-img" width="300" src={url} alt="Google map of Knights of Columbus 61 pine street, Old Bridge, NJ" />
        </main>
    )
}
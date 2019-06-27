import React, { useState } from 'react';
import './dayView.css';

import Loader from './Loader';

function DayView({ weatherData }) {
    const [animation, setAnimation] = useState('')

    function addAnimation() {
        setAnimation('animate');
    }

    function removeAnimation() {
        setAnimation('');
    }

    if (!weatherData) {
        return (
            <div 
            className={`dayView ${animation}`} 
            tabIndex='0' 
            onFocus={addAnimation} 
            onBlur={removeAnimation}
            >
                <Loader />
            </div>
        )
    } else {
        return(
            <div 
            className={`dayView ${animation}`} 
            tabIndex='0' 
            onFocus={addAnimation} 
            onBlur={removeAnimation}
            >
                <div className='image__container'>
                    <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMDREjG8IVtReaXgYfEsVpDNd6WA8XSr6G8g3HA_wVUXyQ9SNdA' 
                    alt='weather icon' 
                    className='image'
                    />
                </div>
                <div>25</div>
                <div>25</div>
                <div>25</div>
                <div>25</div>
                <div>25</div>
               
            </div>
        )
    }
}

export default DayView;
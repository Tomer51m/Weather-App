import React from 'react';
import './weekView.css';
import DayView from './DayView';

function Weekview() {
    const weatherData = JSON.parse(localStorage.getItem('fetched data'));
    return(
        <section className='weekView'>
            <DayView weatherData={weatherData}/>
            <DayView weatherData={weatherData}/>
            <DayView weatherData={weatherData}/>
            <DayView weatherData={weatherData}/>
            <DayView weatherData={weatherData}/>
        </section>
    )
}

export default Weekview;
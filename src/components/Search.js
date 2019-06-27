import React, { useState } from 'react';
import FetchHook from '../customHooks/FetchHook';
import './search.css';

export default function Search() {
    const [ searchData, setSearchData ] = useState({
        id: '294800',
        units: 'metric'
    })
    // http://api.openweathermap.org/data/2.5/forecast?id=294800&units=metric&APPID=ee6f1db9856f6c0e2d3bc0e424530b43
    const { fetchedData } = FetchHook(`
    http://api.openweathermap.org/data/2.5/forecast?id=${searchData.id}&units=${searchData.units}&APPID=ee6f1db9856f6c0e2d3bc0e424530b43
    `);
    console.log('fetched data', fetchedData);

    return(
        <input className='search' type='text' placeholder='Search by city name'></input>
    )
}
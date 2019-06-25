import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=294800&units=metric&APPID=ee6f1db9856f6c0e2d3bc0e424530b43')
      .then(response => {
        if(response.status !== 200) {
          console.log(`Oops! something not working.
          Response status is: ${response.status}`)
          return;
        }
        return response.json()
      }).then(data => {
        setWeatherData(data);
        console.log(data)
      })
  },[])

  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;

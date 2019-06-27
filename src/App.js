import React from 'react';
import WeekView from './components/WeekView';
import Search from './components/Search';
import './App.css';

function App() {

  return (
    <div className='app'>
      <h1 className='header--large header--center'>Weather App</h1>
      <Search />
      <WeekView />
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import Header from './Components/Header'
import Search from './Components/Search'
import WeatherCard from './Components/WeatherCard'
import Footer from './Components/Footer'
import './App.css'

const App = () => {
  const [weatherDetails, setWeatherDetails] = useState(null);

  return (
    <div className='app'>
      <div className='app-container'>
        <Header />
        <Search setWeatherDetails={setWeatherDetails} />
        {weatherDetails && <WeatherCard weatherDetails={weatherDetails} /> }
        <Footer />
      </div>
    </div>
  )
}

export default App
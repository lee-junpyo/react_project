import React from 'react'

//props 대신 Destructuring
const WeatherBox = ({weather}) => {
    //console.log("weather?", weather);
  return (
    <div className='weather-box'>
        <h6>{weather?.name}</h6>
        <h2 className='weather-temp'>{`${weather?.main.temp}°C`} / {`${parseFloat((weather?.main.temp * 9/5 + 32).toFixed(2))}°F`}</h2>
        <h3 className='weather-description'>{weather?.weather[0].description}</h3> 
    </div>
  )
}

export default WeatherBox
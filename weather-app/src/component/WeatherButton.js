import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, handleCityChange, selectCity}) => {
    console.log("selectCity", selectCity);
  return (
    <div className='wather-button-box'>
        {/* 현재위치 선택 시 도시 초기화 */}
        <Button variant={`${selectCity === null ? "outline-warning" : "warning"}`} key={"current"} onClick={()=>{handleCityChange("current")}}>Current Location</Button>
        {cities.map((item, index)=>(
            <Button variant={`${selectCity === item ? "outline-warning" : "warning"}`}  key={index} onClick={()=>{handleCityChange(item)}}>{item}</Button>    
        ))}
    </div>
  )
}

export default WeatherButton
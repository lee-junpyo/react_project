import { useEffect, useState} from "react";
//import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱이 실행되자마자 현재 위치 기반 날씨가 보인다.
//2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태
//3. 5개의 버튼이 있다.(1개는 현재위치, 4개는 다른도시)
//4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {
  const api_key = "43cda28dbecc52a3863fa986ac02b0bb";
  const [weather, setWeather] = useState(null);
  const [loading, setLoding] = useState(false);//로딩 스피너 true- 스피너보임 false- 안보임
  const cities = ['paris','new york', 'london', 'tokyo', 'busan'];
  const [city, setCity] = useState(null);
  const [apiError, setAPIError] = useState("");
  //const [cityName, setCityName] = useState(null);
  //const [celsius, setCelsius] = useState(0);
  //const [fahrenheit, setFahrenheit] = useState(0);

  // const changeCelsius = (kelvin) => {// 켈빈 -> 섭씨 교체
  //   console.log("섭씨", kelvin - 273.15);
  //   return parseFloat((kelvin - 273.15).toFixed(2));
  // }

  // const changeFahrenheit = (kelvin) => {// 켈빈 -> 화씨 교체
  //   console.log("화씨", (kelvin - 273.15) * 9/5 + 32);
  //   return parseFloat(((kelvin - 273.15) * 9/5 + 32).toFixed(2));
  // }
  //현재위치 위도경도 가져오기 
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;//위도
      let lon = position.coords.longitude;//경도
      getWeatherByCurrentLocation(lat, lon)
    });
  };
//현재위치 날씨정보 가져오기
  const getWeatherByCurrentLocation = async(lat, lon) => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
      let response = await fetch(url) //await 사용시 함수는 async 여야함, 비동기
      let data = await response.json();
      console.log("data", data);
      setWeather(data);
      setLoding(false);
    }catch (err){
      setAPIError(err.message);
      setLoding(false);
    }
    
    // setCelsius(changeCelsius(data.main.temp));
    // setFahrenheit(changeFahrenheit(data.main.temp));
    // axios 사용시
    // axios.get(url)
    //     .then((Response)=>{
    //       //console.log("Response",Response);
    //       console.log("Response.data",Response.data);
    //       //console.log("현재위치,날씨",Response.data.name, Response.data.weather[0].main);
    //       setCityName(Response.data.name);
    //       setWeather(Response.data.weather[0].main);
    //       setCelsius(changeCelsius(Response.data.main.temp));
    //       setFahrenheit(changeFahrenheit(Response.data.main.temp));
    //     })
    //     .catch((Error)=>{
    //       console.log(Error)
    //     })
  };

//도시 날씨정보 가져오기
  const getWeatherByCity = async() => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
      let response = await fetch(url) //await 사용시 함수는 async 여야함, 비동기
      let data = await response.json();
      setWeather(data);
      setLoding(false);
      //console.log("citydata", data);
    }catch(err){
      setAPIError(err.message);
      setLoding(false);
    }

  };

  useEffect(()=> {
    //처음 실행 시 getCurrentLocation(), 도시 선택 시 getWeatherByCity()
    if(city === null){
      setLoding(true);
      getCurrentLocation();
    } else {
      setLoding(true);
      getWeatherByCity();
    }
  },[city]);

  const handleCityChange = (selectCity) => {
    console.log("city",selectCity);
    if(selectCity === "current"){
      setCity(null);
    }else{
      setCity(selectCity);
    }
  }
  return (
    <div>
      {loading? (
        <div className="container">
        <ClipLoader color="#f88c6b" loading={loading}  size={150} aria-label="Loading Spinner" data-testid="loader"/>  
        </div>
      ) : !apiError ?  (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} handleCityChange={handleCityChange} selectCity={city} />
        </div>
      ) : (
        alert(apiError)
      )}
      
      {/* 도시 : {cityName}
      <br />
      날씨 : {weather}
      <br />
      섭씨 : {celsius}°C
      <br />
      화씨 : {fahrenheit}°F */}
    </div>
  );
}

export default App;

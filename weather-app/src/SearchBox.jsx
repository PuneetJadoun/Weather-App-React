import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2ec7a06932656d9595db68551e28118f";

  let getWeatherInfo = async () =>{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result = {
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.temp.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
  }

  let [city,setCity] = useState("");

  let handleChange = (evnt) =>{
    setCity(evnt.target.value);
  }

  let handleSubmit = (evnt) =>{
    evnt.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  }


  return (
    <div className='SearchBox'>
    <h3>Search for the Weather</h3>
    <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br />
        <br />
        <Button variant="contained" type="submit"> Search </Button>
    </form>
    </div>
  );
}
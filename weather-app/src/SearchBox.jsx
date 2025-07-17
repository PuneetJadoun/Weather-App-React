import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2ec7a06932656d9595db68551e28118f";

  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);

  let getWeatherInfo = async () => {
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    return result;
    }
    catch(err){
     throw err;
    }
  };

  let handleChange = (evnt) => {
    setCity(evnt.target.value);
  };

  let handleSubmit = async (evnt) => {
    try{
      evnt.preventDefault();
      let newinfo = await getWeatherInfo();
      if (newinfo) updateInfo(newinfo);
      setCity("");
    }
    catch(err){
       setErr(true);
    }
    
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br />
        <br />
        <Button variant="contained" type="submit"> Search </Button>
        {
          err &&   <p style={{color:"red"}}>No such place found!</p>
        }
      </form>
    </div>
  );
}

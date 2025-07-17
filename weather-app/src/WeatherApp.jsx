import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app by Me!</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox {...weatherInfo} />
    </div>
  );
}

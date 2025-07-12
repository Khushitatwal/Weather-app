import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { useEffect } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <br />
      {weatherInfo && <InfoBox info={weatherInfo} />}
    </>
  );
}

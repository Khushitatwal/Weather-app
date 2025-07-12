import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_GEOLOCATION_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7ddf473ee0ef88297c7bf38424d8a6f1";

  let getWeatherInfo = async () => {
    try {
      let geoResponse = await fetch(
        `${API_GEOLOCATION_URL}?q=${city}&limit=1&appid=${API_KEY}`
      );
      let jsonGeoResponse = await geoResponse.json();
      const lat = jsonGeoResponse[0].lat;
      const lon = jsonGeoResponse[0].lon;
      let weatherResponse = await fetch(
        `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let jsonWeatherResponse = await weatherResponse.json();
      let result = {
        city: city,
        temp: jsonWeatherResponse.main.temp,
        tempMin: jsonWeatherResponse.main.temp_min,
        tempMax: jsonWeatherResponse.main.temp_max,
        humidity: jsonWeatherResponse.main.humidity,
        feelsLike: jsonWeatherResponse.main.feels_like,
        weather: jsonWeatherResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      setError(true);
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      className="SearchBox"
    >
      <h3 style={{ marginLeft: "30px" }}> Search Weather of any city!</h3>
      <TextField required id="city" label="City Name" onChange={handleChange} />
      <br />
      <Button variant="contained" type="submit">
        Search
      </Button>
      {error && (
        <p style={{ marginLeft: "50px" }}>OOPS! No such place exists.</p>
      )}
    </Box>
  );
}

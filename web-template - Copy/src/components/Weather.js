import React, { useEffect, useState } from "react";
import {
  TiWeatherSunny,
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherStormy,
} from "react-icons/ti";
import { IoRainySharp } from "react-icons/io5";
import axios from "axios";
import "./style/Weather.css";

function Weather() {
  const [weatherData, setWeather] = useState({});
  const [city, setCity] = useState("karur");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        axios
          .get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`
          )
          .then((res) => {
            setCity(res.data.city);
          })
          .catch((e) => {
            alert(e);
          });
      });
    } else {
      alert("Location not found");
    }
  }, []);

  useEffect(() => {
    let timeId = setTimeout(() => {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2e385aedf188a929ad3a2b1f6f73be8&units=metric`;
      console.log(API_URL);
      axios
        .get(API_URL)
        .then((res) => {
          setWeather(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 3000);

    return () => {
      clearInterval(timeId);
    }
  }, []);

  function getWeatherIcon(weatherData) {
    switch (weatherData) {
      case "Clear":
        return <TiWeatherSunny />;
      case "Clouds":
        return <TiWeatherCloudy />;
      case "Rain":
        return <IoRainySharp />;
      case "Thunderstorm":
        return <TiWeatherStormy />;
      default:
        return <TiWeatherSunny />;
    }
  }

  return (
    <div>
      {weatherData.main && (
        <div className="weather-wrapper">
          <>{getWeatherIcon(weatherData.weather[0].main)}</>
          <p>{weatherData.main.temp}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;

import React from "react";
import "./App.css";
import feelsLikeIcon from "./images/feelsLikeTemp.png";
import humidityIcon from "./images/humidity.png";
import windSpeedIcon from "./images/windSpeed.png";

export default function DailyForecast(props){
  let daily = props.forecast;
  let location = daily.data.name;
  let country = daily.data.sys.country;
  let temperature = Math.round(daily.data.main.temp);
  let weatherStatus = daily.data.weather[0].description;
  let feelsLike = Math.round(daily.data.main.feels_like);
  let humidity = daily.data.main.humidity;
  let windSpeed = Math.round(daily.data.wind.speed * 3.6);
  
    return(
        <div className="DailyForecast">
        
        {/*Get the current date & time of user's location*/}
        <div className="locationTimeDate">
          <span className="locationDate" id="location-Date">
            Thur, Sept 01, 2022{" "}
          </span>{" "}
          <span className="locationTime" id="location-Time">
            12:30PM
          </span>
        </div>

        {/*Display the City, Region, Country*/}
        <span>
          <h1 className="location" id="location">
            {location}
          </h1>
          <span className="region" id="region">
            Guam,
          </span>
          <span className="country" id="country">
            {country}
          </span>
        </span>

        {/*Display the current temperature*/}
        <div className="weatherForecast">
          <span className="temp" id="temperature">
            {temperature}
          </span>

          {/*Display the Units: C | F*/}
          <small className="units">
            <a href="/" className="active" id="celsius-link">
              °C
            </a>{" "}
            |
            <a href="/" id="fahrenheit-link">
              °F
            </a>
          </small>
          <br />

          {/*Display the current weather condition/status*/}
          <div className="weatherStatus">{weatherStatus}</div>
          <div className="weatherStatus"></div>
          <img
            src="../images/dustSand.png"
            className="weatherIcon-main"
            id="weatherIconMain"
            alt="weather Icon"
          />
        </div>

        {/*Display Feels like Temp*/}
        <div className="row p-0 mt-2">
          <div className="col p-0 just-left">
            <img src={feelsLikeIcon} className="feelsLikeIcon" alt="thermostat" />
            Feels like: <span id="feelsLike">{feelsLike} °C</span>
          </div>
        </div>

        <div className="row p-0">
          <div className="col p-0 just-left">
            <img src={humidityIcon} className="humidityIcon" alt="humidity icon" />
            Humidity: <span id="humidity">{humidity}%</span>
          </div>
        </div>
        <div className="row p-0">
          <div className="col p-0 just-left">
            <img
              src={windSpeedIcon}
              className="windSpeedIcon"
              alt="wind speed icon"
            />
            Wind: <span id="windSpeed">{windSpeed} km/h</span>
          </div>
        </div>

        </div>
    )
}
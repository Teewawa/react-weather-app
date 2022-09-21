import React from "react";
import "./App.css";
import feelsLike from "./images/feelsLikeTemp.png";
import humidity from "./images/humidity.png";
import windSpeed from "./images/windSpeed.png";

export default function DailyForecast(props){
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
            Hagåtña
          </h1>
          <span className="region" id="region">
            Guam,
          </span>
          <span className="country" id="country">
            GU
          </span>
        </span>

        {/*Display the current temperature*/}
        <div className="weatherForecast">
          <span className="temp" id="temperature">
            25
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
          <div className="weatherStatus">Clear Sky</div>
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
            <img src={feelsLike} className="feelsLikeIcon" alt="thermostat" />
            Feels like: <span id="feelsLike">27 °C</span>
          </div>
        </div>

        <div className="row p-0">
          <div className="col p-0 just-left">
            <img src={humidity} className="humidityIcon" alt="humidity icon" />
            Humidity: <span id="humidity">96%</span>
          </div>
        </div>
        <div className="row p-0">
          <div className="col p-0 just-left">
            <img
              src={windSpeed}
              className="windSpeedIcon"
              alt="wind speed icon"
            />
            Wind: <span id="windSpeed">0 km/h</span>
          </div>
        </div>

        </div>
    )
}
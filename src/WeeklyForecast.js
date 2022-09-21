import React from "react";
import './App.css';

export default function WeeklyForecast(props){
    return(
        <div className="WeeklyForecast">
            <div className="row m-1 pb-3">
            <div className="col-sm-2 p-0">
          <div className="card m-1 p-2 h-100 bg-card-details">
            <div className="forecast-date p-0">Fri 02</div>
            <img
              src="/images/dustSand.png"
              className="forecast-icon"
              id="forecast-icon"
              alt="weekly forecast weather Icon"
            />
            <div>
              <span className="forecast-max-temp">30°</span> |
              <span className="forecast-min-temp"> 27°</span>
            </div>
          </div>
        </div>

        {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
        <div className="col-sm-2 p-0">
          <div className="card m-1 p-2 h-100 bg-card-details">
            <div className="forecast-date p-0">Sat 02</div>
            <img
              src="/images/dustSand.png"
              className="forecast-icon"
              id="forecast-icon"
              alt="weekly forecast weather Icon"
            />
            <div>
              <span className="forecast-max-temp">30°</span> |
              <span className="forecast-min-temp"> 27°</span>
            </div>
          </div>
        </div>

        {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
        <div className="col-sm-2 p-0">
          <div className="card m-1 p-2 h-100 bg-card-details">
            <div className="forecast-date p-0">Sun 03</div>
            <img
              src="/images/dustSand.png"
              className="forecast-icon"
              id="forecast-icon"
              alt="weekly forecast weather Icon"
            />
            <div>
              <span className="forecast-max-temp">30°</span> |
              <span className="forecast-min-temp"> 27°</span>
            </div>
          </div>
        </div>
        {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
        <div className="col-sm-2 p-0">
          <div className="card m-1 p-2 h-100 bg-card-details">
            <div className="forecast-date p-0">Mon 04</div>
            <img
              src="/images/dustSand.png"
              className="forecast-icon"
              id="forecast-icon"
              alt="weekly forecast weather Icon"
            />
            <div>
              <span className="forecast-max-temp">30°</span> |
              <span className="forecast-min-temp"> 27°</span>
            </div>
          </div>
        </div>
        {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
        <div className="col-sm-2 p-0">
          <div className="card m-1 p-2 h-100 bg-card-details">
            <div className="forecast-date p-0">Tues 05</div>
            <img
              src="/images/dustSand.png"
              className="forecast-icon"
              id="forecast-icon"
              alt="weekly forecast weather Icon"
            />
            <div>
              <span className="forecast-max-temp">30°</span> |
              <span className="forecast-min-temp"> 27°</span>
            </div>
          </div>
        </div>
        {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
        <div className="col-sm-2 p-0">
          <div className="card m-1 p-2 h-100 bg-card-details">
            <div className="forecast-date p-0">Wed 06</div>
            <img
              src="/images/dustSand.png"
              className="forecast-icon"
              id="forecast-icon"
              alt="weekly forecast weather Icon"
            />
            <div>
              <span className="forecast-max-temp">30°</span> |
              <span className="forecast-min-temp"> 27°</span>
            </div>
          </div>
        </div>   
        </div>
        </div>
    )
}
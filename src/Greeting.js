import React from "react";
import './App.css';

export default function Greeting(props){
    return(
        <div className="Greeting">
            <div className="greetingWrapper">
            Today is
            <span className="dateToday m-1 p-0" id="date-today">
              Wednesday, August 31, 2022
            </span>
            <span id="time-now">9:30:33PM</span>
            <br />
            <span className="greeting" id="greeting">
              Good Morning
            </span>
            <img
              src="../images/afternoon.png"
              className="greetingIcon"
              id="greetingIcon"
              alt="Greeting Icon"
            />
          </div>
        </div>
    )
}
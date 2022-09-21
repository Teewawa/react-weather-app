import React from "react";
import './App.css';
import myLocationIcon from "./images/myLocationIcon.png"

export default function MyLocation(props){
    return(
        <div className="MyLocation">
          <br />
            <div className="LocationBttn">
            <button
              type="button"
              className="btn btn-warning p-1 m-0"
              id="currentLocationBttn"
            >
              Check my location{" "}
              <img src={myLocationIcon} className="myLocationIcon" alt="" />
            </button>
          </div>
        </div>
    )
}
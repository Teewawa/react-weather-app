import React, { useState } from "react";
import './App.css';
import SearchEngine from "./SearchEngine";
import DailyForecast from "./DailyForecast";
import Greeting  from "./Greeting";
import MyLocation from "./MyLocation"
import HourlyForecast from "./HourlyForecast";


function App() {
  let [data, setData] = useState(null);

  //Receives weather data
  function receiveData(response){
    console.log("app.js", response)
    setData(response);
  }

  return (
    <div className="App">
        {/*The outer layer of each component is built utilizing
        bootstrap classNames to create a Card-design UI*/}
        <div className="weather-container">
          <div className="row p-2 main">

            {/*Column 1: "Card 1" - displays on the left hand side */}
            <div className="col-sm-3 p-0">
              <div className="card p-3 h-100 bg-card-left">
                <div className="row p-0">
                  <SearchEngine onSubmit={receiveData}/>
                  <DailyForecast forecast={data}/>
                </div>
              </div>
            </div>

            {/*Column 2: "Card 2" - displays on the right hand side
            and contains 2 rows (top & bottom) */}
            <div className="col-sm-9 p-0">
              <div className="card p-1 h-100 bg-card-right">

                {/*Card 2, Row 1 (top) with 2 columns: Greeting and check my location button
                and below: table displaying hourly forecast */}
                <div className="row p-0 m-1">
                  <div className="col-sm-8 p-0">
                    <Greeting />
                  </div>
                  <div className="col-sm-4 p-0">
                    <MyLocation />
                  </div>
                  
                  
                </div>
<HourlyForecast />


                {/*Card 2, Row 2 (bottom) displays weekly forecast */}
   

              </div>
            </div>

            {/*closing tag for row, weather-container, and app (root) div */}
          </div>
        </div> 
    </div>
  );
}

export default App;

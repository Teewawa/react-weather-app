import React, { useState } from "react";
import './App.css';
import SearchEngine from "./SearchEngine";


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
        bootstrap for a Card UI Design */}
        <div className="weather-container">
          <div className="row p-2 main">

            {/*Column 1: "Card 1" - displays on the left */}
            <div className="col-sm-3 p-0">
              <div className="card p-3 h-100 bg-card-left">
                <div className="row p-0">
                  <SearchEngine onSubmit={receiveData}/>
                   
                </div>
              </div>
            </div>

          </div>
        </div>
        

      
    </div>
  );
}

export default App;

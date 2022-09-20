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
      <header className="App-header">         
        <SearchEngine onSubmit={receiveData}/>

      </header>
    </div>
  );
}

export default App;

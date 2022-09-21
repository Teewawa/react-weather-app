//Search Engine that accepts user input of most major cities
//Utilizes OpenWeather API to get city's weather data
//Sends data to App.js to be passed to other components

import React, { useState } from "react";
import axios from "axios";
import './App.css';

export default function SearchEngine(props){
    //define state variables to be updated
    let [city, setCity] = useState("");

    //Receives api response and sends to App.js
    function sendData(response){
        props.onSubmit(response);
    }

    //Search for city data through api query
    function handleSubmit(event){
        event.preventDefault();
        let apiKey = "32002ce1ac753de34a94e79ba08a9e9b"
        let units = "metric";
        let endpoint ="https://api.openweathermap.org/data/2.5/weather"
        let apiUrl = `${endpoint}?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(sendData);
        //Clear our search bar after submit
        event.target.reset();
    }

    //update variable city
    function updateCity(event){
        setCity(event.target.value);
    }

    //Search engine form
    let form = (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Search for a city..." onChange={updateCity} autoFocus="on"
            id="search-input" />       
        </form>
    );
    
    return form
}
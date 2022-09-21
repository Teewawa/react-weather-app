import React from "react"

export default function hourlyForecast(props){
  
    return(
        <div className="hourlyForecast">
            {/*CARD 2 (top) - Hourly Forecast*/}
      <div className="hourly-Forecast" id="hourly-Forecast">
        <div className="card p-1 m-1 bg-card-details">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th> Condition</th>
                <th> Temp</th>
                <th> Humidity</th>
                <th> Wind</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="hourlyTime">1:00PM</td>
                <td className="hourlyDescription">
                  <img
                    src="images/scatteredClouds.png"
                    className="hourly-icon"
                    id="hourly-icon"
                    alt="weekly forecast weather Icon"
                  />
                  Partly Cloudy
                </td>
                <td className="hourlyTemp">88°</td>
                <td className="hourlyHumidity">68%</td>
                <td className="hourlyWindSpeed">12mph</td>
              </tr>
              {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
              <tr>
                <td className="hourlyTime">2:00PM</td>
                <td className="hourlyDescription">
                  <img
                    src="images/scatteredClouds.png"
                    className="hourly-icon"
                    id="hourly-icon"
                    alt="weekly forecast weather Icon"
                  />
                  Partly Cloudy
                </td>
                <td className="hourlyTemp">87°</td>
                <td className="hourlyHumidity">68%</td>
                <td className="hourlyWindSpeed">3mph</td>
              </tr>
              {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
              <tr>
                <td className="hourlyTime">3:00PM</td>
                <td className="hourlyDescription">
                  <img
                    src="images/scatteredClouds.png"
                    className="hourly-icon"
                    id="hourly-icon"
                    alt="weekly forecast weather Icon"
                  />
                  Partly Cloudy
                </td>
                <td className="hourlyTemp">87°</td>
                <td className="hourlyHumidity">68%</td>
                <td className="hourlyWindSpeed">3mph</td>
              </tr>
              {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
              <tr>
                <td className="hourlyTime">4:00PM</td>
                <td className="hourlyDescription">
                  <img
                    src="images/scatteredClouds.png"
                    className="hourly-icon"
                    id="hourly-icon"
                    alt="weekly forecast weather Icon"
                  />
                  Partly Cloudy
                </td>
                <td className="hourlyTemp">87°</td>
                <td className="hourlyHumidity">68%</td>
                <td className="hourlyWindSpeed">3mph</td>
              </tr>
              {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
              <tr>
                <td className="hourlyTime">5:00PM</td>
                <td className="hourlyDescription">
                  <img
                    src="images/scatteredClouds.png"
                    className="hourly-icon"
                    id="hourly-icon"
                    alt="weekly forecast weather Icon"
                  />
                  Partly Cloudy
                </td>
                <td className="hourlyTemp">87°</td>
                <td className="hourlyHumidity">68%</td>
                <td className="hourlyWindSpeed">3mph</td>
              </tr>
              {/*This is a repeated section that will be later removed
           and handled utilizing js DOM*/}
              <tr>
                <td className="hourlyTime">6:00PM</td>
                <td className="hourlyDescription">
                  <img
                    src="images/scatteredClouds.png"
                    className="hourly-icon"
                    id="hourly-icon"
                    alt="weekly forecast weather Icon"
                  />
                  Partly Cloudy
                </td>
                <td className="hourlyTemp">87°</td>
                <td className="hourlyHumidity">68%</td>
                <td className="hourlyWindSpeed">3mph</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        </div>
    )
}
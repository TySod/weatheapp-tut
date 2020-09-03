import React, {useState} from 'react';
import {API_KEY} from './api.js';
import Condition from '../Conditions/Conditions'
import classes from './Forecast.module.css'


const Forecast = () => {
  let [city, setCity] = useState('')
  let [unit, setUnit] = useState('imperial')
  let[responseObj, setResponseObj] = useState({})
  function getForecast(e) {
    e.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      setResponseObj(data);

      console.log(data)})
    .catch(err => console.log(err))

  }
return(
  <div>
    <h2>Find the current weather condition</h2>
    <div>
      {JSON.stringify(responseObj)}
    </div>
    <form onSubmit={getForecast}>
      <input 
      className={classes.TextInput}
      type="text" 
      placeholder="Enter city" 
      maxLength="50"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      />
      
      
      <label className={classes.Radio}>
      <input 
      type="radio" 
      name="units" 
      checked={unit === "imperial"}
      value="imperial"
      onChange={(e) => setUnit(e.target.value)}
      />
      Fahrenheit
      </label>

      <label className={classes.Radio}>
      <input 
      type="radio" 
      name="units" 
      checked={unit === "metric"}
      value= 'metric'
      onChange={(e) => setUnit(e.target.value)}
      />
      Celcius
      </label>

    <button className={classes.Button} type="submit">Get Forecast</button>
    </form>
    <Condition responseObj={responseObj}/>
  </div>
)
}
export default Forecast
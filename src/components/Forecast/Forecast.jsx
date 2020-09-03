import React, {useState} from 'react';
import {API_KEY} from './api.js';
import Condition from '../Conditions/Conditions'
import classes from './Forecast.module.css'


const Forecast = () => {
  let [city, setCity] = useState('')
  let [unit, setUnit] = useState('metric')
  let[responseObj, setResponseObj] = useState({})
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getForecast(e) {

    e.preventDefault()
    if (city.length === 0) {
      return setError(true);
  }
    setError(false);
    setResponseObj({});
    
    setLoading(true);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
      throw new Error()
  }
      setResponseObj(data);
      setLoading(false)
      })
   
      .catch(err => {
      setError(true)
      setLoading(false)
      console.log(err.message)
    });

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
    <Condition responseObj={responseObj}
    error={error}
    loading={loading}
    
    />
  </div>
)
}
export default Forecast
import React from 'react'
import classes from './Conditions.module.css'

export default function Conditions(props) {
  
  return (
    <div className={classes.Wrapper}>
    {props.error && <small className={classes.Small}>Please enter a valid city name</small>} 
    {props.loading && <div className={classes.loading}>loadng....</div>}
      {props.responseObj.cod === 200 ?
      <div>
  <p><strong>{props.responseObj.name}</strong></p>
  <p>It is currently {' '}
    {Math.round(props.responseObj.main.temp)} degree out with
     {props.responseObj.weather[0].description}.
  </p>
      </div>
       : null
      }
      
    </div>
  )
}

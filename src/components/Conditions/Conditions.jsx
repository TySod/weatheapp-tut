import React from 'react'
import classes from './Conditions.module.css'

export default function Conditions(props) {
  const style = {
    color : "red"
  }
  return (
    <div className={classes.Wrapper}>
      {props.responseObj.cod === 200 ?
      <div>
  <p><strong>{props.responseObj.name}</strong></p>
  <p>It is currently
    {Math.round(props.responseObj.main.temp)} degree out with
    {props.responseObj.weather[0].description}.
  </p>
      </div>
       : <p style={style}>{props.responseObj.message}</p>
       //<div style={style}>You must have supplied an incorrect, check and try again</div>
      }
      
    </div>
  )
}

import React, { useEffect, useState } from 'react';
const styles = {
  fontSize: '30px'
}

const getTime = () => {
  const date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  return { hours, minutes, seconds }
}

export default function Time() {
  const [dateNow, setDate] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setDate(getTime())
    }, 1000)

  }, [])

  return (
    <div style={styles}>
      {dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}
    </div>
  )
}



/* 

import React, {useState, useEffect} from 'react'
 const styles = {
  fontSize: '30px'
 }

export default function(props){
  const [dateNow, setDate] = useState(getTime())

  useEffect( () => {
    setInterval(()=>{
      setDate(getTime())
    },1000)

  }, [])

  function getTime(){
    var date = new Date(),
    hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return {hours, minutes, seconds}
  }

  return(
    <div className="progress-bar">
        <p style={styles}>{dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</p>
    </div>
  )
}
*/


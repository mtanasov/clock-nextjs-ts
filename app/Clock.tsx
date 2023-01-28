// "use client"

import React, { useState, useEffect } from 'react';


const styles = {
  fontSize: '30px'
}

export default function Clock(props: object) {
  const date = new Date();
  const [dateNow, setDateNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateNow(new Date())
    }, 1000)

  }, [dateNow])

  function getTime() {
    const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    return { hours, minutes, seconds }
  }

  return (
    <div className="progress-bar">
      {/* <p style={styles}>{dateNow.hours + ':' + dateNow.minutes + ':' + dateNow.seconds}</p> */}
      <p style={styles}>{dateNow.getHours()}</p>
      <p style={styles}>{dateNow.getMinutes()}</p>
      <p style={styles}>{dateNow.getSeconds()}</p>
    </div>
  )
} 
// "use client"

import React, { useState, useEffect } from 'react';

const styles = {
  color: "white",
  fontSize: "30px",
}

export default function Clock(props: {}) {
  const date = new Date();
  const [dateNow, setDateNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDateNow(new Date())
    }, 1000)

  }, [dateNow])

  return (
    <div /* style={styles} */>
      <p> {`${dateNow.getHours()} : ${dateNow.getMinutes()} : ${dateNow.getSeconds()} `
      }</p >
    </div>
  )
} 
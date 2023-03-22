// "use client"

import React, { useState, useEffect } from 'react';
import { useInterval } from '../hooks/use-interval';

const styles = {
  color: "white",
  fontSize: "30px",
}

export default function Clock(props: {}) {
  const date = new Date();
  const [dateNow, setDateNow] = useState<string | undefined>();

  const interval = useInterval(() => setDateNow(
    () => `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} `,
  ), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [dateNow])

  return (
    <div /* style={styles} */>
      <p> {dateNow || "Loading..."}</p>
    </div>
  )
} 
// "use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Clock = dynamic(() => import('./Clock'), {
  ssr: false,
})

const styles = {
  color: "white",
  fontSize: "30px",
}

export default function WorldTime() {
  return (
    <div style={styles}>
      <h1 > Мировые часы </h1>
      <Clock />
    </div>
  )
}
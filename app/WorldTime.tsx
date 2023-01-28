"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Clock = dynamic(() => import('./Clock'), {
  ssr: false,
})

// const [clock, setClock] = useState(new Date());

export default function WorldTime() {
  return (
    <div>
      <h1> Мировые часы </h1>
      <Clock />
    </div>
  )
}
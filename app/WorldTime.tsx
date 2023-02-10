// "use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const Clock = dynamic(() => import('./Clock'), {
  ssr: false,
})

const styleButtons = "inline-block"

export default function WorldTime() {
  return (
    <div className='text-bermuda text-[30px]' >
      <div className='w-[320px] h-[30px]  text-icons ... '>
        <div className='flex justify-between h-[100%] items-center mx-[15px] align-middle'>
          <span className="text-[18px]">
            Править
          </span>
          <span className="text-[40px] font-light align-text-top">
            +
          </span>
        </div>
      </div>
      <h1 className=""> Мировые часы </h1>
      <Clock />
    </div >
  )
}
// "use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Modal from "./modal__worldTime";
const Clock = dynamic(() => import('./Clock'), {
  ssr: false,
})

export default function WorldTime() {
  const [display, setDisplay] = useState("none");
  const [showListCities__modal, setShowListCities__modal] = useState(false);

  // const onClick__buttonPlus = () => {
  //   switch (true) {
  //     case (display === "none"): setDisplay("inline-block"); break;
  //     case (display === "inline-block"): setDisplay("none"); break;
  //   }
  //   console.log("🎵", display);
  // }

  const onClickButton_Cancel = () => {
    setShowListCities__modal(false)
  }

  const onClick = () => {
    setShowListCities__modal(true)
  }

  return (
    <div className='text-bermuda text-[30px]' >
      <div className='w-[320px] h-[30px]  text-main-orange'>
        <div className='flex justify-between h-[100%] items-center mx-[15px] align-middle'>
          <span
            className="text-[18px]"
          >
            Править
          </span>

          <span
            className=" w-[26px] text-[40px] font-light align-text-top"
            onClick={onClick}
          >
            +
          </span>
        </div>
      </div>
      <div className='w-[320px] h-[50px] text-left'>
        <h1 className=" font-[600] justify-start mx-[12px]"> Мировые часы </h1>
      </div>

      <Modal
        active={showListCities__modal}
        buttonCancel={onClickButton_Cancel}
        letter="A"
      ></Modal>

      {/* <Clock /> */}
    </div >
  )
}
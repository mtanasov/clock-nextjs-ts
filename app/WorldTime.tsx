import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
// import Modal from "./modalWorldTime/modal__worldTime";
import { start } from 'repl';
import Clock from './Clock';

const Modal = dynamic(() => import("./modalWorldTime/modal__worldTime"))

export default function WorldTime() {
  const [display, setDisplay] = useState("none");
  const [showListCities__modal, setShowListCities__modal] = useState(false);

  // const styleFunc = {
  //   worldTime_main: (): any => {
  //     const stateTrue = " text-bermuda text-[20px]";
  //     const stateFalse = "text-bermuda text-[30px]";

  //     // showListCities__modal ? stateTrue : stateFalse

  //     switch (true) {
  //       case (showListCities__modal === true): return stateTrue;
  //       case (showListCities__modal === false): return stateFalse;
  //     }
  //   },
  // }

  const style = {
    // worldTime_main: styleFunc.worldTime_main(),
    worldTime_main: " text-bermuda text-[30px]",
  }

  return (
    <div id='worldTime_main' className={style.worldTime_main} >
      <div className='w-[320px] h-[30px]  text-main-orange'>
        <div className='flex justify-between h-[100%] items-center mx-[15px] align-middle'>
          <span
            className="text-[18px]"
          >
            <button> Править</button>
          </span>

          <span
            id="worldTime__buttonAddClock"
            className=" w-[26px] text-[40px] font-light align-text-top"
            onClick={() => setShowListCities__modal(!showListCities__modal)}
          >
            <button> +</button>
          </span>
        </div>
      </div>
      <div className='w-[320px] h-[50px] text-left'>
        <h1 className=" font-[600] justify-start mx-[12px]"> Мировые часы </h1>
      </div>

      {
        showListCities__modal &&
        <Modal
          active={showListCities__modal}
          buttonCancel={() => setShowListCities__modal(!showListCities__modal)}
          letter="A"
        />
      }
      {/* <Clock /> */}
    </div >
  )
}
import React, { useState, ButtonHTMLAttributes } from "react";
// import styles from "./global.module.css";
import { alarm, stopWatch, timer, worldTime } from "../data/data";

export default function Header(props: {
  alarmState: any;
  stopwatchState: any;
  timerState: any;
  worldTimeState: any;
}): JSX.Element {
  const orange = "text-main-orange";
  const gray = "text-main-gray";

  const buttonStyle: string = `text-center text-[12px] align-bottom font-[400] w-[70px] h-[48px] ${orange}`;
  const iconStyle: string = "inline-block font-[100]";
  const iconSize: number = 32;
  const iconStroke: number = 1;

  return (
    <div
      id="header"
      className="flex justify-center gap-x-[10px] bg-black relative w-[320px] h-[53px] pt-[5px] mb-[5px]"
    >
      <button
        className={`${buttonStyle}  bg-[length:40px_40px] bg-no-repeat `} //bg-[url('../img/world.svg')]
        id={worldTime.id}
        onClick={props.worldTimeState}
      >
        World time
      </button>

      <button className={buttonStyle} id={alarm.id} onClick={props.alarmState}>
        Alarm
      </button>

      <button
        className={buttonStyle}
        id={stopWatch.id}
        onClick={props.stopwatchState}
      >
        Stopwatch
      </button>

      <button className={buttonStyle} id={timer.id} onClick={props.timerState}>
        Timer
      </button>
    </div>
  );
}

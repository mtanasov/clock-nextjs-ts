import React, { useState, ButtonHTMLAttributes } from 'react';
// import styles from "./global.module.css";
import { alarm, stopWatch, timer, worldTime } from "../data/data";
import { IconWorld, IconAlarm, IconClock, IconClockPlay } from '@tabler/icons-react';

export default function Header(
  props: {
    alarmState: any;
    stopwatchState: any;
    timerState: any;
    worldTimeState: any;
  }
): JSX.Element {

  const orange = "text-main-orange";
  const gray = "text-main-gray";

  // const [worldTimeColor, setWorldTimeColor] = useState(orange);
  // const [alarmColor, setAlarmColor] = useState("text-main-gray");
  // const [stopWatchColor, setStopWatchColor] = useState("text-main-gray");
  // const [timerColor, setTimerColor] = useState("text-main-gray");

  const buttonStyle: string = `text-center text-[10px] align-bottom font-[400] w-[70px] + ${orange}`;
  const iconStyle: string = "inline-block font-[100]";
  const iconSize: number = 32;
  const iconStroke: number = 1.2;

  return (
    <div id="header" className="flex justify-center gap-x-[10px] bg-black relative w-[320px] h-[53px] pt-[5px] mb-[5px]">

      <div
        className={buttonStyle}
        id={worldTime.id}
        onClick={props.worldTimeState}
      >
        <IconWorld
          id={worldTime.id}
          className={iconStyle}
          stroke={iconStroke}
          size={iconSize}
        />
        <div id={worldTime.id} >Мировые часы</div>
      </div>

      <div
        className={buttonStyle}
        id={alarm.id}
        onClick={props.alarmState}
      >
        <IconAlarm
          id={alarm.id}
          className={iconStyle}
          stroke={iconStroke}
          size={iconSize} />
        <div id={alarm.id}>Будильник</div>
      </div>

      <div
        className={buttonStyle}
        id={stopWatch.id}
        onClick={props.stopwatchState}
      >
        <IconClock
          id={stopWatch.id}
          className={iconStyle}
          stroke={iconStroke}
          size={iconSize} />
        <div id={stopWatch.id}>Секундомер</div>
      </div>

      <div
        className={buttonStyle}
        id={timer.id}
        onClick={props.timerState}
      >
        <IconClockPlay
          id={timer.id}
          className={iconStyle}
          stroke={iconStroke}
          size={iconSize} />
        <div id={timer.id}>Таймер</div>
      </div>
    </div>
  )
}
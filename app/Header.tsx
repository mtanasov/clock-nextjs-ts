import React, { useState } from 'react';
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

  const buttonStyle = "text-center text-[10px] text-icons align-bottom font-[400]";
  const iconStyle = "inline-block font-[400]";

  const worldTimeStyle = `${buttonStyle} `;
  const alarmStyle = `${buttonStyle} `;
  const stopWatchStyle = `${buttonStyle} `;
  const timerStyle = `${buttonStyle} `;

  return (
    <div id="header" className="flex justify-center gap-x-[30px] bg-black relative top-[430px] w-[320px] h-[45px] pt-[5px] mb-[5px]">

      <div
        className={worldTimeStyle}
        id={worldTime.id}
        onClick={props.worldTimeState}
      >
        <IconWorld className={iconStyle} />
        <div>Мировые часы</div>
      </div>

      <div
        className={buttonStyle}
        id={alarm.id}
        onClick={props.alarmState}
      >
        <IconAlarm className={iconStyle} />
        <div>Будильник</div>
      </div>

      <div
        className={buttonStyle}
        id={stopWatch.id}
        onClick={props.stopwatchState}
      >
        <IconClock className={iconStyle} />
        <div>Секундомер</div>
      </div>

      <div
        className={buttonStyle}
        id={timer.id}
        onClick={props.timerState}
      >
        <IconClockPlay className={iconStyle} />
        <div>Таймер</div>
      </div>
    </div>
  )
}
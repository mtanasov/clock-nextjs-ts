import React, { useState, ButtonHTMLAttributes } from 'react';
// import styles from "./global.module.css";
import { alarm, stopWatch, timer, worldTime } from "../data/data";
import { IconWorld, IconAlarm, IconClock, IconClockPlay } from '@tabler/icons-react';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   text: string,
//   type: ButtonTypes,
//   action: () => void
// }

// const ExtendedButton: React.FC<IButtonProps> = ({ text, propTypes, action }) => { }

export default function Header(
  props: {
    alarmState: any;
    stopwatchState: any;
    timerState: any;
    worldTimeState: any;
  }
): JSX.Element {

  const buttonStyle: string = "text-center text-[10px] text-icons align-bottom font-[400] w-[70px]";
  const iconStyle: string = "inline-block font-[100]";
  const iconSize: number = 32;
  const iconStroke: number = 1.2;

  return (
    <div id="header" className="flex justify-center gap-x-[10px] bg-black relative w-[320px] h-[45px] pt-[5px] mb-[5px]">

      <div
        className={buttonStyle}
        id={worldTime.id}
        onClick={props.worldTimeState}
      >
        <IconWorld id={worldTime.id} className={iconStyle} stroke={iconStroke} size={iconSize} />
        <div id={worldTime.id} >Мировые часы</div>
      </div>

      <div
        className={buttonStyle}
        id={alarm.id}
        onClick={props.alarmState}
      >
        <IconAlarm id={alarm.id} className={iconStyle} stroke={iconStroke} size={iconSize} />
        <div id={alarm.id}>Будильник</div>
      </div>

      <div
        className={buttonStyle}
        id={stopWatch.id}
        onClick={props.stopwatchState}
      >
        <IconClock id={stopWatch.id} className={iconStyle} stroke={iconStroke} size={iconSize} />
        <div id={stopWatch.id}>Секундомер</div>
      </div>

      <div
        className={buttonStyle}
        id={timer.id}
        onClick={props.timerState}
      >
        <IconClockPlay id={timer.id} className={iconStyle} stroke={iconStroke} size={iconSize} />
        <div id={timer.id}>Таймер</div>
      </div>
    </div>
  )
}
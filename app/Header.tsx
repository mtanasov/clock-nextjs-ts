import React, { useState } from 'react';
import styles from "./global.module.css";
import { alarm, stopWatch, timer, worldTime } from "../data/data";
import Time from './Clock';

export default function Header(
  props: {
    alarmState: any;
    stopwatchState: any;
    timerState: any;
    worldTimeState: any;
  }
): JSX.Element {

  return (
    <div id="header">
      <h1> Программа </h1>
      <div className={styles.nav}>
        <input
          id={alarm.id}
          type="radio"
          name="clock"
          defaultChecked
          onChange={props.alarmState}
        /> Будильник

        <input
          id={stopWatch.id}
          type="radio"
          name="clock"
          onChange={props.stopwatchState}
        /> Секундомер

        <input
          id={timer.id}
          type="radio"
          name="clock"
          onChange={props.timerState}
        /> Таймер

        <input
          id={worldTime.id}
          type="radio"
          name="clock"
          onChange={props.worldTimeState}
        /> Мировое время
      </div>
    </div>
  )
}
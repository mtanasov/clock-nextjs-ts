"use client"

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
      <div className={styles.nav}>
        <input
          id={worldTime.id}
          type="radio"
          name="clock"
          defaultChecked
          onChange={props.worldTimeState}
        /> Мировое время

        <input
          id={alarm.id}
          type="radio"
          name="clock"
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

      </div>
    </div>
  )
}
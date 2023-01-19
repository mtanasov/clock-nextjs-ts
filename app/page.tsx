"use client"

import Header from "./Header";
import Alarm from "./Alarm";
import StopWatch from "./StopWatch";
import Timer from "./Timer";
import WorldTime from "./WorldTime";
import React, { useState } from 'react';
import { alarm, stopWatch, timer, worldTime } from "../data/data";

export default function Page() {
  const [alarmState, setAlarmState] = useState(true);
  const [stopwatchState, setStopwatchState] = useState(false);
  const [timerState, setTimerState] = useState(false);
  const [worldTimeState, setWorldTimeState] = useState(false);

  const arrSetState = [
    {
      id: alarm.id,
      state: (param: any) => setAlarmState(param)
    },
    {
      id: stopWatch.id,
      state: (param: any) => setStopwatchState(param)
    },
    {
      id: timer.id,
      state: (param: any) => setTimerState(param)
    },
    {
      id: worldTime.id,
      state: (param: any) => setWorldTimeState(param)
    }
  ];

  const checked = (event: any) => {
    const targetID = event.target.id;

    console.log("ID", targetID);

    arrSetState.map(item => {
      switch (true) {
        case (item.id === targetID):
          return item.state(true);
        case (item.id !== targetID):
          return item.state(false)
      }
    })
  }

  return (
    <>
      <Header

        alarmState={
          (event: any) => {
            return checked(event)
          }
        }
        stopwatchState={
          (event: any) => {
            return checked(event)
          }
        }
        timerState={
          (event: any) => {
            return checked(event)
          }
        }
        worldTimeState={
          (event: any) => {
            return checked(event)
          }
        }
      ></Header>
      {alarmState ? <Alarm></Alarm> : false}
      {stopwatchState ? <StopWatch></StopWatch> : false}
      {timerState ? <Timer></Timer> : false}
      {worldTimeState ? <WorldTime></WorldTime> : false}
    </>
  )
}
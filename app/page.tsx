"use client"

import Header from "./Header";
import Alarm from "./Alarm";
import StopWatch from "./StopWatch";
import Timer from "./Timer";
import WorldTime from "./WorldTime";
import React, { useState } from 'react';
import { alarm, stopWatch, timer, worldTime } from "../data/data";

export default function Page() {
  const [worldTimeState, setWorldTimeState] = useState(true);
  const [alarmState, setAlarmState] = useState(false);
  const [stopwatchState, setStopwatchState] = useState(false);
  const [timerState, setTimerState] = useState(false);

  const arrSetState = [
    {
      id: worldTime.id,
      state: (param: any) => setWorldTimeState(param)
    },
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
      <div className="h-[515px]">
        {stopwatchState ? <StopWatch></StopWatch> : false}
        {alarmState ? <Alarm></Alarm> : false}
        {worldTimeState ? <WorldTime></WorldTime> : false}
        {timerState ? <Timer></Timer> : false}
      </div>
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
      />
    </>
  )
}
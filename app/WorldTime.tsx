import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useInterval } from "../hooks/use-interval";
import { localTime } from "../data/day";

import Clock from "./Clock";

const Modal = dynamic(() => import("./modalWorldTime/modal__worldTime"));

export default function WorldTime() {
  const [display, setDisplay] = useState("none");
  const [showListCities__modal, setShowListCities__modal] = useState(false);
  const [dateNow, setDateNow] = useState<string | undefined>();
  const date = new Date();

  const interval = useInterval(() => setDateNow((): any => localTime()), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [dateNow]);

  const style = {
    worldTime_main: " text-bermuda text-[30px]",
  };

  return (
    <div id="worldTime_main" className={style.worldTime_main}>
      <div className="w-[320px] h-[30px]  text-main-orange">
        <div className="flex justify-between h-[100%] items-center mx-[15px] align-middle">
          <span className="text-[18px]">
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
      <div className="w-[320px] h-[50px] text-left">
        <h1 className=" font-[600] justify-start mx-[12px]"> Мировые часы </h1>
      </div>
      {showListCities__modal && (
        <Modal
          active={showListCities__modal}
          buttonCancel={() => setShowListCities__modal(!showListCities__modal)}
        />
      )}
      <p style={{ fontSize: "14px", color: "lightblue" }}> местное время</p>
      <div style={{ fontSize: "14px", color: "yellow" }}>
        {" "}
        {`сделать через timeZone ${dateNow}` || "Loading..."}
      </div>
      <Clock />
    </div>
  );
}

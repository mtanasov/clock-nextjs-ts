import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useInterval } from "../hooks/use-interval";

const Modal = dynamic(() => import("./modalWorldTime/modal__worldTime"));
const Time = dynamic(() => import("./Clock"));

export default function WorldTime() {
  const [display, setDisplay] = useState(false);
  const [showListCities__modal, setShowListCities__modal] = useState(false);
  const [dateNow, setDateNow] = useState<string | undefined>();
  const [stateEdit, setStateEdit] = useState(false);
  const date = new Date().toLocaleTimeString();

  const interval = useInterval(() => setDateNow(() => `${date}`), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, [dateNow]);

  const style = {
    worldTime_main: "text-bermuda text-[30px] text-center",
  };

  return (
    <div id="worldTime_main" className={style.worldTime_main}>
      <div className="w-[320px] h-[30px]  text-main-orange">
        <div className="flex justify-between h-[100%] items-center mx-[15px] align-middle float-right">
          <span
            id="worldTime__buttonAddClock"
            className=" w-[26px] text-[40px] font-light align-text-top "
            onClick={() => setShowListCities__modal(!showListCities__modal)}
          >
            <button> +</button>
          </span>
        </div>
      </div>
      <div className="w-[320px] h-[50px] text-left">
        <h1 className=" font-[600] justify-start mx-[12px]"> World time </h1>
      </div>
      {showListCities__modal && (
        <Modal
          st={()=> setDisplay(!display)}
          active={showListCities__modal}
          buttonCancel={() => setShowListCities__modal(!showListCities__modal)}
        />
      )}
      <div className="text-[18px] text-[#ecec9a] font-mono pb-[5px] ">
        <div className="inline pr-[20px]"> Local time:</div>{" "}
        {(dateNow && dateNow) || "Loading..."}
      </div>
      <Time edit={stateEdit} />
    </div>
  );
}

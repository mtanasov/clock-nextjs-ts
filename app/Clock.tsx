import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/use-interval";
import { arrSelectedCities } from "../data/data_selectedCities";
import { timeZone } from "../data/day";

export default function Clock(props: {}) {
  const [listSelectedCities, setListSelectedCities] =
    useState<Array<{ city: ""; time: "" }>>();

  const intervalCities = useInterval(
    (): any =>
      setListSelectedCities((): any => {
        return ([] = arrSelectedCities.map((item) => {
          return {
            city: item,
            time: timeZone(item).split(" ", 5).join(" "),
          };
        }));
      }),
    1000
  );

  useEffect(() => {
    intervalCities.start();
    return intervalCities.stop;
  }, [listSelectedCities]);

  return (
    <div
      style={{
        height: "390px",
        overflowY: "auto",
        width: "95%",
        margin: "0 auto",
      }}
    >
      {listSelectedCities ? (
        listSelectedCities.map(
          (item: { city: string; time: string }, index: number) => {
            return (
              <div
                className="text-[17px] text-[#9aad9a] py-[10px] border-b-2 border-solid "
                key={index.toString()}
              >
                <div className="text-left ml-[15px] text-[white]">
                  {item.city} :
                </div>
                <span>{item.time}</span>
              </div>
            );
          }
        )
      ) : (
        <div className="text-[#9aad9a] text-[17px] ">Load...</div>
      )}
    </div>
  );
}

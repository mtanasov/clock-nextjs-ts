// "use client"

import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/use-interval";
import { arrSelectedCities } from "../data/data_selectedCities";
import { timeZone } from "../data/day";

console.log("сырой массив", arrSelectedCities);

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
    <div>
      {listSelectedCities ? (
        listSelectedCities.map(
          (item: { city: string; time: string }, index: number) => {
            return (
              <div
                style={{
                  color: "#9aad9a",
                  fontSize: "17px",
                  padding: "10px 0",
                }}
                key={index.toString()}
              >
                <div>{item.city} :</div>
                <span>{item.time}</span>
              </div>
            );
          }
        )
      ) : (
        <div style={{ color: "#9aad9a", fontSize: "17px" }}>
          {" "}
          тут будут выбранные вами города{" "}
        </div>
      )}
    </div>
  );
}

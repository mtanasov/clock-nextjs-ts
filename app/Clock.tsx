import React, { useState, useEffect } from "react";
import { useInterval } from "../hooks/use-interval";
import { timeZone } from "../data/day";
import { useLocalStorage } from "@mantine/hooks";

export default function Clock(props: { edit: boolean }) {
  const [storageCities, setStorageCities] = useLocalStorage({
    key: "worldTime-city",
    defaultValue: [],
  });
  const [listSelectedCities, setListSelectedCities] =
    useState<Array<{ city: ""; time: "" }>>();

  const intervalCities = useInterval(
    (): any =>
      setListSelectedCities((): any => {
        return storageCities.map((item) => {
          return {
            city: item,
            time: timeZone(item).split(" ", 5).join(" ").slice(0, -3),
          };
        });
      }),
    1000
  );

  useEffect(() => {
    intervalCities.start();
    return intervalCities.stop;
  }, [listSelectedCities]);

  const styleBtn_Edit = () => {
    props.edit ? { display: "block" } : { display: "hidden" };
  };

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
                className="text-[17px] text-[#9aad9a] py-[10px] flex flex-row items-center justify-between border-b-2 border-solid "
                key={index.toString()}
              >
                <div className="flex items-start flex-col">
                  <div className="text-left ml-[15px] text-[burlywood] text-[14px]">
                    {item.city} :
                  </div>
                  <div>{item.time}</div>
                </div>
                <div>
                  <button
                    className={`${styleBtn_Edit()} w-[25px] h-[25px] rounded-[40%] text-[white] bg-no-repeat	 bg-[#ff5757] bg-[url('../img/square-rounded-x.png')] bg-contain relative mr-[15px] `}
                    onClick={() => {
                      setStorageCities(
                        storageCities.filter(
                          (selItem: "") => selItem !== item.city
                        )
                      );
                    }}
                  ></button>
                </div>
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

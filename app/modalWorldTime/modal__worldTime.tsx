import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React, { PropsWithChildren, useRef, useState, useEffect, HTMLAttributes, HTMLAttributeReferrerPolicy, Attributes, createRef } from "react";
import { receiveMessageOnPort } from "worker_threads";
import { style } from "./style-modalWorldTime";
import { arrayCities } from "../../data/time-zone";
import { timeZone } from "../../data/day";
import { arrSelectedCities } from "../../data/data_selectedCities";


interface ModalWT {
  active: boolean;
  buttonCancel: () => void;
}

// TODO переписать стили на функции

const Modal = ({ buttonCancel, children, active }: PropsWithChildren<ModalWT>) => {
  // if (!active) {
  //   return null
  // }

  const [listCities, setListCities] = useState(arrayCities);
  const [listSelectedCities, setListSelectedCities] = useState(arrSelectedCities);
  console.log(listSelectedCities)



  const handleClick_selectCity = (event: any) => {
    const city = event.currentTarget.textContent;
    timeZone(city)
  }

  return (
    <div id="modal" className={style.modal(active)} >
      <div className={style.modal__conteiner} >
        <div id="modal__title" className={style.modal__title}> Выбрать город </div>
        <div id="modal__control" className={style.modal__control}>
          <input
            type="text"
            id="modal__search"
            className={style.modal__search}
            placeholder="🔍 Поиск" />
          <button
            id="modal__cancel"
            className={style.modal__cancel}
            onClick={() => {
              buttonCancel();
              // style.modal = style.modal;
            }
            }
          >
            Отменить
          </button>
        </div>
        <div id="modal__list" className={style.modal__list}>
          {/* <h2 id="modal__list_letter" className={style.modal__list_letter} >{letter}</h2> */}
          <div id="cities" className={style.cities}>
            {
              listCities.map((item: string, index: number) => {
                return (
                  <button
                    key={index.toString()}
                    className={style.button}
                    // onClick={handleClick_selectCity}
                    onClick={() => {
                      return setListSelectedCities(() => {
                        console.log(item)
                        // return listSelectedCities.concat([timeZone(item)])
                        return listSelectedCities.concat([item])
                      })
                    }}
                  >
                    {item}
                  </button>
                )
              })
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Modal


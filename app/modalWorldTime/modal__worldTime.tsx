import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React, { PropsWithChildren, useRef, useEffect, HTMLAttributes, HTMLAttributeReferrerPolicy, Attributes, createRef } from "react";
import { receiveMessageOnPort } from "worker_threads";
import { style } from "./style-modalWorldTime";
// import { jsonData, tc } from "../../data/time-zone";
import { aryIannaTimeZones } from "../../data/time-zone"

// const tz = timeZone;
// console.log(jsonData)
// console.log(tc)
console.log(aryIannaTimeZones)



interface ModalWT {
  title?: string;
  letter?: string;
  arrList?: [];
  active: boolean;
  buttonCancel: () => void;
  onSubmit: () => void;
}

// TODO переписать стили на функции

interface List {
  letter: string;
  buttonCity: () => void;
}

const Modal = ({ title, letter, arrList, buttonCancel, onSubmit, children, active }: PropsWithChildren<ModalWT>) => {
  // if (!active) {
  //   return null
  // }

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
              aryIannaTimeZones.map((item: string) => {
                return (
                  <button
                    className={style.button}
                    onClick={(event) => { console.log(event.target) }}>
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


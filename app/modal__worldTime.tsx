import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React, { PropsWithChildren } from "react";

const style = {
  modal: "h-[520px] w-[100%] z-[1] rounded-t-[10px] fixed flex-col top-[48px] bg-modal-bg flex justify-center items-center text-main-orange text-[16px]",

  modal__title: " text-bermuda text-[14px] h-[40px] pt-[10px]",

  modal__control: "align-center pt-[10px] flex flex-row gap-[10px]  ",

  modal__search: "w-[210px] h-[30px] px-[5px] rounded-[10px] bg-search-bg attr text-[14px] align-middle",

  modal__cancel: "",

  modal__list: "",

  modal__list_letter: "",

  cities: "",
}

interface ModalWT {
  title: string;
  letter: string;
  arrList: [];
  buttonCancel: () => void;
  buttonCity: () => void;
}

interface List {
  letter: string;
  buttonCity: () => void;
}

const Modal = ({ title, letter, arrList, buttonCancel, buttonCity, children }: PropsWithChildren<ModalWT>) => {
  return (
    <div id="modal" className={style.modal}>
      <div id="modal__title" className={style.modal__title}> Выбрать город </div>
      <div id="modal__control" className={style.modal__control}>
        <input type="text" id="modal__search" className={style.modal__search} placeholder="🔍 Поиск" />
        <button id="modal__cancel" className={style.modal__cancel}> Отменить </button>
      </div>
      <div id="modal__list" className={style.modal__list}>
        <h2 id="modal__list_letter" className={style.modal__list_letter} >{letter}</h2>
        <div id="cities" className={style.cities}>
          <ol>
            <li>city 1</li>
            <li>city 2</li>
            <li>city 3</li>
            <li>city 4</li>
            <li>city 5</li>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default Modal


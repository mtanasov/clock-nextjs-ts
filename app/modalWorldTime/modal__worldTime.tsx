import React, {
  PropsWithChildren,
  useState,
  useRef,
  InputHTMLAttributes,
  useEffect,
} from "react";
import { style } from "./style-modalWorldTime";
import { arrayCities } from "../../data/time-zone";
import { useLocalStorage } from "@mantine/hooks";
interface ModalWT {
  active: boolean;
  buttonCancel: () => void;
  st: () => void;
}

const Modal = ({
  buttonCancel,
  st,
  active,
}: PropsWithChildren<ModalWT>) => {
  const [listCities, setListCities] = useState(arrayCities);
  const [storageCities, setStorageCities, clearStorage] = useLocalStorage({
    key: "worldTime-city",
    defaultValue: [],
  });
  const inputValue = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div id="modal" className={style.modal(active)}>
      <div className={style.modal__conteiner}>
        <div id="modal__control" className={style.modal__control}>
          <input
            type="text"
            id="modal__search"
            className={style.modal__search}
            placeholder="🔍 Search"
            ref={inputValue}
            onInput={(event) => {
              setListCities(
                listCities.filter((city) => {
                  return city
                    .toLowerCase()
                    .includes(event.currentTarget.value.toLowerCase());
                })
              );
            }}
          />
          <button
            id="modal__cancel"
            onClick={() => {
              buttonCancel();
            }}
          >
            Cancel
          </button>
        </div>
        <div id="modal__list">
          <div id="cities" className={style.cities}>
            {listCities.map((item: string, index: number) => {
              return (
                <button
                  key={index.toString()}
                  className={style.button}
                  onClick={() => {
                    buttonCancel();
                    // st()
                    return setStorageCities((): any => {
                      return (storageCities as string[]).concat(item);
                    });
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

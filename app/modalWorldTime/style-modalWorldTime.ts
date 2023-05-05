export const style = {
  modal(state: boolean) {
    const func_style_modal = (value: string, animate: string, transition: string) => {
      return `${animate}  ${transition} ${value}  h-[485px] w-[320px] z-[1] rounded-t-[10px] fixed flex-col bg-modal-bg flex justify-center items-center text-main-orange text-[16px]`
    }

    if (state) {
      return func_style_modal("", "", "all");
    } else {
      return func_style_modal("", "", "transition-all");
    }
  },
  modal__conteiner: "h-[550px] w-[320px] overflow-y-auto",
  modal__title: " text-bermuda text-[14px] h-[40px] pt-[10px]",
  modal__control: " w-[310px] h-[50px] fixed align-center justify-center items-center flex flex-row gap-[10px] ml-[5px] bg-[#776348]",
  modal__search: "w-[210px] h-[30px] text-[white] px-[5px] rounded-[10px] bg-search-bg attr text-[14px] align-middle",
  cities: "flex flex-col items-start pt-[50px]",
  button: "w-[100%] h-[35px] text-left text-[#bfc2c2] text-[0.8rem] align-middle pl-[15px] border-solid border-b border-[#878d8d]"

}





import React from "react";
import style from "../style.module.css";
import { Modal } from "../Standard/ModalStandard";

const ModalMobile = ({ state, toggleStateHandler, children }: Modal) => {
  return (
    <>
      {state && (
        <button
          onClick={toggleStateHandler}
          tabIndex={-1}
          className={style.backdrop}
        />
      )}
      <div
        className={[
          style.modal_mobile,
          state ? style.modal_mobile_active : "",
        ].join(" ")}
      >
        <div className={style.modal_mobile_content}>
          <div>{children}</div>
          <div>
            <hr />
            <button
              className='w-full py-2 -mb-2 text-black select-none '
              onClick={toggleStateHandler}
            >Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalMobile;

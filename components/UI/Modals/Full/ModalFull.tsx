import { XIcon } from "@heroicons/react/outline";
import React from "react";
import style from "../style.module.css";
import { Modal } from "../Standard/ModalStandard";

const ModalFull = ({ state, toggleStateHandler, children }: Modal) => {
  return (
    <>
      {/* <button className={style.backdrop} /> */}
      <div
        className={[
          style.modal_full,
          state ? style.modal_full_active : "",
        ].join(" ")}
      >
        <nav>
          <span>ModalFull</span>{" "}
          <button onClick={toggleStateHandler}>
            <XIcon />
          </button>
        </nav>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ModalFull;

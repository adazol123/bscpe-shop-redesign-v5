import React from "react";
import style from "../style.module.css";
import { Modal } from "../Standard/ModalStandard";
import ButtonLink from "../../Button/Link/ButtonLink";

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
          {/* <div>
            <hr />
            <ButtonLink
              className="py-4 px-16 mx-auto w-full text-theme-gray-700/70"
              onClick={toggleStateHandler}
            >Close</ButtonLink>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ModalMobile;

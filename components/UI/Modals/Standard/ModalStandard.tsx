import { XIcon } from "@heroicons/react/outline";
import { KeyIcon } from "@heroicons/react/solid";
import React from "react";

import style from "../style.module.css";

export interface Modal {
  state: boolean;
  toggleStateHandler: () => void;
  children?: JSX.Element | JSX.Element[] | string;
  icon?: JSX.Element | JSX.Element[] | null;
  title?: string;
}

const ModalStandard = ({
  state,
  toggleStateHandler,
  icon,
  title,
  children,
}: Modal) => {
  return (
    <>
      {state && (
        <button onClick={toggleStateHandler} className={style.backdrop} />
      )}
      <div
        className={[
          style.modal_standard,
          state ? style.modal_standard_active : "",
        ].join(" ")}
      >
        <nav>
          {title && (
            <div className="inline-flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <span>{title}</span>
            </div>
          )}
          <button>
            <XIcon onClick={toggleStateHandler} />
          </button>
        </nav>

        <div className={style.modal_standard_content}>{children}</div>
      </div>
    </>
  );
};

export default ModalStandard;

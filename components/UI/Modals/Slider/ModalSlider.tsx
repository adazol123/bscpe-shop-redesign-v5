import React from "react";
import style from "../style.module.css";
import {
  XIcon,
  ArrowNarrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/solid";
import ButtonSVG from "../../Button/SVG/ButtonSVG";

interface Modal {
  title?: string | null;
  state: boolean;
  toggleStateHandler: () => void;
  icon?: JSX.Element | JSX.Element[] | null;
  children?: React.ReactNode | string;
  scrollable?: boolean;
  enableFooter?: boolean;
  footer?: JSX.Element | JSX.Element[] | null;
}

export default function ModalSlider({
  title,
  state,
  icon,
  enableFooter,
  scrollable,
  footer,
  toggleStateHandler,
  children,
}: Modal) {
  return (
    <>
      {state && (
        <button
          className={style.backdrop}
          tabIndex={-1}
          onClick={toggleStateHandler}
        />
      )}

      <div
        className={[
          style.modal_slider,
          state ? style.modal_slider_active : "",
        ].join(" ")}
      >
        <nav>
          <div className="inline-flex gap-2 items-center">
            <ButtonSVG tabIndex={state ? 1 : -1} onClick={toggleStateHandler}>
              <ArrowLeftIcon />
            </ButtonSVG>
            {title && <span> {title}</span>}
          </div>
        </nav>
        <div
          className={[
            "min-h-[calc(100vh-(54px*4))]",
            scrollable ? style.scrollable : "",
          ].join(" ")}
        >
          {children}
        </div>
        {enableFooter && (
          <div
            className={[
              style.modal_slider_footer,
              state ? style.modal_slider_footer_delay : "",
            ].join(" ")}
          >
            {footer}
          </div>
        )}
      </div>
    </>
  );
}

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
  children?: JSX.Element | JSX.Element[] | string;
  scrollable?: boolean;
  enableFooter?: boolean;
  footer?: JSX.Element | JSX.Element[] | null;
}

export default function ModalSide({
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
          style.modal_side,
          state ? style.modal_side_active : "",
        ].join(" ")}
      >
        <nav>
          <div className="inline-flex gap-2 items-center">
            <ButtonSVG tabIndex={state ? 1 : -1} onClick={toggleStateHandler}>
              <ArrowLeftIcon />
            </ButtonSVG>

            <span> {title ? title : "Title here"}</span>
          </div>
        </nav>
        <div
          className={[
            "min-h-[calc(100vh-(54px*5.8))] px-2 -mx-2",
            scrollable ? style.scrollable : "",
          ].join(" ")}
        >
          {children}
        </div>
        {enableFooter && (
          <div
            className={[
              style.footer,
              state ? style.modal_side_footer_delay : "",
            ].join(" ")}
          >
            {footer}
          </div>
        )}
      </div>
    </>
  );
}

function Footer(state: boolean) {
  return (
    <footer
      className={[
        style.footer,
        state ? style.modal_side_footer_delay : "",
      ].join(" ")}
    >
      <span>© Copyright 2022 | </span>
      <a href="http://adazolhub.com" target={"_blank"} rel={"noreferrer"}>
        <span>ADAZOLHUB.</span>
        <ArrowNarrowRightIcon className="w-3 h-3 -rotate-45 stroke-gray-300 " />
      </a>
    </footer>
  );
}

import React, { MouseEventHandler } from "react";
import style from "./style.module.css";
import { BeakerIcon } from "@heroicons/react/outline";

interface Button {
  icon?: JSX.Element;
  children?: JSX.Element | JSX.Element[] | string;
  direction?: "right" | "left";
  type?: "solid" | "outline" | "link" | "dashed";
  title?: string;
  disabled?: boolean;
  className?: HTMLStyleElement | string;
  onClick?: MouseEventHandler;
}

const ButtonStandard = <T extends Button>(props: T) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${
        props.type === "outline"
          ? style.button__outline
          : props.type === "link"
          ? style.button__link
          : props.type === "dashed"
          ? style.button__dashed
          : style.button__primary
      } ${props.direction === "right" ? "flex-row-reverse" : ""} ${
        props.className
      }`}
    >
      {props.icon && (
        <div className={style.button__tittle}>
          <span className={`${style.button__icon}`}>{props.icon}</span>
          {props.title && <span>{props.title}</span>}
        </div>
      )}
      {props.children && props.children}
    </button>
  );
};

export default ButtonStandard;
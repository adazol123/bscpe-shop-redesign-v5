import React, { MouseEventHandler } from "react";
import style from "./style.module.css";
import { BeakerIcon } from "@heroicons/react/outline";

interface ButtonStyled {
  children: JSX.Element | JSX.Element[] | string;
  icon?: JSX.Element;
  className?: string;
  onClick?: MouseEventHandler;
}
const ButtonStyled = <T extends ButtonStyled>({
  children,
  icon,
  className,
  onClick,
  ...props
}: T) => {
  return (
    <button
      className={`${style.button__custom} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default ButtonStyled;

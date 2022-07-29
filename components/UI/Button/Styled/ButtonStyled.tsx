import React from "react";
import style from "./style.module.css";
import { BeakerIcon } from "@heroicons/react/outline";

interface ButtonStyled {
  children: JSX.Element | JSX.Element[] | string;
  icon?: JSX.Element;
  className?: string;
}
const ButtonStyled = <T extends ButtonStyled>({
  children,
  icon,
  className,
  ...props
}: T) => {
  return (
    <button className={`${style.button__custom} ${className}`} {...props}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default ButtonStyled;

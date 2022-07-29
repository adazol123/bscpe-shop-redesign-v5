import React, { MouseEventHandler } from "react";
import style from "./style.module.css";
import { PlusSmIcon } from "@heroicons/react/outline";

interface Icon {
  size?: "small" | "base" | "medium" | "large";
  type?: "outline" | "solid" | "square";
  icon?: JSX.Element;
  label?: string;
  className?: string;
  tabIndex?: number;
  children?: JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSVG = <T extends Icon>({
  size,
  type,
  icon,
  label,
  className,
  children,
  tabIndex,
  onClick,
}: T) => {
  return (
    <button
      className={`${
        type === "solid"
          ? style.button__icon_solid
          : type === "square"
          ? style.button__icon_square
          : style.button__icon
      } ${
        size === "small"
          ? style.small
          : size === "medium"
          ? style.medium
          : size === "large"
          ? style.large
          : style.base
      } ${className}`}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {label && <span>{label}</span>}
      {icon && icon}
      {children && children}
    </button>
  );
};

export default ButtonSVG;

import React from "react";
import style from "./style.module.css";
const ButtonRounded = ({ title, children, ...props }: { children: React.ReactNode, title: string }) => {
  return (
    <button title={title} className={`${style._button_rounded} `} {...props}>
      {children}
    </button>
  );
};

export default ButtonRounded;

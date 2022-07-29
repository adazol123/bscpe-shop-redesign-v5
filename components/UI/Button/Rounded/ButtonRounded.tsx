import React from "react";
import style from "./style.module.css";
const ButtonRounded = ({ active = false, ...props }) => {
  return (
    <button className={`${style._button_rounded} ${active? 'bg-black text-white' : ''}`} {...props}>
      All
    </button>
  );
};

export default ButtonRounded;

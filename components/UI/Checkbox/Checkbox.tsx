import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import style from "./style.module.css";

interface Check {}

const Checkbox = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label>
        <input type="checkbox" className={style._input} {...props} />
        <i className={style._checkbox}>
          <CheckCircleIcon />
        </i>
        <span className="text-xs ml-1">I agree with terms and conditions</span>
      </label>
    </>
  );
};

export default Checkbox;

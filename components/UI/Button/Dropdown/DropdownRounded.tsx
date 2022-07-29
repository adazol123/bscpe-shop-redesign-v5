import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";
import { useClickOutside } from "../../../../utils/hooks/useClickOutside";
import style from "./style.module.css";

interface DropdownRoundedProps {
  label: string;
}

const DropdownRounded = ({ label, ...props }: DropdownRoundedProps) => {
  let { ref, toggle, toggleHandler } = useClickOutside();
  return (
    <div className={style._dropdown__rounded__wrapper}>
      <button
        className={`${style._dropdown__rounded} ${
          toggle ? "bg-black text-white" : "hover:bg-black/10"
        }`}
        onClick={toggleHandler}
        ref={ref}
      >
        {label}
        <span>
          <ChevronDownIcon
            className={`${toggle ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </button>
      {toggle && (
        <div className={style._dropdown__rounded__content}>
          <button className="bg-black text-white">{label}</button>
          <hr />
          <button>T-shirt</button>
          <button>Jacket</button>
          <button>Jeans</button>
        </div>
      )}
    </div>
  );
};

export default DropdownRounded;

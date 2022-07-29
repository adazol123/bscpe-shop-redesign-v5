import React, { useEffect, useState, createRef, ReactNode } from "react";
import style from "./style.module.css";
import {
  ChevronDownIcon,
  ViewGridIcon,
  BellIcon,
  UsersIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";
import { useClickOutside } from "../../../../utils/hooks/useClickOutside";

/**
 * Radio Button Component
 * @param title
 * @param children - must be an array of element in order for component to compute its sub-content height
 *
 * (e.g) an `(a)` tag element as main content
 *
 * `<a> {svg icon} {sub-content} <a/>`
 */
interface DropdownStyled {
  children?: JSX.Element[];
  className?: string;
  title: string;
}
const DropdownStyled: React.FC<DropdownStyled> = ({
  children,
  className,
  title,
}) => {
  let { ref, toggle, toggleHandler } = useClickOutside();
  return (
    <button
      ref={ref}
      onClick={toggleHandler}
      className={`${style.button__dropdown} ${className}`}
    >
      <div className={style.button__header}>
        <span className={style.button__title}>
          <ViewGridIcon />
          <span>{title}</span>
        </span>
        <span>
          <ChevronDownIcon className={toggle ? "-rotate-180" : "rotate-0"} />
        </span>
      </div>
      <div
        // ref={contentRef}
        className={`${style.button__sub_content} ${
          toggle
            ? `${
                children?.length === 1
                  ? "h-[calc(46px*1)]"
                  : children?.length === 2
                  ? "h-[calc(46px*2)]"
                  : children?.length === 3
                  ? "h-[calc(46px*3)]"
                  : children?.length === 4
                  ? "h-[calc(46px*4)]"
                  : children?.length === 5
                  ? "h-[calc(46px*5)]"
                  : "h-[calc(46px*4)]"
              } bg-neutral-50`
            : ""
        }`}
      >
        {children}
      </div>
    </button>
  );
};

export default DropdownStyled;

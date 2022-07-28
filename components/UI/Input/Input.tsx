import React from "react";
import style from "./style.module.css";

const Input = <
  T extends {
    type?: React.HTMLInputTypeAttribute | undefined;
    label?: string;
    placeholder?: string;
    size?: "text-base" | "text-xs" | "text-sm" | "text-lg";
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
    placeholderClassName?: string;
  }
>({
  type,
  onChange,
  label,
  placeholder,
  className,
  size,
  placeholderClassName,
  ...props
}: T) => {
  return (
    <>
      <label className={`${style._label} ${size || "text-base"}`}>
        <input
          required={false}
          placeholder=" "
          type={type || "text"}
          className={`${style._field} ${className}`}
          onChange={onChange}
          {...props}
        />
        <span className={`${style._span} ${placeholderClassName}`}>
          {placeholder || label}
        </span>
        <fieldset className={style._fieldset}>
          <legend className={style._legend}>{label}</legend>
        </fieldset>
      </label>
    </>
  );
};

export default Input;

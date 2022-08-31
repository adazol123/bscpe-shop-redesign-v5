import React, { InputHTMLAttributes } from 'react'
import style from './style.module.css'
const TextInput = <T extends Partial<{
    placeholder: string,
    type: React.HTMLInputTypeAttribute,
    name: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string | number | readonly string[],
    className: string,

}>>(props: T) => {
    return (
        <label className={style._text__label}>
            <input
                placeholder=' '
                className={`${style._text__input} ${props.className}`}
                name={props.name}
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                {...props}
            />
            <span>{props.placeholder}</span>
        </label>
    )
}

export default TextInput
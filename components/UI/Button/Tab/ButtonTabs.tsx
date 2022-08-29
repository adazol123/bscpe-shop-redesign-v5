import React, { FC } from 'react'
import style from './style.module.css'
const ButtonTabs: FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <button type='button' className={style._tab}>{children}</button>
    )
}

export default ButtonTabs
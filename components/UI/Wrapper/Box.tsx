import React, { PropsWithChildren } from 'react'
import style from './style.module.css'

const Box: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={style._box}>{children}</div>
    )
}

export default Box
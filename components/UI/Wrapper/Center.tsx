import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

const Center: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <div className='mx-auto min-h-screen grid place-content-center md:min-w-[500px] gap-6'>
            {children}
        </div>
    )
}

export default Center
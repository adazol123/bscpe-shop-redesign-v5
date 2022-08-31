import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'

const InformationalError = ({ error }: { error: string | HTMLElement | React.ReactNode | null }) => {
    return (
        <span className='max-w-[264px] w-full text-[0.65rem] text-rose-500 py-3 px-4 bg-rose-50 flex gap-2 rounded'>
            <>
                <InformationCircleIcon className='min-w-[16px] max-w-[20px] min-h-[16px] max-h-[20px]' />
                {error}
            </>
        </span>

    )
}

export default InformationalError
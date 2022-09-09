import React from 'react'
import ButtonStandard from '../../../UI/Button/Standard/ButtonStandard'

type Props = {}

const FooterDetails = (props: Props) => {
    return (
        <div className='flex flex-row md:flex-col px-6 py-3 justify-end gap-2 bg-white rounded-md 
            fixed bottom-0 inset-x-0 md:static md:w-full
        '>
            <div className='flex items-end flex-col text-xs'>
                <p className='text-xs'>Total</p>
                <span className='text-marine-700 font-bold'>P 4349.00</span>
            </div>
            <ButtonStandard >
                Place order
            </ButtonStandard>
        </div>
    )
}

export default FooterDetails
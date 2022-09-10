import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ButtonStandard from '../../../UI/Button/Standard/ButtonStandard'

type Props = {}

const FooterPaymentDetails = (props: Props) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handlePayment = () => {
        setIsLoading(true)
        setTimeout(() => {
            router.replace('/checkout/payment/?success=true')
            setIsLoading(false)
        }, 3000)
    }
    return (
        <div className='flex flex-col  px-6 py-3 gap-2 bg-white rounded-md
    fixed bottom-0 inset-x-0 md:static md:w-full
'>
            <span className='text-[0.65rem] text-theme-gray-500 max-w-[36ch]'>Please review to ensure that the details are correct before you proceed</span>
            <ButtonStandard
                onClick={handlePayment}
                className='w-full' >
                {isLoading ? 'Processing...' : 'PAY P 4324324'}
            </ButtonStandard>
        </div>
    )
}

export default FooterPaymentDetails
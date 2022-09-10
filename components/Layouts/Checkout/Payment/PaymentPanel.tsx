import { InformationCircleIcon } from '@heroicons/react/outline'
import React from 'react'
import VirtualCreditCard from '../../Account/VirtualCard/VirtualCreditCard'
import FooterPaymentDetails from './FooterPaymentDetails'

type Props = {}

const PaymentPanel = (props: Props) => {
    return (
        <div className='flex flex-col md:flex-row gap-2 w-fit '>
            <div className='flex flex-col gap-4 p-3 bg-white rounded-md max-h-96 drop-shadow-sm'>
                <h4>With with</h4>
                <div className='relative flex flex-col gap-2'>
                    <span>Credit/Debit Card</span>
                    <div className='p-2 border rounded border-dashed flex gap-2 text-xs text-theme-gray-500'>
                        <div className='w-4 h-4'>
                            <InformationCircleIcon className='w-4 h-4' />

                        </div>
                        <span className='max-w-[50ch]'>The card details below is for demo purposes only. We do not collect real bank information through-out this web app.</span>
                    </div>
                    <VirtualCreditCard
                        bank='BPI'
                        card_holder='Danyel Lozada'
                        card_number={1234_1234_5455_000}
                        type='Master Card'
                        className={'fill-marine-900 w-full'}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-4 p-3 bg-white rounded-md max-h-96 drop-shadow-sm'>
                    <h4>You are about to pay</h4>
                    <div className='text-xs flex flex-col gap-2'>
                        <div className='flex w-full justify-between text-theme-gray-500'>
                            <span>Amount due</span>
                            <span>P 124543.00</span>
                        </div>
                        <div className='flex w-full justify-between text-theme-gray-500'>
                            <span>VAT (1%)</span>
                            <span>P 143.00</span>
                        </div>
                        <div className='flex w-full justify-between'>
                            <span>Total amount</span>
                            <span>P 124543.00</span>
                        </div>
                    </div>
                </div>
                <FooterPaymentDetails />
            </div>
        </div>
    )
}

export default PaymentPanel
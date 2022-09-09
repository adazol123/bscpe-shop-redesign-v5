import React from 'react'
import FooterDetails from './Information/FooterDetails'
import OrderSummary from './Information/OrderSummary'
import ShippingDetails from './Information/ShippingDetails'

const CheckoutPanel = () => {

    return (
        <div className='flex flex-col-reverse md:flex-row gap-6 w-fit mx-auto'>
            <div className='h-14 md:h-0' />
            <OrderSummary />
            <div className='flex flex-col gap-6'>
                <ShippingDetails />
                <FooterDetails />
            </div>
        </div>
    )
}

export default CheckoutPanel
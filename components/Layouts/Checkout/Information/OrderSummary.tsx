import React from 'react'
import { useAppSelector } from '../../../../utils/app/hook'
import CartCard from '../../../UI/Cards/CardCart'
import CardOrder from '../../../UI/Cards/CardOrder'

const OrderSummary = () => {
    const carts = useAppSelector(state => state.cart.carts)
    return (
        <div>
            <h4>Order summary</h4>
            <div className='flex flex-col gap-2 bg-white rounded-md  max-h-96 overflow-y-auto'>
                {carts.map(cart => (
                    <CardOrder key={cart.product_id} cart={cart} />
                ))}
            </div>
        </div>
    )
}

export default OrderSummary
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { incrementQuantity } from '../../features/cart/cart-slice'
import { useAppDispatch, useAppSelector } from '../../utils/app/hook'

const ProductItem = () => {
    const router = useRouter()
    console.log(router.query)
    const currentProduct = useAppSelector(state => state.shop.products.find(item => item.product_id === router.query.id))
    const cart = useAppSelector(state => state.cart.carts.find(item => item.product_id === currentProduct?.product_id))
    const dispatch = useAppDispatch()

    if (!currentProduct) return null
    return (
        <div>
            <div className='relative w-44 h-44'>

                <Image
                    src={currentProduct.metatags.images[0].url}
                    alt={currentProduct.name}
                    layout='fill'
                />
            </div>
            <h4>{currentProduct.name}</h4>
            <p>{currentProduct.description}</p>
            <h2>{currentProduct.price.toFixed(2)}</h2>
            <div className='flex gap-6'>
                <button className='px-4 py-4 bg-neutral-100  rounded-md'
                    onClick={() => dispatch(incrementQuantity(cart?.product_id))}
                >+</button>
                <span>{cart?.quantity}</span>
                <button className='px-4 py-4 bg-neutral-100  rounded-md'
                    onClick={() => console.log('clicked')}
                >-</button>

            </div>
        </div>
    )
}

export default ProductItem
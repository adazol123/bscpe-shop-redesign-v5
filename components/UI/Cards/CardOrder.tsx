import Image from 'next/image';
import React from 'react'
import { CartItemProps } from '../../../features/cart/cart-slice';
import style from './style.module.css'
type Props = {
    cart: CartItemProps
}

const CardOrder = ({ cart }: Props) => {
    return (
        <div
            //   onClick={() => handleToggle(cart)}
            className={style._order__card}
        >
            {/* <div className="absolute -top-8 -left-8 bg-neutral-800 text-white w-16 h-16 -rotate-45"></div> */}


            <CardImage alt={cart.name} src={cart.images[0].url} quantity={cart.quantity} />

            <div className="relative max-w-72 flex flex-col justify-between">
                <div>

                    <h4 className=" font-base text-sm w-[160px] md:w-[320px] lg:w-[500px]  text-gray-500 line-clamp-2 sm:line-clamp-2 ">
                        {cart.name}
                    </h4>
                    <div>
                        <span className="text-[0.60em]  text-theme-gray-500">
                            {cart.color}/
                            {cart.size}

                        </span>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="flex flex-col gap-4 w-full">

                        <div className="flex w-full justify-between">

                            <div >
                                <p className="text-sm font-medium text-gray-500">
                                    {" "}
                                    <span>₱ {cart.price}</span> x {cart.quantity}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
interface ImageProps {
    src: string,
    alt: string
    width?: string | number,
    height?: string | number,
    quantity: number
}

function CardImage({ alt, src, quantity }: ImageProps) {
    return (
        <React.Fragment>

            <div className={style._order__card__image}>
                <Image
                    src={src}
                    alt={alt}
                    layout='fill'
                    objectFit="cover"
                />
                <svg className='absolute top-0 -left-[1px] drop-shadow-lg' width="44" height="44" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.50005 30.8018L0.500047 4.00005C0.500047 1.79091 2.29091 4.50949e-05 4.50005 4.54429e-05L30.8347 4.95911e-05L0.50005 30.8018Z" fill="url(#paint0_linear_529_8183)" />
                    <defs>
                        <linearGradient id="paint0_linear_529_8183" x1="30.4134" y1="30.8018" x2="-2.5125" y2="27.1481" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#95C4BF" />
                            <stop offset="1" stopColor="#1B3E39" />
                        </linearGradient>
                    </defs>
                </svg>
                <span className='absolute top-2 left-2 text-[0.6rem] text-white'>{quantity.toString()}</span>
            </div>


        </React.Fragment>
    )
}

export default CardOrder
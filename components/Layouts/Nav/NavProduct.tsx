import { HomeIcon, MenuAlt3Icon, UserIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import useMeasure from 'react-use-measure';
import { selectProductById } from '../../../features/shop/product-slice';
import { toggleState } from '../../../features/toggle/toggle-state-slice';
import { selectCurrentuser } from '../../../features/user/user-auth-slice';
import { useAppDispatch, useAppSelector } from '../../../utils/app/hook';

import ButtonSVG from '../../UI/Button/SVG/ButtonSVG';
import ProfileNav from '../Account/Profile/ProfileNav';
import style from './style.module.css'
const NavProduct = () => {
    const router = useRouter()
    const user = useAppSelector(selectCurrentuser)
    const selectedItem = useAppSelector(state => state.shop.products.find((item) => item.product_id === router.query.id))
    const isIntersecting = useAppSelector(state => state.observer.isIntersecting)
    const dispatch = useAppDispatch()

    return (
        <header className={`${style._nav__product} ${isIntersecting ? 'bg-transparent text-white' : 'bg-white text-theme-dark drop-shadow'}`}>
            <nav className="w-full flex justify-between">
                <div className="flex gap-4 items-center">


                    {!isIntersecting &&
                        <div>
                            <h4 className='line-clamp-1'>
                                {selectedItem?.name}
                            </h4>
                            <span className='text-xs'>₱ {selectedItem?.price.toFixed(2)}</span>
                        </div>
                    }

                </div>


                <ButtonSVG
                    className={`p-3 transition-all transform-gpu ${isIntersecting ? 'text-white bg-black/10' : 'text-theme-dark'}`}
                    onClick={() => router.back()}>
                    <XIcon />
                </ButtonSVG>


            </nav>
        </header>
    )
}

export default NavProduct;
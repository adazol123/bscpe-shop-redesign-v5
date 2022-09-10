import { HomeIcon, MenuAlt3Icon, UserIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import useMeasure from 'react-use-measure';
import { toggleState } from '../../../features/toggle/toggle-state-slice';
import { selectCurrentuser } from '../../../features/user/user-auth-slice';
import { useAppDispatch, useAppSelector } from '../../../utils/app/hook';

import ButtonSVG from '../../UI/Button/SVG/ButtonSVG';
import ProfileNav from '../Account/Profile/ProfileNav';
import NavLinksFull from './NavLinksFull';
import style from './style.module.css'
const NavCustom = () => {
    const router = useRouter()
    const user = useAppSelector(selectCurrentuser)
    const dispatch = useAppDispatch()
    const [ref, bounds] = useMeasure()
    return (
        <header ref={ref} className={style._nav__custom}>
            <nav className="w-full">
                <div className="flex gap-4 items-center">

                    <span>Adazolhub | Shop - My Account</span>
                </div>

                {bounds.width > 650 && <NavLinksFull />}
                <div className="flex gap-1 px-1 items-center py-1">
                    {user && (
                        <ButtonSVG onClick={() => router.push("/")}>
                            <HomeIcon />
                        </ButtonSVG>
                    )}
                    {bounds.width < 650 &&
                        <ButtonSVG onClick={() => dispatch(toggleState('side_bar'))}>
                            <MenuAlt3Icon />
                        </ButtonSVG>
                    }
                </div>
            </nav>
        </header>
    )
}

export default NavCustom
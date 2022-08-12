import { HomeIcon, MenuAlt3Icon, UserIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { UserAuth } from '../../../utils/context/Account/Auth';
import { ToggleState } from '../../../utils/context/Toggles/ToggleState';
import ButtonSVG from '../../UI/Button/SVG/ButtonSVG';
import ProfileNav from '../Account/Profile/ProfileNav';
import style from './style.module.css'
const NavCustom = () => {
    const router = useRouter()
    const { user } = UserAuth()
    const { toggleStateHandler } = ToggleState()
    return (
        <header className={style._nav__custom}>
            <nav className="w-full">
                <div className="flex gap-4 items-center">

                    {router.pathname === '/account' ?
                        <ProfileNav /> :
                        <>
                            <ButtonSVG onClick={() => router.back()}>

                                <ChevronLeftIcon />

                            </ButtonSVG>
                            <Link href={"/account"} className={style._logo}>
                                Account
                            </Link>
                        </>
                    }

                </div>

                {/* <NavLinks /> */}
                <div className="flex gap-1 ring-1 ring-white/20 rounded-full px-1 items-center py-1">
                    {user && (
                        <ButtonSVG onClick={() => router.push("/")}>
                            <HomeIcon />
                        </ButtonSVG>
                    )}
                    <ButtonSVG onClick={() => toggleStateHandler!("side_bar")}>
                        <MenuAlt3Icon />
                    </ButtonSVG>
                </div>
            </nav>
        </header>
    )
}

export default NavCustom
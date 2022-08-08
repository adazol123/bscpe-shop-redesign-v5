import { MenuAlt3Icon, UserIcon } from '@heroicons/react/outline';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { UserAuth } from '../../../utils/context/Account/Auth';
import { ToggleState } from '../../../utils/context/Toggles/ToggleState';
import ButtonSVG from '../../UI/Button/SVG/ButtonSVG';
import style from './style.module.css'
const NavCustom = () => {
    const router = useRouter()
    const { user } = UserAuth()
    const { toggleStateHandler } = ToggleState()
    return (
        <header className={style._nav__custom}>
            <nav className="w-full">
                <ButtonSVG onClick={() => router.back()}>
                    <ChevronLeftIcon />
                </ButtonSVG>
                <Link href={"/"} className={style._logo}>
                    Admin panel
                </Link>

                {/* <NavLinks /> */}
                <div className="flex gap-1 ring-1 ring-white/20 rounded-full px-1 items-center py-1">
                    {user && (
                        <ButtonSVG onClick={() => router.replace("/login")}>
                            <UserIcon />
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
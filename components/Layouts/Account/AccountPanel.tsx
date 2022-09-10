import { ChevronLeftIcon } from '@heroicons/react/outline'
import { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { NextPageWithLayout } from '../../../pages/_app'
import ButtonSVG from '../../UI/Button/SVG/ButtonSVG'
import ProfileNav from './Profile/ProfileNav'

type Props = {}

const AccountPanel: NextPageWithLayout = (props: React.PropsWithChildren) => {
    const router = useRouter()
    return (
        <div>
            <div className='bg-transparent from-marine-500 to-marine-700 relative inset-x-0 w-[calc(100%+3rem)] h-44 p-6 -mx-6'>
                {router.pathname === '/account' ?
                    <ProfileNav /> :
                    <>
                        <ButtonSVG onClick={() => router.back()}>

                            <ChevronLeftIcon />

                        </ButtonSVG>
                        <Link href={"/account"} >
                            Account
                        </Link>
                    </>
                }

            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

AccountPanel.getLayout = function getLayout(page: React.ReactNode) {

    return (
        <div>

        </div>

    )
}

export default AccountPanel
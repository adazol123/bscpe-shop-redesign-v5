import { MailIcon, MapIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ButtonLink from '../../components/UI/Button/Link/ButtonLink'
import ButtonStandard from '../../components/UI/Button/Standard/ButtonStandard'
import Input from '../../components/UI/Input/Input'
import TextInput from '../../components/UI/Input/TextInput'
import HorizontalDivider from '../../components/UI/Separator/HorizontalDivider'
import Box from '../../components/UI/Wrapper/Box'
import { UserAuth } from '../../utils/context/Account/Auth'
import BscpeLoader from '../../components/Layouts/Loader/BscpeLoader';
import type { NextPageWithLayout } from '../_app'
import ContextLayout from '../../layouts/context_layout'
import { useAppSelector } from '../../utils/app/hook'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../auth/firebase'

const Login: NextPageWithLayout = () => {
    // const { signinWithGoogle, user } = UserAuth()
    const user = useAppSelector(state => state.auth.user)

    const router = useRouter()
    if (user) {
        router.replace('/')
        return <BscpeLoader />
    }
    return (
        <section className='bg-white sm:bg-gradient-to-br from-theme-light to-marine-100'>
            <Head>
                <title>Adazolhub | Shop - Login</title>
            </Head>
            <div className=' mx-auto min-h-screen grid place-content-center md:min-w-[500px] gap-6'>

                <Box>
                    <div className='relative w-full px-5 h-16 pointer-events-none'>
                        <Image src={'/svg/adazolhub_shop_logo_desktop_colored.svg'} alt='adazolhub_shop_logo' layout='fill' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <ButtonStandard icon={<MailIcon />} type='button' onClick={() => router.push('/login/login-with-email')} > Continue with Email</ButtonStandard>
                        <HorizontalDivider />
                        <ButtonStandard styled='outline' onClick={async () => {
                            try {
                                await signInWithPopup(auth, new GoogleAuthProvider())
                                console.log('login via provider')
                            } catch (error: any) {
                                console.log(error.code)
                                return
                            }

                        }} >Continue with Google</ButtonStandard>
                    </div>

                    <div>
                        <ButtonLink size='small' onClick={() => router.replace('/signup')}  >
                            <>
                                Don&apos;t have an account yet?
                                <strong>Sign up</strong>
                            </>
                        </ButtonLink>
                    </div>
                </Box>

            </div>
        </section>
    )
}

// Login.getLayout = ContextLayout


export default Login
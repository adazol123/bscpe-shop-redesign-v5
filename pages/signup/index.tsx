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
import type { NextPageWithLayout } from '../_app'

import BscpeLoader from '../../components/Layouts/Loader/BscpeLoader';
import { useAppSelector } from '../../utils/app/hook'
import { selectCurrentuser } from '../../features/user/user-auth-slice'

const SignUp: NextPageWithLayout = () => {
    const router = useRouter()
    const user = useAppSelector(selectCurrentuser)
    if (user) {
        router.replace('/')
        return <BscpeLoader />
    }
    return (
        <section className='bg-white sm:bg-gradient-to-br from-theme-light to-marine-100'>
            <Head>
                <title>Adazolhub | Shop - Signup</title>
            </Head>
            <div className='mx-auto min-h-screen grid place-content-center md:min-w-[500px] gap-6'>

                <Box>
                    <div className='relative w-full px-5 h-16 pointer-events-none'>
                        <Image src={'/svg/adazolhub_shop_logo_desktop_colored.svg'} alt='adazolhub_shop_logo' layout='fill' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <ButtonStandard onClick={() => router.push('/signup/signup-with-email')} icon={<MailIcon />} type='button' > Continue with Email</ButtonStandard>
                        <HorizontalDivider />
                        <ButtonStandard styled='outline' >Continue with Google</ButtonStandard>
                        <div>
                            <p className='max-w-[200px] text-[0.65rem] text-theme-gray-500'>By clicking continue, you agree to our <strong className='text-theme-gray-700/70 underline underline-offset-2'>Terms and Conditions</strong> and <strong className='text-theme-gray-700/70 underline underline-offset-2'>Privacy Policy</strong></p>
                        </div>
                    </div>
                    {/*
                        <form className='flex flex-col gap-4'>
                            <TextInput type='email' placeholder='Email' />
                            <TextInput type='password' placeholder='Password' />
                        </form> */}
                    <div>
                        <ButtonLink size='small' onClick={() => router.replace('/login')} >
                            <>
                                Already have an account?
                                <strong>Login</strong>
                            </>
                        </ButtonLink>
                    </div>
                </Box>

            </div>
        </section>
    )
}

// SignUp.getLayout = ContextLayout
export default SignUp
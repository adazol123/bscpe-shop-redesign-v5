import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ButtonLink from '../../components/UI/Button/Link/ButtonLink'
import ButtonStandard from '../../components/UI/Button/Standard/ButtonStandard'
import TextInput from '../../components/UI/Input/TextInput'
import Box from '../../components/UI/Wrapper/Box'
import { useEffect } from 'react';
import type { NextPageWithLayout } from '../_app'
import { ArrowLeftIcon, ExclamationIcon, InformationCircleIcon } from '@heroicons/react/outline'
import InformationalError from '../../components/UI/Error/InformationalError'
import BscpeLoader from '../../components/Layouts/Loader/BscpeLoader'
import Center from '../../components/UI/Wrapper/Center'
import { useAppDispatch, useAppSelector } from '../../utils/app/hook'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../auth/firebase'
import { login, selectCurrentuser } from '../../features/user/user-auth-slice'

const LoginEmail: NextPageWithLayout = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectCurrentuser)

    const [loginDetails, setLoginDetails] = React.useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        isFilled: false,
    })

    let resetForm = (delay = 800) => {
        setTimeout(() => {
            setLoginDetails({ email: '', password: '', error: '', loading: false, isFilled: false })
        }, delay)
    }

    const formOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'email') {
            setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value.toLowerCase() })
        } else {
            setLoginDetails({ ...loginDetails, [event.target.name]: event.target.value })

        }
    }



    const formSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { email, password } = loginDetails;
        setLoginDetails({ ...loginDetails, loading: true })
        try {
            if (email && password) {

                let currentAuth = await signInWithEmailAndPassword(auth, email.trim(), password.trim())
                if (currentAuth.user) {
                    dispatch(login({
                        displayName: currentAuth.user.displayName,
                        email: currentAuth.user.email,


                    }))
                    resetForm()
                    router.replace('/?success=true')
                    console.clear()
                }
            }
        } catch (error: any) {
            if (error.code === 'auth/wrong-password') {
                setLoginDetails({
                    ...loginDetails,
                    password: '',
                    error: 'Password is incorrect. Please try again. If unable to remember password, you may reset your password'
                })
            } else if (error.code === 'auth/too-many-requests') {
                setLoginDetails({
                    ...loginDetails,
                    error: 'Error communicating to our server. Please try again later.'
                })
            } else {
                setLoginDetails({
                    ...loginDetails,
                    email: '',
                    password: '',
                    error: error.code
                })

            }

        }


    }

    useEffect(() => {
        if (loginDetails.email && loginDetails.password) setLoginDetails({ ...loginDetails, error: '', isFilled: true })
        else setLoginDetails({ ...loginDetails, isFilled: false })
    }, [loginDetails.email, loginDetails.password])


    if (user) {
        console.log('auth user >', user)
        router.replace('/')
        return <BscpeLoader />
    }
    return (
        <section className='bg-white sm:bg-gradient-to-br from-theme-light to-marine-100'>
            <Head>
                <title>Adazolhub | Shop - Login</title>
            </Head>
            <Center>
                <Box>
                    <div className='relative w-full px-5 h-16 pointer-events-none'>
                        <Image src={'/svg/adazolhub_shop_logo_desktop_colored.svg'} alt='adazolhub_shop_logo' layout='fill' />
                    </div>

                    <form onSubmit={formSubmit} className='flex flex-col gap-8 relative'>

                        <div className='flex flex-col gap-3'>
                            {loginDetails.error && <InformationalError error={loginDetails.error} />}

                            <TextInput type='email' value={loginDetails.email} name='email' placeholder='Email' onChange={formOnChange} />

                            <TextInput type='password' value={loginDetails.password} name='password' placeholder='Password' onChange={formOnChange} />
                        </div>
                        <div className='flex flex-col gap-6'>

                            <ButtonStandard disabled={!loginDetails.isFilled} >{loginDetails.loading ? 'Logging in...' : "Login"}</ButtonStandard>

                            <ButtonLink type='button' icon={<ArrowLeftIcon className='w-4 h-4' />} onClick={() => router.back()} underline_style='expanded' >Other login options</ButtonLink>
                        </div>
                    </form>
                    <div>
                        <ButtonLink size='small' onClick={() => router.replace('/signup')} >
                            <>
                                Don&apos;t have an account yet?
                                <strong>Sign up</strong>
                            </>
                        </ButtonLink>
                    </div>
                </Box>
            </Center>
        </section>
    )
}

//wrapping the page layout with contextlayout (global states)
// LoginEmail.getLayout = ContextLayout

export default LoginEmail
import React from 'react'
import SignupLayout from './../../components/Signup/SignupLayout';
import type { NextPageWithLayout } from '../_app';
import StepForm from '../../components/Signup/Stepper/StepForm';
import Box from '../../components/UI/Wrapper/Box';
import Head from 'next/head';
import BscpeLoader from '../../components/Layouts/Loader/BscpeLoader';
import { useRouter } from 'next/router';
import RootLayout from '../../layouts/layout';


const SignupEmail: NextPageWithLayout = () => {
    const router = useRouter()

    return (
        <StepForm />
    )
}

SignupEmail.getLayout = (page) =>

    <React.Fragment>
        <Head>
            <title>Adazolhub | Shop - Signup</title>
        </Head>
        <RootLayout>

            <section className='bg-white sm:bg-gradient-to-br from-theme-light to-marine-100'>
                <SignupLayout>
                    {page}
                </SignupLayout>
            </section>
        </RootLayout>
    </React.Fragment>



export default SignupEmail
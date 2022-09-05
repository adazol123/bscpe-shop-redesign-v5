import React from 'react'
import SignupLayout from './../../components/Signup/SignupLayout';
import type { NextPageWithLayout } from '../_app';
import StepForm from '../../components/Signup/Stepper/StepForm';
import Box from '../../components/UI/Wrapper/Box';
import Head from 'next/head';
import BscpeLoader from '../../components/Layouts/Loader/BscpeLoader';
import { useRouter } from 'next/router';


const SignupEmail: NextPageWithLayout = () => {
    const router = useRouter()

    return (
        <StepForm />
    )
}

SignupEmail.getLayout = (page) =>

    <section className='bg-white sm:bg-gradient-to-br from-theme-light to-marine-100'>
        <Head>
            <title>Adazolhub | Shop - Signup</title>
        </Head>
        <SignupLayout>
            {page}
        </SignupLayout>
    </section>



export default SignupEmail
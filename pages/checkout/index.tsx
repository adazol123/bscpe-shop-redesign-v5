import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import CheckoutPanel from '../../components/Layouts/Checkout/CheckoutPanel'
import { HomeLayout } from '../../layouts/pages'
import { NextPageWithLayout } from '../_app'

const Checkout: NextPageWithLayout = () => {


    return (
        <section

            className='container mx-auto '>
            <Head>
                <title>Checkout - Adazolhub | Shop</title>
            </Head>
            <CheckoutPanel />
        </section>
    )
}


Checkout.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <>
            <HomeLayout>
                <>{page}</>
            </HomeLayout>
        </>
    );
};

export default Checkout
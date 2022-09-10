import React from 'react'
import PaymentPanel from '../../components/Layouts/Checkout/Payment/PaymentPanel';
import { HomeLayout } from '../../layouts/pages';
import { NextPageWithLayout } from '../_app';

type Props = {}

const Payment: NextPageWithLayout = (props: Props) => {
    return (
        <section className='container mx-auto'>
            <PaymentPanel />
        </section>
    )
}

Payment.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <>
            <HomeLayout>
                <>{page}</>
            </HomeLayout>
        </>
    );
};

export default Payment
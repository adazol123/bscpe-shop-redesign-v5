import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import AccountPanel from '../../components/Layouts/Account/AccountPanel'
import BscpeLoader from '../../components/Layouts/Loader/BscpeLoader'
import { selectCurrentuser } from '../../features/user/user-auth-slice'
import AccountLayout from '../../layouts/pages/account_layout'
import { useAppSelector } from '../../utils/app/hook'
import { NextPageWithLayout } from '../_app'

const Account: NextPageWithLayout = () => {
    const user = useAppSelector(selectCurrentuser)
    const router = useRouter()
    if (!user) {
        router.push('/login')
        return <BscpeLoader />
    } else {
        return (
            <section className='container mx-auto'>
                <AccountPanel />
            </section>
        )
    }
}

Account.getLayout = function getLayout(page: React.ReactNode) {
    return (<AccountLayout>
        {page}
    </AccountLayout>)

}


export default Account
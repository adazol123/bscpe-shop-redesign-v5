import React from 'react'
import BscpeLoader from '../components/Layouts/Loader/BscpeLoader';
import { AccountStateProvider } from '../utils/context/Account/AccountState'
import { AuthProvider } from '../utils/context/Account/Auth';
import { ProductProvider } from '../utils/context/Product/ProductState';
import { ShopStateProvider } from '../utils/context/Shop/ShopState';
import { ToggleStateProvider } from '../utils/context/Toggles/ToggleState'

const ContextLayout = (page: React.ReactElement) => {
    return (
        <React.Suspense fallback={<BscpeLoader />}>
            <AccountStateProvider>
                <AuthProvider>
                    <ProductProvider>
                        <ShopStateProvider>
                            <ToggleStateProvider>
                                <>{page}</>
                            </ToggleStateProvider>
                        </ShopStateProvider>
                    </ProductProvider>
                </AuthProvider>
            </AccountStateProvider>
        </React.Suspense>
    );
};




export default ContextLayout

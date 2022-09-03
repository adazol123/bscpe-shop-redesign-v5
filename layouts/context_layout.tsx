import React from 'react'
import BscpeLoader from '../components/Layouts/Loader/BscpeLoader';
import { AccountStateProvider } from '../utils/context/Account/AccountState'
import { AuthProvider } from '../utils/context/Account/Auth';
import { ProductProvider } from '../utils/context/Product/ProductState';
import { ShopStateProvider } from '../utils/context/Shop/ShopState';
import { ToggleStateProvider } from '../utils/context/Toggles/ToggleState'
import { Provider } from 'react-redux';
import { store } from '../utils/app/store';
import StateLayoutWrapper from './state_layout_wrapper';

const ContextLayout = (page: React.ReactElement) => {
    return (
        <StateLayoutWrapper>
            <React.Suspense fallback={<BscpeLoader />}>

                <>{page}</>

            </React.Suspense>
        </StateLayoutWrapper>
    );
};




export default ContextLayout

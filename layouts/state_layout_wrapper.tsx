import React from 'react'
import { Provider } from 'react-redux';
import { store } from '../utils/app/store';
import { AuthProvider } from '../utils/context/Account/Auth';

const StateLayoutWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Provider store={store}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </Provider>
    )
}

export default StateLayoutWrapper
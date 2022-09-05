import { FC, Fragment, PropsWithChildren } from "react";
import { Provider } from 'react-redux';
import { updatePrice } from "../features/cart/cart-slice";
import { fetchProducts } from "../features/shop/product-slice";
import { fetchUser } from "../features/user/user-auth-slice";
import { useAppDispatch, useAppSelector } from "../utils/app/hook";
import { store } from "../utils/app/store";
import { useFirebaseFetcher } from "../utils/hooks/useFirebaseFetcher";

/**
 * Root global store state
 * @param props 
 * @returns 
 */
const ObserverLayout: FC<PropsWithChildren> = (props) => {

    let userStatus = useAppSelector(state => state.auth.status)
    let productStatus = useAppSelector(state => state.shop.status)
    useFirebaseFetcher(userStatus, fetchUser())
    useFirebaseFetcher(productStatus, fetchProducts())
    const dispatch = useAppDispatch()
    
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default ObserverLayout
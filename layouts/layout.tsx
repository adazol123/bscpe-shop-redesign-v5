import { PropsWithChildren } from "react";
import { Provider } from 'react-redux';
import { store } from "../utils/app/store";
import ObserverLayout from "./layout_observer";

/**
 * Root global store state
 * @param props 
 * @returns 
 */
const RootLayout: React.FC<PropsWithChildren> = (props) => {
    return (
        <Provider store={store}>
            <ObserverLayout>
                {props.children}
            </ObserverLayout>
        </Provider>
    )
}

export default RootLayout
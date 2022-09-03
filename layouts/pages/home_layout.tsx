
import Nav from "../../components/Layouts/Nav/Nav";
import Overlay from "../../components/Overlay/Overlay";
import ContextLayout from "../context_layout";
import { Provider } from 'react-redux';
import { store } from "../../utils/app/store";
import StateLayoutWrapper from "../state_layout_wrapper";


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (

        <>
            <Nav />
            <>{children}</>
            {
                /** OVERLAY --> popups/modal */
                <Overlay />
            }
        </>
    );
}

export default HomeLayout
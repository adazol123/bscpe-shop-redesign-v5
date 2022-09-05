import Nav from "../../components/Layouts/Nav/Nav";
import Overlay from "../../components/Overlay/Overlay";
import { Provider } from 'react-redux';
import { store } from "../../utils/app/store";
import RootLayout from "../layout";
import NavProduct from "../../components/Layouts/Nav/NavProduct";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (

        <RootLayout>
            <NavProduct />
            <>{children}</>
            {/** OVERLAY --> popups/modal */}
            <Overlay />
        </RootLayout>
    );
}

export default ProductLayout
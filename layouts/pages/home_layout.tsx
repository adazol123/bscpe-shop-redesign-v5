import LayoutContext from "../../components/Layouts/layout-context";
import Nav from "../../components/Layouts/Nav/Nav";
import Overlay from "../../components/Overlay/Overlay";
import ContextLayout from "../context_layout";


const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LayoutContext>
            <Nav />
            <>{children}</>
            {
                /** OVERLAY --> popups/modal */
                <Overlay />
            }
        </LayoutContext>
    );
}

export default HomeLayout
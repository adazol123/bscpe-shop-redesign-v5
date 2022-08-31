import LayoutContext from "../../components/Layouts/layout-context";
import NavCustom from "../../components/Layouts/Nav/NavCustom";
import Overlay from "../../components/Overlay/Overlay";


export default function AccountLayout({ children }: { children: React.ReactNode }) {


    return (
        <LayoutContext>
            <NavCustom />
            <>{children}</>
            {
                /** OVERLAY --> popups/modal */
                <Overlay />
            }
        </LayoutContext>
    )
}
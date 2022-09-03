
import NavCustom from "../../components/Layouts/Nav/NavCustom";
import Overlay from "../../components/Overlay/Overlay";
import StateLayoutWrapper from "../state_layout_wrapper";


export default function AccountLayout({ children }: { children: React.ReactNode }) {


    return (
        <StateLayoutWrapper>
            <NavCustom />
            <>{children}</>
            {
                /** OVERLAY --> popups/modal */
                <Overlay />
            }
        </StateLayoutWrapper>
    )
}
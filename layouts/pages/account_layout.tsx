
import NavCustom from "../../components/Layouts/Nav/NavCustom";
import Overlay from "../../components/Overlay/Overlay";
import RootLayout from "../layout";


export default function AccountLayout({ children }: { children: React.ReactNode }) {


    return (
        <RootLayout>
            <NavCustom />
            <>{children}</>
            {
                /** OVERLAY --> popups/modal */
                <Overlay />
            }
        </RootLayout>
    )
}
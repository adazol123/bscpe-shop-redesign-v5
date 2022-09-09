
import Nav from "../../components/Layouts/Nav/Nav";
import Overlay from "../../components/Overlay/Overlay";
import { Provider } from 'react-redux';
import { store } from "../../utils/app/store";
import RootLayout from "../layout";
import { useRouter } from "next/router";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    return (

        <RootLayout>
            {!router.query.completed &&
                <Nav />
            }
            <>{children}</>
            {
                /** OVERLAY --> popups/modal */
                <Overlay />
            }
        </RootLayout>
    );
}

export default HomeLayout
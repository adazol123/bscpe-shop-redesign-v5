import { NextPageWithLayout } from "./_app";
import { NextPage } from 'next';
import Image from "next/image";
import Link from "next/link";
import ButtonStandard from "../components/UI/Button/Standard/ButtonStandard";
import { CodeIcon } from "@heroicons/react/outline";
import ButtonLink from "../components/UI/Button/Link/ButtonLink";
import { HomeLayout } from "../layouts/pages";


const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const Home: NextPageWithLayout = () => {
    return (
        <>
            <header className="flex items-center px-6 shadow-sm">
                <div className="container flex items-center justify-between mx-auto">
                    <div className="">
                        {/* <Image src={'/svg/adazolhub_shop_logo_mobile.svg'} alt='adazolhub_shop_logo' height={32} width={32} /> */}
                        <span>

                            Adazolhub | Shop
                        </span>
                    </div>
                    <nav className="flex gap-4">
                        <Link href={'/'} >Cart</Link>
                        <Link href={'/'} >Notification</Link>
                        <Link href={'/login'} >Login</Link>
                    </nav>
                </div>
            </header>
            <section> <div className="container py-6 mx-auto my-6">
                <div className="p-6 bg-white shadow">
                    Home
                </div>

            </div>
            </section>
        </>
    )
};

Home.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <HomeLayout>
            <>{page}</>
        </HomeLayout>
    );
};

export default Home;

import { NextPageWithLayout } from "./_app";
import { NextPage } from 'next';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ButtonStandard from "../components/UI/Button/Standard/ButtonStandard";
import { CodeIcon } from "@heroicons/react/outline";
import ButtonLink from "../components/UI/Button/Link/ButtonLink";
import { HomeLayout } from "../layouts/pages";
import { useRouter } from "next/router";
import Completed from "../components/Signup/Completed";
import CardCategory from "../components/UI/Cards/CardCategory";
import ProductListGrid from "../components/Layouts/Products/ProductListGrid";
import NewArrival from './../components/Layouts/Products/NewArrival';


const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const Home: NextPageWithLayout = () => {
    const router = useRouter()
    console.log(router.query)
    if (router.query?.success) {
        return <Completed />
    }
    else {
        return (
            <>
                <Head>
                    <title>Adazolhub | Shop - Completed</title>
                </Head>

                <section className='container mx-auto'>
                    <h1>Explore Brands</h1>
                    <p className="text-sm max-w-[30ch]">Explore authentic brands right at your fingertips</p>

                    <div className='flex flex-col gap-6 my-10 md:flex-row md:sticky md:top-[62]'>
                        <div className='w-full md:w-fit'>
                            <h4>Categories</h4>
                            <div className='w-full overflow-hidden overflow-x-auto'>
                                <div className="flex flex-row gap-4 py-4 md:flex-col w-fit">
                                    <CardCategory />
                                    <CardCategory />
                                    <CardCategory />
                                </div>
                            </div>
                            <div className='hidden -mx-6 md:block'>
                                <NewArrival />
                            </div>
                        </div>

                        <div className='flex-1 my-8 -mx-6 md:my-0'>
                            <ProductListGrid />
                        </div>

                    </div>
                    <div className='block -mx-6 md:hidden'>
                        <NewArrival />
                    </div>
                </section>
            </>
        )
    }
};

Home.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <HomeLayout>
            <>{page}</>
        </HomeLayout>
    );
};

export default Home;

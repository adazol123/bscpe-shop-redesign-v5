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
import { useAppDispatch, useAppSelector } from "../utils/app/hook";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";
import { login, logout, selectCurrentuser } from "../features/user/user-auth-slice";
import React from "react";
import { toggleState } from "../features/toggle/toggle-state-slice";

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const Home: NextPageWithLayout = () => {
    const router = useRouter()
    const user = useAppSelector(selectCurrentuser)


    console.log(router.query)
    if (router.query?.success) {
        return <Completed />
    }

    else {
        if (user) {
            console.log(user)
        }
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
                                    <CardCategory
                                        img_source="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                        label="Men"
                                    />
                                    <CardCategory
                                        img_source="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                        label="Women"
                                    />
                                    <CardCategory
                                        img_source="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
                                        label="Kids"
                                    />
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
        <>
            <HomeLayout>
                <>{page}</>
            </HomeLayout>
        </>
    );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { auth } from "../auth/firebase";
import { ReactElement, Suspense, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import useSWR from "swr";

import type { NextPageWithLayout } from "./_app";
import Layout from "../components/Layouts/layout";
import NestedLayout from "../components/Layouts/layout-context";
import HomeContent from "../components/Layouts/Home/HomeContent";
import ProductContext from "../components/Layouts/Home/ProductContext";
import ProductListGrid from "../components/Layouts/Products/ProductListGrid";
import BscpeLoader from "../components/Layouts/Loader/BscpeLoader";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import CategoryTabs from "../components/Layouts/Tabs/CategoryTabs";
// import Completed from "../components/Signup/Completed";

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const Home: NextPageWithLayout = () => {
  const { data, error } = useSWR("/api/products", fetcher);
  const router = useRouter()


  /**
   * Success page for user registered for the first time
   */
  if (router.query && router.query.success === 'true') {
    const Completed = dynamic(() => import('../components/Signup/Completed'), {
      suspense: true
    })
    return (
      <Suspense fallback={<BscpeLoader />}>
        <Completed />
      </Suspense>)
  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <BscpeLoader />;
  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Adazolhub Shop</title>
        <meta name="description" content="Redesign version of bscpe store web app" />
      </Head>

      {/* <main>
        <div
          className={`relative h-screen   bg-gradient-to-t from-white to-white/30`}
        >
          <Image
            src="https://images.unsplash.com/photo-1657928196334-26146c4e5702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="girl-texting-on-hod"
            className="object-cover w-full h-full mix-blend-multiply"
            layout="fill"
          />
          <HomeContent />
        </div>
        <section id="product" className="container mx-auto scroll-py-10 flex flex-col lg:flex-row">
          <div>

            <div className="mx-6 mt-4 text-xs bg-gradient-to-br  from-neutral-700 to-black rounded-md text-white grid place-content-center h-14">
              Ads space
            </div>
            <ProductContext />
          </div>
          <div className="flex-1">

            <CategoryTabs />
            <ProductListGrid />
          </div>
        </section>
      </main> */}


    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};

export default Home;

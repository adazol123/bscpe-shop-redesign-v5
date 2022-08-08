import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { auth } from "../auth/firebase";
import { ReactElement, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import useSWR from "swr";

import type { NextPageWithLayout } from "./_app";
import Layout from "../components/Layouts/layout";
import NestedLayout from "../components/Layouts/layout-context";
import HomeContent from "../components/Layouts/Home/HomeContent";
import ProductContext from "../components/Layouts/Home/ProductContext";
import ProductListGrid from "../components/Layouts/Products/ProductListGrid";
import BscpeLoader from "../components/Layouts/Loader/BscpeLoader";

const fetcher = (...args: [string]) => fetch(...args).then((res) => res.json());

const Home: NextPageWithLayout = () => {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <BscpeLoader />;
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Bscpe store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          className={`relative h-screen   bg-gradient-to-t from-black to-black/30`}
        >
          <Image
            src="https://images.unsplash.com/photo-1657928196334-26146c4e5702?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="girl-texting-on-hod"
            className="object-cover w-full h-full mix-blend-multiply"
            layout="fill"
          />
          <HomeContent />
        </div>
        <section id="product" className="scroll-py-10">
          <div className="mx-4 mt-4 text-xs bg-gradient-to-br  from-neutral-700 to-black rounded-md text-white grid place-content-center h-14">
            Ads space
          </div>
          <ProductContext />
          <ProductListGrid />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
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

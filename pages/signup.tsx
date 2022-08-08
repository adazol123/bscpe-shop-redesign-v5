import Head from "next/head";
import React, { ReactElement } from "react";
import Layout from "../components/Layouts/layout";
import SignupLayout from "../components/Signup/SignupLayout";
import StepForm from "../components/Signup/Stepper/StepForm";

const Signup = () => {
  return <>
    <Head>
      <title>Signup | Bscpe store</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <StepForm />
  </>;
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SignupLayout>
        {page}
        {/* <NestedLayout>{page}</NestedLayout> */}
      </SignupLayout>
    </Layout>
  );
};

export default Signup;
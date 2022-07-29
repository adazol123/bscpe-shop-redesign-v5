import React, { ReactElement } from "react";
import Layout from "../components/Layouts/layout";
import SignupLayout from "../components/Signup/SignupLayout";
import StepForm from "../components/Signup/Stepper/StepForm";

const Signup = () => {
  return <StepForm />;
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

import React, { ReactElement } from "react";
import CheckoutPanel from "../../components/Layouts/Checkout/CheckoutPanel";
import Layout from "../../components/Layouts/layout";

const Checkout = () => {
  return (<section>
    <CheckoutPanel />
        </section>);
};

Checkout.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};

export default Checkout;

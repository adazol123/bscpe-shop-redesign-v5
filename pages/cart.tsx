import React, { ReactElement } from "react";
import { auth } from "../auth/firebase";
import Layout from "../components/Layouts/layout";
import NestedLayout from "../components/Layouts/layout-context";
import AccountState from "../utils/context/Account/AccountState";
import { UserAuth } from "../utils/context/Account/Auth";

const Cart = () => {
  const { user } = UserAuth();
  console.log(user);
  return <div>cartss</div>;
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
      {/* <NestedLayout>{page}</NestedLayout> */}
    </Layout>
  );
};

export default Cart;

import React, { ReactElement } from "react";
import AccountLayout from "../../components/Layouts/Account/account-layout";
import Settings from "../../components/Layouts/Account/settings";
import Layout from "../../components/Layouts/layout";

const Account = () => {
  return <div>account</div>;
};

Account.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AccountLayout>
        <Settings>{page}</Settings>
      </AccountLayout>
    </Layout>
  );
};

export default Account;

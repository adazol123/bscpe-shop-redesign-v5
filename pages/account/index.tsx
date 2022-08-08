import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import AccountLayout from "../../components/Layouts/Account/account-layout";
import Settings from "../../components/Layouts/Account/settings";
import Layout from "../../components/Layouts/layout";
import LayoutAccount from "../../components/Layouts/layout-account";
import BscpeLoader from "../../components/Layouts/Loader/BscpeLoader";
import { UserAuth } from "../../utils/context/Account/Auth";

const Account = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = UserAuth();
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading]);
  if (isLoading || !isAuthenticated) return <BscpeLoader />;
  return <div>account</div>;
};

Account.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAccount>
      <>{page}</>

    </LayoutAccount>
  );
};



export default Account;

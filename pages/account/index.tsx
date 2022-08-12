import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import AccountLayout from "../../components/Layouts/Account/account-layout";
import ImageCropper from "../../components/Layouts/Account/Admin/ImageCropper";
import ProfileNav from "../../components/Layouts/Account/Profile/ProfileNav";
import Settings from "../../components/Layouts/Account/settings";
import Layout from "../../components/Layouts/layout";
import LayoutAccount from "../../components/Layouts/layout-account";
import BscpeLoader from "../../components/Layouts/Loader/BscpeLoader";
import { UserAuth } from "../../utils/context/Account/Auth";

const Account = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = UserAuth();

  return <div className="mx-6">

    <div className="bg-gradient-to-br from-neutral-600 to-black h-36 w-full rounded-md" />

  </div>;
};

Account.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAccount>
      <>{page}</>
    </LayoutAccount>
  );
};



export default Account;

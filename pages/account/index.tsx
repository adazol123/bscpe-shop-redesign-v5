import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import AccountLayout from "../../components/Layouts/Account/account-layout";
import ImageCropper from "../../components/Layouts/Account/Admin/ImageCropper";
import ProfileNav from "../../components/Layouts/Account/Profile/ProfileNav";
import SettingsLayout from "../../components/Layouts/Account/Profile/Settings/SettingsLayout";
import Settings from "../../components/Layouts/Account/settings";
import Layout from "../../components/Layouts/layout";
import LayoutAccount from "../../components/Layouts/layout-account";
import BscpeLoader from "../../components/Layouts/Loader/BscpeLoader";
import AccountSettingsLayout from "../../layouts/account__settings__layout";
import { UserAuth } from "../../utils/context/Account/Auth";

const Account = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = UserAuth();

  return <div className="container mx-auto">
    <Head>
      <title>Account | Bscpe store</title>
    </Head>

    <div className="bg-gradient-to-br mx-4 from-neutral-600 to-black h-36 w-[calc(100%-2rem)] rounded-md" />
    <SettingsLayout />
    {children}
  </div>;
};

Account.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAccount>
      <AccountSettingsLayout>

        <>{page}</>
      </AccountSettingsLayout>
    </LayoutAccount>
  );
};



export default Account;

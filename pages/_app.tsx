import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Layouts/Nav/Nav";
import { AccountStateProvider } from "../utils/context/Account/AccountState";
import { AuthProvider } from "../utils/context/Account/Auth";
import { ReactElement, ReactNode, Suspense } from "react";
import Overlay from "../components/Overlay/Overlay";
import { ToggleStateProvider } from "../utils/context/Toggles/ToggleState";
import { NextPage } from "next";
import Layout from "../components/Layouts/layout";

export type NextPageWithLayout = NextPage & {
  
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  /** Used LAYOUT for nested layout components */
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
// const Layout = ({ Component, pageProps }: AppPropsWithLayout) => {
//   if (Component.getLayout) {
//     return Component.getLayout(<Component {...pageProps} />);
//   } else {
//     return <Component {...pageProps} />;
//   }
// };

export default MyApp;

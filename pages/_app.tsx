import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Layouts/Nav/Nav";
import { AccountStateProvider } from "../utils/context/Account/AccountState";
import { AuthProvider } from "../utils/context/Account/Auth";
import { ReactElement, ReactNode, Suspense } from "react";
import Overlay from "../components/Overlay/Overlay";
import { ToggleStateProvider } from "../utils/context/Toggles/ToggleState";
import { NextPage } from "next";
import { Provider } from 'react-redux';
import { store } from "../utils/app/store";
import StateLayoutWrapper from "../layouts/state_layout_wrapper";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  /** Used `Layout` for nested layout components */
  // const getLayout = Component.getLayout ?? ((page) => page);

  // if (Component.getLayout) {
  //   return getLayout(
  //     <StateLayoutWrapper>
  //       <Component {...pageProps} />
  //     </StateLayoutWrapper>

  //   );
  // } else {
  //   return (
  //     <StateLayoutWrapper>
  //       <Component {...pageProps} />
  //     </StateLayoutWrapper>
  //   );
  // }
  return (
    <StateLayoutWrapper>
      <Nav />
      <Component {...pageProps} />
      <Overlay />
    </StateLayoutWrapper>
  );
}


export default MyApp;

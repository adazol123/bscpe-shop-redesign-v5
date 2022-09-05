import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, Suspense } from "react";
import { NextPage } from "next";
import RootLayout from "../layouts/layout";
import { AnimatePresence } from "framer-motion";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  if (Component.getLayout) {
    return getLayout(
      <AnimatePresence exitBeforeEnter>

        <Component {...pageProps} />
      </AnimatePresence>
    )
  } else {
    return (
      <AnimatePresence exitBeforeEnter>

        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </AnimatePresence>
    )
  }
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Layouts/Nav/Nav";
import { AccountStateProvider } from "../utils/context/Account/AccountState";
import { AuthProvider } from "../utils/context/Account/Auth";
import { Suspense } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AccountStateProvider>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
          <Component {...pageProps} />
        </Suspense>
      </AuthProvider>
    </AccountStateProvider>
  );
}

export default MyApp;

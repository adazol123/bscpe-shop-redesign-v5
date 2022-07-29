import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Layouts/Nav/Nav";
import { AccountStateProvider } from "../utils/context/Account/AccountState";
import { AuthProvider } from "../utils/context/Account/Auth";
import { Suspense } from "react";
import Overlay from "../components/Overlay/Overlay";
import { ToggleStateProvider } from "../utils/context/Toggles/ToggleState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountStateProvider>
        <AuthProvider>
          <ToggleStateProvider>
            <Nav />
            <Component {...pageProps} />
            {
              /** OVERLAY --> popups/modal */
              <Overlay />
            }
          </ToggleStateProvider>
        </AuthProvider>
      </AccountStateProvider>
    </Suspense>
  );
}

export default MyApp;

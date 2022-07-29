import Nav from "./Nav/Nav";
import Account from "./../../pages/account/index";
import { Suspense } from "react";
import { AccountStateProvider } from "../../utils/context/Account/AccountState";
import { AuthProvider } from "../../utils/context/Account/Auth";
import { ToggleStateProvider } from "../../utils/context/Toggles/ToggleState";
import Overlay from "../Overlay/Overlay";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountStateProvider>
        <AuthProvider>
          <ToggleStateProvider>
            <Nav />
            <section>{children}</section>
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

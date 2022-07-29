import Nav from "./Nav/Nav";
import Account from "./../../pages/account/index";
import { Suspense } from "react";
import { AccountStateProvider } from "../../utils/context/Account/AccountState";
import { AuthProvider } from "../../utils/context/Account/Auth";
import { ToggleStateProvider } from "../../utils/context/Toggles/ToggleState";
import Overlay from "../Overlay/Overlay";
import { ProductProvider } from "../../utils/context/Product/ProductState";
import { ShopStateProvider } from "../../utils/context/Shop/ShopState";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AccountStateProvider>
        <AuthProvider>
          <ProductProvider>
            <ShopStateProvider>
              <ToggleStateProvider>
                <Nav />
                <>{children}</>
                {
                  /** OVERLAY --> popups/modal */
                  <Overlay />
                }
              </ToggleStateProvider>
            </ShopStateProvider>
          </ProductProvider>
        </AuthProvider>
      </AccountStateProvider>
    </Suspense>
  );
}

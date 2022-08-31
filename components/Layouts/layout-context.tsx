import Nav from "./Nav/Nav";
import { Suspense } from "react";
import { AccountStateProvider } from "../../utils/context/Account/AccountState";
import { AuthProvider } from "../../utils/context/Account/Auth";
import { ToggleStateProvider } from "../../utils/context/Toggles/ToggleState";

import { ProductProvider } from "../../utils/context/Product/ProductState";
import { ShopStateProvider } from "../../utils/context/Shop/ShopState";
import BscpeLoader from "./Loader/BscpeLoader";

export default function LayoutContext({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<BscpeLoader />}>
      <AccountStateProvider>
        <AuthProvider>
          <ProductProvider>
            <ShopStateProvider>
              <ToggleStateProvider>
                <>{children}</>
              </ToggleStateProvider>
            </ShopStateProvider>
          </ProductProvider>
        </AuthProvider>
      </AccountStateProvider>
    </Suspense>
  );
}
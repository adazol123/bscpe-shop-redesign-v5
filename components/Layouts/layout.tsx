import Nav from "./Nav/Nav";
import { ReactElement, Suspense } from "react";
import { AccountStateProvider } from "../../utils/context/Account/AccountState";
import { AuthProvider } from "../../utils/context/Account/Auth";
import { ToggleStateProvider } from "../../utils/context/Toggles/ToggleState";
import Overlay from "../Overlay/Overlay";
import { ProductProvider } from "../../utils/context/Product/ProductState";
import { ShopStateProvider } from "../../utils/context/Shop/ShopState";
import BscpeLoader from "./Loader/BscpeLoader";
import LayoutContext from "./layout-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutContext>
      <Nav />
      <>{children}</>
      {
        /** OVERLAY --> popups/modal */
        <Overlay />
      }
    </LayoutContext>
  );
}


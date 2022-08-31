import Nav from "./Nav/Nav";
import { ReactElement, Suspense } from "react";
import { AccountStateProvider } from "../../utils/context/Account/AccountState";
import { AuthProvider } from "../../utils/context/Account/Auth";
import { ToggleStateProvider } from "../../utils/context/Toggles/ToggleState";
import Overlay from "../Overlay/Overlay";
import { ProductProvider } from "../../utils/context/Product/ProductState";
import { ShopStateProvider } from "../../utils/context/Shop/ShopState";
import LayoutContext from "./layout-context";
import NavCustom from "./Nav/NavCustom";

export default function LayoutAccount({ children }: { children: React.ReactNode }) {

  
  return (
    <LayoutContext>
      <NavCustom />
      <>{children}</>
      {
        /** OVERLAY --> popups/modal */
        <Overlay />
      }
    </LayoutContext>
  )
}



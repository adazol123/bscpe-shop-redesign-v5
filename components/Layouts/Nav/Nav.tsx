import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import style from "./style.module.css";
import { MenuAlt3Icon, UserIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { UserAuth } from "../../../utils/context/Account/Auth";
import { useRouter } from "next/router";
import ButtonSVG from "../../UI/Button/SVG/ButtonSVG";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import ShopState from "../../../utils/context/Shop/ShopState";

function CartItemIndicator() {
  const { carts, totalQuantity } = ShopState();
  return (
    <>
      {carts.length > 0 && (
        <>
          <span className="animate-ping absolute top-0 right-0 inline-flex h-3 w-3 rounded-full bg-rose-400 opacity-75">
            {" "}
          </span>
          <span className="w-fit px-1 h-3 bg-rose-600  rounded-full absolute top-0 right-0 ring-2 ring-black text-[0.5rem] text-center">
            {totalQuantity > 9 ? "9+" : totalQuantity}
          </span>
        </>
      )}
    </>
  );
}

const Nav = () => {
  const { user } = UserAuth();
  let router = useRouter();
  const { toggleStateHandler } = ToggleState();
  const { carts } = ShopState();
  return (
    <header className={style._nav}>
      <nav className="w-full">
        <Link href={"/"} className={style._logo}>
          BSCPE Store
        </Link>

        {/* <NavLinks /> */}
        <div className="flex gap-3 items-center">
          <ButtonSVG
            onClick={() => {
              toggleStateHandler!("cart");
            }}
          >
            <>
              <CartItemIndicator />
              <ShoppingBagIcon />
            </>
          </ButtonSVG>
          <div className="flex gap-1 ring-1 ring-white/20 rounded-full px-1 items-center py-1">
            {user && (
              <ButtonSVG onClick={() => router.replace("/login")}>
                <UserIcon />
              </ButtonSVG>
            )}
            <ButtonSVG onClick={() => toggleStateHandler!("side_bar")}>
              <MenuAlt3Icon />
            </ButtonSVG>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import style from "./style.module.css";
import { MenuAlt3Icon, UserIcon, ViewGridIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { UserAuth } from "../../../utils/context/Account/Auth";
import { useRouter } from "next/router";
import ButtonSVG from "../../UI/Button/SVG/ButtonSVG";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import ShopState from "../../../utils/context/Shop/ShopState";
import useMeasure from "react-use-measure";
import NavLinksFull from "./NavLinksFull";
import Image from "next/image";

function CartItemIndicator() {
  const { carts, totalQuantity } = ShopState();
  return (
    <>
      {carts.length > 0 && (
        <>
          <span className="absolute top-0 right-0 inline-flex w-3 h-3 rounded-full opacity-75 animate-ping bg-rose-400/40">
            {" "}
          </span>
          <span className="w-fit px-1 h-3 bg-rose-600  rounded-full absolute top-0 right-0 ring-4 ring-black text-[0.5rem] text-center">
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
  const [ref, bounds] = useMeasure()
  return (
    <header ref={ref} className={style._nav}>
      <nav className="w-full">
        <Link href={"/"} className={style._logo}>
          <Image src='/svg/adazolhub_shop_logo_desktop_colored.svg' alt='adazolhub_logo' height={48} width={80} />
        </Link>

        {bounds.width > 650 && <NavLinksFull />}
        <div className="flex items-center gap-1 overflow-hidden h-fit my-">
          <>
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


            {
              bounds.width < 650 &&
              <ButtonSVG onClick={() => toggleStateHandler!("side_bar")}>
                <ViewGridIcon />
              </ButtonSVG>
            }

          </>
        </div>
      </nav>
    </header>
  );
};

export default Nav;


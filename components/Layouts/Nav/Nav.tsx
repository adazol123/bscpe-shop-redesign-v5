import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import style from "./style.module.css";
import { MenuAlt3Icon, UserIcon, ViewGridIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";

import { useRouter } from "next/router";
import ButtonSVG from "../../UI/Button/SVG/ButtonSVG";

import useMeasure from "react-use-measure";
import NavLinksFull from "./NavLinksFull";
import Image from "next/image";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";
import { selectCurrentuser } from "../../../features/user/user-auth-slice";

function CartItemIndicator() {
  let carts = useAppSelector(state => state.cart.carts)
  return (
    <>
      {carts.length > 0 && (
        <>
          <span className="absolute top-2 right-2 inline-flex w-2 h-2 rounded-full opacity-75 animate-ping duration-500 bg-rose-400/40">
            {" "}
          </span>
          <span className="w-2 h-2 bg-rose-600  rounded-full absolute top-2 right-2 ring-2 ring-white text-[0.5rem] text-center">
            {/* {ica && 'X'} */}
          </span>
        </>
      )}
    </>
  );
}

const Nav = () => {

  let router = useRouter();
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentuser)
  const [ref, bounds] = useMeasure()
  return (
    <header ref={ref} className={style._nav}>
      <nav className="w-full">
        <Link href={"/"} className={style._logo}>
          {/* <Image src='/svg/adazolhub_shop_logo_desktop_colored.svg' alt='adazolhub_logo' height={48} width={80} /> */}
          <span>Adazolhub | Shop</span>
        </Link>

        {bounds.width > 650 && <NavLinksFull />}
        <div className="flex items-center gap-1 overflow-hidden h-fit my-">
          <>
            <ButtonSVG
              onClick={() => {
                dispatch(toggleState('cart'))
              }}
            >
              <>
                <CartItemIndicator />
                <ShoppingBagIcon />
              </>
            </ButtonSVG>


            {
              bounds.width < 650 ?
                <ButtonSVG onClick={() => dispatch(toggleState('side_bar'))}>
                  <ViewGridIcon />
                </ButtonSVG> :
                <ButtonSVG onClick={() => router.push(user ? '/account' : '/login')}>
                  <UserIcon />
                </ButtonSVG>
            }

          </>
        </div>
      </nav>
    </header>
  );
};

export default Nav;


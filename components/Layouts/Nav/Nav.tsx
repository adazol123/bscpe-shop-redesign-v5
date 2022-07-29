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
const Nav = () => {
  const { user } = UserAuth();
  let router = useRouter();
  const { toggleStateHandler } = ToggleState();
  return (
    <div className={style._nav}>
      <div className="w-full">
        <Link href={"/"} className={style._logo}>
          BSCPE Store
        </Link>

        {/* <NavLinks /> */}
        <div className="flex gap-3 items-center">
          <ButtonSVG onClick={() => router.replace("/cart")}>
            <>
              <span className="w-fit px-1 h-3 bg-rose-600 absolute rounded-full top-0 right-0 ring-2 ring-black text-[0.5rem] text-center">
                9+
              </span>
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
      </div>
    </div>
  );
};

export default Nav;

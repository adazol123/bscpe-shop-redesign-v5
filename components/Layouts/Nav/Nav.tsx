import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import style from "./style.module.css";
import { MenuAlt3Icon, UserIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { UserAuth } from "../../../utils/context/Account/Auth";
const Nav = () => {
  const { user } = UserAuth();
  return (
    <div className={style._nav}>
      <div className="container">
        <Link href={"/"} className={style._logo}>
          BSCPE Store
        </Link>

        <NavLinks />
        <div className="flex gap-2 items-center">
          <ShoppingBagIcon />
          <div className="flex gap-2 ring-1 ring-white/30 rounded-full px-2 py-1">
            {user ? (
              <Link href={"/login"}>
                <a>
                  <UserIcon />
                </a>
              </Link>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
            <Link href="/">
              <a>
                <MenuAlt3Icon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

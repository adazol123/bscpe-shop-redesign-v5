import React from "react";
import Link from "next/link";
import ButtonStyled from "../../UI/Button/Styled/ButtonStyled";
import {
  BellIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SupportIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import DropdownStyled from "../../UI/Button/Dropdown/DropdownStyled";
import { useAppDispatch } from "../../../utils/app/hook";
import { toggleState } from "../../../features/toggle/toggle-state-slice";

const NavLinks = () => {
  const dispatch = useAppDispatch()
  const router = useRouter();
  return (
    <div className="flex gap-1 px-4 flex-col sm:flex-row">
      <ButtonStyled icon={<HomeIcon />}>Home</ButtonStyled>
      <ButtonStyled icon={<ShoppingBagIcon />}>Shopping cart</ButtonStyled>
      <ButtonStyled icon={<BellIcon />}>Notification</ButtonStyled>
      {/* <DropdownStyled title="Categories">
        <Link href={"/cart"}>Men</Link>
        <Link href={"/cart"}>Women</Link>
        <Link href={"/cart"}>Kids</Link>
      </DropdownStyled> */}
      <ButtonStyled
        icon={<SupportIcon />}
        onClick={() => {
          dispatch(toggleState('side_bar'));
          router.push("/signup");
        }}
      >
        Support
      </ButtonStyled>
      <ButtonStyled
        icon={<InformationCircleIcon />}
        onClick={() => {
          dispatch(toggleState('side_bar'));
          router.push("/account");
        }}
      >
        About
      </ButtonStyled>
    </div>
  );
};

export default NavLinks;

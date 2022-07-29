import React from "react";
import Link from "next/link";
import ButtonStyled from "../../UI/Button/Styled/ButtonStyled";
import {
  BellIcon,
  HomeIcon,
  InformationCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import DropdownStyled from "../../UI/Button/Dropdown/DropdownStyled";

const NavLinks = () => {
  const router = useRouter();
  return (
    <div className="flex gap-1 px-4 flex-col sm:flex-row">
      <ButtonStyled icon={<HomeIcon />}>Home</ButtonStyled>
      <ButtonStyled icon={<ShoppingBagIcon />}>Shopping cart</ButtonStyled>
      <ButtonStyled icon={<BellIcon />}>Notification</ButtonStyled>
      <DropdownStyled title="Categories">
        <Link href={"/cart"}>Men</Link>
        <Link href={"/cart"}>Women</Link>
        <Link href={"/cart"}>Kids</Link>
      </DropdownStyled>
      <ButtonStyled icon={<InformationCircleIcon />}>About</ButtonStyled>
      <ButtonStyled icon={<ThumbUpIcon />}>Issue report</ButtonStyled>
    </div>
  );
};

export default NavLinks;
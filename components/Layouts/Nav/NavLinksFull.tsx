import React from "react";
import Link from "next/link";
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

import ButtonLink from "../../UI/Button/Link/ButtonLink";
import { useAppDispatch } from "../../../utils/app/hook";

const NavLinksFull = () => {
    const dispatch = useAppDispatch()
    const router = useRouter();
    return (
        <div className="flex flex-col gap-4 px-4 sm:flex-row">
            <ButtonLink size='small' title="Categories">
                Home
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonLink>
            <ButtonLink size='small' title="Categories">
                Category
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonLink>
            <ButtonLink size='small' title="Categories">
                Shopping Cart
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonLink>
            <ButtonLink size='small' title="Categories">
                About us
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonLink>

        </div>
    );
};

export default NavLinksFull;

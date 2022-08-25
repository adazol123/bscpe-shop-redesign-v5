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
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import DropdownRounded from "../../UI/Button/Dropdown/DropdownRounded";
import ButtonRounded from "../../UI/Button/Rounded/ButtonRounded";

const NavLinksFull = () => {
    const { toggleStateHandler } = ToggleState();
    const router = useRouter();
    return (
        <div className="flex gap-1 px-4 flex-col sm:flex-row">
            <ButtonRounded title="Categories">
                Home
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonRounded>
            <ButtonRounded title="Categories">
                Men
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonRounded>
            <ButtonRounded title="Categories">
                Women
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonRounded>
            <ButtonRounded title="Categories">
                Kids
                {/* <Link href={"/cart"}>Men</Link>
                <Link href={"/cart"}>Women</Link>
                <Link href={"/cart"}>Kids</Link> */}
            </ButtonRounded>

        </div>
    );
};

export default NavLinksFull;

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
import CardCategory from "../../UI/Cards/CardCategory";

const NavLinks = () => {
  const dispatch = useAppDispatch()
  const router = useRouter();
  return (
    <div className="flex gap-2 px-4 flex-col">
      <button
        onClick={() => {
          dispatch(toggleState('side_bar'))
          router.push('/')
        }}
      >
        <CardCategory
          img_source="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          label="Home"
          full
        />
      </button>
      <button
        onClick={() => {
          dispatch(toggleState('side_bar'))
          setTimeout(() => {
            dispatch(toggleState('cart'))
          }, 500)
        }}
      >
        <CardCategory
          img_source="https://images.unsplash.com/photo-1581067721837-e4809b29692d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          label="Shopping Cart"
          full
        />
      </button>

      <button>

        <CardCategory
          img_source="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          label="Support"
          full
        />
      </button>
      <button>

        <CardCategory
          img_source="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          label="About us"
          full
        />
      </button>
    </div>
  );
};

export default NavLinks;

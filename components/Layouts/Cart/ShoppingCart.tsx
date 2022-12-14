import { ShoppingBagIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";
import { CartItemProps, updatePrice } from "../../../features/cart/cart-slice";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";

import { ScrollDisableOnOverlay } from "../../../utils/hooks/useDisableScroll";
import CartCard, { ProductCart } from "../../UI/Cards/CardCart";
import ModalSide from "../../UI/Modals/Side/ModalSide";
import FooterSummary from "./FooterSummary";

const ShoppingCart = () => {
  // let carts: CartItemProps[];
  let total = useAppSelector(state => state.cart.total)
  let carts = useAppSelector(state => state.cart.carts)
  let totalQuantity = useAppSelector(state => state.cart.totalQuantity)
  //TODOS: Need to fix types of the Toggle State (temporarily set to 'any')
  //* Fixed: used redux toolkit
  const toggle_state_cart = useAppSelector(state => state.toggles.cart)
  const dispatch = useAppDispatch()
  ScrollDisableOnOverlay(toggle_state_cart);

  useEffect(() => {
    dispatch(updatePrice())
  }, [])

  return (
    <ModalSide
      title={"Cart"}
      icon={<ShoppingBagIcon />}
      state={toggle_state_cart}
      scrollable={carts.length > 2}
      enableFooter={carts.length > 0}
      footer={<FooterSummary total={total} totalQuantity={totalQuantity} />}
      toggleStateHandler={() => dispatch(toggleState('cart'))}
    >

      {/* <div className="container relative py-4 mx-auto  min-h-[calc(100%-10rem)] max-h-[calc(100%-10rem)]  overflow-x-hidden"> */}
      <ul className="flex flex-col gap-2 pb-4 ">
        {carts.length > 0 ? (
          carts?.map((data) => (
            <CartCard key={data.product_id} cart={data} />
          ))
        ) : (
          <li className="py-4 mx-auto text-gray-400">Cart is empty</li>
        )}
      </ul>
      {/* </div> */}

    </ModalSide>
  );
};

export default ShoppingCart;

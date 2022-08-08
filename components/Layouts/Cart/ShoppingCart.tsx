import { ShoppingBagIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
import ShopState from "../../../utils/context/Shop/ShopState";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import { ScrollDisableOnOverlay } from "../../../utils/hooks/useDisableScroll";
import CartCard, { ProductCart } from "../../UI/Cards/CardCart";
import ModalSide from "../../UI/Modals/Side/ModalSide";
import FooterSummary from "./FooterSummary";

const ShoppingCart = () => {
  let { carts, total, removeFromCart, totalQuantity } = ShopState();

  //TODOS: Need to fix types of the Toggle State (temporarily set to 'any')

  const { toggleState, toggleStateHandler } = ToggleState();
  ScrollDisableOnOverlay(toggleState!["cart"]);

  return (
    <ModalSide
      title={"Cart"}
      icon={<ShoppingBagIcon />}
      state={toggleState!["cart"]}
      scrollable={carts.length > 2}
      enableFooter={carts.length > 0}
      footer={<FooterSummary total={total} totalQuantity={totalQuantity} />}
      toggleStateHandler={() => toggleStateHandler!("cart")}
    >

      {/* <div className="container relative py-4 mx-auto  min-h-[calc(100%-10rem)] max-h-[calc(100%-10rem)]  overflow-x-hidden"> */}
      <ul className="flex flex-col gap-2 pb-4 overflow-hidden">
        {carts.length > 0 ? (
          carts?.map((data: ProductCart) => (
            <CartCard key={data.product_id} data={data} />
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
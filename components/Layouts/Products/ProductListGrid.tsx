import React from "react";

import style from './style.module.css'
import CardGrid from "../../UI/Cards/CardGrid";
import ModalMobile from "../../UI/Modals/Mobile/ModalMobile";
import { useRouter } from "next/router";
import ButtonLink from "../../UI/Button/Link/ButtonLink";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { CartItemProps } from './../../../features/cart/cart-slice';
import ProductSelected from "./ProductSelected";

const ProductListGrid = () => {
  const router = useRouter();
  const modal_mobile_state = useAppSelector(state => state.toggles.modal_mobile)
  const selectedProduct = useAppSelector(state => state.cart.selected) as CartItemProps
  // const { toggleState, toggleStateHandler } = ToggleState();
  const dispatch = useAppDispatch()
  const products = useAppSelector(state => state.shop.products)
  //?.filter((prod: any) => prod.product_category === category)
  return (
    <div className="mx-6">
      <div className="flex justify-start text-sm font-medium text-black/50">
        <p>More Product</p>
      </div>
      <div className="flex flex-wrap my-4 -mx-2">
        {
          //TODOS: need to setup product id | Sept. 4, 2022 9:59 PM
        }
        {products &&
          products.map((product) => (
            <React.Fragment key={product.product_id}>
              <CardGrid product={product} />
            </React.Fragment>
          ))}

        <ModalMobile
          state={modal_mobile_state}
          toggleStateHandler={() => dispatch(toggleState('modal_mobile'))}
        >
          {selectedProduct && <ProductSelected product={selectedProduct} />}
        </ModalMobile>
      </div>
      <div

      >
        <ButtonLink
          size="small"
          onClick={() => router.push("#")}
        >
          See more
        </ButtonLink>
      </div>
    </div>
  );
};

export default ProductListGrid;

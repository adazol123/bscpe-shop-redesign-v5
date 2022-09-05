import React from "react";
import { selectProductById } from "../../../features/shop/product-slice";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";

import ModalMobile from "../../UI/Modals/Mobile/ModalMobile";
import ProductSelected from "./ProductSelected";

const ProductSelectedModal = () => {
  const modal_mobile_state = useAppSelector(state => state.toggles.modal_mobile)
  const productSelected = useAppSelector(state => state.cart.selected)
  console.log(productSelected)
  const dispatch = useAppDispatch()
  return (
    <ModalMobile
      state={modal_mobile_state}
      toggleStateHandler={() => dispatch(toggleState('modal_mobile'))}
    >
      {/* {productSelected && <ProductSelected product={productSelected} />} */}
      Prduct
    </ModalMobile>
  );
};

export default ProductSelectedModal;

import React from "react";
import { ProductState } from "../../../utils/context/Product/ProductState";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import ModalMobile from "../../UI/Modals/Mobile/ModalMobile";
import ProductSelected from "./ProductSelected";

const ProductSelectedModal = () => {
  const { toggleState, toggleStateHandler } = ToggleState();
  const { productSelected }: any = ProductState();
  return (
    <ModalMobile
      state={toggleState!["modal_mobile"]}
      toggleStateHandler={() => toggleStateHandler!("modal_mobile")}
    >
      {productSelected && <ProductSelected product={productSelected} />}
    </ModalMobile>
  );
};

export default ProductSelectedModal;

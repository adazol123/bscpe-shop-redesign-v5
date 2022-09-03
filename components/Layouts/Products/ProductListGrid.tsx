import React from "react";
import {
  ProductList,
  ProductState,
} from "../../../utils/context/Product/ProductState";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import CardGrid from "../../UI/Cards/CardGrid";
import ModalMobile from "../../UI/Modals/Mobile/ModalMobile";
import { useRouter } from "next/router";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import style from './style.module.css'
import ButtonLink from "../../UI/Button/Link/ButtonLink";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";
import { toggleState } from "../../../features/toggle/toggle-state-slice";

const ProductListGrid = () => {
  const router = useRouter();
  const modal_mobile_state = useAppSelector(state => state.toggles.modal_mobile)
  // const { toggleState, toggleStateHandler } = ToggleState();
  const dispatch = useAppDispatch()

  const { products }: any = ProductState();
  //?.filter((prod: any) => prod.product_category === category)
  return (
    <div className="mx-6">
      <div className="flex justify-start text-sm font-medium text-black/50">
        <p>More Product</p>
        {/* <span
          className="underline cursor-pointer underline-offset-2"
          onClick={() => router.push("/products")}
        >
          <span className="inline-flex items-center gap-1">
            See more
            <ArrowNarrowRightIcon className="w-3 h-3" />
          </span>
        </span> */}
      </div>
      <div className="grid grid-cols-2 row-start-1 row-end-4 gap-6 my-4 grid-flow-dense lg:grid-cols-3 xl:grid-cols-4 place-items-start place-content-start">
        {products &&
          products.map((product: ProductList) => (
            <React.Fragment key={product.product_id}>
              <CardGrid product={product} isInCart={false} />
            </React.Fragment>
          ))}
        <ModalMobile
          state={modal_mobile_state}
          toggleStateHandler={() => dispatch(toggleState('modal_mobile'))}
        >
          {/* {selectedProduct && <SelectedProduct product={selectedProduct} />} */}
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

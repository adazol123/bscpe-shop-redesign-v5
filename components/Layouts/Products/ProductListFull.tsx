import React from "react";

import CardGrid from "../../UI/Cards/CardGrid";
import ModalMobile from "../../UI/Modals/Mobile/ModalMobile";
import { useRouter } from "next/router";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";
import { toggleState } from "../../../features/toggle/toggle-state-slice";

const ProductListFull = () => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const modal_mobile_state = useAppSelector(state => state.toggles.modal_mobile)
  const products = useAppSelector(state => state.shop.products)
  //?.filter((prod: any) => prod.product_category === category)
  return (
    <div className="mx-4">
      {/* <div className="flex justify-between my-2 text-sm font-medium text-black/50">
        <p>Explore brands</p>
      </div> */}
      <div className="grid grid-cols-2 row-start-1 row-end-4 gap-2 mb-6 grid-flow-dense sm:grid-cols-3 xl:grid-cols-4 place-items-start place-content-start">
        {
          //TODOS: need to setup product id | Sept. 4, 2022 9:59 PM
        }
        {products &&

          products.map((product, index) => (
            <React.Fragment key={index}>
              <CardGrid product={product} />
            </React.Fragment>
          ))}
        <ModalMobile
          state={modal_mobile_state}
          toggleStateHandler={() => dispatch(toggleState('modal_mobile'))}
        >
          {/* {selectedProduct && <SelectedProduct product={selectedProduct} />} */}
        </ModalMobile>
      </div>
    </div>
  );
};

export default ProductListFull;

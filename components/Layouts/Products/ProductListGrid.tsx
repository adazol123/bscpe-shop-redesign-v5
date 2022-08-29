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

const ProductListGrid = () => {
  const router = useRouter();
  const { toggleState, toggleStateHandler } = ToggleState();
  const { products }: any = ProductState();
  //?.filter((prod: any) => prod.product_category === category)
  return (
    <div className="mx-6">
      <div className="flex justify-between my-2 text-sm font-medium text-black/50">
        <p>More Product</p>
        <span
          className="underline cursor-pointer underline-offset-2"
          onClick={() => router.push("/products")}
        >
          <span className="inline-flex gap-1 items-center">
            See more
            <ArrowNarrowRightIcon className="w-3 h-3" />
          </span>
        </span>
      </div>
      <div className="grid grid-cols-2 row-start-1 row-end-4 gap-[5%] mb-6 grid-flow-dense md:grid-cols-3 xl:grid-cols-4 place-items-start place-content-start">
        {products &&
          products.map((product: ProductList) => (
            <React.Fragment key={product.product_id}>
              <CardGrid product={product} isInCart={false} />
            </React.Fragment>
          ))}
        <ModalMobile
          state={toggleState!["modal_mobile"]}
          toggleStateHandler={() => toggleStateHandler!("modal_mobile")}
        >
          {/* {selectedProduct && <SelectedProduct product={selectedProduct} />} */}
        </ModalMobile>
      </div>
      <div
        className="w-full relative flex justify-center 
      before:w-full before:absolute before:h-44 before:bg-gradient-to-t before:from-white before:bottom-3 before:border-b before:border-black/60"
      >
        <button
          className="ring-4 ring-white rounded-full px-4 py-1 text-xs relative bg-black text-white mx-auto"
          onClick={() => router.push("/products")}
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default ProductListGrid;

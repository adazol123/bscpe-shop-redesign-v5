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

const ProductListFull = () => {
  const router = useRouter();
  const { toggleState, toggleStateHandler } = ToggleState();
  const { products }: any = ProductState();
  //?.filter((prod: any) => prod.product_category === category)
  return (
    <div className="mx-4">
      {/* <div className="flex justify-between my-2 text-sm font-medium text-black/50">
        <p>Explore brands</p>
      </div> */}
      <div className="grid grid-cols-2 row-start-1 row-end-4 gap-2 mb-6 grid-flow-dense sm:grid-cols-3 xl:grid-cols-4 place-items-start place-content-start">
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
    </div>
  );
};

export default ProductListFull;

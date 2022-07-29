import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../../components/Layouts/layout";
import { ProductState } from "../../utils/context/Product/ProductState";

const ProductItem = () => {
  const router = useRouter();
  const { products }: any = ProductState();
  let product = products?.find(
    (product: any) => product.product_id === router.query?.id
  );

  console.log(product);
  console.log(router.query?.id);
  return (
    <div>
      {product && (
        <div className="sticky top-0 ">
          {/* <div className='px-4 py-4 bg-white'>
                <ArrowLeftIcon className="w-5 h-5" />
            </div> */}
          <div className="h-full overflow-y-scroll flex flex-col w-full md:flex-row">
            <div className="w-full overflow-hidden images-carousel h-[18em] md:p-4">
              <img
                src={product?.product_image}
                alt={product?.product_name}
                className="object-cover w-screen h-96"
              />
            </div>
            <div className="flex flex-col gap-2 m-4">
              <p className="text-xs font-thin text-gray-400">
                SKU: {product?.product_id.toUpperCase()}
              </p>
              <h1 className="text-2xl font-bold leading-6">
                {product?.product_name}
              </h1>
              <div className="grid grid-cols-3 gap-1 py-4 text-sm">
                <div>
                  <h3 className="font-medium ">Category:</h3>
                  <p className="font-thin text-gray-500">
                    {product?.product_category.toUpperCase()}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium ">Stocks:</h3>
                  <p className="font-thin text-gray-500">
                    {product?.product_quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProductItem.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  );
};

export default ProductItem;

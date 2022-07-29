import { TrashIcon } from "@heroicons/react/outline";
import React from "react";
import ShopState from "../../../utils/context/Shop/ShopState";

export interface ProductCart {
  product_id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
}

const CartCard = ({ data }: { data: ProductCart }) => {
  let {
    products: list,
    total,
    removeFromCart,
    totalQuantity,
  }: any = ShopState();
  return (
    <li
      key={data.product_id}
      //   onClick={() => handleToggle(data)}
      className="flex gap-2 p-2 transition-all bg-gray-50 border border-gray-300 border-dashed rounded-md cursor-pointer hover:scale-[1.02] relative max-h-[14em]"
    >
      <div className="h-[6em] md:h-[8em] lg:min-h-[10em] w-[8em] sm:w-[10em] lg:max-w-[12em]  rounded-md opacity-100">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover w-full h-full rounded-md opacity-100 bg-blend-overlay"
        />
      </div>

      <div className="relative w-72">
        <h3 className="mr-8 font-thin text-gray-500 line-clamp-1 sm:line-clamp-3 lg:line-clamp-none">
          {data.name}
        </h3>
        <div className="flex gap-4">
          <div>
            <span className="text-[0.65em]  text-gray-400">Size</span>
            {/* {sizeFormater(data?.size)} */}
          </div>
          <div>
            <span className="text-[0.65em] text-gray-400 ">Color</span>
            <div className="mt-2 font-medium text-gray-500">
              {/* {colorFormater(data?.color)} */}
            </div>
          </div>
        </div>
        <div>
          <span className="text-[0.65em] text-gray-400">Price</span>
          <p className="text-sm font-medium text-gray-500">
            {" "}
            <span>₱ {data?.price}</span> x {data?.quantity}
          </p>
        </div>
      </div>

      <button
        className="absolute px-4 py-2 top-1 right-2 btn-link"
        onClick={() => {
          data && removeFromCart!(data);
        }}
      >
        <TrashIcon className="w-5 h-5 text-red-400" />
      </button>
    </li>
  );
};

export default CartCard;

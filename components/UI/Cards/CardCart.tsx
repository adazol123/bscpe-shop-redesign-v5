import { TrashIcon } from "@heroicons/react/outline";
import React from "react";
import ShopState from "../../../utils/context/Shop/ShopState";
import { colorFormater, sizeFormater } from "../../Layouts/Checkout/formatter";

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
      {/* <div className="absolute -top-8 -left-8 bg-neutral-800 text-white w-16 h-16 -rotate-45"></div> */}
      <svg width="86" height="88" viewBox="0 0 86 88" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-0 -left-0 w-12 h-12"
      >
        <path d="M4.54436e-06 88L3.13023e-06 7.5C3.05747e-06 3.35786 3.35787 1.94612e-06 7.5 2.47211e-06L86 1.24404e-05L4.54436e-06 88Z" fill="#212121" />

      </svg>


      <span className="text-white absolute top-1 left-2 text-xs">x{data?.quantity}</span>
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
        <div className='flex justify-between'>
          <div className="flex gap-4">
            <div>
              <span className="text-[0.65em]  text-gray-400">Size</span>
              {sizeFormater(data?.size)}
            </div>
            <div>
              <span className="text-[0.65em] text-gray-400 ">Color</span>
              <div className="mt-2 font-medium text-gray-500">
                {colorFormater(data?.color)}
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

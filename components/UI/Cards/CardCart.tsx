import { MinusSmIcon, PlusSmIcon, TrashIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { CartItemProps, removeFromCart } from "../../../features/cart/cart-slice";
import { useAppDispatch } from "../../../utils/app/hook";
import style from './style.module.css'

export interface ProductCart {
  product_id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
}

const CartCard = ({ cart }: { cart: CartItemProps }) => {
  // let {
  //   products: list,
  //   total,
  //   removeFromCart,
  //   totalQuantity,
  // }: any = ShopState();
  let products: any;
  // let removeFromCart: any;
  const dispatch = useAppDispatch()
  if (!cart) return null
  return (
    <div
      //   onClick={() => handleToggle(cart)}
      className={style._cart__card}
    >
      {/* <div className="absolute -top-8 -left-8 bg-neutral-800 text-white w-16 h-16 -rotate-45"></div> */}


      <CardImage alt={cart.name} src={cart.images[0].url} />

      <div className="relative w-72 flex flex-col justify-between">
        <div>

          <h4 className="mr-8 font-base  text-gray-500 line-clamp-2 sm:line-clamp-2 ">
            {cart.name}
          </h4>
          <div>
            <span className="text-[0.60em]  text-theme-gray-500">
              {cart.color}/
              {cart.size}

            </span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className="flex flex-col gap-4 w-full">

            <div className="flex w-full justify-between">

              <div className={`flex items-center gap-1 ${true ? "pointer-events-none text-black/30 " : " text-black"}`}>
                <button
                  // onClick={props.minusQuantity}
                  className="p-1 rounded border "
                >
                  <span>
                    <MinusSmIcon className="w-4 h-4" />
                  </span>
                </button>
                <div className="w-6 text-center">
                  <p className={` "text-xl font-bold " ${true ? "text-marine-700/30" : "text-marine-700"}`}>{cart.quantity.toString()}</p>
                </div>
                <button
                  // onClick={props.addQuantity}
                  className="p-1 rounded border "
                >
                  <span>
                    <PlusSmIcon className="w-4 h-4" />
                  </span>
                </button>
              </div>
              <div >
                <p className="text-sm font-medium text-gray-500">
                  {" "}
                  <span>₱ {cart.price}</span> x {cart.quantity}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <button
        className="absolute w-8 h-8 px-2 py-2 top-2 right-1 text-theme-gray-500"
        onClick={() => {
          cart.product_id && dispatch(removeFromCart(cart.product_id));
        }}
      >
        <XIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

interface Props {
  src: string,
  alt: string
  width?: string | number,
  height?: string | number
}

function CardImage({ alt, src }: Props) {
  return (
    <React.Fragment>

      <div className={style._cart__card__image}>
        <Image
          src={src}
          alt={alt}
          layout='fill'
          objectFit="cover"
        />
      </div>

    </React.Fragment>
  )
}

export default CartCard;

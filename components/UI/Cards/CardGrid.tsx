import {
  MinusSmIcon,
  PlusSmIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ShoppingCartIcon as ShoppingCartIconFill } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  StaticState,
  ToggleState,
} from "../../../utils/context/Toggles/ToggleState";
import style from "./style.module.css";

export interface ProductList {
  product_id: string;
  product_name: string;
  product_image: string;
  product_quantity: number;
  product_price: number;
  product_size: string[];
  product_color: string[];
}

const CardGrid = ({
  product,
  isInCart,
}: {
  product: ProductList;
  isInCart: boolean;
}) => {
  // let [isInCart, setIsInCart] = useState(false);
  let { toggleState, toggleStateHandler, selectedProduct, setSelectedProduct } =
    ToggleState() as StaticState;
  // console.log(selectedProduct);

  const router = useRouter();
  return (
    <>
      <div
        className={`${style.product} hover:ring-1 hover:ring-black/5 hover:shadow-sm hover:bg-white`}
      >
        <div className={style.product__top}>
          <div className={`${style.product__image} group`}>
            <Image
              src={product.product_image}
              alt={product.product_name}
              className="group-hover:scale-125 group-hover:grayscale-0"
            />
            <span className={style.product__tag}>Sale</span>
          </div>
        </div>

        <div className={style.product__bottom}>
          <div className={style.product__details}>
            <h3
              onClick={() => router.push(`/product/${product.product_id}`)}
              className={style.product__title}
            >
              {product.product_name}
            </h3>
            <p className={style.product__price}>
              ₱ {(product.product_price * 0.6).toFixed(2)}
              <span className={style.product__original_price}>
                ₱ {product.product_price.toFixed(2)}
              </span>
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedProduct(product);
              toggleStateHandler!("modal_mobile");
            }}
            className={style.product__cart}
          >
            {isInCart ? <ShoppingCartIconFill /> : <ShoppingCartIcon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardGrid;

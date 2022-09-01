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
  ProductList,
  ProductState,
} from "../../../utils/context/Product/ProductState";
import {
  StaticState,
  ToggleState,
} from "../../../utils/context/Toggles/ToggleState";
import style from "./style.module.css";

const CardGrid = ({
  product,
  isInCart,
}: {
  product: ProductList;
  isInCart: boolean;
}) => {
  // let [isInCart, setIsInCart] = useState(false);
  let { toggleState, toggleStateHandler } = ToggleState();
  let { productSelected, setProductSelected }: any = ProductState();
  // console.log(selectedProduct);

  const router = useRouter();
  return (
    <>
      <div
        className={`${style.product} hover:ring-1 hover:ring-black/5 hover:shadow-sm hover:bg-white`}
      >
        <div className={style.product__top}
          onClick={() => {
            setProductSelected(product);
            toggleStateHandler!("modal_mobile");
          }}
        >
          <div className={`${style.product__image} group`}>
            <Image
              src={product.product_image}
              alt={product.product_name}
              className="group-hover:scale-105 group-hover:grayscale-0"
              objectFit="cover"
              layout="fill"
              blurDataURL={product.product_image}
              placeholder={"blur"}
            />
            <span className={style.product__tag}>Sale</span>
          </div>
        </div>

        <div className={style.product__bottom}
          onClick={() => router.push(`/products/${product.product_id}`)}
        >
          <div className={style.product__details}>
            <h2>
              ₱ {(product.product_price * 0.6).toFixed(2)}
              <span className={style.product__original_price}>
                ₱ {product.product_price.toFixed(2)}
              </span>
            </h2>
            <p

              className={style.product__title}
            >
              {product.product_name}
            </p>
          </div>

          {/* <button
            onClick={() => {
              setProductSelected(product);
              toggleStateHandler!("modal_mobile");
            }}
            className={style.product__cart}
          >
            {isInCart ? <ShoppingCartIconFill /> : <ShoppingCartIcon />}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default CardGrid;

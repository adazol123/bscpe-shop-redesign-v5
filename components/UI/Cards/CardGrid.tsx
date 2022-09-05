import {
  ChartBarIcon,
  MinusSmIcon,
  PlusSmIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ShoppingCartIcon as ShoppingCartIconFill } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect, FC, PropsWithChildren } from "react";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { useAppDispatch } from "../../../utils/app/hook";


import style from "./style.module.css";
import { ProductItemProps } from './../../../features/shop/product-slice';
import { setSelectedItem } from "../../../features/cart/cart-slice";
import ButtonSVG from "../Button/SVG/ButtonSVG";
import { motion } from 'framer-motion';
interface Props<T> {
  product: T
}

const CardGrid = <ObjectType extends ProductItemProps,>({ product }: PropsWithChildren<Props<ObjectType>>) => {

  let dispatch = useAppDispatch()



  const router = useRouter();
  return (
    <>
      <motion.div
        className={`${style.product} `}
        layoutId={`wrapper-${product.product_id}`}
      >
        <motion.div className={style.product__top}
          layout
          layoutId={`image-${product.product_id}`}
          onClick={() => {
            dispatch(setSelectedItem(product))
            dispatch(toggleState('modal_mobile'));
          }}
        >
          <div className={`${style.product__image} `}

          >
            <Image
              src={product.metatags.images[0].url}
              alt={product.description}
              className=""
              objectFit="cover"
              layout="fill"
              blurDataURL={product.metatags.images[0].url}
              placeholder={"blur"}
            />
            <span className={style.product__tag}>Sale</span>
          </div>
        </motion.div>

        <div className={style.product__bottom}

        >
          <div className={style.product__details}
            onClick={() => router.push(`/products/${product.product_id}`)}
          >
            <h2
              className={style.product__price}
            >
              ₱ {(product.price * 0.6).toFixed(2)}
              <span className={style.product__original_price}>
                ₱ {product.price.toFixed(2)}
              </span>
            </h2>
            <p

              className={style.product__title}
            >
              {product.name}
            </p>
          </div>
          <ButtonSVG
            className="text-marine-700"
            icon={<ShoppingCartIcon />}
            onClick={() => {
              dispatch(setSelectedItem(product))
              dispatch(toggleState('modal_mobile'));
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default CardGrid;

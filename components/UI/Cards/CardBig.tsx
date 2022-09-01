import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon as ShoppingCartIconFill } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { createRef, LegacyRef, MouseEventHandler, MutableRefObject, useRef } from "react";
import style from "./style.module.css";

interface Card {
  title: string;
  price: number;
  image: string;
  cartOnClick?: MouseEventHandler<HTMLButtonElement>;
  original_price?: number;
}

const CardBig = <T extends Card>({
  title,
  price,
  image,
  original_price,
  cartOnClick,
  ...props
}: T) => {

  return (
    <div
      className={`${style.large}  group `}
      {...props}
    >
      <div className={style.large__image}>
        <Image
          src={image}
          alt={title}
          className="transition-all select-none group-hover:scale-105 "
          layout={"fill"}
          blurDataURL={image}
          placeholder={"blur"}
        />
      </div>
      <AnimatePresence>
        <div className={style.large__details}>
          <h3 className={style.large__title}>{title}</h3>
          <p className={style.large__price}>
            {" "}
            P {price}{" "}
            <span className={style.large__original_price}>
              P {original_price}
            </span>{" "}
          </p>

          <div
            className={style.large__footer}
          >
            <button className={style.large__navigate}>View product</button>
            <button className={style.large__cart} onClick={cartOnClick}>
              <ShoppingCartIcon />
            </button>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CardBig;

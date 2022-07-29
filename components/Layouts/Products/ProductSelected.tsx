import {
  MinusSmIcon,
  PlusSmIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ShoppingCartIcon as ShoppingCartIconFill } from "@heroicons/react/solid";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ProductList } from "../../../utils/context/Product/ProductState";
import ShopState from "../../../utils/context/Shop/ShopState";
import { ToggleState } from "../../../utils/context/Toggles/ToggleState";
import useQuantity from "../../../utils/hooks/useQuantity";
import RadioButtonGroup from "../../UI/Button/RadioButtonGroup/RadioButtonGroup";
import { ProductCart } from "../../UI/Cards/CardCart";

import style from "./style.module.css";

export const colors = [
  {
    option: "red",
    label: "R",
    className: "w-3 h-3 rounded-full bg-rose-300/80",
    activeClass: "ring-2 ring-offset-4 ring-rose-600",
  },
  {
    option: "blue",
    label: "B",
    className: "w-3 h-3 rounded-full bg-blue-300/80",
    activeClass: "ring-2 ring-offset-4 ring-blue-600",
  },
  {
    option: "green",
    label: "G",
    className: "w-3 h-3 rounded-full bg-emerald-300/80 ",
    activeClass: "ring-2 ring-offset-4 ring-emerald-600",
  },
];

export const size = [
  {
    option: "small",
    label: "S",
    className: "grid w-6 h-6 border rounded place-items-center",
    activeClass: "ring-2 text-gray-100 bg-gray-400 ring-offset-2 ring-gray-400",
  },
  {
    option: "medium",
    label: "M",
    className: "grid w-6 h-6 border rounded place-items-center",
    activeClass: "ring-2 text-gray-100 bg-gray-400 ring-offset-2 ring-gray-400",
  },
  {
    option: "large",
    label: "L",
    className: "grid w-6 h-6 border rounded place-items-center ",
    activeClass: "ring-2 text-gray-100 bg-gray-400 ring-offset-2 ring-gray-400",
  },
  {
    option: "extra-large",
    label: "XL",
    className: "grid w-6 h-6 border rounded place-items-center",
    activeClass: "ring-2 text-gray-100 bg-gray-400 ring-offset-2 ring-gray-400",
  },
];

const ProductSelected = ({ product }: { product: ProductList }) => {
  let { toggleState, toggleStateHandler } = ToggleState();

  let { quantity, setQuantity, addQuantity, minusQuantity } = useQuantity();

  let [selectedColorOption, setSelectedColorOption] = useState<
    string | undefined
  >(colors[0].option);
  let [selectedSizeOption, setSelectedSizeOption] = useState<
    string | undefined
  >();

  let { carts, addToCart, removeFromCart } = ShopState();

  let [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    let productIsInCart = carts.find(
      (item: any) => item.name === product?.product_name
    );
    setSelectedColorOption(colors[0].option);

    if (productIsInCart) {
      setIsInCart(true);
      setQuantity(productIsInCart?.quantity);
    } else {
      setIsInCart(false);
    }

    return () => {
      if (productIsInCart) {
        setQuantity(productIsInCart?.quantity);
        setSelectedSizeOption(productIsInCart?.size);
      } else {
        setQuantity(1);
        setSelectedColorOption(undefined);
        setSelectedSizeOption(undefined);
      }
    };
  }, [carts, product, isInCart]);

  let handleClick = () => {
    let prodItem: ProductCart = {
      product_id: product?.product_id,
      name: product?.product_name,
      image: product?.product_image,
      price: parseInt((product?.product_price * 0.6).toFixed(2)),
      color: selectedColorOption,
      size: selectedSizeOption,
      quantity,
    };
    if (isInCart) {
      removeFromCart!(prodItem);
      setQuantity(1);
    } else {
      addToCart!(prodItem);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-4">
          <div>
            <div className="overflow-hidden rounded-md w-36 h-36">
              <Image
                src={product.product_image}
                alt={product.product_name}
                width={144}
                height={144}
                layout={"responsive"}
                objectFit="cover"
              />
            </div>
          </div>
          <div className={style.modal_mobile_detail}>
            <p>{product.product_name}</p>
            <span className={style.modal_mobile_subtitle}>Color</span>
            <ul className="flex gap-4 mt-3">
              <RadioButtonGroup
                type="Color"
                values={colors}
                selectedOption={selectedColorOption}
                setSelectedOption={setSelectedColorOption}
              />
            </ul>

            <span className={style.modal_mobile_subtitle}>Size</span>
            <ul className="flex gap-3 mt-2">
              <RadioButtonGroup
                type="Size"
                values={size}
                selectedOption={selectedSizeOption}
                setSelectedOption={setSelectedSizeOption}
              />
            </ul>
          </div>
        </div>
        <div className="grid place-items-center">
          <span className={style.modal_mobile_subtitle}>Quantity</span>
          <div className={`flex items-center gap-2${"pointer-events-none"}`}>
            <button
              onClick={minusQuantity}
              className="p-2 rounded-full bg-black/5"
            >
              <span>
                <MinusSmIcon />
              </span>
            </button>
            <div className="w-12 text-center">
              <p className="text-3xl font-bold">{quantity.toString()}</p>
            </div>
            <button
              onClick={addQuantity}
              className="p-2 rounded-full bg-black/5"
            >
              <span>
                <PlusSmIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
      <FooterSection
        handleClick={handleClick}
        toggleStateHandle={toggleStateHandler}
        selectedSizeOption={selectedSizeOption}
        isInCart={isInCart}
      />
    </div>
  );
};

function FooterSection(props: any) {
  const { toggleStateHandler } = ToggleState();
  return (
    <div className={style.modal_mobile_footer}>
      <button
        onClick={() => {
          toggleStateHandler!("modal_mobile");
          props.handleClick();
        }}
        className={`${style.modal_mobile_cart} disabled:bg-black/30 disabled:text-white/30 disabled:cursor-not-allowed`}
        disabled={props.selectedSizeOption === undefined}
      >
        {" "}
        {props.isInCart ? (
          <>
            <span>
              <ShoppingCartIconFill />
            </span>
            <span>Remove from cart</span>
          </>
        ) : (
          <>
            <span>
              <ShoppingCartIcon />
            </span>
            <span>Add to cart</span>
          </>
        )}
      </button>
    </div>
  );
}

export default ProductSelected;

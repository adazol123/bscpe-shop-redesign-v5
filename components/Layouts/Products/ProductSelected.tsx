import {
  MinusSmIcon,
  PlusSmIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { ShoppingCartIcon as ShoppingCartIconFill } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { addToCart, CartItemProps, removeFromCart, updatePrice } from "../../../features/cart/cart-slice";
import { ProductItemProps } from "../../../features/shop/product-slice";
import { toggleState } from "../../../features/toggle/toggle-state-slice";
import { useAppDispatch, useAppSelector } from "../../../utils/app/hook";
import useQuantity from "../../../utils/hooks/useQuantity";
import RadioButtonGroup from "../../UI/Button/RadioButtonGroup/RadioButtonGroup";
import ButtonStandard from "../../UI/Button/Standard/ButtonStandard";
import { ProductCart } from "../../UI/Cards/CardCart";
import ProductVariants from "./ProductVariants";

import style from "./style.module.css";

import { colors } from "./ProductVariants";

//TODOS: need to fix product types 
const ProductSelected = ({ product }: { product: ProductItemProps }) => {
  const dispatch = useAppDispatch()
  let router = useRouter()
  let { quantity, setQuantity, addQuantity, minusQuantity } = useQuantity();

  let [selectedColorOption, setSelectedColorOption] = useState<
    string | undefined
  >(colors[0].option);
  let [selectedSizeOption, setSelectedSizeOption] = useState<
    string | undefined
  >();

  //TODOS : need to add carts states on redux store state --> completed 05/09/2022
  let carts = useAppSelector(state => state.cart.carts)

  const modal_mobile_state = useAppSelector(state => state.toggles.modal_mobile)

  let [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    let productIsInCart = carts.find(
      (item) => item.name === product.name
    );
    setSelectedColorOption(colors[0].option);

    if (productIsInCart) {
      setIsInCart(true);
      setQuantity(productIsInCart.quantity as number);
    } else {
      setIsInCart(false);
    }

    return () => {
      if (productIsInCart) {
        setQuantity(productIsInCart.quantity as number);
        setSelectedSizeOption(productIsInCart?.size);
      } else {
        setQuantity(1);
        setSelectedColorOption(undefined);
        setSelectedSizeOption(undefined);
      }
    };
  }, [carts, product, isInCart]);

  let handleClick = () => {
    if (selectedColorOption && selectedSizeOption) {
      let prodItem: CartItemProps = {
        product_id: product.product_id,
        name: product.name,
        price: parseInt((product.price * 0.6).toFixed(2)),
        color: selectedColorOption,
        size: selectedSizeOption,
        quantity,
        brand: product.metatags.brand,
        category: product.metatags.category,
        discount: 0,
        images: product.metatags.images

      };
      if (isInCart) {
        dispatch(removeFromCart(prodItem.product_id))

        setQuantity(1);
      } else {
        dispatch(addToCart({ item: prodItem }))
        dispatch(updatePrice())
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 my-4">
        <div className="flex gap-4">
          <div>
            <div className="overflow-hidden rounded-md w-32 h-full relative">
              <Image
                src={product.metatags.images[0].url}
                alt={product.name}
                layout={"fill"}
                objectFit="cover"
              />
            </div>
          </div>
          <div className={style.modal_mobile_detail}>
            <span className='line-clamp-3 text-sm'>{product.name}</span>
            <div className='flex flex-col gap-2'>

              <h2> {product.price.toFixed(2)}</h2>
              <ButtonStandard
                size='medium'
                styled="outline"
                className={'w-fit'}
                onClick={() => {
                  router.push(`/products/${product.product_id}`)
                  dispatch(toggleState("modal_mobile"))
                }}
              >
                Details
              </ButtonStandard>
            </div>
          </div>

        </div>
        <ProductVariants
          selectedColorOption={selectedColorOption}
          selectedSizeOption={selectedSizeOption}
          setSelectedColorOption={setSelectedColorOption}
          setSelectedSizeOption={setSelectedSizeOption}

        />
      </div>
      <FooterSection
        handleClick={handleClick}
        toggleStateHandle={modal_mobile_state}
        selectedSizeOption={selectedSizeOption}
        isInCart={isInCart}
      />
    </div>
  );
};

function FooterSection(props: any) {
  const dispatch = useAppDispatch()
  let { quantity, setQuantity, addQuantity, minusQuantity } = useQuantity();

  return (
    <div className={style.modal_mobile_footer}>
      <div className="grid place-items-center">
        {/* <span className={style.modal_mobile_subtitle}>Quantity</span> */}
        <div className={`flex items-center gap-1 ${props.isInCart ? "pointer-events-none text-black/30 " : " text-black"}`}>
          <button
            onClick={minusQuantity}
            className="p-1 rounded border "
          >
            <span>
              <MinusSmIcon className="w-4 h-4" />
            </span>
          </button>
          <div className="w-6 text-center">
            <p className={` "text-xl font-bold " ${props.isInCart ? "text-marine-700/30" : "text-marine-700"}`}>{quantity.toString()}</p>
          </div>
          <button
            onClick={addQuantity}
            className="p-1 rounded border "
          >
            <span>
              <PlusSmIcon className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
      <ButtonStandard
        onClick={() => {
          dispatch(toggleState('modal_mobile'));
          props.handleClick();
        }}
        size='base'
        // className={`${style.modal_mobile_cart} disabled:bg-marine-700/30 disabled:text-white/30 disabled:cursor-not-allowed`}
        className='w-full'
        disabled={props.selectedSizeOption === undefined}
      >
        {" "}
        {props.isInCart ? (
          <>
            <span>
              <ShoppingCartIconFill className="w-4 h-4" />
            </span>
            <span>Remove from cart</span>
          </>
        ) : (
          <>
            <span>
              <ShoppingCartIcon className="w-4 h-4" />
            </span>
            <span>Add to cart</span>
          </>
        )}
      </ButtonStandard>
    </div>
  );
}

export default ProductSelected;

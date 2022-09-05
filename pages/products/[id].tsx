import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ButtonStandard from '../../components/UI/Button/Standard/ButtonStandard'
import { addToCart, CartItemProps, incrementQuantity, removeFromCart, updatePrice } from '../../features/cart/cart-slice'
import { useAppDispatch, useAppSelector } from '../../utils/app/hook'
import { motion } from 'framer-motion'
import useQuantity from '../../utils/hooks/useQuantity'
import { MinusSmIcon, PlusSmIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { MinusSmIcon as MinusSmIconFill, PlusSmIcon as PlusSmIconFill, ShoppingCartIcon as ShoppingCartIconFill } from '@heroicons/react/solid'
import ButtonLink from '../../components/UI/Button/Link/ButtonLink'
import BscpeLoader from '../../components/Layouts/Loader/BscpeLoader'
import ProductVariants, { colors } from '../../components/Layouts/Products/ProductVariants'

const ProductItem = () => {
    const router = useRouter()
    const currentProduct = useAppSelector(state => state.shop.products.find(item => item.product_id === router.query.id))
    const cart = useAppSelector(state => state.cart.carts.find(item => item.product_id === currentProduct?.product_id))
    const dispatch = useAppDispatch()
    const { quantity, addQuantity, minusQuantity, setQuantity } = useQuantity()
    let [selectedColorOption, setSelectedColorOption] = useState<
        string | undefined
    >(colors[0].option);
    let [selectedSizeOption, setSelectedSizeOption] = useState<
        string | undefined
    >();
    let [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        let productIsInCart = cart
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
    }, [cart, isInCart]);

    if (!currentProduct) return <BscpeLoader />

    const handleAddToCart = () => {
        if (selectedColorOption && selectedSizeOption) {
            let prodItem: CartItemProps = {
                product_id: currentProduct.product_id,
                name: currentProduct.name,
                price: parseInt((currentProduct.price * 0.6).toFixed(2)),
                color: selectedColorOption,
                size: selectedSizeOption,
                quantity,
                brand: currentProduct.metatags.brand,
                category: currentProduct.metatags.category,
                discount: 0,
                images: currentProduct.metatags.images

            };
            if (isInCart) {
                dispatch(removeFromCart(prodItem.product_id))

                setQuantity(1);
            } else {
                dispatch(addToCart({ item: prodItem }))
                dispatch(updatePrice())
            }
            router.back()
        }

    }

    return (
        <motion.div className='container mx-auto'
            layoutId={`wrapper-${currentProduct.product_id}`}
        >
            <div className='flex flex-col md:flex-row md:mt-8'>

                <motion.div className='relative w-[calc(100%)] md:w-1/2 min-h-[60vh] md:min-h-80'
                    layout
                    layoutId={`image-${currentProduct.product_id}`}
                >

                    <Image
                        src={currentProduct.metatags.images[0].url}
                        alt={currentProduct.name}
                        layout='fill'
                        objectFit='cover'
                    />
                </motion.div>
                <div className='flex flex-col gap-8'>
                    <div className="flex justify-between w-[calc(100%-3rem)] my-6 mx-6">
                        <h2 className='max-w-[25ch] text-theme-gray-700 font-light'>{currentProduct.name}</h2>
                        <h2 >₱ {currentProduct.price.toFixed(2)}</h2>
                    </div>
                    <div className='w-[calc(100%-3rem)] mx-6'>
                        <span>Select variants</span>
                        <ProductVariants
                            selectedColorOption={selectedColorOption}
                            selectedSizeOption={selectedSizeOption}
                            setSelectedColorOption={setSelectedColorOption}
                            setSelectedSizeOption={setSelectedSizeOption}
                        />
                    </div>
                    <div className='w-[calc(100%-3rem)] mx-6'>
                        <span>Product Details</span>
                        <div>
                            <p>{currentProduct.description}</p>
                        </div>
                    </div>
                    <div className='w-[calc(100%-3rem)] mx-6'>
                        <span>Size Guide</span>
                        <div>
                            <p>{currentProduct.description}</p>
                        </div>
                    </div>
                    <div className='h-16' />

                    <div className='fixed md:static  w-full bottom-0 bg-white md:bg-transparent inset-x-0 py-4 px-6'>
                        <div className='flex gap-2 w-full'>
                            <div className={`flex items-center gap-1  ${isInCart ? "pointer-events-none text-black/30 " : " text-black"}`}>
                                <button
                                    onClick={minusQuantity}
                                    className="p-1 rounded border "
                                >
                                    <span>
                                        <MinusSmIcon className="w-4 h-4" />
                                    </span>
                                </button>
                                <div className="w-6 text-center">
                                    <p className={`text-xl font-bold text-marine-700`}>{quantity.toString()}</p>
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
                            <ButtonStandard
                                className={'w-full md:w-fit'}
                                disabled={selectedSizeOption === undefined}
                                onClick={handleAddToCart}
                            >

                                {isInCart ? (
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
                                        <span>Add to Cart - ₱ {Math.floor(currentProduct.price * quantity).toFixed(2)}</span>
                                    </>
                                )}

                            </ButtonStandard>
                            {/* <ButtonLink

                    >
                        <>
                            <span>
                                <ShoppingCartIcon className="w-4 h-4" />
                            </span>
                            <span className='whitespace-nowrap py-2'>Add to cart</span>
                        </>

                    </ButtonLink> */}
                        </div>
                    </div>

                </div>
            </div>
        </motion.div >
    )
}

export default ProductItem
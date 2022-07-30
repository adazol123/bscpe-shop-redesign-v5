import { createContext, useContext, useReducer } from "react";
import { ProductCart } from "../../../components/UI/Cards/CardCart";
import { ProductList } from "../Product/ProductState";
import shopReducer, { initialCartState } from "./shopReducer";
export interface TypeJSX {
  [key: string]: JSX.Element | JSX.Element[] | null;
}

export interface Product {
  name: string;
  price: number;
  quantity: number;
}

const ShopContext = createContext(initialCartState);

export const ShopStateProvider = ({ children }: TypeJSX) => {
  const [state, dispatch] = useReducer(shopReducer, initialCartState);

  const addToCart = (product: ProductCart) => {
    const updatedCart = state.carts.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        carts: updatedCart,
      },
    });
  };
  const removeFromCart = (product: ProductCart) => {
    const updatedCart = state.carts.filter(
      (currentCart: ProductCart) => currentCart.name !== product.name
    );
    updatePrice(updatedCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        carts: updatedCart,
      },
    });
  };

  const updatePrice = (products: []) => {
    let total = 0;
    let totalQuantity = 0;
    console.log(products);
    products.forEach((product: ProductCart) => {
      total += product?.price * product?.quantity;
      totalQuantity += product?.quantity;
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total,
        totalQuantity,
      },
    });
  };

  let value: any = {
    total: state.total,
    totalQuantity: state.totalQuantity,
<<<<<<< HEAD
    carts: state.carts,
=======
    carts: state.products,
>>>>>>> 4849cd433e3cd71db7b9bd451e397dcc8f089ade
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const ShopState = () => {
  return useContext(ShopContext);
};

export default ShopState;

import { DocumentData } from "firebase/firestore";

interface ProductCart {
  product_id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
}

interface Cart {
  total: number;
  totalQuantity: number;
  carts: ProductCart[];
  addToCart?: (item: ProductCart) => void;
  removeFromCart?: (item: ProductCart) => void;
}

export const initialCartState: Cart = {
  total: 0,
  totalQuantity: 0,
  carts: [],
};

const shopReducer = (
  state: Cart,
  action: { type: string; payload: DocumentData }
) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carts: payload.carts,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        carts: payload.carts,
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        total: payload.total,
        totalQuantity: payload.totalQuantity,
      };

    default:
      throw new Error(`No case for type ${type} found in show reducer`);
  }
};

export default shopReducer;

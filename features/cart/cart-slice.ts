import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItemProps } from "../shop/product-slice";

export interface CartItemProps {
  name: string;
  price: number;
  product_id: string;
  quantity: number;
  brand: string;
  discount: number;
  category: string;
  size: string;
  color: string;
  images: {
    url: string;
  }[];
}

interface CartProps {
  carts: CartItemProps[];
  total: number;
  totalQuantity: number;
  selected: CartItemProps | null;
}



const initialState: CartProps = {
  carts: [],
  total: 0,
  totalQuantity: 0,
  selected: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.carts = [];
    },
    addToCart: (
      state,
      {
        payload,
      }: PayloadAction<{
        readonly item: CartItemProps;
        // readonly misc: {
        //   quantity: number;
        //   color: string;
        //   size: string;
        // };
      }>
    ) => {
      state.carts.push(payload.item);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.carts = state.carts.filter(
        (item) => item.product_id !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      console.log(action);
    },
    decrementQuantity: (state, action) => {
      const currentItem = state.carts.find(
        (item) => item.product_id === action.payload
      );
      if (currentItem) {
        if (currentItem.quantity > 0) {
          currentItem.quantity--;
        } else {
          state.carts = state.carts.filter(
            (item) => item.product_id !== action.payload
          );
        }
      }
    },

    updatePrice: (state) => {
      let totalAmount = 0;
      let totalQuantity = 0;
      state.carts.forEach((item) => {
        totalAmount += item.price * item.quantity;
      });
      state.total = totalAmount;

      state.totalQuantity = state.carts.reduce(
        (acc, current) => acc + current.quantity,
        0
      );
    },
    setSelectedItem: (state, action) => {
      state.selected = action.payload as CartItemProps;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updatePrice,
  setSelectedItem,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

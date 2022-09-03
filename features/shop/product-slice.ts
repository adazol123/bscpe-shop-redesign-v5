import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";

interface ProductItemProps {
  name: string;
  description: string;
  owner: string;
  metatags: {
    brand: string;
    category: string;
    images: {
      url: string;
    }[];
    sizes: string[];
    variants: {
      [color: string]: {
        name: string;
        quantity: number;
        price: number;
      };
    };
    others?: {
      discount_price: number;
    };
  };
}

interface ProductDataProps {
  products: ProductItemProps[];
}

const initialState: ProductDataProps = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, action: PayloadAction<ProductItemProps[]>) => {
      state.products = action.payload;
    },
  },
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

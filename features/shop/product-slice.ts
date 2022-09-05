import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData, getDocs } from "firebase/firestore";
import { docQuery } from "../../auth/firebase";
import { RootState } from "../../utils/app/store";

enum StatusLike {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}

export interface ProductItemProps {
  name: string;
  description: string;
  owner: string;
  product_id: string;
  price: number;
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

interface ShopProps {
  products: ProductItemProps[];
  status: keyof typeof StatusLike;
  error: string | undefined;
}

const initialState: ShopProps = {
  products: [],
  status: "idle",
  error: undefined,
};

/**
 * async call
 */
export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    let productTest = await getDocs(docQuery);
    return productTest.docs.map((item) => item.data());
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload as ProductItemProps[];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

export const selectAppProducts = (state: RootState) => state.shop.products;

export const selectProductById = (state: RootState, product_id: string) =>
  state.shop.products.find((item) => item.product_id === product_id);

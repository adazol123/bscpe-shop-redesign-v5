import { Auth, Unsubscribe } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { ProductList } from "./ProductState";

interface Product {
  products: DocumentData | null;
  productSelected?: ProductList;
  setProductSelected?: React.Dispatch<
    React.SetStateAction<ProductList | undefined>
  >;
}

export const initialProductState: Product = {
  products: null,
  productSelected: undefined,
  setProductSelected: undefined,
};

const productReducer = (
  state: Product,
  action: { type: string; payload: DocumentData | null }
) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: payload?.products,
      };

    default:
      throw new Error(`No case for type ${type} found in show reducer`);
  }
};

export default productReducer;

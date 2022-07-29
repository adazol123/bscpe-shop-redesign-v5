import { Auth, Unsubscribe } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

interface Product {
  products: DocumentData | null;
}

export const initialAcountState: Product = { products: null };

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

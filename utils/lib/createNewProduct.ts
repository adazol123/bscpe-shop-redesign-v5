import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../auth/firebase";

export interface ProductListTypes {
  ownerID: string | null | undefined;
  category: string;
  name?: string;
  description?: string;
  metatags: {
    type: {
      [types: string]: string | number | undefined;
    };
    price: number;
    sizes: string[];
    images?: string;
  };
}

/**
 * @description Create new Product Item format
 * @param product --> object `{
  *   ownerID: string;
  *   category: string;
  *   name: string;
  *   description: string;
  *   metatags: {
        type: {
          color: string;
          quantity: number;
        };
        price: number;
        sizes: string[];
        images: string;
      };
 *  }`
 * @returns 
 * A `Promise` that resolves by adding the product to firestore `product` collection.
 */
export const createNewProduct = (product: ProductListTypes) => {
  let productCollectRef = collection(db, "products");
  return addDoc(productCollectRef, product)
    .then(() => {
      console.log("success!");
    })
    .catch((error) => console.error(error));
};

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../auth/firebase";

export interface ProductListTypes {
  ownerID: string | null;
  category: string;
  name: string;
  description: string;
  metatags: {
    types: {
      [type: string]: string | number;
    };
    price: number;
    sizes: string[];
    images: string;
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
        types: {
          color: string;
          color_value: string;
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
  let productCollectRef = collection(db, "products_dev_tests");
  return addDoc(productCollectRef, product)
    .then((result) => {
      console.log("success!", result);
    })
    .catch((error) => console.error(error));
};

import React, { useContext, useEffect, useState } from "react";
import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";
import { createContext } from "react";
import { auth, db } from "../../../auth/firebase";

export interface ProductList {
  product_id: string;
  product_name: string;
  product_image: string;
  product_description: string;
  product_quantity: number;
  product_price: number;
  // product_size: string[];
  // product_color: string[];
  product_category?: string;
  product_owner?: string;
}

const ProductContext = createContext({});
let productRef = collection(db, "products");

interface ViewProduct {
  get(): void;
}

class Item implements ViewProduct {
  product_id?: string;
  product_name?: string;
  product_description?: string;
  product_image?: string;
  product_quantity?: number;
  product_price?: number;
  product_category?: string;
  product_owner?: string;
  get(): never;

  get() {
    return {
      product_id: this.product_id,
      product_name: this.product_name,
      product_description: this.product_description,
      product_image: this.product_image,
      product_quantity: this.product_quantity,
      product_price: this.product_price || null,
      product_category: this.product_category,
      product_owner: this.product_owner,
    };
  }
}

class Product extends Item {
  constructor(product_id?: string, product?: DocumentData) {
    super();

    this.product_id = product_id;
    this.product_name = product?.product_name;
    this.product_description = product?.product_description;
    this.product_image = product?.product_image;
    this.product_quantity = product?.product_quantity;
    this.product_price = product?.price;
    this.product_category = product?.product_category;
    this.product_owner = product?.ownerID;
  }
}

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let [products, setProducts] = useState<any[]>([]);
<<<<<<< HEAD

  let [productSelected, setProductSelected] = useState<ProductList>();

  useEffect(() => {
    let prodQuery = query(productRef, limit(50));
=======
  useEffect(() => {
    let prodQuery = query(productRef, limit(10));
>>>>>>> 4849cd433e3cd71db7b9bd451e397dcc8f089ade
    let unsubscribe = onSnapshot(prodQuery, (snapshot) => {
      snapshot.forEach((doc) => {
        let item = new Product(doc.id, doc.data());
        setProducts((prev) => [...prev, item]);
      });
    });

    return () => {
      unsubscribe();
      setProducts([]);
    };
  }, []);
  return (
    <ProductContext.Provider
      value={{
        products,
<<<<<<< HEAD
        productSelected,
        setProductSelected,
=======
>>>>>>> 4849cd433e3cd71db7b9bd451e397dcc8f089ade
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const ProductState = () => useContext(ProductContext);

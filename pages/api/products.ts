// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Unsubscribe } from "firebase/auth";
import {
  collection,
  doc,
  DocumentData,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../auth/firebase";

type Data = {
  products: DocumentData | any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let productRef = collection(db, "products");

  async function getProduct() {
    let datos: DocumentData[] = [];

    onSnapshot(query(productRef, limit(20)), (snapshot) => {
      return snapshot.forEach((doc) => datos.push(doc.data()));
    });

    console.log(datos.length);
    return new Promise((resolve) => {
      resolve(datos);
      setTimeout(() => {
        resolve(datos);
      }, 100);
    });
  }

  res.status(200).json({
    products: await getProduct(),
  });
}

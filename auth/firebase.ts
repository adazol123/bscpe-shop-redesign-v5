import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// let config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
// };

let firebaseConfig = {
  apiKey: "AIzaSyDK8IZ-MNspBOOJ_S7k35HbDU2Q92HFiS8",
  authDomain: "bscpe-store-v2.firebaseapp.com",
  databaseURL:
    "https://bscpe-store-v2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bscpe-store-v2",
  storageBucket: "bscpe-store-v2.appspot.com",
  messagingSenderId: "636404332362",
  appId: "1:636404332362:web:f4f7cc1bb6bbe66c3633b3",
  measurementId: "G-7LSYK1Y8L6",
};
export const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// export { auth, db, storage };

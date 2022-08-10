import { Auth, onAuthStateChanged, Unsubscribe, User } from "firebase/auth";
import {
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useContext, useReducer } from "react";
import { auth, db } from "../../../auth/firebase";
import accountReducer, { initialAcountState } from "./accountReducer";
import config from "../../services/config.json";
interface UID {
  uid?: string | null;
}

/** Types for value @var `value` */
interface UserType {
  authUser: User | null;
  user: User | null;
  payment: DocumentData | null;
  shipping: DocumentData | null;
  getUser: (auth: Auth) => Unsubscribe;
  getCurrentAuth: (auth: Auth) => Unsubscribe;
  getPaymentInfo(user: UID | null): void;
  getShipping(user: UID | null): void;
}

const AccountContext = createContext(initialAcountState);

export const AccountStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(accountReducer, initialAcountState);

  /**
   * USER STATE LISTENER
   *
   */

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     let userAuth = user;

  //     dispatch({
  //       type: 'GET_AUTH',
  //       payload: {
  //         authUser: userAuth,
  //       },
  //     });
  //   }
  // });


  const getCurrentAuth = (auth: Auth) => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let userAuth = user;

        dispatch({
          type: 'GET_AUTH',
          payload: {
            authUser: userAuth,
          },
        });
      }
    });
    return unsubscribe;
  };

  const getUser = (auth: Auth) => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let userAuth = user;

        dispatch({
          type: 'GET_USER',
          payload: {
            user: userAuth,
          },
        });
      }
    });
    return unsubscribe;
  };

  /**
   * get payment information (virtual card) from firestore database dependent with currentuser logged in
   * */
  const getPaymentInfo = (user: UID | null) => {
    if (user) {
      let paymentRef = doc(db, `${config.USER}${user?.uid}${config.PAYMENT}`);
      onSnapshot(paymentRef, (doc) => {
        dispatch({
          type: 'GET_PAYMENT',
          payload: {
            payment: doc.data(),
          },
        });
      });
    }
  };

  /**
   * Get shipping address information from firestore database dependent with currentuser logged in
   * */
  const getShipping = (user: UID | null) => {
    if (user) {
      let shippingRef = doc(db, `${config.USER}${user?.uid}${config.ADDRESS}`);
      onSnapshot(shippingRef, (doc) => {
        dispatch({
          type: 'GET_SHIPPING',
          payload: {
            shipping: doc.data(),
          },
        });
      });
    }
  };

  let value: Partial<UserType> = {
    authUser: state?.authUser,
    user: state?.user,
    payment: state?.payment,
    shipping: state?.shipping,
    getUser,
    getCurrentAuth,
    getPaymentInfo,
    getShipping,
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

const AccountState = () => {
  return useContext(AccountContext);
};

export default AccountState;

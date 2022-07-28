import { Auth, onAuthStateChanged, Unsubscribe } from "firebase/auth";
import {
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useContext, useReducer } from "react";
import { auth } from "../../../auth/firebase";
import accountReducer, { initialAcountState } from "./accountReducer";

interface UID {
  uid?: string | null;
}

/** Types for value @var `value` */
interface User {
  user: DocumentData | null;
  getUser?: (auth: Auth) => Unsubscribe;
  payment?: DocumentData | null;
  shipping?: DocumentData | null;
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
  const getUser = (auth: Auth) => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        let userAuth = user;

        dispatch({
          type: "GET_USER",
          payload: {
            user: userAuth,
          },
        });
      } else {
        dispatch({
          type: "GET_USER",
          payload: {
            user: null,
          },
        });
      }
    });
    return unsubscribe;
  };

  let value: User = {
    user: state?.user,
    getUser,
  };

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
};

const AccountState = () => {
  return useContext(AccountContext);
};

export default AccountState;

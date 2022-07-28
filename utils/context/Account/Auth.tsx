import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "../../../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  Unsubscribe,
  Auth,
  User,
  UserCredential,
} from "firebase/auth";
import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";
import AccountState from "./AccountState";

interface AuthUser {
  user?: DocumentData | null;
  signup?: (email: string, password: string) => Promise<UserCredential>;
  signin?: (email: string, password: string) => Promise<UserCredential>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthUser>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  /** This suspend code used as buffer for initial auth state
   *   as getting initial state value of null when page is hard reloaded from url
   *  the auth state observer is not updating the global user state at context provider realtime (BUG)
   */

  // const [isLoggedIn] = useState(
  //   localStorage.getItem("user-logged-in") === "yes"
  // );

  /** Account Reducer - (getUser) listen for change on login state */
  let { user, getUser } = AccountState();

  //EMAIL AND PASSWORD FIREBASE AUTH PROVIDER (SIGN UP)
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //EMAIL AND PASSWORD FIREBASE AUTH PROVIDER (SIGN IN)
  const signin = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //LOGOUT FIREBASE AUTH
  const logout = () => {
    // setCurrentUser(null);
    return signOut(auth).then(() => {
      // localStorage.setItem("user-logged-in", "no");
      console.log("logged out");
    });
  };

  //FIREBASE CURRENT LOGGED USER OBSERVER
  useEffect(() => {
    let unsubscribe = getUser!(auth);
    return () => {
      // localStorage.setItem("user-logged-in", "no");
      if (unsubscribe) {
        unsubscribe();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        logout,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

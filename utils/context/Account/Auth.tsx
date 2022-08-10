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
  signInWithPopup,
  GoogleAuthProvider,
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
  authUser: User | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signup: (email: string, password: string) => Promise<UserCredential>;
  signin: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  signinWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<Partial<AuthUser>>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  /** This suspend code used as buffer for initial auth state
   *   as getting initial state value of null when page is hard reloaded from url
   *  the auth state observer is not updating the global user state at context provider realtime (BUG)
   */

  // const [isLoggedIn] = useState(
  //   localStorage.getItem("user-logged-in") === "yes"
  // );

  /** Account Reducer - (getUser) listen for change on login state */
  let { user, authUser, getUser } = AccountState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //EMAIL AND PASSWORD FIREBASE AUTH PROVIDER (SIGN UP)
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //EMAIL AND PASSWORD FIREBASE AUTH PROVIDER (SIGN IN)
  const signin = (email: string, password: string) => {
    setIsAuthenticated(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //GOOGLE PROVIDER
  let googleProvider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
      .then((user) => console.log("> [google] : ", user))
      .catch((error) => console.log(error?.code));
  };

  //LOGOUT FIREBASE AUTH
  const logout = () => {
    // setCurrentUser(null);
    setIsAuthenticated(false);
    return signOut(auth).then(() => {
      // localStorage.setItem("user-logged-in", "no");
      console.log("logged out");
    });
  };

  //FIREBASE CURRENT LOGGED USER OBSERVER
  useEffect(() => {
    let unsubscribe = getUser!(auth);
    setIsLoading(false);
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
        authUser,
        user,
        isAuthenticated,
        isLoading,
        signup,
        logout,
        signin,
        signinWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);

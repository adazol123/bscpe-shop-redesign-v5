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
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";
import AccountState from "./AccountState";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { login, logout } from "../../../features/user/user-auth-slice";

interface AuthUser {
  authUser: User | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signup: (email: string, password: string) => Promise<UserCredential>;
  signin: (email: string, password: string) => Promise<UserCredential>;
  logoutUser: () => void;
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
  const user = useAppSelector(state => state.auth.user)
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
  const logoutUser = () => {
    // setCurrentUser(null);
    dispatch(logout())
  };

  //FIREBASE CURRENT LOGGED USER OBSERVER
  const dispatch = useAppDispatch();
  useEffect(() => {
    let unsubscribeUser = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
    
    return () => {
      unsubscribeUser()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        signup,
        logoutUser,
        signin,
        signinWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);

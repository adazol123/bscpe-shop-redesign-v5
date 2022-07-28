import { Auth, Unsubscribe } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

interface User {
  user: DocumentData | null;
  getUser?: (auth: Auth) => Unsubscribe;
  payment?: DocumentData | null;
  shipping?: DocumentData | null;
}

export const initialAcountState: User = { user: null };

const accountReducer = (
  state: User,
  action: { type: string; payload: DocumentData | null }
) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_USER":
      return {
        ...state,
        user: payload?.user,
      };
    case "GET_PAYMENT":
      return {
        ...state,
        payment: payload?.payment,
      };
    case "UPDATE_PAYMENT":
      return {
        ...state,
        payment: payload?.payment,
      };
    case "GET_SHIPPING":
      return {
        ...state,
        shipping: payload?.shipping,
      };
    case "UPDATE_SHIPPING":
      return {
        ...state,
        shipping: payload?.shipping,
      };
    default:
      throw new Error(`No case for type ${type} found in show reducer`);
  }
};

export default accountReducer;

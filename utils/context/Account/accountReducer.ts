import { Auth, Unsubscribe, User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

enum StateEnum {
  GET_AUTH,
  GET_USER,
  GET_PAYMENT,
  UPDATE_PAYMENT,
  GET_SHIPPING,
  UPDATE_SHIPPING,
}

interface UserType {
  authUser: User | null;
  user: User | null;
  getUser: (auth: Auth) => Unsubscribe;
  payment: DocumentData | null;
  shipping: DocumentData | null;
}

type TypeString = keyof typeof StateEnum;

export const initialAcountState: Partial<UserType> = { user: null };

const accountReducer = (
  state: Partial<UserType>,
  action: { type: TypeString; payload: Partial<UserType> }
) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_AUTH":
      return {
        ...state,
        authUser: payload.authUser,
        
      };
    case "GET_USER":
      return {
        ...state,
        user: payload.user,
      };
    case "GET_PAYMENT":
      return {
        ...state,
        payment: payload.payment,
      };
    case "UPDATE_PAYMENT":
      return {
        ...state,
        payment: payload.payment,
      };
    case "GET_SHIPPING":
      return {
        ...state,
        shipping: payload.shipping,
      };
    case "UPDATE_SHIPPING":
      return {
        ...state,
        shipping: payload.shipping,
      };
    default:
      return state;
    // throw new Error(`No case for type ${type} found in show reducer`);
  }
};

export default accountReducer;

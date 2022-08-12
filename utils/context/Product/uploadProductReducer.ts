import { Auth, Unsubscribe } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import { ProductList } from "./ProductState";



interface MetaNestedTypes {
  color: string;
  quantity: number;
  color_value: string;
}

interface MetatagTypes {
  types: Partial<MetaNestedTypes>;
  price: number;
  sizes: string[];
  images: string;
}

export interface ProductListTypes {
  ownerID: string | null;
  category: string;
  name: string;
  description: string;
  metatags: Partial<MetatagTypes>;
}

type KeyofProductList = keyof ProductListTypes;
type KeyofMetatags = keyof MetatagTypes;
type KeyofMetaNestedTypes = keyof MetaNestedTypes;

interface FieldStruc {
  type: "FIELD";
  field: Exclude<KeyofProductList, "metatags"> | string;
  payload: Exclude<ProductListTypes[KeyofProductList], Partial<MetatagTypes>>;
}
interface MetatagsStruc {
  type: "METATAGS";
  field: Exclude<KeyofMetatags, "types">;
  payload:
    | Exclude<MetatagTypes[KeyofMetatags], Partial<MetaNestedTypes>>
    | any[];
}

interface TypesStruc {
  type: "TYPES";
  field: "color" | "quantity" | "color_value" | string;
  payload: MetaNestedTypes[KeyofMetaNestedTypes];
}
interface SizeStruc {
  type: "SIZES";
  field: never;
  payload: [MetaNestedTypes[KeyofMetaNestedTypes]];
}

export const initialProductListState: Partial<ProductListTypes> = {
  ownerID: null,
  category: "men",
  name: "",
  description: "",
  metatags: {
    types: {
      color: "",
      color_value: "#000000",
      quantity: 0,
    },
    price: 0,
    sizes: [],
    images: "",
  },
};

type ActionType =
  | MetatagsStruc
  | TypesStruc
  | FieldStruc
  | SizeStruc
  | {
      type: "clear";
      field: "all";
      payload: null;
    };

const uploadProductReducer = (
  state: Partial<ProductListTypes>,
  action: ActionType
) => {
  const { type, payload, field } = action;

  switch (type) {
    case "METATAGS":
      return {
        ...state,
        metatags: {
          ...state.metatags,
          [field]: payload,
        },
      };
    case "FIELD":
      return {
        ...state,
        [field]: payload,
      };
    case "TYPES":
      return {
        ...state,
        metatags: {
          ...state.metatags,
          types: {
            ...state.metatags?.types,
            [field]: payload,
          },
        },
      };
    case "clear":
      return {
        ...initialProductListState,
      };

    default:
      return state;
  }
};

export default uploadProductReducer;

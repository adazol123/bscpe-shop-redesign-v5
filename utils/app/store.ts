import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../../features/user/user-auth-slice";
import toggleStateReducer from "../../features/toggle/toggle-state-slice";
import shopReducer from "../../features/shop/product-slice";
import cartReducer from "../../features/cart/cart-slice";
export const store = configureStore({
  reducer: {
    auth: userReducer,
    toggles: toggleStateReducer,
    shop: shopReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

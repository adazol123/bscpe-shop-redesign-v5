import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../../features/user/user-auth-slice";
import toggleStateReducer from "../../features/toggle/toggle-state-slice";
import shopReducer from "../../features/shop/product-slice";
import cartReducer from "../../features/cart/cart-slice";
import observerReducer from "../../features/toggle/observer-state-slice";
export const store = configureStore({
  reducer: {
    auth: userReducer,
    toggles: toggleStateReducer,
    shop: shopReducer,
    cart: cartReducer,
    observer: observerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

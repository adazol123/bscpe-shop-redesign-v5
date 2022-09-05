import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum StateLike {
  modal = "modal",
  cart = "cart",
  notification = "notification",
  side_bar = "side_bar",
  modal_mobile = "modal_mobile",
  pay_now = "pay_now",
}

type ToggleStateType = {
  [S in keyof typeof StateLike]: boolean;
};

const initialState: ToggleStateType = {
  modal: false,
  cart: false,
  notification: false,
  side_bar: false,
  modal_mobile: false,
  pay_now: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<keyof typeof StateLike>) => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { toggleState } = toggleSlice.actions;

export default toggleSlice.reducer;

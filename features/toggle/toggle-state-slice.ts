import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum StateLike {
  modal = "modal",
  cart = "cart",
  notification = "notification",
  side_bar = "side_bar",
  modal_mobile = "modal_mobile",
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
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<keyof typeof StateLike>) => {
      state[action.payload] = !state[action.payload];
    },
    toggleSidebar: (state) => {
      state.side_bar = !state.side_bar;
    },
  },
});

export const { toggleState } = toggleSlice.actions;

export default toggleSlice.reducer;

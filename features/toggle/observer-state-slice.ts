import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum StateLike {
  isIntersecting = "isIntersecting",
}

type ToggleStateType = {
  [S in keyof typeof StateLike]: boolean;
};

const initialState: ToggleStateType = {
  isIntersecting: true,
};

const observerSlice = createSlice({
  name: "observer",
  initialState,
  reducers: {
    toggleObserver: (state, action: PayloadAction<boolean>) => {
      state.isIntersecting = action.payload;
    },
  },
});

export const { toggleObserver } = observerSlice.actions;

export default observerSlice.reducer;

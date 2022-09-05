import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { RootState } from "../../utils/app/store";

enum StatusLike {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}

type CustomUserType = Pick<
  User,
  | "displayName"
  | "email"
  | "emailVerified"
  | "photoURL"
  | "phoneNumber"
  | "uid"
  | "providerId"
>;
interface UserProps {
  user: CustomUserType | null;
  status: keyof typeof StatusLike;
  error: string | undefined;
}

let initialState: UserProps = {
  user: null,
  status: "idle",
  error: undefined,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return new Promise<CustomUserType>((resolve) => {
    let unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        resolve({
          displayName: currentUser.displayName,
          email: currentUser.email,
          emailVerified: currentUser.emailVerified,
          phoneNumber: currentUser.phoneNumber,
          providerId: currentUser.providerId,
          uid: currentUser.uid,
          photoURL: currentUser.photoURL,
        });
        unsub();
      }
    });
  });
});

const userAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { login, logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;

export const selectCurrentuser = (state: RootState) => state.auth.user;

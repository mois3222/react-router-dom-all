import { createSlice } from "@reduxjs/toolkit";
import { Action, UserInfo, initialState } from "@/models";

export const persistLocalStorageUser = (userInfo: UserInfo) =>
  localStorage.setItem("user", JSON.stringify({ ...userInfo }));
export const clearLocalStorageUser = () => localStorage.removeItem("user");

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : initialState,
  reducers: {
    createUser: (_, action: Action) => {
      persistLocalStorageUser(action.payload);
      return action.payload;
    },
    updateUser: (state, action: Action) => {
      const rta = { ...state, ...action.payload };
      persistLocalStorageUser(rta);
      return rta;
    },
    resetUser: () => {
      clearLocalStorageUser();
      return initialState;
    },
  },
});

export const { createUser, resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

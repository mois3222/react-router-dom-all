import { AppStore } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices";
export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
  },
});

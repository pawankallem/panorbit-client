import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

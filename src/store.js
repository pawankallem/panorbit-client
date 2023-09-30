import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/redux/userSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
});

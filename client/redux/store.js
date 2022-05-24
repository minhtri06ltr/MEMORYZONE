import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import notifyReducer from "./notifySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notify: notifyReducer,
  },
});

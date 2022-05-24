import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import cartSlice from "./cartSlice";
import notifySlice from "./notifySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    notify: notifySlice,
    account: accountSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import cartSlice from "./cartSlice";
import notifySlice from "./notifySlice";
import orderSlice from "./orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    notify: notifySlice,
    account: accountSlice,
    order: orderSlice,
  },
});

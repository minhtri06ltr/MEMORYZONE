import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//reducer
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    loading: false,
    total: 0,
    error: false,
  },
  reducers: {
    addToCart(state, action) {
      console.log("call function");
      console.log(state, action);
      state.quantity += 1;
      state.products.push(action.payload);
    },
  },
  extraReducers: {},
});
export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;

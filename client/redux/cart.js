import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//reducer
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: Number,
    loading: false,
    error: false,
  },
  extraReducers: {},
});
export default cartSlice.reducer;

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
  extraReducers: {},
});
export default cartSlice.reducer;

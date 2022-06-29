import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderList: [],
  },
  reducers: {
    addOrder(state, action) {
      state.orderList.push(action.payload);
    },
    addOrderList(state, action) {
      state.orderList = action.payload;
    },
    clearOrder(state, action) {
      state.orderList = [];
    },
    updateOrder(state, action) {
      state.orderList.map((item) => {
        if (item._id === action.payload)
          item.isPaid = true;
      });
    },
  },
  extraReducers: {},
});
export default orderSlice.reducer;
export const {
  addOrder,
  addOrderList,
  clearOrder,
  updateOrder,
} = orderSlice.actions;

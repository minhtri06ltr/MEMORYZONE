import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderList: [],
  },
  reducers: {
    addOrder(state, action) {
      state.orderList.unshift(action.payload);
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
    cancelOrder(state, action) {
      state.orderList.filter((item) => {
        if (item._id === action.payload)
          item.orderStatus = 5;
      });
    },
  },
  extraReducers: {},
});
export default orderSlice.reducer;
export const {
  addOrder,
  addOrderList,
  cancelOrder,
  clearOrder,
  updateOrder,
} = orderSlice.actions;

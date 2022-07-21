import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "order",
  initialState: {
    addressList: [],
  },
  reducers: {
    updateAddressList(state, action) {
      state.addressList = action.payload;
    },
    addAddressList(state, action) {
      state.addressList = action.payload;
    },
    // clearOrder(state, action) {
    //   state.orderList = [];
    // },
    editAddress(state, action) {
      console.log(action);
      state.addressList.map((item, index) => {
        if (item._key === action.payload._key)
          state.addressList[index] =
            action.payload;
      });
    },
    // cancelOrder(state, action) {
    //   state.orderList.filter((item) => {
    //     if (item._id === action.payload)
    //       item.orderStatus = 5;
    //   });
    // },
  },
  extraReducers: {},
});
export default addressSlice.reducer;
export const {
  addAddressList,
  //   addOrderList,
  //   cancelOrder,
  updateAddressList,
  editAddress,
} = addressSlice.actions;

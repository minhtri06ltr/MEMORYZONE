import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    accessToken: "",
    user: {},
  },
  reducers: {
    loginSuccess(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    logout(state, action) {
      state.accessToken = "";
      state.user = {};
    },
  },
  extraReducers: {},
});
export default accountSlice.reducer;
export const { loginSuccess, logout } = accountSlice.actions;

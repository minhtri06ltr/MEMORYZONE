import { createSlice } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: {
    loading: false,
    error: false,
  },
  reducers: {
    loadingNotify(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
  extraReducers: {},
});
export default notifySlice.reducer;
export const { loadingNotify } = notifySlice.actions;

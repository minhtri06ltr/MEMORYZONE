import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//call API
export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=3&limit=9");
  const fomart = response.json();
  return fomart;
});
//reducer
export const testSlice = createSlice({
  name: "test",
  initialState: {
    photos: [],
    loading: false,
    error: false,
  },
  reducers: {
    createPhoto(state, action) {},
  },
  extraReducers: {
    //waiting api response
    [getPhotos.pending]: (state) => {
      state.loading = true;
    },
    //api responsed
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.loading = false;
    },
    //response fail
    [getPhotos.rejected]: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

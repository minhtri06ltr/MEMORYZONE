import { createSlice } from "@reduxjs/toolkit";

//reducer
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    getCartItemsFromLocalStorage(state, action) {
      state.products = action.payload.products;
      state.total = action.payload.total;
      state.quantity = action.payload.quantity;
    },
    addToCart(state, action) {
      let newProduct = true;
      state.total += action.payload.quantity * action.payload.price;
      state.products.map((item) => {
        if (item.id === action.payload.id) {
          item.quantity += action.payload.quantity;
          newProduct = false;
        }
      });
      if (newProduct) {
        state.quantity += 1;
        state.products.push(action.payload);
      }
    },
    increaseProduct(state, action) {
      let price = 0;
      state.products.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          price = item.price;
        }
      });
      state.total += price;
    },
    decreaseProduct(state, action) {
      let price = 0;
      state.products.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
          price = item.price;
        }
      });
      state.total -= price;
    },
    deleteProduct(state, action) {
      state.products = state.products.filter((item) => {
        if (item.id === action.payload) {
          state.total -= item.price * item.quantity;
        }
        return item.id !== action.payload;
      });
      state.quantity -= 1;
    },
    onChangeQuantity(state, action) {
      let price = 0;
      state.products.map((item) => {
        if (item.id === action.payload.id) {
          state.total -= item.quantity * item.price;
          item.quantity = action.payload.quantity;
          state.total += item.quantity * item.price;
        }
      });
    },
  },
  extraReducers: {},
});
export default cartSlice.reducer;
export const {
  addToCart,
  decreaseProduct,
  deleteProduct,
  increaseProduct,
  onChangeQuantity,
  getCartItemsFromLocalStorage,
} = cartSlice.actions;

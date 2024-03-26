import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Mediterranean",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    // },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

// grabbing five action creators cuz five reducers

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

// for connecting new Slice to Store
export default cartSlice.reducer;

// -------------------- Selectors
// ! having these selectors might cause performance issue in larger applications, check "RESLECT" library which allows us to optimize these selectors

export const getCart = (state) => {
  return state.cart.cart;
};

export const getTotalQuantity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);
};

// id is an argument then what this should return isa selector of this type
export const getQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
      // console.log(action.payload)
      if (typeof window !== "undefined") {
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    updateBasket: (state, action) => {
      state.basket = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      console.log(index);
      if (index !== -1) {
        state.basket.splice(index, 1);
        if (typeof window !== "undefined") {
          localStorage.setItem("basket", JSON.stringify(state.basket));
        }
      }
    },
    clearBasket: (state) => {
      state.basket = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem("basket");
      }
    },
    loadBasketFromStorage: (state) => {
      if (typeof window !== "undefined") {
        const savedBasket = localStorage.getItem("basket");
        if (savedBasket) {
          state.basket = JSON.parse(savedBasket);
        }
      }
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
  loadBasketFromStorage,
  updateBasket,
} = basketSlice.actions;
export default basketSlice.reducer;

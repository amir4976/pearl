import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for basket items
type BasketItem = {
  id: string; // Assuming the item has an `id` property, adjust accordingly
  name: string;
  price: number;
  quantity: number; // Add any other properties relevant to your product
};

// Define the type for the state
interface BasketState {
  basket: BasketItem[];
}

// Initial state with correct typing
const initialState: BasketState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.basket.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    updateBasket: (state, action: PayloadAction<BasketItem[]>) => {
      state.basket = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const index = state.basket.findIndex((item) => item.id === action.payload);
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

// Export actions and reducer
export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
  loadBasketFromStorage,
  updateBasket,
} = basketSlice.actions;
export default basketSlice.reducer;

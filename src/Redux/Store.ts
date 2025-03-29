import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/UserAuth";
import product from "./slices/ProductSlice";
import Basket from "./slices/Basket";
const store = configureStore({
  reducer: { LoginSlice, product ,Basket },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

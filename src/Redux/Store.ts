import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/UserAuth";
import product from "./slices/ProductSlice";
const store = configureStore({
  reducer: { LoginSlice, product },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

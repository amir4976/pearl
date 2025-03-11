import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./slices/UserAuth";
const store = configureStore({
  reducer: {LoginSlice},
});




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
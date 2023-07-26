import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./spriteSlice";

export const store = configureStore({
  reducer: {
    sprite: sliceReducer,
  },
});

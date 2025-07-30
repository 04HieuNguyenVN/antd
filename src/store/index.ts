import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "./tablesSlice";
import { RootState } from "../types/store";

const store = configureStore({
  reducer: {
    tables: tablesReducer,
  },
});

// Export the actual RootState type from the store
export type { RootState };
export type AppDispatch = typeof store.dispatch;

export default store;

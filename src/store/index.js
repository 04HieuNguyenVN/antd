// Import Redux toolkit để tạo store
import { configureStore } from "@reduxjs/toolkit";
// Import reducer từ counterSlice
import counterReducer from "./counterSlice";

// Cấu hình và export Redux store
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});

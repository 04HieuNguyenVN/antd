import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./itemsSlice";
import employeesReducer from "./employeesSlice";
import tablesReducer from "./tablesSlice";

export default configureStore({
  reducer: {
    items: itemsReducer,
    employees: employeesReducer,
    tables: tablesReducer,
  },
});

// store/employeesSlice.js
import { createSlice } from "@reduxjs/toolkit";

let idCounter = 1;

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({ id: idCounter++, ...action.payload });
        },
        updateItem: (state, action) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addItem, updateItem, deleteItem } = employeesSlice.actions;
export default employeesSlice.reducer;
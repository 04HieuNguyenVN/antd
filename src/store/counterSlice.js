import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [{
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            age: 28,
            position: "Developer",
            department: "IT",
            salary: 5000,
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            age: 32,
            position: "Designer",
            department: "Marketing",
            salary: 4500,
        },
        {
            id: 3,
            name: "Mike Johnson",
            email: "mike@example.com",
            age: 35,
            position: "Manager",
            department: "Sales",
            salary: 6000,
        },
    ],
    nextId: 4,
};

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: state.nextId,
                ...action.payload,
            };
            state.items.push(newItem);
            state.nextId += 1;
        },
        updateItem: (state, action) => {
            const { id, ...updateData } = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            if (index !== -1) {
                state.items[index] = {...state.items[index], ...updateData };
            }
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addItem, updateItem, deleteItem } = itemsSlice.actions;

export default itemsSlice.reducer;
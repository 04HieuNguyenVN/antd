import { createSlice } from '@reduxjs/toolkit';

let nextItemId = 3;

// A placeholder image for initial data
const placeholderAvatar = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDIiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxwYXRoIGQ9Ik0wIDBoMXYxSDB6IiBmaWxsPSIjY2NjIj48L3BhdGg+PC9zdmc+';

const tablesSlice = createSlice({
  name: 'tables',
  initialState: {
    data: [
      { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', avatar: placeholderAvatar },
      { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', avatar: placeholderAvatar },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        key: (nextItemId++).toString(),
        ...action.payload,
      };
      state.data.push(newItem);
    },
    updateItem: (state, action) => {
      const index = state.data.findIndex(item => item.key === action.payload.key);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      }
    },
    deleteItem: (state, action) => {
      state.data = state.data.filter(item => item.key !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = tablesSlice.actions;
export default tablesSlice.reducer; 
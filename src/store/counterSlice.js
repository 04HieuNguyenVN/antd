// Import createSlice từ Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Tạo slice cho counter
export const counterSlice = createSlice({
  name: "counter", // Tên của slice
  initialState: {
    value: 0, // Giá trị ban đầu của counter
    users: [], // Mảng user ban đầu rỗng
  },
  reducers: {
    // Action tăng giá trị counter
    increment: (state) => {
      state.value += 1;
    },
    // Action giảm giá trị counter
    decrement: (state) => {
      state.value -= 1;
    },
    // Action tăng giá trị counter theo một số lượng cụ thể
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // Action thêm người dùng mới vào danh sách
    addUser: (state, action) => {
      state.users.push({
        id: Date.now(), // Tạo id duy nhất dựa trên thời gian
        ...action.payload, // Thêm các thông tin người dùng
      });
    },
    // Action xóa người dùng khỏi danh sách
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Export tất cả các actions để sử dụng trong components
export const { increment, decrement, incrementByAmount, addUser, removeUser } =
  counterSlice.actions;

// Export reducer để cấu hình store
export default counterSlice.reducer;

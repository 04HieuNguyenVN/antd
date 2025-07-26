import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

let nextItemId = 6;

// A placeholder image for initial data
const placeholderAvatar =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFA0lEQVR4nN3W609TZxwH8GZvtmT/wa5vd4l/wZb4Ziq9g8bEIRMWYzaopVx64TKDomMTI8LUltPSgy3ltAwiCChCewr2dkoYQ4FtsnHTIVTuSK9c+lueE8Zgg1HktCx7km/65Lnk+eR5znlOWaz/c9Glxh2sFvNVhEQ4bBDzX+hSOauGs/wFU4bQpfuSnVhQUPDKvsCqvoj7gMgQ9NRJjy72YrLV6cYrELDchLBdQ/8+MRVCU17iojFd6NZnH3o9pjidiHukWizwDtzKD4ftFQCOrYP6HFdSA0aJsCVmuFtpRz5EuMmG4m1hsCGrNjXUSo8G9Wm8oFEi7NSlcj+JKtAoEfb/pj8XjgQHG+K33IAR4jzUZCZ4q8S8rKjg9CL2odvy44v/dqywQ3xt14GQCHy4iH2AcWC1RHCrX6PY1e5N1hfD3N2STW19avkKIeHrGQcSkvins81XI8Yt3LsGtbJjUJOdAMPV59fb5++WAJEuGGccaBDzfUFSGRFuBD1v2QkwRF6E+cc3oFZxDJ6aCum+5Q4M9CJuiHGgTsRZQW/l3zFBUglzzSUwXlcEvWop3PnqBDQVnoSp3lKA2So6031lNBiNDbWrwHCWF2AcaDjLe4EuYYR6fvsytF5KAWNmPHwvPwZ3Cj6F1uLPocuQDZ7uq+uwjaHwdOhRZsFM01UwZsQ/YRxozBT2e25/S+8UQg1ZL8Ly88otMVtl8uE1qM89DqPEBQS0Mg6sEvPLHpVLV5vPJcKo/euIYbCWpQkcDOk8oEpEQb2II2UcWH+Bfakx/0TYIObB0kTkOwcbokvjQK3saLi+KI55YJuas0BkCOhFXgYHa8AaWTyYKzgLjAPNWs6c5bukPQM7sGQwa9lzjAMtOJegTJ8t7xVImZJWSJxbxTiQrOC8a8HZs2YNG8Iz+l3jwjN6QHPNOHv2Pn74bVY0SpuG874F5y6HJtS7BoYmNGDW8pbvY4ffY0WzWHUCarK/aNfA531F0K7jO1nRLm0V7DM/NCQv7hbY1ZDsbdVyTkcd2F558DUS53qmfr4c+Vfkp2/AgvMm7pXFvcqKRTFjcR+TlXzfwtBffwi2y/xgKZCVfG+rhv1RTHDryAoOl8R5MEQpYGXqn18W1DbkkgMaY9Gy2az9KG2aOOhqOAlkJQ/6zWkQeFZOB9VRW1dDEqAx+4L7E+jpz4dnPQp4eC8FOvRCOqiO2lBfTIEKzP6OXOlMz9NQrhwNNY4Wn+jLpyFbBfWhMWgsmiMtd4izbj5g/pKWl7nfUmAUkYNR/tK7A76aH6ehZTAAZJ0EHrWe2RbY23oGrHUZ9Fg0p7R5wKfAKH+OmqrOVLneZAQnVdkTZJjTpyZHl6y/r4DNA+t5MDoDJHEK3A0pMExlwHhvLh1Ud9cng4U4RY/ZOId8ugyYZTSkKHd5s5QOwZ5wMqUzO1/b6W18vLhpkU3IMT9YbQYgTafBjPPpoHq7vRpsY/5t5zX+sgh52k6vAnNlvvTO5VW4vfeHg9suYttj2kZCgNaQqhzCXT9zcpXT1zzgixrOtpamAS/IMadXdt3xRsTAHLXLiFlGg9HG2daiMo+E0IsT8VWiwFxB69jmFyKasY6tAFoTndzOx6t0ppc1/+qLFc62FnQFoXtyR2Cuxu2q6Z6OKc7mATB1T0Ouxm2P5PnztAwFYg5sGQxAjpp6tiNQpnL4pUoH7EdkKod/R+B/rfwBBuK/i4zrKkUAAAAASUVORK5CYII=";

// Hàm tính tuổi từ ngày sinh
const calculateAge = (birthDate) => {
  if (!birthDate) return 0;
  const today = dayjs();
  const birth = dayjs(birthDate);
  return today.diff(birth, "year");
};

const tablesSlice = createSlice({
  name: "tables",
  initialState: {
    data: [
      {
        key: "1",
        name: "John Brown",
        birthDate: "1992-03-15",
        age: calculateAge("1992-03-15"),
        address: "New York No. 1 Lake Park",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "2",
        name: "Jim Green",
        birthDate: "1982-07-22",
        age: calculateAge("1982-07-22"),
        address: "London No. 1 Lake Park",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "3",
        name: "Joe Black",
        birthDate: "1975-11-08",
        age: calculateAge("1975-11-08"),
        address: "Sidney No. 1 Lake Park",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "4",
        name: "Alice Smith",
        birthDate: "1995-05-30",
        age: calculateAge("1995-05-30"),
        address: "Paris No. 2 Street",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "5",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "6",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "7",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "8",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "9",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "10",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "11",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "12",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "13",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "14",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
      {
        key: "15",
        name: "Bob Johnson",
        birthDate: "1988-12-01",
        age: calculateAge("1988-12-01"),
        address: "Tokyo No. 3 Avenue",
        phone: "0923847273",
        email: "12345ab@vsg.top",
        avatar: placeholderAvatar,
      },
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
      const index = state.data.findIndex(
        (item) => item.key === action.payload.key
      );
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...action.payload };
      }
    },
    deleteItem: (state, action) => {
      state.data = state.data.filter((item) => item.key !== action.payload);
    },
  },
});

export const { addItem, updateItem, deleteItem } = tablesSlice.actions;
export default tablesSlice.reducer;

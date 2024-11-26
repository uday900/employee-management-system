import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    status: "active",
    role: "Viewer",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index >= 0) state[index] = action.payload;
    },
    deleteUser: (state, action) => state.filter((user) => user.id !== action.payload.id),
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;

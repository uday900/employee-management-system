import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Admin",
    permissions: ["Read", "Write", "Delete"],
    description: "Full access",
  },
  {
    id: 2,
    name: "Viewer",
    description: "Read-only access",
    permissions: ["Read"],
  },
  {
    id: 3,
    name: "Editor",
    description: "Write-only access",
    permissions: ["Write"],
  }
];

const rolesSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRole: (state, action) => {
      state.push(action.payload);
    },
    // pass id here
    updateRole: (state, action) => {
      const index = state.findIndex((role) => role.id === action.payload.id);
      if (index >= 0) state[index] = action.payload;
    },
    
    deleteRole: (state, action) => state.filter((role) => role.id !== action.payload.id),
  },
});

export const { addRole, updateRole, deleteRole } = rolesSlice.actions;
export default rolesSlice.reducer;

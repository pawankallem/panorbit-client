// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: [],
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUsers: (state, action) => {
//       state.users = action.payload;
//     },
//   },
// });

// export const { setUsers } = userSlice.actions;
// export default userSlice.reducer;

// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get("https://panorbit.in/api/users.json");
    return response.data.users;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;

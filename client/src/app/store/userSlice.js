import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: {
      name: "",
      email: "",
    },
    pending: null,
    rejected: false,
  },
  reducers: {
    isPending: (state) => {
      state.pending = true;
    },
    pendingRejected: (state) => {
      state.pending = null;
      state.rejected = true;
    },
    pendingSuccess: (state, action) => {
      state.pending = null;
      state.rejected = false;
      state.data = action.payload;
    },
  },
});

export const { isPending, pendingSuccess, pendingRejected } = userSlice.actions;
export default userSlice.reducer;

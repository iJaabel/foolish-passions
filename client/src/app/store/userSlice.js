import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    pending: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
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

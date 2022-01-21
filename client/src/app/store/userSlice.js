import { createSlice } from "@reduxjs/toolkit";
import { basic as initialState } from "./state";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isPending: (state) => ({ ...state, pending: true }),
    pendingRejected: (state, action) => ({
      ...state,
      pending: null,
      error: action.payload,
    }),
    pendingSuccess: (state, action) => ({
      ...state,
      pending: null,
      data: [...state.data, action.payload],
    }),
  },
});

export const { isPending, pendingRejected, pendingSuccess } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { basic as initialState } from "./state";

export const postSlice = createSlice({
  name: "post",
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
      data: action.payload,
    }),
  },
});

export const { isPending, pendingRejected, pendingSuccess } = postSlice.actions;
export default postSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { basic as initialState } from "./state";
import { basic as reducers } from "./reducer";

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers
});

export const { isPending, pendingRejected, pendingSuccess } = postSlice.actions;
export default postSlice.reducer;

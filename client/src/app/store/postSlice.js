import { createSlice } from "@reduxjs/toolkit";
import { posts as initialState } from "./state";
import { postReducer as reducers } from "./reducer";

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers,
});

export const { pending, rejected, storeCollection, storeOwner } = postSlice.actions;
export default postSlice.reducer;

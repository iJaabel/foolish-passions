import { createSlice } from "@reduxjs/toolkit";
import { basic as initialState } from "./state";
import { basic as reducers } from "./reducer";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { isPending, pendingRejected, pendingSuccess } = userSlice.actions;
export default userSlice.reducer;

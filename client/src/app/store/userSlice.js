import { createSlice } from "@reduxjs/toolkit";
import { stage2 as initialState } from "./state";
import { stage2 as reducers } from "./reducer";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { isPending, pendingRejected, pendingSuccess } = userSlice.actions;
export default userSlice.reducer;

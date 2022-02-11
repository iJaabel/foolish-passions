import { createSlice } from "@reduxjs/toolkit";
import { users as initialState } from "./state";
import { userReducer as reducers } from "./reducer";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers,
});

export const { pending, rejected, success, storeActiveUser } = userSlice.actions;
export default userSlice.reducer;

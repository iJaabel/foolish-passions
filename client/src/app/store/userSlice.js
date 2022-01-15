import { createSlice } from "@reduxjs/toolkit";
import { basic as initialState } from "./state";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    isPending: (state) => ({ ...state, pending: true }),
    pendingRejected: (state) => ({ ...state, pending: null }),
    pendingSuccess: (state, action) => ({
      ...state,
      pending: null,
      data: action.payload,
    }),
  },
});

export const { isPending,pendingRejected, pendingSuccess  } = userSlice.actions;
export default userSlice.reducer;

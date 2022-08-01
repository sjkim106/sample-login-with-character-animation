import { createSlice } from "@reduxjs/toolkit";
import USER_ACTION_TYPES from "./actions/types";

const userSlice = createSlice({
  name: "user",
  initialState: {
    // userReducer의 token
    token: "",
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { updateToken } = userSlice.actions;

export default userSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";

const rootReducer = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default rootReducer;

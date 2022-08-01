import { createAction } from "@reduxjs/toolkit";
import USER_ACTION_TYPES from "./types";

export const requestLogin = createAction(USER_ACTION_TYPES.REQUEST_LOGIN);
export const responseLoginSuccess = createAction(
  USER_ACTION_TYPES.RESPONSE_LOGIN_SUCCESS
);
export const responseLoginFail = createAction(
  USER_ACTION_TYPES.RESPONSE_LOGIN_FAIL
);

export default {
  requestLogin,
  responseLoginSuccess,
  responseLoginFail,
};

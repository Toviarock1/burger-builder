import { delay } from "@redux-saga/core/effects";
import { put } from "redux-saga/effects";
import axios from "axios";

import * as actionTypes from "../actions/actionTypes";
import * as actions from "./../actions/index";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzIhQgJcJR4AGZnnlbxleXFGDRUKuOn5k";
  if (!action.isSignup) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzIhQgJcJR4AGZnnlbxleXFGDRUKuOn5k";
  }
  try{
  const response = yield axios.post(url, authData)

  const expirationDate = yield new Date(
    new Date().getTime() + response.data.expiresIn * 1000
  );
  yield localStorage.setItem("token", response.data.idToken);
  yield localStorage.setItem("expirationDate", expirationDate);
  yield localStorage.setItem("userId", response.data.localId);
  yield put(actions.authSuccess(response.data.idToken, response.data.localId));
  yield put(actions.checkAuthTimeout(response.data.expiresIn));
  } catch(error) {
      let errorMessage =
        error.response === undefined ? error : error.response.data.error;
      if (errorMessage.message === "EMAIL_EXISTS") {
        errorMessage.message =
          "The email address is already in use by another account";
      } else if (errorMessage.message === "EMAIL_NOT_FOUND") {
        errorMessage.message = "You do not have an accout please sign up";
      } else if (errorMessage.message === "INVALID_PASSWORD") {
        errorMessage.message = errorMessage.message = "Wrong Password";
      }
      yield put(actions.authFail(errorMessage));
    };
}

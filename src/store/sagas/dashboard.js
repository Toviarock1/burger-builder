import { put } from "@redux-saga/core/effects";
import axios from "./../../axios-orders";

import * as actions from "./../actions";

export function* dashboardGetInfoSaga(action) {
  yield put(actions.dashboardGetInfoStart());
  let queryParams = "?auth=" + action.token;
  try {
    const res = yield axios.get("/users.json" + queryParams);
    yield put(actions.dashboardGetInfoSuccess(res.data));
  } catch (error) {
    yield put(actions.dashboardGetInfoFail(error));
  }
}

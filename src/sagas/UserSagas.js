import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

export function* fetchUsers() {
  try {
    let receivedUsers = yield Api.getUsersfromApi();
    yield put({ type: FETCH_USERS_SUCCESS, receivedUsers: receivedUsers });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILED, error });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

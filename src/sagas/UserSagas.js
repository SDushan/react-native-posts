import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import { getUsersfromApi } from "../services/userServices";

export function* fetchUsers() {
  try {
    const receivedUsers = yield call(getUsersfromApi);
    yield put({ type: FETCH_USERS_SUCCESS, receivedUsers: receivedUsers.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILED, error });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

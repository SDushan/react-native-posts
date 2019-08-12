import { AsyncStorage } from "react-native";
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

export function* fetchUsers() {
  try {
    let receivedUsers;
    let userListStorage = yield AsyncStorage.getItem("UserList");
    if (!!userListStorage == false) {
      receivedUsers = yield Api.getUsersfromApi();
      AsyncStorage.setItem("UserList", JSON.stringify(receivedUsers));
    } else {
      receivedUsers = JSON.parse(userListStorage);
    }
    yield put({ type: FETCH_USERS_SUCCESS, receivedUsers: receivedUsers });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILED, error });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

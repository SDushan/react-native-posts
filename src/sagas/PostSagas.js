import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED
} from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

export function* fetchPosts() {
  try {
    let receivedPosts = yield Api.getPostsfromApi();
    yield put({ type: FETCH_POSTS_SUCCESS, receivedPosts: receivedPosts });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILED, error });
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

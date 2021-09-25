import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import { getPostsfromApi } from "../services/postServices";

export function* fetchPosts() {
  try {
    const receivedPosts = yield call(getPostsfromApi);
    yield put({ type: FETCH_POSTS_SUCCESS, receivedPosts: receivedPosts.data });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILED, error });
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

import { AsyncStorage } from "react-native";
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED
} from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

export function* fetchPosts() {
  try {
    let receivedPosts;
    let postListStorage = yield AsyncStorage.getItem("PostList");
    if (!!postListStorage == false) {
      receivedPosts = yield Api.getPostsfromApi();
      yield AsyncStorage.setItem("PostList", JSON.stringify(receivedPosts));
    } else {
      receivedPosts = JSON.parse(postListStorage);
    }
    yield put({ type: FETCH_POSTS_SUCCESS, receivedPosts: receivedPosts });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILED, error });
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

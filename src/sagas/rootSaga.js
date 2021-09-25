import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./PostSagas";
import { watchFetchUsers } from "./UserSagas";
import { watchFetchPhotos } from "./PhotoSagas";


export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchUsers(),
    watchFetchPhotos()
  ]);
}
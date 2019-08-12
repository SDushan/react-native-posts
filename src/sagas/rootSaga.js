import { fork } from "redux-saga/effects";
import { watchFetchPosts } from "./PostSagas";
import { watchFetchUsers } from "./UserSagas";
import { watchFetchPhotos } from "./PhotoSagas";

export default function* rootSaga() {
  yield fork(watchFetchPosts);
  yield fork(watchFetchUsers);
  yield fork(watchFetchPhotos);
}

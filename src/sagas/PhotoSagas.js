import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILED
} from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";
import { Api } from "./api";

export function* fetchPhotos() {
  try {
    const receivedPhotos = yield Api.getPhotosfromApi();
    yield put({ type: FETCH_PHOTOS_SUCCESS, receivedPhotos: receivedPhotos });
  } catch (error) {
    yield put({ type: FETCH_PHOTOS_FAILED, error });
  }
}

export function* watchFetchPhotos() {
  yield takeLatest(FETCH_PHOTOS, fetchPhotos);
}

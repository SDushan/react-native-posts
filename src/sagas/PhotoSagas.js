import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILED
} from "../actions";
import { put, call, takeLatest } from "redux-saga/effects";
import { getPhotosfromApi } from "../services/photoServices";

export function* fetchPhotos() {
  try {
    const receivedPhotos = yield call(getPhotosfromApi);
    yield put({ type: FETCH_PHOTOS_SUCCESS, receivedPhotos: receivedPhotos.data });
  } catch (error) {
    yield put({ type: FETCH_PHOTOS_FAILED, error });
  }
}

export function* watchFetchPhotos() {
  yield takeLatest(FETCH_PHOTOS, fetchPhotos);
}

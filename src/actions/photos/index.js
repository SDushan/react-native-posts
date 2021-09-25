import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILED
} from "./types";


export const fetchPhotos = () => ({
  type: FETCH_PHOTOS
});

export const fetchPhotosSuccess = receivedPhotos => ({
  type: FETCH_PHOTOS_SUCCESS,
  receivedPhotos
});

export const fetchPhotosFailed = error => ({
  type: FETCH_PHOTOS_FAILED,
  error
});
import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILED
} from "../actions";

const initialState = {
  isFetchingPhotos: false,
  isErrorFetchingPhotos: false,
  photos: []
};

const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        isFetchingPhotos: true
      };
    case FETCH_PHOTOS_SUCCESS:
      const { receivedPhotos } = action;
      return {
        ...state,
        isFetchingPhotos: false,
        photos: receivedPhotos
      };
    case FETCH_PHOTOS_FAILED:
      return {
        ...state,
        isFetchingPhotos: false,
        isErrorFetchingPhotos: true
      };
    default:
      return state;
  }
};

export default PhotoReducer;

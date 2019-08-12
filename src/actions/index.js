import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILED
} from "./types";

/*
  --- POSTS ---
*/
export const fetchPosts = () => {
  return {
    type: FETCH_POSTS
  };
};

export const fetchPostsSuccess = receivedPosts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    receivedPosts
  };
};

export const fetchPostsFailed = error => {
  return {
    type: FETCH_POSTS_FAILED,
    error
  };
};

/*
  --- USERS ---
*/
export const fetchUsers = () => {
  return {
    type: FETCH_USERS
  };
};

export const fetchUsersSuccess = receivedUsers => {
  return {
    type: FETCH_USERS_SUCCESS,
    receivedUsers
  };
};

export const fetchUsersFailed = error => {
  return {
    type: FETCH_USERS_FAILED,
    error
  };
};

/*
  --- PHOTOS ---
*/
export const fetchPhotos = () => {
  return {
    type: FETCH_PHOTOS
  };
};

export const fetchPhotosSuccess = receivedPhotos => {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    receivedPhotos
  };
};

export const fetchPhotosFailed = error => {
  return {
    type: FETCH_PHOTOS_FAILED,
    error
  };
};

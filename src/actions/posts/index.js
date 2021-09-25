import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
} from "./types";


export const fetchPosts = () => ({
  type: FETCH_POSTS
});

export const fetchPostsSuccess = receivedPosts => ({
  type: FETCH_POSTS_SUCCESS,
  receivedPosts
});

export const fetchPostsFailed = error => ({
  type: FETCH_POSTS_FAILED,
  error
});
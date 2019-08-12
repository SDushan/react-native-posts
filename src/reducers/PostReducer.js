import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED
} from "../actions/types";

const initialState = {
  isFetchingPosts: false,
  isErrorFetchingPosts: false,
  posts: []
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isFetchingPosts: true
      };
    case FETCH_POSTS_SUCCESS:
      const { receivedPosts } = action;
      return {
        ...state,
        isFetchingPosts: false,
        posts: receivedPosts
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        isFetchingPosts: false,
        isErrorFetchingPosts: true
      };
    default:
      return state;
  }
};

export default PostReducer;

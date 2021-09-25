import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from "../actions";

const initialState = {
  isFetchingUsers: false,
  isErrorFetchingUsers: false,
  users: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isFetchingUsers: true
      };
    case FETCH_USERS_SUCCESS:
      const { receivedUsers } = action;
      return {
        ...state,
        isFetchingUsers: false,
        users: receivedUsers
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isFetchingUsers: false,
        isErrorFetchingUsers: true
      };
    default:
      return state;
  }
};

export default UserReducer;

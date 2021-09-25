import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from "./types";


export const fetchUsers = () => ({
  type: FETCH_USERS
});

export const fetchUsersSuccess = receivedUsers => ({
  type: FETCH_USERS_SUCCESS,
  receivedUsers
});

export const fetchUsersFailed = error => ({
  type: FETCH_USERS_FAILED,
  error
});
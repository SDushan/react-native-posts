import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import UserReducer from "./UserReducer";
import PhotoReducer from "./PhotoReducer";

const allReducers = combineReducers({
  PostReducer,
  UserReducer,
  PhotoReducer
});

export default allReducers;

import { combineReducers } from "redux";
import PhotoReducer from "./photoReducer";
import PostReducer from "./postReducer";
import UserReducer from "./userReducer";

const Reducers = combineReducers({
  PostReducer,
  UserReducer,
  PhotoReducer
});

export default Reducers;

import { combineReducers } from "redux";
import loaderReducer from "./modules/Loader";
import postsReducer from "./modules/Posts";

const rootReducer = combineReducers({
  loader: loaderReducer,
  posts: postsReducer,
});

export default rootReducer;

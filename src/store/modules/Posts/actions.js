import { CREATE_POST, REQUEST_POSTS /*, FETCH_POSTS*/ } from "./selectors";
// for redux-thunk
//import { showLoader, hideLoader } from "./../Loader/actions";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

//with saga
export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

//with thunk
/*export function fetchPosts() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
    dispatch(hideLoader());
  };
}*/

import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POSTS } from "./selectors";
import { showLoader, hideLoader } from "../Loader/actions";
import { getPosts } from "./api";

function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  yield put(showLoader());
  const posts = yield call(getPosts, 5);
  yield put({ type: FETCH_POSTS, posts });
  yield put(hideLoader());
  /*try {
    const posts = yield call(getPosts, 5);
    yield put({ type: FETCH_POSTS, posts });
    yield put(hideLoader());
  } catch (error) {
    console.log("error");
  }*/
}

export default sagaWatcher;

// sagaWatcher - наблюдатель для action - при каждом действии(сайд-эффекты) вызывать sagaWorker

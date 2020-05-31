import { fork } from "redux-saga/effects";
import postsSagas from "./modules/Posts/sagas";

export default function* rootSaga() {
  yield fork(postsSagas);
}

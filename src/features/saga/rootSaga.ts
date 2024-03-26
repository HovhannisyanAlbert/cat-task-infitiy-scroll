import decoratorCatsSaga from "@/Cats/store/saga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(decoratorCatsSaga)]);
}

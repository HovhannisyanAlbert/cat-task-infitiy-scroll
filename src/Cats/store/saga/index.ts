import { takeLatest, call, put } from "redux-saga/effects";
import { getCats } from "../action";
import { addCatsData, setCatsData, setLoading } from "../slice/catsSlice";
import { getCatsData } from "@/services/catsApi";

function* fetchCatsSaga(action: ReturnType<typeof getCats>) {
  try {
    yield put(setLoading(true));
    const { payload } = action;
    const { data } = yield call(getCatsData, {
      ...payload,
      limit: 10,
      page: payload?.page ?? 1,
    });
    yield put(
      payload?.page && payload?.page > 1 ? addCatsData(data) : setCatsData(data)
    );
  } catch (e: any) {
    console.log(e.message);
  } finally {
    yield put(setLoading(false));
  }
}

export default function* decoratorCatsSaga() {
  yield takeLatest(getCats.type, fetchCatsSaga);
}

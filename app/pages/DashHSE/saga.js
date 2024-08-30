import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchDataSuccessAction, fetchDataErrorAction } from './actions';
import { FETCH_DATA, WebService } from './constants';

export function* fetchData() {
  try {
    const { data } = yield call(request.get, WebService.DATA_ENDPOINT);
    yield put(fetchDataSuccessAction(data)); // dispatch success action with data
  } catch (error) {
    yield put(fetchDataErrorAction(error)); // dispatch error action with error
  }
}

export default function* dataSaga() {
  yield takeLatest(FETCH_DATA, fetchData); // watch for FETCH_DATA action
}


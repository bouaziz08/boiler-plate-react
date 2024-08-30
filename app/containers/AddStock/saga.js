import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { addStockErrorAction, addStockSuccessAction } from './actions';
import { ADD_DATA, WebService } from './constants';

export function* addData({ idEquipement, quantiteEntrer }) {
  try {
    const { data } = yield call(
      request.post,
      WebService.DATA_ADD,
      {
        idEquipement,
        quantiteEntrer,
      },
      {
        headers: {
          'content-Type': 'application/json',
        },
      },
    );
    yield put(addStockSuccessAction(data)); // dispatch success action with data
  } catch (error) {
    yield put(addStockErrorAction(error)); // dispatch error action with error
  }
}

export default function* addStockSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(ADD_DATA, addData);
}

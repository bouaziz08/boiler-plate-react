// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { updateStockSuccessAction, updateStockErrorAction } from './actions';
import { UPDATE_DATA, WebService } from './constants';

export function* updateData({ IdEquipement, QunatieSortie }) {
  try {
    const { data } = yield call(
      request.put,
      WebService.DATA_UPDATE,
      {
        IdEquipement,
        QunatieSortie,
      },
      {
        headers: {
          'content-Type': 'application/json',
        },
      },
    );
    yield put(updateStockSuccessAction(data)); // dispatch success action with data
  } catch (error) {
    yield put(updateStockErrorAction(error)); // dispatch error action with error
  }
}
// Individual exports for testing
export default function* updatestockSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(UPDATE_DATA, updateData);
}

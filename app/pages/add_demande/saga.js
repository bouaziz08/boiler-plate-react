import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { addDataSuccessAction, addDataErrorAction } from './actions';
import { ADD_DATA, WebService } from './constants';

export function* addData({ payload }) {
  try {
    const { data } = yield call(
        request.post, 
        WebService.DATA_ENDPOINT, 
        payload,
        {
            headers: {
                'content-Type' : 'applcation/json',
            },
        }
    );
    yield put(addDataSuccessAction(data)); // dispatch success action with data
  } catch (error) {
    yield put(addDataErrorAction(error)); // dispatch error action with error
  }
}

export default function* addDataSaga() {
  yield takeLatest(ADD_DATA, addData); // watch for FETCH_DATA action
}


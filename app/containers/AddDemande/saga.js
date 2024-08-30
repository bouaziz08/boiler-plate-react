import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { addDataSuccessAction, addDataErrorAction } from './actions';
import { ADD_DATA, WebService } from './constants';

export function* addData({
  matriculedemandeur,
  nomequipement,
  quantite,
  typededemande,
  pointure,
}) {
  try {
    const { data } = yield call(
      request.post,
      WebService.DATA_ENDPOINT,
      { matriculedemandeur, nomequipement, quantite, typededemande, pointure },
      {
        headers: {
          'content-Type': 'application/json',
        },
      },
    );
    yield put(addDataSuccessAction(data)); // dispatch success action with data
  } catch (error) {
    yield put(addDataErrorAction(error)); // dispatch error action with error
  }
}

// Individual exports for testing
export default function* addDemandeSaga() {
  // See example in containers/HomePage/saga.
  yield takeLatest(ADD_DATA, addData);
}

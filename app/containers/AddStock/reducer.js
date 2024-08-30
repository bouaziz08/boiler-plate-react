/*
 *
 * AddStock reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_IDEQUIPEMENT,
  CHANGE_QUANTITEENTRER,
  ADD_DATA_SUCCESS,
  ADD_DATA_ERROR,
  ADD_DATA,
  STOCKPAGE_STORE_CLEANUP,
} from './constants';

export const initialState = {
  loading: false,
  error: true,
  quantiteEntrer: '',
  idEquipement: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStockReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_IDEQUIPEMENT:
        draft.idEquipement = action.idEquipement;
        break;
      case CHANGE_QUANTITEENTRER:
        draft.quantiteEntrer = action.quantiteEntrer;
        break;
      case ADD_DATA_SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;
      case ADD_DATA_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case ADD_DATA:
        draft.loading = true;
        draft.error = false;
        break;
      case STOCKPAGE_STORE_CLEANUP:
        draft.loading = false;
        draft.error = true;
        draft.idEquipement = '';
        draft.quantiteEntrer = '';
        break;
    }
  });

export default addStockReducer;

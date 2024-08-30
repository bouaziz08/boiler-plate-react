/*
 *
 * Updatestock reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_IDEQUIPEMENT,
  CHANGE_QUANTITESORTIE,
  UPDATE_DATA,
  UPDATE_DATA_ERROR,
  UPDATE_DATA_SUCCESS,
  STOCKPAGE_STORE_CLEANUP,
} from './constants';

export const initialState = {
  loading: false,
  error: true,
  QuantiteSortie: '',
  IdEquipement: '',
};

/* eslint-disable default-case, no-param-reassign */
const updatestockReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_IDEQUIPEMENT:
        draft.IdEquipement = action.IdEquipement;
        break;
      case CHANGE_QUANTITESORTIE:
        draft.QuantiteSortie = action.QuantiteSortie;
        break;
      case UPDATE_DATA:
        draft.loading = true;
        draft.error = false;
        break;
      case UPDATE_DATA_SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;
      case UPDATE_DATA_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case STOCKPAGE_STORE_CLEANUP:
        draft.loading = false;
        draft.error = true;
        draft.IdEquipement = '';
        draft.QuantiteSortie = '';
        break;
    }
  });

export default updatestockReducer;

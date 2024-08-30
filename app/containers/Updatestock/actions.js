/*
 *
 * Updatestock actions
 *
 */

import {
  CHANGE_IDEQUIPEMENT,
  CHANGE_QUANTITESORTIE,
  UPDATE_DATA,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_ERROR,
  STOCKPAGE_STORE_CLEANUP,
} from './constants';

export function changeIdEquipmentAction(IdEquipement) {
  return {
    type: CHANGE_IDEQUIPEMENT,
    IdEquipement,
  };
}

export function changeQuantiteSortieAction(QuantiteSortie) {
  return {
    type: CHANGE_QUANTITESORTIE,
    QuantiteSortie,
  };
}

export function updateStockSuccessAction(data) {
  return {
    type: UPDATE_DATA_SUCCESS,
    data,
  };
}

export function updateStockErrorAction(error) {
  return {
    type: UPDATE_DATA_ERROR,
    error,
  };
}

export function stockPageStoreCleanupAction() {
  return {
    type: STOCKPAGE_STORE_CLEANUP,
  };
}

export function updateStockAction(IdEquipement, QuantiteSortie) {
  return {
    type: UPDATE_DATA,
    IdEquipement,
    QuantiteSortie,
  };
}

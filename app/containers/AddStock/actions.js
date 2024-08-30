/*
 *
 * AddStock actions
 *
 */

import {
  CHANGE_IDEQUIPEMENT,
  CHANGE_QUANTITEENTRER,
  ADD_DATA_SUCCESS,
  ADD_DATA_ERROR,
  STOCKPAGE_STORE_CLEANUP,
  ADD_DATA,
} from './constants';

export function changeIdEquipmentAction(idEquipement) {
  return {
    type: CHANGE_IDEQUIPEMENT,
    idEquipement,
  };
}

export function changeQuantiteentrerAction(quantiteEntrer) {
  return {
    type: CHANGE_QUANTITEENTRER,
    quantiteEntrer,
  };
}

export function addStockSuccessAction(data) {
  return {
    type: ADD_DATA_SUCCESS,
    data,
  };
}

export function addStockErrorAction(error) {
  return {
    type: ADD_DATA_ERROR,
    error,
  };
}

export function stockPageStoreCleanupAction() {
  return {
    type: STOCKPAGE_STORE_CLEANUP,
  };
}

export function addStockAction(idEquipement, quantiteEntrer) {
  return {
    type: ADD_DATA,
    idEquipement,
    quantiteEntrer,
  };
}

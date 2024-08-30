import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addStock state domain
 */

const selectAddStockDomain = (state) => state.addStock || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddStock
 */

const makeSelectAddStock = () =>
  createSelector(selectAddStockDomain, (substate) => substate);
const makeSelectIdEquipement = () =>
  createSelector(selectAddStockDomain, (substate) => substate.idEquipement);
const makeSelectquantiteEntrer = () =>
  createSelector(selectAddStockDomain, (substate) => substate.quantiteEntrer);
const makeSelectLoading = () =>
  createSelector(selectAddStockDomain, (substate) => substate.loading);
const makeSelectError = () =>
  createSelector(selectAddStockDomain, (substate) => substate.error);

export default makeSelectAddStock;
export {
  selectAddStockDomain,
  makeSelectIdEquipement,
  makeSelectquantiteEntrer,
  makeSelectError,
  makeSelectLoading,
};

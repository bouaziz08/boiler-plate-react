import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the updatestock state domain
 */

const selectUpdatestockDomain = (state) => state.updatestock || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Updatestock
 */

const makeSelectUpdatestock = () =>
  createSelector(selectUpdatestockDomain, (substate) => substate);
const makeSelectIdEquipement = () =>
  createSelector(selectUpdatestockDomain, (substate) => substate.idEquipement);
const makeSelectQuantiteSortie = () =>
  createSelector(
    selectUpdatestockDomain,
    (substate) => substate.QuantiteSortie,
  );
const makeSelectLoading = () =>
  createSelector(selectUpdatestockDomain, (substate) => substate.loading);
const makeSelectError = () =>
  createSelector(selectUpdatestockDomain, (substate) => substate.error);

export default makeSelectUpdatestock;
export {
  selectUpdatestockDomain,
  makeSelectIdEquipement,
  makeSelectQuantiteSortie,
  makeSelectLoading,
  makeSelectError,
};

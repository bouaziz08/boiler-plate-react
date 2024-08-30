import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the getDemande state domain
 */

const selectGetDemandeDomain = (state) => state.getDemande || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GetDemande
 */

const makeSelectGetDemande = () =>
  createSelector(selectGetDemandeDomain, (substate) => substate);

export default makeSelectGetDemande;
export { selectGetDemandeDomain };

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addDemande state domain
 */

const selectAddDemandeDomain = (state) => state.addDemande || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddDemande
 */

const makeSelectAddDemande = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate);
const makeSelectmatriculedemandeur = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate.matriculedemandeur);
const makeSelectnomequip = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate.nomequipement);
const makeSelectquantite = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate.quantite);
const makeSelecttypededemande = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate.typededemande);
const makeSelectpoiture = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate.pointure);
const makeSelectLoading = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate.loading);
const makeSelectError = () =>
  createSelector(selectAddDemandeDomain, (substate) => substate.error);

export default makeSelectAddDemande;
export { 
  selectAddDemandeDomain,
  makeSelectmatriculedemandeur,
  makeSelectnomequip,
  makeSelectquantite,
  makeSelecttypededemande,
  makeSelectLoading,
  makeSelectError,
  makeSelectpoiture
 };

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addDemande state domain
 */

const selectSideBarDomain = (state) => state.addDemande || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddDemande
 */

const makeSelectAddDemande = () =>
  createSelector(selectSideBarDomain, (substate) => substate);
const makeSelectmatriculedemandeur = () =>
  createSelector(
    selectSideBarDomain,
    (substate) => substate.matriculedemandeur,
  );
const makeSelectnomequip = () =>
  createSelector(selectSideBarDomain, (substate) => substate.nomequipement);
const makeSelectquantite = () =>
  createSelector(selectSideBarDomain, (substate) => substate.quantite);
const makeSelecttypededemande = () =>
  createSelector(selectSideBarDomain, (substate) => substate.typededemande);
const makeSelectpoiture = () =>
  createSelector(selectSideBarDomain, (substate) => substate.pointure);
const makeSelectLoading = () =>
  createSelector(selectSideBarDomain, (substate) => substate.loading);
const makeSelectError = () =>
  createSelector(selectSideBarDomain, (substate) => substate.error);
const makeSelectIsSideBarVisible = () =>
  createSelector(selectSideBarDomain, (substate) => substate.isSideBarVisible);

export default makeSelectAddDemande;
export {
  makeSelectmatriculedemandeur,
  makeSelectnomequip,
  makeSelectquantite,
  makeSelecttypededemande,
  makeSelectLoading,
  makeSelectError,
  makeSelectpoiture,
  makeSelectIsSideBarVisible,
};

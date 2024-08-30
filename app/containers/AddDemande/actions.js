/*
 *
 * AddDemande actions
 *
 */

import {
  CHANGE_MATRICULE,
  CHANGE_NOMEQUIPEMENT,
  CHANGE_QUANTITE,
  CHANGE_TYPE_DE_DEMANDE,
  CHANGE_POINTURE,
  ADD_DATA_SUCCESS,
  ADD_DATA_ERROR,
  DEMANDEPAGE_STORE_CLEANUP,
  ADD_DATA,
} from './constants';

export function changeMatriculeAction(matriculedemandeur) {
  return {
    type: CHANGE_MATRICULE,
    matriculedemandeur,
  };
}

export function changeNomequipementAction(nomequipement) {
  return {
    type: CHANGE_NOMEQUIPEMENT,
    nomequipement,
  };
}

export function changeQuantiteAction(quantite) {
  return {
    type: CHANGE_QUANTITE,
    quantite,
  };
}

export function changeTypeDeDemandeAction(typededemande) {
  return {
    type: CHANGE_TYPE_DE_DEMANDE,
    typededemande,
  };
}

export function changePointureAction(pointure) {
  return {
    type: CHANGE_POINTURE,
    pointure,
  };
}

export function addDataSuccessAction(data) {
  return {
    type: ADD_DATA_SUCCESS,
    data,
  };
}

export function addDataErrorAction(error) {
  return {
    type: ADD_DATA_ERROR,
    error,
  };
}
export function demandePageStoreCleanupAction() {
  return {
    type: DEMANDEPAGE_STORE_CLEANUP,
  };
}

export function addDataAction(
  matriculedemandeur,
  nomequipement,
  quantite,
  typededemande,
  pointure,
) {
  return {
    type: ADD_DATA,
    matriculedemandeur,
    nomequipement,
    quantite,
    typededemande,
    pointure,
  };
}

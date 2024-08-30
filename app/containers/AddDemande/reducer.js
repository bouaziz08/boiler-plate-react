/*
 *
 * AddDemande reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_MATRICULE,
  CHANGE_NOMEQUIPEMENT,
  CHANGE_QUANTITE,
  CHANGE_TYPE_DE_DEMANDE,
  CHANGE_POINTURE,
  ADD_DATA,
  ADD_DATA_SUCCESS,
  ADD_DATA_ERROR,
  DEMANDEPAGE_STORE_CLEANUP,
} from './constants';

export const initialState = {
  loading: false,
  error: true,
  matriculedemandeur: '',
  nomequipement: '',
  quantite: '',
  typededemande: '',
  pointure: '',
};

/* eslint-disable default-case, no-param-reassign */
const addDemandeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_MATRICULE:
        draft.matriculedemandeur = action.matriculedemandeur;
        break;
      case CHANGE_NOMEQUIPEMENT:
        draft.nomequipement = action.nomequipement;
        break;
      case CHANGE_QUANTITE:
        draft.quantite = action.quantite;
        break;
      case CHANGE_TYPE_DE_DEMANDE:
        draft.typededemande = action.typededemande;
        break;
      case CHANGE_POINTURE:
        draft.pointure = action.pointure;
        break;
      case ADD_DATA:
        draft.loading = true;
        draft.error = false;
        break;
      case ADD_DATA_SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;
      case ADD_DATA_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
      case DEMANDEPAGE_STORE_CLEANUP:
        draft.loading = false;
        draft.error = true;
        draft.matriculedemandeur = '';
        draft.nomequipement = '';
        draft.quantite = '';
        draft.typededemande = '';
        draft.pointure = '';
        break;
    }
  });

export default addDemandeReducer;

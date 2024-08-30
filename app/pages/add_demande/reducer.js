import { 
  CHANGE_MATRICULE,
  CHANGE_NOMEQUIPEMENT,
  CHANGE_QUANTITE,
  CHANGE_TYPE_DE_DEMANDE,
  ADD_DATA,
  ADD_DATA_SUCCESS,
  ADD_DATA_ERROR
} from './actions';

export const initialState = {
    loading: false,
    error: true,
    matriculeDemandeur: '',
    NomEquip: '',
    Quantite:'',
    TypeDeDemande:'',

  };

const addDemandeReducer = (state = initialState, action) => {
  produce (state, (draft) => {
  switch (action.type) {
    case ADD_DATA:
        draft.loading = true;
        draft.error = false;
        break;
    case ADD_DATA_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.MatriculeDemandeur = action.data.MatriculeDemandeur;
        draft.NomEquip = action.data.NomEquip;
        draft.Quantite = action.data.Quantite;
        draft.TypeDeDemande = action.data.TypeDeDemande;
        break;
    case ADD_DATA_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
    case CHANGE_MATRICULE:
        draft.MatriculeDemandeur= action.payload;
      break;
    case CHANGE_NOMEQUIPEMENT:
      draft.NomEquip= action.payload ;
      break;
    case CHANGE_QUANTITE:
      draft.quantite= action.payload ;
      break;
    case CHANGE_TYPE_DE_DEMANDE:
      draft.TypeDeDemande=action.payload ;
      break;
  }
});
}
export default addDemandeReducer;


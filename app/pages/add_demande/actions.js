import { ADD_DATA, ADD_DATA_SUCCESS, ADD_DATA_ERROR } from './actionTypes';


export const changeMatriculeAction = (value) => ({
    type: CHANGE_MATRICULE,
    payload: value,
  });
  
export const changeNomequipementAction = (value) => ({
    type: CHANGE_NOMEQUIPEMENT,
    payload: value,
  });
  
export const changeQuantiteAction = (value) => ({
    type: CHANGE_QUANTITE,
    payload: value,
  });
  
export const changeTypeDeDemandeAction = (value) => ({
    type: CHANGE_TYPE_DE_DEMANDE,
    payload: value,
  });

  
export const addDataAction = (newData) => ({
  type: ADD_DATA,
  payload: newData,
});

export const addDataSuccessAction = (data) => ({
  type: ADD_DATA_SUCCESS,
  payload: data,
});

export const addDataErrorAction = (error) => ({
  type: ADD_DATA_ERROR,
  payload: error,
});

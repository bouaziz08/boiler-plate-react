// actions.js

import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actionTypes';

export const fetchDataAction = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccessAction = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataErrorAction = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});

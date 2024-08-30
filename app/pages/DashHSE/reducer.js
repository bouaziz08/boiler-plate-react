import { error } from 'shelljs';
import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './actions';

export const initialState = {
  loading : false,
  error : true, 
};

const dataReducer = (state = initialState, action) => {
  produce (state, (draft) => {
  switch (action.type) {
    case FETCH_DATA:
        draft.loading = true;
        draft.error = false;
        break;
    case FETCH_DATA_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        draft.error = false;
        break;

    case FETCH_DATA_ERROR:
        draft.loading = false;
        draft.error = action.payload;
        break;
  }
});
}
export default dataReducer;


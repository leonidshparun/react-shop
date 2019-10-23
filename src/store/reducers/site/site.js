import { updateObject } from 'utils/utils';

import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_ERROR,
  SHOW_POPUP,
  HIDE_POPUP
} from 'store/actions/action-types';

const initialState = {
  isLoaded: false,
  modal: {
    showModal: false,
    modalrMessage: ''
  },
  error: {
    isError: false,
    errorMessage: ''
  }
};

const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return updateObject(state, { isLoaded: action.payload });
    case FETCH_DATA_START:
      return state;
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: updateObject(state.error, {
          isError: true,
          errorMessage: action.payload
        })
      };
    case SHOW_POPUP:
      return {
        ...state,
        modal: updateObject(state.modal, {
          showModal: true,
          modalrMessage: action.payload
        })
      };
    case HIDE_POPUP:
      return {
        ...state,
        modal: updateObject(state.modal, {
          showModal: false,
          modalrMessage: ''
        })
      };
    default:
      return state;
  }
};

export default siteReducer;

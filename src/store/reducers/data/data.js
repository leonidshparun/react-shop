import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_START,
  FETCH_DATA_ERROR
} from 'store/actions/action-types';

const contentReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    case FETCH_DATA_START:
      return state;
    case FETCH_DATA_ERROR:
      return state;
    default:
      return state;
  }
};

export default contentReducer;

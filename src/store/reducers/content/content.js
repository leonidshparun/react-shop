import { SAVE_FILTRED_CONTENT } from 'store/actions/action-types';

const contentReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_FILTRED_CONTENT:
      return action.payload;
    default:
      return state;
  }
};

export default contentReducer;

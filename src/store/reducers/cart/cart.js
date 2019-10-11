import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_QUANTITY
} from '../../actions/action-types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return [...state, action.item];
    }
    case REMOVE_ITEM: {
      const updatedItems = [
        ...state.slice(0, action.pos),
        ...state.slice(action.pos + 1)
      ];
      return updatedItems;
    }
    case CHANGE_QUANTITY: {
      const { idx, quantity } = action.item;
      const updatedState = [...state];
      updatedState[idx].quantity = quantity;
      return updatedState;
    }
    default:
      return state;
  }
};

export default cartReducer;

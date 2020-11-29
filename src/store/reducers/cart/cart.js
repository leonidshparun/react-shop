import {
  ADD_ITEM,
  REMOVE_ITEM,
  CHANGE_QUANTITY,
  CLEAR_CART
} from 'store/actions/action-types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const currentItems = [...state];
      const isInCart = currentItems.findIndex(
        item => item.id === action.item.id && item.size === action.item.size
      );
      if (isInCart !== -1) {
        currentItems[isInCart].quantity += 1;
        return currentItems;
      }
      return [...currentItems, action.item];
    }
    case REMOVE_ITEM: {
      const updatedItems = [
        ...state.slice(0, action.pos),
        ...state.slice(action.pos + 1)
      ];
      return updatedItems;
    }
    case CLEAR_CART: {
      return [];
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

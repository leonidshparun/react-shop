import { combineReducers } from 'redux';

import cartReducer from './cart/cart';
import filterReducer from './filter/filter';

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer
});

export default rootReducer;

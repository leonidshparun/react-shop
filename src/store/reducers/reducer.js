import { combineReducers } from 'redux';

import cartReducer from './cart/cart';
import filterReducer from './filter/filter';
import contentReducer from './data/data';

const rootReducer = combineReducers({
  isLoaded: contentReducer,
  cart: cartReducer,
  filter: filterReducer
});

export default rootReducer;

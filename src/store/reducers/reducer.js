import { combineReducers } from 'redux';

import cartReducer from './cart/cart';
import filterReducer from './filter/filter';
import contentReducer from './site/site';

const rootReducer = combineReducers({
  site: contentReducer,
  cart: cartReducer,
  filter: filterReducer
});

export default rootReducer;

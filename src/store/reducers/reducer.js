import { combineReducers } from 'redux';

import cartReducer from './cart/cart';
import filterReducer from './filter/filter';
import siteReducer from './site/site';
import contentReducer from './content/content';

const rootReducer = combineReducers({
  site: siteReducer,
  cart: cartReducer,
  filter: filterReducer,
  content: contentReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

import cartReducer from './cart/cart';
import filterReducer from './filter/filter';
import sortReducer from './sort/sort';

const rootReducer = combineReducers({
	cart: cartReducer,
	filter: filterReducer,
	sort: sortReducer,
})

export default rootReducer;